Ext.define('SuperAdmin.store.AnalyticsLocGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.AnalyticsLocGridModel',
   sorters: [{
      property: 'location',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetBrandLocations'
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