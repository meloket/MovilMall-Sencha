Ext.define('SuperAdmin.controller.SuperAdminMainController', {
   extend: 'Ext.app.Controller',

   views: ['users.UsersGrid', 'HomePanel', 'HomeDataView', 'MainToolbar', 'MainNorthPanel', 'MainStatusBar', 'MainCenterContainer'],
   stores: ['HomeDataViewStore', 'LoginStore', 'UsersGridStore'],
   refs: [{
         ref: 'HomeDataView',
         selector: 'homedataview'
      }, {
         ref: 'MainCenterContainer',
         selector: 'maincentercontainer'
      }, {
         ref: 'MainToolbar',
         selector: 'maintoolbar'
      }, {
         ref: 'BusinessTypesWestGrid',
         selector: 'businesstypeswestgrid'
      }, {
         ref: 'AnalyticsEventsGrid',
         selector: 'analyticseventsgrid'
      }, {
         ref: 'AnalyticsLocGrid',
         selector: 'analyticslocgrid'
      }, {
         ref: 'AnalyticsOffersGrid',
         selector: 'analyticsoffersgrid'
      }],

   init: function()
   {
      this.control({
         'homedataview': {
            itemclick: this.onItemClick
         },
         'maintoolbar [itemId=brands]': {
            click: this.addBrandPanel
         },
         'maintoolbar [itemId=business]': {
            click: this.addBusinessPanel
         },
         /* 'maintoolbar [itemId=movies]': {
            click: this.addMoviesPanel
         },*/
         'maintoolbar [itemId=analytics]': {
            click: this.addAnalyticsPanel
         },
         
         'maintoolbar [itemId=users]': {
            click: this.addUsersPanel
         },
         'maintoolbar [action=country]': {
            click: this.onClickCountries
         },
         'maintoolbar [action=state]': {
            click: this.onClickStates
         },
         'maintoolbar [action=city]': {
            click: this.onClickCities
         },
         'maintoolbar [action=logout]': {
            click: 'onLogout'
         }
      });

      var me = this;

      me.getLoginStoreStore().on({
         scope: me,
         load: me.onLoginStoreLoad
      });
      
      me.getUsersGridStoreStore().on({
         scope: me,
         load: me.onUsersGridStoreLoad
      });

   },
   
   onUsersGridStoreLoad: function (store,response)
   {
      for (var i = 0; i < response.length; i++)
      {
         if (response[i].data.createdAt != null) {

            var date = response[i].data.createdAt;
            var fullDate = date.split("T")[0];
            var dateR = fullDate.split("-")[2];
            var monthR = fullDate.split("-")[1];
            var yearR = fullDate.split("-")[0];
            var newDate = dateR + '/' + monthR + '/' + yearR;
            response[i].data.createdAt = newDate;
         }
      }
      
   },

   onLogout: function()
   {
      window.location.assign("../Movil.Login/Login.html");
   },

   onLoginStoreLoad: function(store, records, successful)
   {
      var res = records[0].raw.isNotOk;
      if (res == true)
      {
         window.location.href = '../Movil.Login/Login.html';
         return;
      }
      var txt = this.getMainToolbar().down('#loginUniUserNameText');
      txt.setText("Welcome " + records[0].data.name);
   },

   onClickStates: function()
   {
      this.removeOldPanel();

      var statePanel = Ext.create('SuperAdmin.view.masters.StatesPanel');
      this.getMainCenterContainer().add(statePanel);

      var store = Ext.getStore('StatesStore');
      var countryStore = Ext.getStore('CountryComboStore');
      var gridClass = Ext.create('SuperAdmin.classes.GridClass');
      gridClass.loadGridStore(store);
      gridClass.loadGridStore(countryStore);
      this.btnEnable();
   },

   onClickCities: function()
   {
      this.removeOldPanel();

      var citiesPanel = Ext.create('SuperAdmin.view.masters.CitiesPanel');
      this.getMainCenterContainer().add(citiesPanel);

      var store = Ext.getStore('CitiesStore');
      var countryStore = Ext.getStore('CountryComboStore');
      var stateStore = Ext.getStore('StateComboStore');
      var gridClass = Ext.create('SuperAdmin.classes.GridClass');
      gridClass.loadGridStore(store);

      gridClass.loadGridStore(countryStore);
      gridClass.loadGridStore(stateStore);
      console.log(stateStore);
      this.btnEnable();
   },

   onClickCountries: function()
   {
      this.removeOldPanel();

      var countriesPanel = Ext.create('SuperAdmin.view.masters.CountriesPanel');
      this.getMainCenterContainer().add(countriesPanel);

      var store = Ext.getStore('CountriesStore');
      var gridClass = Ext.create('SuperAdmin.classes.GridClass');
      gridClass.loadGridStore(store);
      this.btnEnable();
   },

   btnEnable: function()
   {
      var brandsBtn = this.getMainToolbar().down('#brands');
      brandsBtn.enable();
      var businessBtn = this.getMainToolbar().down('#business');
      var usersBtn = this.getMainToolbar().down('#users');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      businessBtn.enable();
      usersBtn.enable();
      analyticsBtn.enable();
   },

   onItemClick: function(view, record, item, idx, event, opts)
   {
      //TODO::AFTER MOVIES IMPLEMENTATION,CHANGE IDX CONDITION OF ANALYTICS
      if (idx == 0)
      {
         this.addBrandPanel();
         this.addMasters();
      } else if (idx == 1)
      {
         this.addBusinessPanel();
         this.addMasters();
      }/* else if (idx == 2)
      {
         this.addMoviesPanel();
         this.addMasters();
      } */
      else if (idx == 2)
      {
         this.addAnalyticsPanel();
         this.addMasters();
      } else if (idx == 3)
      {
         this.addUsersPanel();
         this.addMasters();
      }
   },

   addMasters: function()
   {
      var mastersbtn = this.getMainToolbar().down('#masters');
      console.log(mastersbtn);
      //mastersbtn.hidden = false;
      mastersbtn.show();
   },

   addBrandPanel: function()
   {
      this.removeOldPanel();
      var brandsPanel = Ext.create('SuperAdmin.view.BrandsPanel');
      this.getMainCenterContainer().add(brandsPanel);

      var store = this.getStore('BrandsGridStore');
      var gridClass = Ext.create('SuperAdmin.classes.GridClass');
      gridClass.loadGridStore(store);

      var brandsBtn = this.getMainToolbar().down('#brands');
      brandsBtn.disable();

      var businessBtn = this.getMainToolbar().down('#business');
      //  var moviesBtn = this.getMainToolbar().down('#movies');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      var usersBtn = this.getMainToolbar().down('#users');

      //  console.log(moviesBtn);
      businessBtn.enable();
      usersBtn.enable();
      //    moviesBtn.enable();
      analyticsBtn.enable();
   },

   addBusinessPanel: function()
   {
      this.removeOldPanel();
      var businesstypesPanel = Ext.create('SuperAdmin.view.businessTypes.BusinessTypesPanel');
      this.getMainCenterContainer().add(businesstypesPanel);

      var businessBtn = this.getMainToolbar().down('#business');
      businessBtn.disable();

      var store = this.getStore('BusinessTypesWestGridStore');
      this.busStoreLoad(store);

      var brandsBtn = this.getMainToolbar().down('#brands');
      var usersBtn = this.getMainToolbar().down('#users');

      var analyticsBtn = this.getMainToolbar().down('#analytics');
      brandsBtn.enable();
      usersBtn.enable();
      analyticsBtn.enable();
   },

   busStoreLoad: function(store)
   {
      store.load({
         scope: this,
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
               var grid = this.getBusinessTypesWestGrid().getView();
               if (grid)
               {
                  var count = grid.all.getCount();
                  if (count > 0)
                  {
                     grid.select(0);

                  }
               }
            }
         }
      });
   },

   /* addMoviesPanel: function()
   {
      this.removeOldPanel();
      var moviesPanel = Ext.create('SuperAdmin.view.movies.MoviesPanel');
      this.getMainCenterContainer().add(moviesPanel);
      var moviesBtn = this.getMainToolbar().down('#movies');
      moviesBtn.disable();

      var store = this.getStore('MoviesStore');
      this.moviesStoreLoad(store);
      
     
      var brandsBtn = this.getMainToolbar().down('#brands');
      var businessBtn = this.getMainToolbar().down('#business');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      brandsBtn.enable();
      businessBtn.enable();
      analyticsBtn.enable();
   },
   moviesStoreLoad: function(store)
   {

      store.load({
         scope: this,
         //params: params,
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
               for (var i = 0; i < response.length; i++)
               {
                  response[i].data.releaseDate = new Date(response[i].data.releaseDate);
                  response[i].data.releaseDate.setHours(00);
                  response[i].data.releaseDate.setMinutes(00);
                  response[i].data.releaseDate.setSeconds(00);

               }
            }

         }
      });
   },*/
   addAnalyticsPanel: function()
   {
      this.removeOldPanel();
      var analyticsPanel = Ext.create('SuperAdmin.view.analytics.AnalyticsPanel');
      this.getMainCenterContainer().add(analyticsPanel);
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      analyticsBtn.disable();

      var store = this.getStore('AnalyticsLocGridStore');
      var grid = this.getAnalyticsLocGrid().getView();
      this.getController('AnalyticsController').analyticsStoreLoad(store, grid);


      var brandsBtn = this.getMainToolbar().down('#brands');
      var businessBtn = this.getMainToolbar().down('#business');
      var usersBtn = this.getMainToolbar().down('#users');
      brandsBtn.enable();
      businessBtn.enable();
      usersBtn.enable();
   },

   addUsersPanel: function()
   {

      this.removeOldPanel();
      var usersPanel = Ext.create('SuperAdmin.view.users.UsersGrid');
      this.getMainCenterContainer().add(usersPanel);
      var usersBtn = this.getMainToolbar().down('#users');
       usersBtn.disable();

       var store = this.getStore('UsersGridStore');
       var gridClass = Ext.create('SuperAdmin.classes.GridClass');
       gridClass.loadGridStore(store);


      var brandsBtn = this.getMainToolbar().down('#brands');
      var businessBtn = this.getMainToolbar().down('#business');
      var analyticsBtn = this.getMainToolbar().down('#analytics');

      brandsBtn.enable();
      businessBtn.enable();
      analyticsBtn.enable();
   },

   removeOldPanel: function()
   {
      this.getMainCenterContainer().removeAll(true);
      var brands = this.getMainToolbar().down('#brands');
      var business = this.getMainToolbar().down('#business');
      //   var movies = this.getMainToolbar().down('#movies');
      var analytics = this.getMainToolbar().down('#analytics');
      var users = this.getMainToolbar().down('#users');
      brands.show();
      business.show();
        users.show();
      analytics.show();
   }
});