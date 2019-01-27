Ext.define('BrandAdmin.store.AnalyticsLocGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.AnalyticsLocGridModel',
   sorters: [{
      property: 'location',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetBrandLocationByBrand'
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