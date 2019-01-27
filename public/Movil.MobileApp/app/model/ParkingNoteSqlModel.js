Ext.define('MobileApp.model.ParkingNoteSqlModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
          { name: 'id', type: 'string' },
          { name: 'direction', type: 'string' }

      ]

   }
});