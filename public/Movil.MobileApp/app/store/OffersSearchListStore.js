Ext.define('MobileApp.store.OffersSearchListStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'tagLineSp', 'tagLine', 'description', 'img', 'seqNo','lang'
      ],
      data: [
          { img: 'dealsNearBy.png', tagLineSp: 'Cercanos', tagLine: 'Near By', description: 'Search for latest offers and coupons near your current location.', seqNo: 1, lang: 'fr' },
         { img: 'prodAndCat.png', tagLineSp: 'Por Categoría', tagLine: 'By Categories', description: 'Find deals by browsing through various categories such as Apparel,Footwear.', seqNo: 2, lang: 'fr' },
         { img: 'malls.png', tagLineSp: 'Malls', tagLine: 'Malls', description: 'Check out deals and coupons on offer as stores inside malls.', seqNo: 3, lang: 'fr' },
         { img: 'entertainment.png', tagLineSp: 'Entretenimiento', tagLine: 'Entertainment', description: 'Find great deals and offers on cinemas,play parks etc.', seqNo: 5, lang: 'fr' },
         { img: 'services.png', tagLineSp: 'Servicio', tagLine: 'Service', description: 'Hungry?Be sure to check some coupons out before grabbing your meal.', seqNo: 4, lang: 'fr' },
         { img: 'favourite-dark.png', tagLineSp: 'Favoritas', tagLine: 'Favourites', description: 'Show offers which i have liked', seqNo: 6, lang: 'fr' }


      ]
   }
});

//DONT CHANGE SEQUENCE NUMBER...AS IT IS USED IN OFFERSCONTROLLER...