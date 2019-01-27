Ext.define('MobileApp.store.SlideListStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'titleSp',
         'titleEn',
         'img',
         'lang'
      ],
      data: [
         //{ img: 'user.jpg', title: 'Karina Lopez' },
         { img: 'offers.png', titleSp: 'Ofertas', titleEn: 'Offers', lang: 'fr' },
        // { img: 'dealsNearBy1.png', titleSp: 'Lugares', titleEn: 'Places', lang: 'fr' },
      //   { img: 'store.png', titleSp: 'Tiendas', titleEn: 'Stores', lang: 'fr' },
         { img: 'events.png', titleSp: 'Eventos', titleEn: 'Events', lang: 'fr' },
         { img: 'qrcode.png', titleSp: 'Escáner', titleEn: 'Scanner', lang: 'fr' },
         { img: 'parking.png', titleSp: 'Parqueo', titleEn: 'Parking', lang: 'fr' }
      ]
   }
});