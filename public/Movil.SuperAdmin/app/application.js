Ext.Loader.setConfig({
   enabled: true
});

Ext.Loader.setPath('Ext.ux', 'ext/src/ux');

Ext.define('SuperAdmin.Application', {
    name: 'SuperAdmin',

    extend: 'Ext.app.Application',

   requires: [
      'Ext.data.proxy.Rest',
      'Ext.layout.container.Table',
      'Ext.grid.column.RowNumberer',
      'Ext.tab.Panel',
      'SuperAdmin.util.Config'
   ],

    controllers: [
        // TODO: add controllers here
      
    'SuperAdminMainController',
       'BrandsController',
       'BusinessTypesController',
       'MoviesController',
       'AnalyticsController',
       'CountriesController',
       'StatesController',
       'CitiesController'
    ],

    stores: [
        // TODO: add stores here
    ]
});
