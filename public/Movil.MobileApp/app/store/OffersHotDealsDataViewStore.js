Ext.define('MobileApp.store.OffersHotDealsDataViewStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
      /*sorters: [{
         property: 'likeCount',
         direction: 'DESC'
      }],*/
      //pageSize: 5,
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl()+'/GetOffers'
               },
            reader:
               {
                  type: 'json'
               },
            writer:
               {
                  type: 'json'
               }
         })
   }
});
   
