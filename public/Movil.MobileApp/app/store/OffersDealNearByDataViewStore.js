Ext.define('MobileApp.store.OffersDealNearByDataViewStore', {
   extend: 'Ext.data.Store',

  /* config: {
      fields: [
         'img', 'title', 'expireDate'
      ],
      data: [
         { img: './resources/images/Aero.jpg', title: 'Tommy', expireDate: 'Ends Monday' },
         { img: './resources/images/Gucci.jpg', title: 'Gucci', expireDate: 'Ends Friday' },
         { img: './resources/images/Pape.jpg', title: 'Pepe', expireDate: 'Ends Tomorrow' },
         { img: './resources/images/gap.jpg', title: 'DOGO', expireDate: 'Ends Today' }

      ]
   }
});*/
   config: {
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
      //pageSize: 5,
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/GetNewOffers'
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