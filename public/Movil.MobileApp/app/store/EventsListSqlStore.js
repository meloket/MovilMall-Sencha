Ext.define('MobileApp.store.EventsListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      autoLoad:true,
      model: 'MobileApp.model.EventsListModel',
      proxy:
         {
            type: 'sql'
         }
   }
});