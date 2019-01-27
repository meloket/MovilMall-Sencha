Ext.define('MobileApp.store.PlacesMallsListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.PlacesMallsListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});