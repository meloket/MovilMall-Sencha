Ext.define('MobileApp.store.OffersRestDataViewStore', {
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
                  read: MobileApp.util.Config.getBaseUrl() + '/GetOfferByCategory'
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
          { img: './resources/images/bur.jpg', title: 'Zomato', expireDate: 'Ends Today' },
         { img: './resources/images/nef2.jpg', title: 'Hungry', expireDate: 'Limited Time' },
         { img: './resources/images/nef3.jpg', title: 'Red Mirchi', expireDate: 'Ends Friday' },
         { img: './resources/images/nef4.jpg', title: 'Greenland', expireDate: 'Ends Tomorrow' },
         { img: './resources/images/nef2.jpg', title: 'Highway Food', expireDate: 'Ends Monday' },
         { img: './resources/images/nef3.jpg', title: 'Street Food', expireDate: 'Ends Today' }

      ]
   }
});*/