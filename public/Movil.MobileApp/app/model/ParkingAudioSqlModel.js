Ext.define('MobileApp.model.ParkingAudioSqlModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
          { name: 'id', type: 'string' },
          { name: 'recording', type: 'string' }

      ]

   }
});