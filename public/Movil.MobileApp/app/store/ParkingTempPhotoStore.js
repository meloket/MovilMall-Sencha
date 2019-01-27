Ext.define('MobileApp.store.ParkingTempPhotoStore', {
   extend: 'Ext.data.Store',
   config: {
      fields: [
        'photo'
      ],
      data: [
         { photo: 'resources/images/parkingUser.png', type: 'auto' }
      ]
   }
});