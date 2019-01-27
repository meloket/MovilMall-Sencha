Ext.define('MobileApp.store.OffersNewDataViewStore', {
   extend: 'Ext.data.Store',
  
   config: {
      sorters: [{
         property: 'createdAt',
         direction: 'ASC'
      }],
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
               read:'POST'
            }
         })
   }
});
