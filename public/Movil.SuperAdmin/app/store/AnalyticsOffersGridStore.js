Ext.define('SuperAdmin.store.AnalyticsOffersGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.AnalyticsOffersGridModel',
   sorters: [{
      property: 'tagLine',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetAllOffers'
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
});