Ext.define('BrandAdmin.store.AnalyticsFavOfferGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.AnalyticsFavOfferGridModel',
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetUsersByOffer'
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
});