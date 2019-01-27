Ext.define('BrandAdmin.store.AnalyticsFavLocGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.AnalyticsFavLocGridModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../UserLocation/GetUsersByLoc'
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