Ext.define('BrandAdmin.controller.BrandAdminMainController', {
   extend: 'Ext.app.Controller',

   views: ['HomePanel', 'MainToolbar', 'MainNorthPanel', 'MainStatusBar', 'MainCenterContainer', 'HomeDataView', 'ChangePwdPanel'],

   stores: ['HomeDataViewStore', 'LoginStore', 'ProfileIdentityStore'],

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
      }, {
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
      },
      {
         ref: 'EventsInfoForm',
         selector: 'eventsinfoform'
      },
      {
         ref: 'HomeDataView',
         selector: 'hmedataview'
      },
      {
         ref: 'LocationsGrid',
         selector: 'locationsgrid'
      },
      {
         ref: 'ChangePwdPanel',
         selector: 'changepwdpanel'
      },
      {
         ref: 'OffersGrid',
         selector: 'offersgrid'
      }, {
         ref: 'PointsGrid',
         selector: 'pointsgrid'
      }],

   init: function()
   {
      this.control({
         'homedataview': {
            itemclick: this.onItemClick,
            viewready: 'onViewReadyMainStatusBar'
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
         'maintoolbar [itemId=help]': {
            click: this.onHelp
         },
         'maintoolbar [action=changepassword]': {
            click: this.onChangePass
         },
         'changepwdpanel [action=save]': {
            click: this.onSaveOfChangePwd
         },
         'profilephotographform [itemId=profileDataView]': {
            viewready: 'onViewReadyProfileDataView'
         },
         'profilephotographform [itemId=logoDataView]': {
            viewready: 'onViewReadyLogoDataView'
         },
         'maintoolbar [itemId=points]': {
            click: 'onClickPoints'
         }
      });

      var me = this;

      me.getLoginStoreStore().on({
         scope: me,
         load: me.onLoginStoreLoad
      });
      me.getProfileIdentityStoreStore().on({
         scope: me,
         load: me.OnProfileIdentityStoreLoad
      });
      this.record;
      this.value;
   },

   onViewReadyProfileDataView: function()
   {
      var photo = document.getElementById('profileImage');
      var random = Math.random();
      if (this.record[0])
      {
         var key = this.record[0].data.key;
         if (photo)
         {
            photo.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x50/1.5/' + key + '-logo'+'?' + random;
         } else {
            photo.src = "resources/images/NtAvailEvent.png";
         }


      }

   },

   onViewReadyLogoDataView: function()
   {
      var photo = document.getElementById('logoImage');
      var random = Math.random();
      if (this.record[0])
      {
         var key = this.record[0].data.key;
         if (photo)
         {
            photo.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x112/1.5/' + key + '-profile' + '?' + random;
         } else {
            photo.src = "resources/images/NtAvailEvent.png";
         }


      }


   },

   onSaveOfChangePwd: function()
   {
      var oldpassword = this.getChangePwdPanel().down('[itemId=oldPassword]').value;
      var newPassword = this.getChangePwdPanel().down('[itemId=newPassword]').value;
      var confirmPwd = this.getChangePwdPanel().down('[itemId=confirmPassword]').value;

      if (!newPassword)
      {
         if (this.value == "en")
         {
            Ext.example.msg('Message', 'Please fill New Password');
            return;
         }
         if (this.value == "fr")
         {
            Ext.example.msg('Message', 'Por favor, rellene Nueva contraseña');
            return;
         }
      }
      if (newPassword != confirmPwd)
      {
         if (this.value == "en")
         {
            Ext.example.msg('Message', 'Please confirm password');
            return;
         }
         if (this.value == "fr")
         {
            Ext.example.msg('Message', 'Por favor, confirme su contraseña');
            return;
         }
      }

      Ext.Ajax.request({
         method: 'POST',
         url: '/User/ChangePassword',
         params: {
            oldPass: oldpassword,
            newPass: newPassword
         },
         scope: this,
         success: function(response)
         {
            //console.log(response);
            var result = Ext.JSON.decode(response.responseText);
            var valid = result.msg;
            if (this.value == "fr")
            {
               if (valid == 'oldPwdIncorrect')
               {
                  Ext.example.msg('Message', 'Contraseña anterior es incorrecta'); //Old Password is Incorrect
               } else if (valid == 'pwdChanged')
               {
                  Ext.example.msg('Success', 'Contraseña cambió con éxito'); //Password changed successfully"
               } else
               {
                  Ext.example.msg('Message', 'something went wrong.');
               }
            }
            if (this.value == "en")
            {
               if (valid == 'oldPwdIncorrect')
               {
                  Ext.example.msg('Message', 'Old Password is Incorrect'); //Old Password is Incorrect
               } else if (valid == 'pwdChanged')
               {
                  Ext.example.msg('Success', 'Password changed successfully'); //Password changed successfully"
               } else
               {
                  Ext.example.msg('Message', 'something went wrong.');
               }
            }
         },
         failure: function(response)
         {
            //console.log(response);
            var error = 'Something went wrong';
            if (response.status == 401)
            {
               if (this.value == "en")
               {
                  error = 'Sorry, You are not authorized to access this module.';
               }
               if (this.value == "fr")
               {
                  error = 'Lo sentimos, Usted no está autorizado a acceder a este módulo.';
               }
            }
            Ext.example.msg('Message', error);
         }
      });

   },

   onChangePass: function()
   {
      this.removeOldPanel();
      /* var changePwdPanel = Ext.create('BrandAdmin.view.ChangePwdPanel');
     this.getMainCenterContainer().add(changePwdPanel);*/
      var changePwdPanel = Ext.create('BrandAdmin.view.ChangePwdPanel');
      this.getMainCenterContainer().add(changePwdPanel);
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
            //console.log(result);
            var valid = result.success;
            //console.log(valid);
            if (valid == 'false')
            {
               Ext.example.msg('Message', result.message);
            } else
            {
               //console.log(window.location);
               //todo : change url in production
               window.location = '../Movil.Login/Login.html';
            }
         }
      });
   },

   onLoginStoreLoad: function(store, records, successful)
   {
      var value = window.location.search.replace("?val=", "");
      this.value = value;
      console.log(value);
      var res = records[0].raw.isNotOk;
      if (res == true)
      {
         window.location.href = '../Movil.Login/Login.html';
         return;
      }

      var txt = this.getMainToolbar().down('#loginUniUserNameText');
      txt.setText(records[0].data.name);

      var brandName = this.getMainToolbar().down('#loginBrandName');
      brandName.setText(records[0].data.brandName);
      this.onChangeLang();

   },

   OnProfileIdentityStoreLoad: function(store)
   {

      //AS MOVIES MODULE IS NOT EXIST NOW...

      /* var busType = store.data.items[0].data.busTypeId;
      if (busType != "BusType::5")
      {
         var homeDataViewStore = this.getStore('HomeDataViewStore');
         homeDataViewStore.removeAt(3);
         var l = document.getElementsByClassName("menu-item");
         //console.log(l);
         for (var i = 0; i < l.length; i++)
         {
           // console.log(l[i].style.width);
            l[i].style.width = "20%";
         }
      }*/


   },

   onItemClick: function(view, record, item, idx, event, opts)
   {
      //DONT CHANGE 
      //CONDITION IS TAKEN ON IMAGE,BCZ IDX CAN BE CHANGE WITH MOVIES HIDE/SHOW
      var data = record.data.img;
      if (data == "profile")
      {
         this.addProfilePanel();
      } else if (data == "locations")
      {
         this.addLocationsPanel();
      } else if (data == "offer")
      {
         this.addOffersPanel();
      } /*else if (data == "movie")
      {
         this.addMoviesPanel();
      }*/
      else if (data == "events")
      {
         this.addEventsPanel();
      } else if (data == "analytics")
      {
         this.addAnalyticsPanel();
      }
   },

   addAnalyticsPanel: function()
   {

      this.removeOldPanel();
      var analyticsPanel = Ext.create('BrandAdmin.view.analytics.AnalyticsPanel');
      //console.log(analyticsPanel);
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
      var pointsBtn = this.getMainToolbar().down('#points');

      profileBtn.enable();
      locationsBtn.enable();
      offersBtn.enable();
      //  moviesBtn.enable();
      eventsBtn.enable();
      pointsBtn.enable();

      var brandStore = this.getStore('ProfileIdentityStore');
      /* var busType = brandStore.data.items[0].data.busTypeId;
      if (busType != "BusType::5")
      {
         moviesBtn.hide();
      }*/
   },

   addLocationsPanel: function()
   {
      this.removeOldPanel();
      var lang = this.getApplication().getController('BrandAdminMainController').value;
     
      var locationsPanel = Ext.create('BrandAdmin.view.locations.LocationsPanel');
      //console.log(locationsPanel);
      this.getMainCenterContainer().add(locationsPanel);
      var locationsBtn = this.getMainToolbar().down('#locations');
      locationsBtn.disable();
      var brandId = this.getLoginStoreStore().data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };
      var store = this.getStore('LocationsStore');
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      this.loadLocGridStore(store, params);


      var stateComboStore = this.getStore('StateComboStore');
      gridClass.loadGridStore(stateComboStore);

      var cityComboStore = this.getStore('CityComboStore');
      gridClass.loadGridStore(cityComboStore);

      var mallParams = {
         busTypeId: 'BusType::4'
      };
      var mallComboStore = this.getStore('LocationMallsComboStore');
      gridClass.loadGridStore(mallComboStore, mallParams);


      var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      var profileBtn = this.getMainToolbar().down('#profile');
      var pointsBtn = this.getMainToolbar().down('#points');

      pointsBtn.enable();
      profileBtn.enable();
      //locationsBtn.enable();
      offersBtn.enable();
      //console.log(moviesBtn);
      //  moviesBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();


      var brandStore = this.getStore('ProfileIdentityStore');
      /* var busType = brandStore.data.items[0].data.busTypeId;
      if (busType != "BusType::5")
      {
         moviesBtn.hide();
      }*/
   },

   loadLocGridStore: function(store, params)
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
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     if (this.value == "fr")
                     {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (this.value == "en")
                     {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else
            {
               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.insideMall == "true")
                  {
                     response[i].data.insideMall = "Si";
                  } else
                  {
                     response[i].data.insideMall = "No";
                  }
               }
               if (this.getLocationsGrid())
               {
                  this.getLocationsGrid().getView().refresh();
               }

               if (this.getPointsGrid())
               {
                  var rec = store.data.items;
                  if (rec)
                  {
                     var locCombo = this.getPointsGrid().down('#locCombo');
                     locCombo.fireEvent('select', locCombo, rec);
                     locCombo.select(store.data.items[0]);
                  }

               }

            }
         }
      });

   },

   loadStore: function(store, params)
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
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     if (this.value == "fr")
                     {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (this.value == "en")
                     {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            }
         }
      });
   },

   addProfilePanel: function()
   {

      this.removeOldPanel();
      var profilePanel = Ext.create('BrandAdmin.view.profile.ProfilePanel');
      //console.log(profilePanel);
      this.getMainCenterContainer().add(profilePanel);
      var profileBtn = this.getMainToolbar().down('#profile');
      profileBtn.disable();

      this.getController('ProfileController').onIdentity();
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
      var pointsBtn = this.getMainToolbar().down('#points');

      pointsBtn.enable();
      locationsBtn.enable();
      offersBtn.enable();
      // moviesBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();


      this.getController('ProfileController').onIdentity();

      var brandStore = this.getStore('ProfileIdentityStore');
      /* var busType = brandStore.data.items[0].data.busTypeId;
      if (busType != "BusType::5")
      {
         moviesBtn.hide();
      }*/
   },

   loadProfileIdentityStore: function(store)
   {
      var response = store.data.items;
      this.record = response;
      for (var i = 0; i < store.data.items.length; i++)
      {
         var form = this.getProfileIdentityForm();
         form.loadRecord(response[0]);
         var socialForm = this.getProfileSocialForm();
         socialForm.loadRecord(response[0]);
         var photoForm = this.getProfilePhotographForm();
         var key = response[0].data.key;
         var random = Math.random();
        
            /* var logo = photoForm.down('#logoImageBox');
            logo.setSrc(response[0].data.logo);
            logo.setHeight(170);
            logo.setWidth(140);*/
            var logo = document.getElementById('logoImage');
            if (logo)  //AS IT WILL NOT RENDER FIRST TIME,AT FIRST TIME "onViewReadyPhotoDataView" FUNCTION WILL CALL
            {
               logo.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x112/1.5/' + key + '-profile' + '?' + random;
            }
        
        
            var photo = document.getElementById('profileImage');
            if (photo)  //AS IT WILL NOT RENDER FIRST TIME,AT FIRST TIME "onViewReadyPhotoDataView" FUNCTION WILL CALL
            {
               photo.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x50/1.5/' + key +'-logo'+ '?' + random;
            }
       


         photoForm.loadRecord(response[0]);
      }

   },

   addMoviesPanel: function()
   {
      this.removeOldPanel();
      var moviesPanel = Ext.create('BrandAdmin.view.movies.MoviesPanel');
      var loginStore = this.getStore('LoginStore').data.items[0].data;
      this.getMainCenterContainer().add(moviesPanel);
      var moviesBtn = this.getMainToolbar().down('#movies');
      // moviesBtn.disable();

      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');
      var offersBtn = this.getMainToolbar().down('#offers');
      var pointsBtn = this.getMainToolbar().down('#points');

      var store = this.getStore('MoviesStore');
      var params = {
         brandId: loginStore.brandId
      };
      this.moviesStoreLoad(store, params);

      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');

      pointsBtn.enable();
      profileBtn.enable();
      locationsBtn.enable();
      offersBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();

   },

   moviesStoreLoad: function(store, params)
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
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     if (this.value == "fr")
                     {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (this.value == "en")
                     {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else
            {
               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.releaseDate != null)
                  {
                     response[i].data.releaseDate = new Date(response[i].data.releaseDate);
                     response[i].data.releaseDate.setHours(00);
                     response[i].data.releaseDate.setMinutes(00);
                     response[i].data.releaseDate.setSeconds(00);
                  }
               }
            }
         }
      });
   },

   addOffersPanel: function()
   {
      this.removeOldPanel();
      var offersPanel = Ext.create('BrandAdmin.view.offers.OffersPanel');
      //console.log(offersPanel);
      this.getMainCenterContainer().add(offersPanel);
      var offersBtn = this.getMainToolbar().down('#offers');
      offersBtn.disable();

      var brandId = this.getLoginStoreStore().data.items[0].data.brandId;

      //todo: after session implementation ,put above brandId here
      var params = {
         brandId: brandId
      };
      var store = this.getStore('OffersStore');
      this.loadOffersStore(store, params);


      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');

      var moviesBtn = this.getMainToolbar().down('#movies');
      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      var pointsBtn = this.getMainToolbar().down('#points');

      pointsBtn.enable();
      profileBtn.enable();
      locationsBtn.enable();

      // moviesBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();

      var brandStore = this.getStore('ProfileIdentityStore');
      /*  var busType = brandStore.data.items[0].data.busTypeId;
      if (busType != "BusType::5")
      {
         moviesBtn.hide();
      }*/
   },

   loadOffersStore: function(store, params)
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
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     if (this.value == "fr")
                     {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (this.value == "en")
                     {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else
            {
               var safariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
               if (safariBrowser)
               {
                  for (var k = 0; k < response.length; k++)
                  {
                     console.log(response[k].data);
                     if (response[k].data.validFrom != null)
                     {
                        response[k].data.validFrom = response[k].data.validFrom.toISOString();
                     }
                     if (response[k].data.validTo != null)
                     {
                        response[k].data.validTo = response[k].data.validTo.toISOString();
                     }
                  }
               }
               //console.log(response);
               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.validFrom != null)
                  {
                     response[i].data.validFrom = new Date(response[i].data.validFrom);
                     response[i].data.validFrom.setHours(00);
                     response[i].data.validFrom.setMinutes(00);
                     response[i].data.validFrom.setSeconds(00);
                  }
               }
               for (var j = 0; j < response.length; j++)
               {
                  if (response[j].data.validTo != null)
                  {
                     response[j].data.validTo = new Date(response[j].data.validTo);
                     response[j].data.validTo.setHours(00);
                     response[j].data.validTo.setMinutes(00);
                     response[j].data.validTo.setSeconds(00);
                  }
               }

               /*    for (var k = 0; k < response.length; k++)
               {
                  if (response[k].data.validTo != null)
                  {
                     var validDate = new Date();
                     if (response[k].data.validTo < validDate)
                     {
                        alert("abc");
                     }
                     // response[k].data.validTo = new Date(response[k].data.validTo);
                  }
                  
                  
                 
               }
               this.getOffersGrid().getView().refresh();*/
            }
         }
      });
   },

   addEventsPanel: function()
   {

      this.removeOldPanel();
      var eventsPanel = Ext.create('BrandAdmin.view.events.EventsPanel');
      //console.log(eventsPanel);
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
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     if (this.value == "fr")
                     {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (this.value == "en")
                     {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }

            } else
            {

               //console.log(response);
               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.date != null)
                  {
                     response[i].data.date = new Date(response[i].data.date);
                     response[i].data.date.setHours(00);
                     response[i].data.date.setMinutes(00);
                     response[i].data.date.setSeconds(00);

                  }
               }
            }
         }
      });

      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');
      var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      var pointsBtn = this.getMainToolbar().down('#points');
      var analyticsBtn = this.getMainToolbar().down('#analytics');

      pointsBtn.enable();
      profileBtn.enable();
      locationsBtn.enable();
      offersBtn.enable();
      //  moviesBtn.enable();
      //eventsBtn.enable();
      analyticsBtn.enable();


      var brandStore = this.getStore('ProfileIdentityStore');
      /* var busType = brandStore.data.items[0].data.busTypeId;
      if (busType != "BusType::5")
      {
         moviesBtn.hide();
      }*/
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
      var points = this.getMainToolbar().down('#points');
      profile.show();
      locations.show();
      offers.show();
      // movies.show();
      events.show();
      analytics.show();
      points.show();
   },

   onChangeLang: function()
   {
      var value = window.location.search.replace("?val=", "");
      // this.value = value;
      if (!value)
      {
         value = 'fr';
         Ux.locale.Manager.updateLocale(value);
         value = 'es';
         var url = Ext.util.Format.format("resources/locales/ext-lang-{0}.js", value);
         Ext.Loader.injectScriptElement(url, this.onSuccess, this.onFailure, this);
      } else
      {
         Ux.locale.Manager.updateLocale(value);
         if (value == 'fr')
         {
            value = 'es';
         }
         var url = Ext.util.Format.format("resources/locales/ext-lang-{0}.js", value);
         Ext.Loader.injectScriptElement(url, this.onSuccess, this.onFailure, this);
      }
      /* Ux.locale.Manager.updateLocale(value);
      if (value == 'fr')
      {
         value = 'es';
      }
      
      var url = Ext.util.Format.format("resources/locales/ext-lang-{0}.js", value);
      Ext.Loader.injectScriptElement(url, this.onSuccess, this.onFailure, this);*/
      /*
      var value = window.location.search.replace("?val=", "");
      if (!value) {
         value = 'es';
      }
      else if (value == 'fr') {
         value = 'es';
      }
      console.log(value);
      Ux.locale.Manager.updateLocale(value);
     */

   },
   /*DONT DELETE BELOW FUNCTION*/
   onSuccess: function()
   {
      console.log('dont delete');
   },

   onClickPoints: function()
   {

      this.removeOldPanel();
      var pointsPanel = Ext.create('BrandAdmin.view.points.PointsPanel');
      //console.log(locationsPanel);
      this.getMainCenterContainer().add(pointsPanel);
      var pointsBtn = this.getMainToolbar().down('#points');
      pointsBtn.disable();

      var offersBtn = this.getMainToolbar().down('#offers');
      var moviesBtn = this.getMainToolbar().down('#movies');
      var eventsBtn = this.getMainToolbar().down('#events');
      var analyticsBtn = this.getMainToolbar().down('#analytics');
      var profileBtn = this.getMainToolbar().down('#profile');
      var locationsBtn = this.getMainToolbar().down('#locations');

      profileBtn.enable();
      offersBtn.enable();
      // console.log(moviesBtn);
      //  moviesBtn.enable();
      eventsBtn.enable();
      analyticsBtn.enable();
      locationsBtn.enable();

      var brandStore = this.getStore('ProfileIdentityStore');
      /*  var busType = brandStore.data.items[0].data.busTypeId;
      if (busType != "BusType::5") {
         moviesBtn.hide();
      }*/
      var brandId = this.getLoginStoreStore().data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };
      var store = this.getStore('LocationsComboStore');
      this.loadLocGridStore(store, params);
   },
   
   onViewReadyMainStatusBar:function()
   {
      var statusBar = Ext.ComponentQuery.query('mainstatusbar');
      if (document.documentMode)
      {
         if (document.documentMode < 10)
         {
            statusBar[0].setText('Ready' + '<font style="margin-left:32em;" color="red">You are using older version of Internet Explorer.Some features may not work correctly.</font>');
         }
      } else
      {
         statusBar[0].setText('Ready');
      }
      
   },
   
   onHelp:function()
   {
      window.location = '../MovilMall.doc';
    
   }
});