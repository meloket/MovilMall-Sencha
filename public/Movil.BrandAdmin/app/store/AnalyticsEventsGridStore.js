Ext.define('BrandAdmin.store.AnalyticsEventsGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.AnalyticsEventsGridModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../Event/GetEventsByBrand'
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