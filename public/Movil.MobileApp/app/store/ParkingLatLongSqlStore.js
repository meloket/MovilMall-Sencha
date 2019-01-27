Ext.define('MobileApp.store.ParkingLatLongSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      autoLoad: true,
      model: 'MobileApp.model.ParkingLatLongSqlModel',
      proxy:
         {
            type: 'sql'
         }
   }
});