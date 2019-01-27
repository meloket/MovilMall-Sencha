Ext.define('MobileApp.controller.MoviesController', {
   extend: 'Ext.app.Controller',

   config: {
      views: ['Movies.StoresPanel',
         'Movies.StoresNavigationView',
         'Movies.MoviesDataView',
         'Movies.MoviesProfileView',
         'Movies.MoviesTabPanel',
         'Movies.MoviesTimeView',
         'Movies.MoviesList',
         'Movies.MoviesNearByNavigationView',
         'Movies.MoviesSearchList',
         'Movies.MoviesSearchNavigationView',
         'Movies.MoviesProfileTabPanel',
         'Movies.MoviesInformationNavigationView',
         'Movies.MoviesShowTimesNavigationView'
      ],
      stores: ['MoviesDataViewStore', 'MoviesShowTimeStore', 'MoviesListStore',
         'MoviesSearchByNameStore', 'MoviesSearchStore'],
      models: ['MoviesDataViewModel', 'MoviesShowTimeModel'],
      refs: {
         moviesSlideButton: '#moviesSlideButton',
         moviesNearByBackBut: '#moviesNearByBackBut',
         moviesInfoBackButton: '#moviesInfoBackButton',
         moviesSearchBackBut: '#moviesSearchBackBut',
         searchBack: '#searchBack',
         placesNavBar: '#placesNavBar',
         moviesDataView: '#moviesDataView',
         moviesProfileView: 'moviesprofileview',
         moviesNavBar: '#moviesNavBar',
         movieProfImg: '#movieProfImg',
         slidelist: 'slidelist',
         placesMainNavigationView: 'placesmainnavigationview',
         synopsis: '#synopsis',
         releaseDate: '#releaseDate',
         runTime: '#runTime',
         director: '#director',
         genre: '#genre',
         cast: '#cast',
         placesList: 'placeslist',
         moviesList: 'movieslist',
         moviesInformationNavigationView: 'moviesinformationnavigationview',
         moviesShowTimesNavigationView: 'moviesshowtimesnavigationview',
         MoviesNearByNavigationView: 'moviesnearbynavigationview',
         moviesSearchNavigationView: 'moviessearchnavigationview',
         moviesTabPanel: 'moviestabpanel',
         moviesProfileTabPanel: 'moviesprofiletabpanel',
         moviesTimeView: 'moviestimeview',
         moviesSearchList: 'moviessearchlist'
      },

      control: {
         moviesNearByBackBut: {
            tap: 'onPlacesBack'
         },
         moviesSearchBackBut: {
            tap: 'onSearchBack'
         },
         moviesDataView: {
            itemsingletap: 'onTapMoviesList'
         },
         moviesdataview: {
            swipe: 'onSwipeMoviesDataView'
         },
         moviesSlideButton: {
            tap: 'onMoviesSlideButton'
         },
         moviesnearbynavigationview: {
            push: 'onMovieNavPush',
            pop: 'onMovieNavPop'
         },
         moviesList: {
            itemtap: 'onTapMoviesNearList'
         },
         moviesSearchList: {
            itemtap: 'onTapMoviesSearchList'
         },
         moviestabpanel: {
            activeitemchange: 'onMoviesTabChange'
         },
         moviesprofiletabpanel: {
            activeitemchange: 'onMoviesProfileTabchange'
         },
         'moviessearchlist #moviesSearchField': {
            keyup: 'onSearchMovies',
            clearicontap: 'OnClearText'
         },
         'moviesprofileview #viewTrailer': {
            tap: 'onViewTailor'
         },
         'moviestimeview #datePicker': {
            change: 'onChangeDate'
         }
      }
   },
   init: function () {
      this.record;
      this.locId;
   },

   onTapMoviesSearchList: function (view, index, ctx, record) {

      this.locId = record.data.key;

      var store = Ext.getStore('MoviesDataViewStore');
      var params = {
         locationId: this.locId
      };
      this.loadLocationsStore(store, params);
      if (!this.placesMoviesDataView) {
         this.placesMoviesDataView = Ext.create('MobileApp.view.Movies.MoviesDataView');
      }

      this.getMoviesSearchNavigationView().push(this.placesMoviesDataView);

      this.getMoviesTabPanel().getTabBar().hide();
      var searchBack = this.getSearchBack();
      searchBack.hide();
   },

   onChangeDate: function (thiss, value) {
      //console.log(value);
      value.setHours(0);
      value.setMinutes(0);
      value.setSeconds(0);

      var movieId = this.record.key;
      var locId = this.locId;
      var store = Ext.getStore('MoviesShowTimeStore');
      var params = {
         movieId: movieId,
         locationId: locId,
         date: value,
         fromMobile: 'true'
      };

      this.loadLocationsStore(store, params);
   },

   onSearchBack: function () {
      if (this.getMoviesSearchNavigationView()) {
         if (this.getMoviesSearchNavigationView().innerItems.length == 1)
         {
          //  console.log("as");
           
            this.showStoresNavBar();
            this.getPlacesMainNavigationView().pop();
         } else
         {
          //  console.log("sd");
           
            this.getMoviesTabPanel().getTabBar().hide();
            this.getMoviesSearchNavigationView().pop();
            var searchBack = this.getSearchBack();
            searchBack.hide();
         }
      }
   },

   onMoviesProfileTabchange: function (view, active) {
      var activeView = active.xtype;
      if (activeView == "moviesshowtimesnavigationview") {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);

         var date = this.getMoviesTimeView().down('#datePicker');
         date.setValue(new Date());
      }
   },

   showStoresNavBar: function () {
      this.getPlacesNavBar().show();
   },

   onViewTailor: function () {

      //window.open("http://" + this.record.trailerLink);
      window.open("http://" + this.record.trailerLink, '_system');
   },

   onSearchMovies: function (field) {
      if (field.getValue().length >= 2) {
         var params = {
            busTypeId: 'BusType::5',
            name: field.getValue()
         };
        // console.log(params);
         var store = Ext.getStore('MoviesSearchByNameStore');
         store.load({
            scope: this,
            params: params,
            callback: function (response, operation, success) {
               if (success != true) {
                  if (response) {
                     var data = response.operations[0].request.proxy.reader.jsonData.message;
                     Ext.example.msg('Message', data);
                  } else {
                     var errorCode = operation.error.status;
                     var error = 'Something went wrong';
                     if (errorCode == 401) {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                     Ext.example.msg('Message', error);
                  }
               }
            }
         });
         if (store.data.items.length > 0) {
            var searchStore = Ext.getStore('MoviesSearchByNameStore');
            searchStore.removeAll();
            for (var i = 0; i < store.data.items.length; i++) {
               searchStore.add(store.data.items[i]);
            }
         }
      } else if (field.getValue().length == 0) {
         this.OnClearText();
      }
   },

   OnClearText: function () {

      var search = Ext.getStore('MoviesSearchByNameStore');
      search.removeAll();
   },

   onMoviesTabChange: function (view, active) {
      var activeView = active.xtype;

      if (activeView == 'moviessearchnavigationview') {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         var searchStore = Ext.getStore('MoviesSearchStore');
         var params = { busTypeId: 'BusType::5' };
         this.loadLocationsStore(searchStore, params);
         var searchBack = this.getSearchBack();
         searchBack.hide();
      }
      if (activeView == 'moviesinformationhnavigationview') {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);

      }
   },

   onTapMoviesNearList: function (view, index, ctx, record, touch) {
      this.locId = record.data.key;
      var store = Ext.getStore('MoviesDataViewStore');
      var params = {
         locationId: this.locId
      };
      if (touch.target.id == "moviesContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         //this.getPlacesRestTabPanel().getTabBar().show();
      } else
      {

         this.loadLocationsStore(store, params);
         if (!this.placesMoviesDataView)
         {
            this.placesMoviesDataView = Ext.create('MobileApp.view.Movies.MoviesDataView');
         }
         this.getMoviesNearByNavigationView().push(this.placesMoviesDataView);
         this.getMoviesTabPanel().getTabBar().hide();
      }
                                                                   },

   onTapPlacesMovies: function (busTypeId) {
      var onSuccess = function (position) {
         var lat = position.coords.latitude;
         var longitude = position.coords.longitude;
         var para = {
            latitude: lat,
            longitude: longitude,
            busTypeId: busTypeId
         };
         var store = Ext.getStore('MoviesListStore');

         store.load({
            scope: this,
            params: para,
            callback: function (response, operation, success) {
               if (success != true) {
                  if (response) {
                     var data = response.operations[0].request.proxy.reader.jsonData.message;
                     Ext.example.msg('Message', data);
                  } else {
                     var errorCode = operation.error.status;
                     var error = 'Something went wrong';
                     if (errorCode == 401) {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                     Ext.example.msg('Message', error);
                  }
               }
            }
         });
      };

      var onError = function (error) {
        // console.log(error);
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 10000, enableHighAccuracy: true });

      if (!this.placesMoviesTabPanel) {
         this.placesMoviesTabPanel = Ext.create('MobileApp.view.Movies.MoviesTabPanel');
      }

      this.placesMoviesTabPanel.setActiveItem(0);
      this.getMoviesTabPanel().getTabBar().show();
      this.getPlacesMainNavigationView().push(this.placesMoviesTabPanel);

      /*there is a bug in sencha touch in which an extra .x-toolbar-dark  class get's added to tab panel items
    and hence due to this class dark orange color appears as per our theme instead of light orange even though 
    we have added ui:'light' config  property.
    Below is a temporary workaround implemented for removing .x-toolbar-dark class from dom of tab panel*/
      var moviesTabBar = this.getMoviesTabPanel().items.items[1].element.dom.className;
      this.getMoviesTabPanel().items.items[1].element.dom.className = moviesTabBar.replace(/\bx-tabbar-dark\b/, '');


   },

   loadLocationsStore: function (store, params) {
      if (this.from != 'scroll' && this.from != '') {
         Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
      }
      store.load({
         scope: this,
         params: params,
         callback: function (response, operation, success) {
            if (success != true) {
               Ext.Viewport.setMasked(false);
               if (response) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401) {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else {
               for (var i = 0; i < response.length; i++) {
                  if (response[i].data.releaseDate != null) {
                     var date = new Date(response[i].data.releaseDate).toLocaleString();
                     var fullDate = date.split(" ")[0];
                     var dateR = fullDate.split("/")[1];
                     var monthR = fullDate.split("/")[0];
                     var yearR = fullDate.split("/")[2];
                     var newDate = dateR + '/' + monthR + '/' + yearR;
                     response[i].data.releaseDate = newDate;
                  }

               }
               Ext.Viewport.setMasked(false);
            }
         }
      });
   },

   onSwipeMoviesDataView: function (event) {
      if (event.direction == "left") {
         var me = this,
             mainEl = me.getSlidelist().element;
         if (mainEl.hasCls('out')) {
            mainEl.removeCls('out').addCls('in');
         }
      }
   },

   onTapMoviesList: function (view, index, ctx, record) {
      Ext.getStore('MoviesShowTimeStore').removeAll();
     
         if (!this.moviesProfileTabPanel)
         {
            this.moviesProfileTabPanel = Ext.create('MobileApp.view.Movies.MoviesProfileTabPanel');
         }

         this.moviesProfileTabPanel.setActiveItem(0);
         if (view.getParent().getParent().xtype == "moviessearchnavigationview")
         {
            this.getMoviesSearchNavigationView().push(this.moviesProfileTabPanel);
            this.setProfileValue(record);
            var searchBack = this.getSearchBack();
            searchBack.hide();
            this.getMoviesSearchNavigationView().getNavigationBar().setTitle(record.data.name);
         } else
         {
            this.getMoviesNearByNavigationView().push(this.moviesProfileTabPanel);
            this.setProfileValue(record);
            this.getMoviesNearByNavigationView().getNavigationBar().setTitle(record.data.name);
         }
         var moviesTabBar = this.getMoviesProfileTabPanel().items.items[1].element.dom.className;
         this.getMoviesProfileTabPanel().items.items[1].element.dom.className = moviesTabBar.replace(/\bx-tabbar-dark\b/, '');

      
                                                        },

   setProfileValue: function (record) {

      var img = record.data.photo;
      var synopsis = this.getMoviesProfileView().down('#synopsis');
      this.getMovieProfImg().setSrc(img);
      synopsis.setHtml(record.data.synopsis);
      this.getReleaseDate().setHtml('<span style="font-size:0.8em;">' + record.data.releaseDate + '</span>');
      this.getRunTime().setHtml('<span style="font-size:0.8em;">' + record.data.runTime + '</span>');
      this.getDirector().setHtml('<span style="font-size:0.8em;">' + record.data.director + '</span>');
      this.getGenre().setHtml('<span style="font-size:0.8em;">' + record.data.genre + '</span>');
      this.getCast().setHtml('<span style="font-size:0.8em;">' + record.data.cast + '</span>');
      this.record = record.data;
   },

   onMoviesSlideButton: function () {
      this.getApplication().getController('MainController').toggleNav();

   },

   onMovieNavPush: function (view, item) {
      this.hideRestNearByBackButton();
   },

   onMovieNavPop: function (view, item) {

      if (view.getActiveItem().xtype == "movieslist") {
         this.getMoviesTabPanel().getTabBar().show();

         /*there is a bug in sencha touch in which an extra .x-toolbar-dark  class get's added to tab panel items
    and hence due to this class dark orange color appears as per our theme instead of light orange even though 
    we have added ui:'light' config  property.
    Below is a temporary workaround implemented for removing .x-toolbar-dark class from dom of tab panel*/
         var moviesTabBar = this.getMoviesTabPanel().items.items[1].element.dom.className;
         this.getMoviesTabPanel().items.items[1].element.dom.className = moviesTabBar.replace(/\bx-tabbar-dark\b/, '');
         this.showRestNearByBackButton();
      }
   },

   hideRestNearByBackButton: function (view) {
      var moviesNearByBackBut = this.getMoviesNearByBackBut();
      if (moviesNearByBackBut.isHidden()) {
         return;
      }
      moviesNearByBackBut.hide();

   },

   showRestNearByBackButton: function () {
      this.getMoviesNearByBackBut().show();
   },

   onPlacesBack: function () {

      this.showStoresNavBar();
      this.getPlacesMainNavigationView().pop();
   }
});