Ext.define('MobileApp.store.PlacesEntertainmentListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.PlacesEntertainmentListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});