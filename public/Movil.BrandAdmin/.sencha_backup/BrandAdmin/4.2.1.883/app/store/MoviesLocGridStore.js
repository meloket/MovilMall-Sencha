Ext.define('BrandAdmin.store.MoviesLocGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.MoviesLocGridModel',
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