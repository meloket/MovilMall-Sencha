Ext.define('MobileApp.store.ParkingPhotoSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      autoLoad: true,
      model: 'MobileApp.model.ParkingPhotoSqlModel',
      proxy:
         {
            type: 'sql'
         }
   }
});