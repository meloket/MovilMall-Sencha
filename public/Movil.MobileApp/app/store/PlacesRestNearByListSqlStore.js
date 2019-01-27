Ext.define('MobileApp.store.PlacesRestNearByListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.PlacesRestNearByListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});