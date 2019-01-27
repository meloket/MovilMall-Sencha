Ext.define('MobileApp.model.ParkingPhotoSqlModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
          { name: 'id', type: 'string' },
          { name: 'photo', type: 'auto' }

      ]

   }
});