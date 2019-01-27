Ext.define('MobileApp.store.PlacesRestHotListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.PlacesRestHotListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});