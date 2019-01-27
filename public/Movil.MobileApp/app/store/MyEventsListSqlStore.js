Ext.define('MobileApp.store.MyEventsListSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.MyEventsListModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});