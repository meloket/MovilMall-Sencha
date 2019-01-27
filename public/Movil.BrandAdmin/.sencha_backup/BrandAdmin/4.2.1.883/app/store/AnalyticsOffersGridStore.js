Ext.define('BrandAdmin.store.AnalyticsOffersGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.AnalyticsOffersGridModel',
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetOfferByBrand'
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
});