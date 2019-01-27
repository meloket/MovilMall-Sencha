Ext.define('SuperAdmin.store.BrandsLocStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.BrandsLocModel',
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
           read: 'POST'
         }
      })
});