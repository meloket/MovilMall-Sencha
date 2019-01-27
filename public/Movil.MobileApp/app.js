/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
//function onDeviceReady()/ {




  //  }
Ext.Loader.setPath({
   //Ext: 'ext/src',
   MyApp: 'app',
   Ux: 'resources/Ux'
});

Ext.application({
   name: 'MobileApp',

   requires: [
      'Ext.MessageBox',
      'Ext.plugin.ListPaging',
      'Ext.tab.Panel',
      'Ext.carousel.Carousel',
      'Ext.Map',
      'Ext.Img',
      'Ext.Label',
      'Ext.field.Toggle',
      'Ext.field.DatePicker',
      'MobileApp.util.Config',
      'Ext.plugin.PullRefresh',
      'MobileApp.util.DataViewPullRefresh',
      'MobileApp.util.ListPullRefresh',
      'MobileApp.util.SearchCatPullRefresh',
      'Ux.locale.Manager',
      'Ux.locale.override.touch.Button',
      'Ux.locale.override.touch.Component',
      'Ux.locale.override.touch.form.FieldSet',
      'Ux.locale.override.touch.Container',
      'Ux.locale.override.touch.Label',
      'Ux.locale.override.touch.field.Field',
      'Ux.locale.override.touch.field.Checkbox',
      'Ux.locale.override.touch.List',
      'Ux.locale.override.touch.navigation.Bar',
      'Ux.locale.override.touch.plugin.PullRefresh',
      'Ux.locale.override.touch.MessageBox',
      'Ux.locale.override.touch.TitleBar',
      'MobileApp.util.LoadMore'
   ],
   
   controllers: ['MainController',
      'OffersController',
      'LoginController',
      'PlacesController',
      'MoviesController',
      'QRController',
      'EventsController',
      'ParkingController',
      'SettingsController',
      'StoresController'],
   icon: {
      '57': 'resources/icons/Icon.png',
      '72': 'resources/icons/Icon~ipad.png',
      '114': 'resources/icons/Icon@2x.png',
      '144': 'resources/icons/Icon~ipad@2x.png'
   },

   isIconPrecomposed: true,

   startupImage: {
      '320x460': 'resources/startup/320x460.jpg',
      '640x920': 'resources/startup/640x920.png',
      '768x1004': 'resources/startup/768x1004.png',
      '748x1024': 'resources/startup/748x1024.png',
      '1536x2008': 'resources/startup/1536x2008.png',
      '1496x2048': 'resources/startup/1496x2048.png'
   },

   launch: function()
   {
      document.addEventListener("offline", function () {
         alert("No internet connection");
      }, false);
      
      //document.addEventListener("deviceready", this.ondeviceready(), false);

  
      // Ext.fly('appLoadingIndicator').destroy();

      // Destroy the #appLoadingIndicator element
      Ext.fly('appLoadingIndicator').destroy();

      var loginSqlStore = Ext.getStore('LoginSqlStore');
      loginSqlStore.load();
      loginSqlStore.onAfter('load', function()
      {
         if (loginSqlStore.data.length != 0)
         {
            var language = loginSqlStore.data.items[0].data.lang;

            if (!language)
            {
               language = "fr";
            }
            Ux.locale.Manager.setConfig({
               ajaxConfig: {
                  method: 'GET'
               },

               //SET LANGUAGE AS SPANISH FIRST TIME WHILE LOADING APPLICATION 
               language: language,
               //HERE IT TAKES LANGUAGE FROM NAVIGATOR TO DEFAULT LANGUAGE.
               //language: navigator.language ? navigator.language.split('-')[0] : navigator.userLanguage.split('-')[0],
               tpl: 'resources/locales/{locale}.json',
               type: 'ajax'
            });

            Ux.locale.Manager.init();
            

           
            this.getApplication().getController('SettingsController').lang=language;
            this.getApplication().getController('SettingsController').setStore(language);
            var values = { email: loginSqlStore.data.items[0].data.email, pass: loginSqlStore.data.items[0].data.pass };
            this.getApplication().getController('LoginController').onSameUser(values);
         } else
         {
            
            Ux.locale.Manager.setConfig({
               ajaxConfig: {
                  method: 'GET'
               },

               //SET LANGUAGE AS SPANISH FIRST TIME WHILE LOADING APPLICATION 
               language: 'fr',
               //HERE IT TAKES LANGUAGE FROM NAVIGATOR TO DEFAULT LANGUAGE.
               //language: navigator.language ? navigator.language.split('-')[0] : navigator.userLanguage.split('-')[0],
               tpl: 'resources/locales/{locale}.json',
               type: 'ajax'
            });

            Ux.locale.Manager.init();
            

            this.getApplication().getController('SettingsController').lang = "fr";
            Ext.Viewport.add(Ext.create('MobileApp.view.LoginNavView'));
         }
      }, this);
   },
   /*ondeviceready: function () {

      setTimeout(function () {
         navigator.splashscreen.hide();
      }, 2000);
   },*/

   onUpdated: function()
   {
      Ext.Msg.confirm(
         "Application Update",
         "This application has just successfully been updated to the latest version. Reload now?",
         function(buttonId)
         {
            if (buttonId === 'yes')
            {
               window.location.reload();
            }
         }
      );
   }
});