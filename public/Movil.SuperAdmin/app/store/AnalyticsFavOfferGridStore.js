Ext.define('SuperAdmin.store.AnalyticsFavOfferGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.AnalyticsFavOfferGridModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetUsersByOffer'
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