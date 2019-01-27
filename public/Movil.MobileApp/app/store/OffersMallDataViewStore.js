Ext.define('MobileApp.store.OffersMallDataViewStore', {
   extend: 'Ext.data.Store',
   config: {
   model: 'MobileApp.model.OffersHotDealsDataViewModel',
   
   proxy:
       ({
          type: 'rest',
          api:
             {
                read: MobileApp.util.Config.getBaseUrl() + '/GetOfferByLocation'
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