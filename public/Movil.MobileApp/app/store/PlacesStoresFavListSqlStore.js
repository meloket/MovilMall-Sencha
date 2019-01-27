Ext.define('MobileApp.store.PlacesStoresFavListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.PlacesStoresFavListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});