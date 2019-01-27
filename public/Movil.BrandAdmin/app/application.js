
Ext.Loader.setPath({
   //Ext: 'ext/src',
   MyApp: 'app',
   Ux: 'resources/Ux'
});
Ext.define('BrandAdmin.Application', {
   name: 'BrandAdmin',

   requires: [
      'Ext.data.proxy.Rest',
      'Ext.layout.container.Table',
      'Ext.grid.column.RowNumberer',
      'Ext.tab.Panel',
      'Ux.locale.Manager',
      'Ux.locale.override.extjs.Button',
      'Ux.locale.override.extjs.grid.grid',
      'Ux.locale.override.extjs.grid.column',
      'Ux.locale.override.extjs.form.field',
      'Ux.locale.override.st.field.Select',
      'Ux.locale.override.extjs.Panel',
      'Ux.locale.override.extjs.picker.date',
      'Ux.locale.override.extjs.form.label',
      'Ux.locale.override.extjs.Component',
      'Ux.locale.override.extjs.form.checkbox',
      'Ux.locale.override.extjs.MenuItem',
      'Ext.toolbar.Spacer',
      'Ext.form.Label',
      'BrandAdmin.classes.GridClass',
      'Ux.locale.override.extjs.FieldContainer',
        'BrandAdmin.util.Config'/*,
      'Ux.locale.override.extjs.grid.action'*/
   ],
   extend: 'Ext.app.Application',

   views: [
      // TODO: add views here
   ],

   controllers: [
      // TODO: add controllers here
      'BrandAdminMainController',
      'EventsController',
      'OffersController',
      'MoviesController',
      'ProfileController',
      'LocationsController',
      'AnalyticsController',
      'PointsController'
   ],

   stores: [
      // TODO: add stores here
   ],

   launch: function()
   {
      // Destroy the #appLoadingIndicator element

      Ux.locale.Manager.setConfig({
         ajaxConfig: {
            method: 'GET'
         },
         language: navigator.language ? navigator.language.split('-')[0] : navigator.userLanguage.split('-')[0],
         tpl: 'resources/locales/{locale}.json',
         type: 'ajax'
      });
      Ux.locale.Manager.init();
      // Ext.fly('appLoadingIndicator').destroy();
   }
});