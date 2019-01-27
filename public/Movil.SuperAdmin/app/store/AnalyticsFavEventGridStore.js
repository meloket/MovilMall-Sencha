Ext.define('SuperAdmin.store.AnalyticsFavEventGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.AnalyticsFavEventGridModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../Event/GetUsersByEvent'
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