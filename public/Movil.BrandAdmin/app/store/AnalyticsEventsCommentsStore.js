Ext.define('BrandAdmin.store.AnalyticsEventsCommentsStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.AnalyticsEventsCommentsModel',
   proxy:
      ({
         type: 'rest',
         api:
            {
               //read: '../GetCommentsByEvent'
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