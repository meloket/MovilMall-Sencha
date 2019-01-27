Ext.define('MobileApp.store.OffersEntertainDataViewStore', {
   extend: 'Ext.data.Store',
   config: {
   model: 'MobileApp.model.OffersHotDealsDataViewModel',
  
   proxy:
       ({
          type: 'rest',
          api:
             {
                read: MobileApp.util.Config.getBaseUrl() + '/GetOfferByBusType'
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
          { img: './resources/images/jump.jpg', title: 'Pool Games', expireDate: 'Ends Today' },
         { img: './resources/images/pool.jpg', title: 'Jumping Pad', expireDate: 'Limited Time' },
         { img: './resources/images/toys.jpg', title: 'Toys', expireDate: 'Ends Friday' },
         { img: './resources/images/ent.jpg', title: 'New Year Party', expireDate: 'Ends Today' }


      ]
   }
});*/