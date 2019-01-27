Ext.define('MobileApp.controller.MainController', {
   extend: 'Ext.app.Controller',

   config: {
      views: [
         'MainTabContainer',
         'MainContainer',
         'SlideList',
         'LoginNavView',
         'CommentOverlayView'
      ],
      stores: ['OffersHotDealsDataViewStore'],
      refs: {
         slidelist: 'slidelist',
         settingslist: 'settingslist',
         mainTabContainer: 'maintabcontainer',
         mainContainer: 'maincontainer',
         offersHotDealsDataView: '#offersHotDealsDataView',
         settingImg: '#settingImg',
         qrScanerTabPanel: 'qrscanertabpanel',
         slidelisttoolbar: '#slidelisttoolbar',
         langForm: '#lanform',
         eventsTabPanel: 'eventstabpanel',
         commentOverlayView: 'commentoverlayview',
         placesStoresTabPanel: 'placesstorestabpanel',
         offersNewDataView: '#offersNewDataView',
         offersHotDealsNavigationView: 'offershotdealsnavigationview',
         settingsNavigationView: 'settingsnavigationview'
      },

      control: {
         slidelist: {
            itemtap: 'onTapSlideList',
            swipe: 'onSwipeSlider'
         },
         mainContainer: {
            initialize: 'onInitMainTabContainer',
            tap: 'mainContainerTap'
         },
         placesSlideBut: {
            tap: 'toggleNav'
         },
         slidelisttoolbar: {
            tap: 'onTapSettingImg'
         }
      }
   },

   /**
   * Toggle the slide navogation view
   */

   toggleNav: function () {
      var language = this.getApplication().getController('SettingsController').lang;
      if (language == "en") {
         this.getSlidelist().down('#slideTitleBar').setTitle('Menu');
      }

      var image = document.getElementById('userImage');
      console.log(image);
      var userName = document.getElementById('userName');
      var logStore = Ext.getStore('LoginSqlStore').data.items;
      if (logStore.length != 0) {
         var loginStore = logStore[0].data;
         console.log(loginStore);
         image.src = loginStore.photo;
         userName.innerHTML = loginStore.name;
      }


      var me = this,
          mainEl = me.getSlidelist().element;

      if (mainEl.hasCls('out')) {
         mainEl.removeCls('out').addCls('in');
      } else {
         mainEl.removeCls('in').addCls('out');
      }
   },

   onSwipeSlider: function (event) {
      //this.lanchange();
      if (event.direction == "left") {
         this.toggleNav();
      }
   },

   onMainTap: function () {
      var me = this,
          mainEl = me.getSlidelist().element;
      if (mainEl.hasCls('out')) {
         mainEl.removeCls('out').addCls('in');
      }
   },

   onInitMainTabContainer: function () {
      //checks internet connectivity in app and displays message at top if not available.
      var hintCmp = Ext.getCmp('hint');
      var onlineStatus = window.navigator.onLine;
      if (!onlineStatus && !hintCmp) {
         var hint = new Ext.Panel({
            id: 'hint',
            docked: 'top',
            items: [{
               html: '<p align="center" style="font-size:1em; background-color:black; color:white;">No Internet Connection.</p>'
            }]
         });
         //Ext.Viewport.add(hint);
         this.getMainContainer().add(hint);
      }

      if (!this.offersPanel) {
         this.offersPanel = Ext.create('MobileApp.view.Offers.OffersPanel');
      }
      this.offersPanel.setActiveItem(0);





      //DISABLE FAVOURITE TAB IF USER IS IN SKIP LOGIN MODE...
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         this.offersPanel.down('#favNav').disable();
      }

      var store = Ext.getStore('OffersHotDealsDataViewStore');
      this.getApplication().getController('OffersController').dataView = this.getOffersHotDealsDataView();
      this.getApplication().getController('OffersController').from = 'hot';


      if (!this.getApplication().getController('OffersController').hotOffersSql)    //check if store loading first time or not,should call only first time
      {
         //offersHotSqlStore.load();
         var scroll = this.getApplication().getController('OffersController').dataView.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -85;
         scroll.scrollTo(null, -85, { duration: this.getApplication().getController('OffersController').dataView.down('#pull').getSnappingAnimationDuration() });
         this.getApplication().getController('OffersController').dataView.down('#pull').setState('loading');
         this.getApplication().getController('OffersController').loadStore(store);

      }

      this.getMainContainer().insert(1, this.offersPanel);
   },

   onTapSlideList: function (view, index, ctx, record, touch) {
      this.toggleNav();

      if (index == 0) {
         this.onTapOffers();
      } /*   if (index == 1)
      {
         this.onTapPlaces();
      }

      if (index == 2)
      {
         // this.onTapMovies();
         this.onTapStores();
      }*/
      if (index == 1) {
         this.onTapEvents();
      }

      if (index == 2) {
         this.onTapQRScaner();
      }

      if (index == 3) {
         this.onTapParking();
      }
   },

   onTapOffers: function () {
      this.onInitMainTabContainer();
   },

   onTapPlaces: function () {
      if (!this.placesPanel) {
         this.placesPanel = Ext.create('MobileApp.view.Places.PlacesPanel');
      }
      this.placesPanel.setActiveItem(0);
      this.getMainContainer().insert(1, this.placesPanel);

   },

   onTapMovies: function () {
      if (!this.moviesPanel) {
         this.moviesPanel = Ext.create('MobileApp.view.Movies.MoviesPanel');
      }
      this.moviesPanel.setActiveItem(0);
      this.getMainContainer().insert(1, this.moviesPanel);
   },

   onTapStores: function () {
      if (!this.storesTabPanel) {
         this.storesTabPanel = Ext.create('MobileApp.view.Places.PlacesStoresTabPanel');
      }

      /*there is a bug in sencha touch in which an extra .x-toolbar-dark  class get's added to tab panel items
      and hence due to this class dark orange color appears as per our theme instead of light orange even though 
      we have added ui:'light' config  property.
      Below is a temporary workaround implemented for removing .x-toolbar-dark class from dom of tab panel*/
      var storesTabBar = this.getPlacesStoresTabPanel().items.items[1].element.dom.className;
      this.getPlacesStoresTabPanel().items.items[1].element.dom.className = storesTabBar.replace(/\bx-tabbar-dark\b/, '');

      this.storesTabPanel.setActiveItem(0);
      this.getMainContainer().insert(1, this.storesTabPanel);
      var key = 'BusType::1';
      this.getApplication().getController('StoresController').onActiveItemHoltStoresList(key);
   },

   onTapEvents: function () {
      if (!this.eventsPanel) {
         this.eventsPanel = Ext.create('MobileApp.view.Events.EventsPanel');
      }

      /*there is a bug in sencha touch in which an extra .x-toolbar-dark  class get's added to tab panel items
      and hence due to this class dark orange color appears as per our theme instead of light orange even though 
      we have added ui:'light' config  property.
      Below is a temporary workaround implemented for removing .x-toolbar-dark class from dom of tab panel*/
      var eventsTabBar = this.getEventsTabPanel().items.items[1].element.dom.className;

      this.getEventsTabPanel().items.items[1].element.dom.className = eventsTabBar.replace(/\bx-tabbar-dark\b/, '');
      this.getMainContainer().insert(1, this.eventsPanel);
      var tabPanel = this.getEventsTabPanel().getTabBar();
      var language = this.getApplication().getController('SettingsController').lang;

      if (language == "fr") {
         tabPanel.getAt(0).setTitle("Eventos");
         tabPanel.getAt(1).setTitle("Mis Eventos");
      } else {
         tabPanel.getAt(0).setTitle("Events");
         tabPanel.getAt(1).setTitle("My Events");
      }


      //tabPanel.setTitle("df");
      //  console.log(Ext.getDom(this.getEventsTabPenal()).tab.btnEl.dom.innerText);
      this.getApplication().getController('EventsController').onTapEventsMenu();
   },

   onTapQRScaner: function () {
      if (!this.QRScanerPanel) {
         this.QRScanerPanel = Ext.create('MobileApp.view.QRScaner.QRPanel');
      }

      var qrScanerTabBar = this.getQrScanerTabPanel().items.items[1].element.dom.className;

      this.getQrScanerTabPanel().items.items[1].element.dom.className = qrScanerTabBar.replace(/\bx-tabbar-dark\b/, '');

      var tabPanel = this.getQrScanerTabPanel().getTabBar();
      var language = this.getApplication().getController('SettingsController').lang;

      if (language == "fr") {

         tabPanel.getAt(1).setTitle("Puntos");
      } else {

         tabPanel.getAt(1).setTitle("Points");
      }

      this.getMainContainer().insert(1, this.QRScanerPanel);

   },

   onTapParking: function () {
      if (!this.parkingPanel) {
         this.parkingPanel = Ext.create('MobileApp.view.Parking.ParkingPanel');
      }
      this.parkingPanel.setActiveItem(0);

      this.getMainContainer().insert(1, this.parkingPanel);
      /* if (Ext.getStore('ParkingPhotoSqlStore').data.items[0].data.photo != undefined) {
         document.getElementById('photoText').innerHTML = "Foto ya está en uso.";
      }
     
      if (Ext.getStore('ParkingNoteSqlStore').data.items[0].data.direction != "") {
         document.getElementById('noteText').innerHTML = "Note ya está guardado..";
      }*/

   },

   onTapSettingImg: function (element) {
      if (element.target.id == "settingImg") {
         if (!this.settingsPanel) {
            this.settingsPanel = Ext.create('MobileApp.view.Settings.SettingsPanel');
         }
         this.toggleNav();
         this.getMainContainer().insert(1, this.settingsPanel);
         this.getApplication().getController('SettingsController').showSettingsSlideButton();
         this.getSettingsNavigationView().setActiveItem(0);
      }
   },/*,
   setSlideIn: function()
   {
      var me = this,
          mainEl = me.getSlidelist().element;
      if (mainEl.hasCls('out'))
      {
         mainEl.removeCls('out').addCls('in');
      }
   }*/

   //below function checks on evry tap in the app if there is internet connection available and if yes then
   //hides the message at top.
   mainContainerTap: function () {
      var onlineStatus = window.navigator.onLine;
      var hintCmp = Ext.getCmp('hint');
      if (!onlineStatus && !hintCmp) {
         var hint = new Ext.Panel({
            id: 'hint',
            docked: 'top',
            items: [{
               html: '<p align="center" style="background-color:black; color:white;">No Internet Connection</p>'
            }]
         });
         this.getMainContainer().add(hint);
      }
      if (onlineStatus && hintCmp) {
         this.getMainContainer().remove(hintCmp, true);
      }
   }
});