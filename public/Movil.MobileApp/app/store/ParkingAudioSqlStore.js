Ext.define('MobileApp.store.ParkingAudioSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
     'Ext.data.proxy.Sql'
   ],
   config: {
      autoLoad: true,
      model: 'MobileApp.model.ParkingAudioSqlModel',
      proxy:
         {
            type: 'sql'
         }
     
   }
});