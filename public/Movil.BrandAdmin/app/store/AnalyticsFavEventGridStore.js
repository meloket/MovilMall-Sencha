Ext.define('BrandAdmin.store.AnalyticsFavEventGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.AnalyticsFavEventGridModel',
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