Ext.define('BrandAdmin.store.ProfileBusinessStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.ProfileBusinessModel',

   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetBusinessTypes'/*,
               update: '../Brand/UpdateBrand',
               destroy: '../Brand/DeleteBrand'*/
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
