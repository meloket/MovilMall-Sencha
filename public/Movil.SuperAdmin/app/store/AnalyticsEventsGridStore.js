Ext.define('SuperAdmin.store.AnalyticsEventsGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.AnalyticsEventsGridModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../Event/GetAllEvents'
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