Ext.define('MobileApp.store.PlacesRestFavListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.PlacesRestFavListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});