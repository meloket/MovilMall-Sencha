Ext.define('BrandAdmin.controller.BrandAdminMainController', {
   extend: 'Ext.app.Controller',

   views: ['HomePanel', 'MainToolbar', 'MainNorthPanel', 'MainStatusBar', 'MainCenterContainer', 'HomeDataView'],
   
   stores: ['HomeDataViewStore', 'LoginStore'],
   
   refs: [
      {
         ref: 'MainCenterContainer',
         selector: 'maincentercontainer'
      }, {
         ref: 'AnalyticsLocGrid',
         selector: 'analyticslocgrid'
      }, {
         ref: 'MainToolbar',
         selector: 'maintoolbar'
      }, {
         ref: 'ProfileIdentityForm',
         selector: 'profileidentityform'
      },{
         ref: 'ProfileBusinessTypeForm',
         selector: 'profilebusinesstypeform'
      }, {
         ref: 'ProfileBusinessDataView',
         selector: 'profilebusinessdataview'
      }, {
         ref: 'ProfileSocialForm',
         selector: 'profilesocialform'
      }, {
         ref: 'ProfilePhotographForm',
         selector: 'profilephotographform'
      },
      {
         ref: 'LocationsDetailForm',
         selector: 'locationsdetailform'
      },
      {
         ref: 'OffersInfoForm',
         selector: 'offersinfoform'
      },
      {
         ref: 'OffersDescriptionForm',
         selector: 'offersdescriptionform'
      },
      {
         ref: 'LocationsMapPanel',
         selector: 'locationsmappanel'
      }],

   init: function()
   {
      this.control({
         'homedataview': {
            itemclick: this.onItemClick
         },
         'maintoolbar [itemId=events]': {
            click: this.addEventsPanel
         },
         'maintoolbar [itemId=profile]': {
            click: this.addProfilePanel
         },
         'maintoolbar [itemId=locations]': {
            click: this.addLocationsPanel
         },
         'maintoolbar [itemId=offers]': {
            click: this.addOffersPanel
         },
         'maintoolbar [itemId=movies]': {
            click: this.addMoviesPanel
         },
         'maintoolbar [itemId=analytics]': {
            click: this.addAnalyticsPanel
         },
         'maintoolbar [action=logout]': {
            click: this.onLogout
         },
         'maintoolbar [action=language]': {
            click: this.onChangeLang
         }
      });
      var me = this;

      me.getLoginStoreStore().on({
         scope: me,
         load: me.onLoginStoreLoad
      });

   },

   onLogout: function()
   {
      Ext.Ajax.request({
         method: 'GET',
         url: '/logout',
         scope: this,
         headers: { 'Content-Type': 'application/json' },

         success: function(response)
         {
            var result = Ext.JSON.decode(response.responseText);
            console.log(result);
            var valid = result.success;
            console.log(valid);
            if (valid == 'false')
            {
               Ext.example.msg('Message', result.message);
            } else
            {
               //todo : change url in production
               window.location ='/';
            }
         }
      });
   },

   onLoginStoreLoad: function(store, records, successful)
   {
      console.log(records);
      var txt = this.getMainToolbar().down('#loginUniUserNameText');
      txt.setText("Welcome " + records[0].data.name);
   },

   onItemClick: function(view, record, item, idx, event, opts)
   {


      if (idx == 4)
      {
         this.addEventsPanel();
      } 
      else if (idx == 2)
      {
         this.addOffersPanel();
      }
      else if (idx == 3) {
         this.addMoviesPanel();
      }
      else if (idx == 0) {
         this.addProfilePanel();
      }
      else if (idx == 1) {
         this.addLocationsPanel();
      }
      else if (idx == 5) {
         this.addAnalyticsPanel();
      }
   },
   addAnalyticsPanel: function () {

      this.removeOldPanel();
      var analyticsPanel = Ext.create('BrandAdmin.view.analytics.AnalyticsPanel');
      console.log(analyticsPanel);
      this.getMainCenterContainer().add(analyticsPanel);
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      analyticsBtn.disable();

      var brandId = this.getLoginStoreStore().data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };

      var store = this.getStore('AnalyticsLocGridStore');
      var grid = this.getAnalyticsLocGrid().getView();
      this.getController('AnalyticsController').analyticsStoreLoad(store, grid, params);

      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');
      var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      var eventsBtn = this.getMainToolbar().down('#events');
      //var analyticsBtn = this.getMainToolbar().down('#analytics');
      profileBtn.enable();
      locationsBtn.enable();
      offersBtn.enable();
      moviesBtn.enable();
      eventsBtn.enable();
      //analyticsBtn.enable();
   },
   addLocationsPanel: function () {

      this.removeOldPanel();
      var locationsPanel = Ext.create('BrandAdmin.view.locations.LocationsPanel');
      console.log(locationsPanel);
      this.getMainCenterContainer().add(locationsPanel);
      var locationsBtn = this.getMainToolbar().down('#locations');
      locationsBtn.disable();
      var brandId = this.getLoginStoreStore().data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };
      var store = this.getStore('LocationsStore');
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      gridClass.loadGridStore(store, params);


      var stateComboStore = this.getStore('StateComboStore');
      gridClass.loadGridStore(stateComboStore);

      var cityComboStore = this.getStore('CityComboStore');
      gridClass.loadGridStore(cityComboStore);

      var profileBtn = this.getMainToolbar().down('#profile');
      
      var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      profileBtn.enable();
      //locationsBtn.enable();
      offersBtn.enable();
      moviesBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();
   },
   
   loadStore: function (store, params)
   {
      store.load({
         scope: this,
         params: params,
         callback: function (response, operation, success) {
            if (success != true)
            {
               if (response)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else
               {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else
            {
               
            }
         }
      });
   },
   
   addProfilePanel: function () {

      this.removeOldPanel();
      var profilePanel = Ext.create('BrandAdmin.view.profile.ProfilePanel');
      console.log(profilePanel);
      this.getMainCenterContainer().add(profilePanel);
      var profileBtn = this.getMainToolbar().down('#profile');
      profileBtn.disable();

      /* var brandId = this.getLoginStoreStore().data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };*/
      var store = this.getStore('ProfileIdentityStore');
      var busStore = this.getStore('ProfileBusinessStore');
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      gridClass.loadGridStore(busStore);
      this.loadProfileIdentityStore(store);

      var locationsBtn = this.getMainToolbar().down('#locations');
      var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');

      locationsBtn.enable();
      offersBtn.enable();
      moviesBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();
   },

   loadProfileIdentityStore: function(store)
   {
      var response = store.data.items;
      for (var i = 0; i < store.data.items.length; i++)
      {
         var form = this.getProfileIdentityForm();
         form.loadRecord(response[0]);
         var socialForm = this.getProfileSocialForm();
         socialForm.loadRecord(response[0]);
         var photoForm = this.getProfilePhotographForm();
         photoForm.loadRecord(response[0]);
         if (response[0].data.logo)
         {
            var logo = photoForm.down('#logoImageBox');
            logo.setSrc(response[0].data.logo);
         }
         if (response[0].data.profileImage)
         {
            var profileImage = photoForm.down('#profilePicImageBox');
            profileImage.setSrc(response[0].data.profileImage);
         }
      }
   },

   addMoviesPanel: function()
   {

      this.removeOldPanel();
      var moviesPanel = Ext.create('BrandAdmin.view.movies.MoviesPanel');
      console.log(moviesPanel);
      this.getMainCenterContainer().add(moviesPanel);
      var moviesBtn = this.getMainToolbar().down('#movies');
      moviesBtn.disable();

      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');
      var offersBtn = this.getMainToolbar().down('#offers');
     
      var store = this.getStore('MoviesStore');
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      gridClass.loadGridStore(store);
      
      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      profileBtn.enable();
      locationsBtn.enable();
      offersBtn.enable();
      
      eventsBtn.enable();
      analyticsBtn.enable();
   },
   addOffersPanel: function()
   {
      this.removeOldPanel();
      var offersPanel = Ext.create('BrandAdmin.view.offers.OffersPanel');
      console.log(offersPanel);
      this.getMainCenterContainer().add(offersPanel);
      var offersBtn = this.getMainToolbar().down('#offers');
      offersBtn.disable();

      var brandId = this.getLoginStoreStore().data.items[0].data.brandId;
      console.log(brandId);
      //todo: after session implementation ,put above brandId here
      var params = {
         brandId: brandId
      };
      var store = this.getStore('OffersStore');
      //var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      this.loadOffersStore(store,params);
     
      
      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');
      //var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      profileBtn.enable();
      locationsBtn.enable();
      //offersBtn.enable();
      moviesBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();
   },
   loadOffersStore: function (store, params)
   {
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               if (response)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else
               {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else {
               console.log(response);
               for (var i = 0; i < response.length; i++)
               {
                  response[i].data.validFrom = new Date(response[i].data.validFrom);
                  response[i].data.validFrom.setHours(00);
                  response[i].data.validFrom.setMinutes(00);
                  response[i].data.validFrom.setSeconds(00);

               }
               for (var i = 0; i < response.length; i++)
               {
                  response[i].data.validTo = new Date(response[i].data.validTo);
                  response[i].data.validTo.setHours(00);
                  response[i].data.validTo.setMinutes(00);
                  response[i].data.validTo.setSeconds(00);

               }
               /*var photoForm = this.getProfilePhotographForm();
               photoForm.loadRecord(response[0]);
               if (response[0].data.logo) {
                  var logo = photoForm.down('#logoImageBox');
                  logo.setSrc(response[0].data.logo);
               }
               if (response[0].data.profileImage) {
                  var profileImage = photoForm.down('#profilePicImageBox');
                  profileImage.setSrc(response[0].data.profileImage);
               }*/
            }
         }
      });
   },

   addEventsPanel: function()
   {

      this.removeOldPanel();
      var eventsPanel = Ext.create('BrandAdmin.view.events.EventsPanel');
      console.log(eventsPanel);
      this.getMainCenterContainer().add(eventsPanel);
      var eventsBtn = this.getMainToolbar().down('#events');
      eventsBtn.disable();
      

      var store = this.getStore('EventsStore');
      var brandId = this.getLoginStoreStore().data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };

    
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               if (response)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               
               } else
               {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }

            } else
            {
               console.log(response);
               for(var i = 0; i<response.length;i++)
               {
                  response[i].data.datetime = new Date(response[i].data.datetime);
                  response[i].data.datetime.setHours(00);
                  response[i].data.datetime.setMinutes(00);
                  response[i].data.datetime.setSeconds(00);
                  
               }
            }
         }
      });
      
      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');
      var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      //var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      profileBtn.enable();
      locationsBtn.enable();
      offersBtn.enable();
      moviesBtn.enable();
      //eventsBtn.enable();
      analyticsBtn.enable();
   },
   removeOldPanel: function()
   {
      this.getMainCenterContainer().removeAll(true);
      var profile = this.getMainToolbar().down('#profile');
      var locations = this.getMainToolbar().down('#locations');
      var movies = this.getMainToolbar().down('#movies');
      var offers = this.getMainToolbar().down('#offers');
      var events = this.getMainToolbar().down('#events');
      var analytics = this.getMainToolbar().down('#analytics');
      profile.show();
      locations.show();
      offers.show();
      movies.show();
      events.show();
      analytics.show();
   },
   
   onChangeLang: function (field, value,a,b,c)
   {
      if (value.length > 2) {
         var store = field.getStore(),
             rec = store.findRecord('text', value);

         value = rec.get(field.getValueField());
      }
      console.log(Ux);
      Ux.locale.Manager.updateLocale(field.value);
   }
});