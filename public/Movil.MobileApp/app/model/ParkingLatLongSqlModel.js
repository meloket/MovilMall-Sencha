Ext.define('MobileApp.model.ParkingLatLongSqlModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
          { name: 'id', type: 'string' },
          { name: 'lat', type: 'string' },
         { name: 'longi', type: 'string' }

      ]

   }
});