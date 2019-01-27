Ext.define('MobileApp.store.OffersSearchByNameStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
   //   autoLoad: true,
      proxy:
         ({
            type: 'rest',
            idProperty: 'id',
            api:
               {
                 //    read: '../GetOffers'
                  read: MobileApp.util.Config.getBaseUrl() +'/GetOfferByName'
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