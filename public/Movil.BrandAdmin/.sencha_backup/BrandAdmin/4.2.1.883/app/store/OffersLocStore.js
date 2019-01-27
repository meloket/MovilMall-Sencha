Ext.define('BrandAdmin.store.OffersLocStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.OffersLocModel',
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