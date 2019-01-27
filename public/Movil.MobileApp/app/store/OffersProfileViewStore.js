Ext.define('MobileApp.store.OffersProfileViewStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'img', 'title', 'expireDate'
      ],
      data: [
        /*  { img: './resources/images/Aero.jpg', title: 'Aeropostle', expireDate: 'Ends Today' },
         { img: './resources/images/Aero.jpg', title: 'Aeropostle', expireDate: 'Ends Today' }*/


      ]
   }
});