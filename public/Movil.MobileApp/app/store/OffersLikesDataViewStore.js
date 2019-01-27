Ext.define('MobileApp.store.OffersLikesDataViewStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
      sorters: [{
         property: 'likeCount',
         direction: 'ASC'
      }],
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl()+'/GetUserLikedOffers'
               },
            reader:
               {
                  type: 'json'
               },
            writer:
               {
                  type: 'json'
               },
            actionMethods: {
               read: 'POST'
            }
         })
   }
});
/*
   config: {
      fields: [
         'img', 'title', 'expireDate'
      ],
      data: [
          { img: './resources/images/gap.jpg', title: 'Aeropostle', expireDate: 'Ends Today' },
         { img: './resources/images/jump.jpg', title: 'Pool Game', expireDate: 'Limited Time' },
         { img: './resources/images/nef3.jpg', title: 'Red Mirchi', expireDate: 'Ends Friday' },
         { img: './resources/images/shoes4.jpg', title: 'Pepzee', expireDate: 'Ends Today' }


      ]
   }
});*/