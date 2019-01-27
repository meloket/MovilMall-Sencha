Ext.define('MobileApp.store.ParkingNoteSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      autoLoad: true,
      model: 'MobileApp.model.ParkingNoteSqlModel',
      proxy:
         {
            type: 'sql'
         }
   }
});