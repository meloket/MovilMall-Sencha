Ext.define('MobileApp.store.OffersProdCatDataViewStore', {
   extend: 'Ext.data.Store',

   config: {
     /* fields: [
         'img', 'title', 'expireDate'
      ],
      data: [
          { img: './resources/images/shoes1.jpg', title: 'Woodland', expireDate: 'Ends Today' },
         { img: './resources/images/shoes2.jpg', title: 'Nike', expireDate: 'Limited Time' },
         { img: './resources/images/shoes3.jpg', title: 'pepzee', expireDate: 'Ends Friday' },
         { img: './resources/images/shoes4.jpg', title: 'tennis', expireDate: 'Limited Time' },


      ]*/
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
      /*sorters: [{
         property: 'likeCount',
         direction: 'DSC'
      }],*/
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
               read:'POST'
            }
         })
   }
   
});