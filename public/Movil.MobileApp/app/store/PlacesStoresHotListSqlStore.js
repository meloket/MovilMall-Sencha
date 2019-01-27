Ext.define('MobileApp.store.PlacesStoresHotListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.PlacesStoresHotListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});