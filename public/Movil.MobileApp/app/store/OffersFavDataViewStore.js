Ext.define('MobileApp.store.OffersFavDataViewStore', {
   extend: 'Ext.data.Store',
   config: {
  model: 'MobileApp.model.OffersHotDealsDataViewModel',

   proxy:
       ({
          type: 'rest',
          api:
             {
                read: MobileApp.util.Config.getBaseUrl() + '/GetUserLikedOffers'

             },
          reader:
             {
                type: 'json'
             },
          writer:
             {
                type: 'json'
             },
          actionMethods:
             {
                read:'POST'
             }
       })
}
});