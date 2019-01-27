Ext.define('SuperAdmin.store.AnalyticsEventsCommentsStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.AnalyticsEventsCommentsModel',
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../UserEvent/GetCommentsByEvent'
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