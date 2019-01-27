Ext.define('BrandAdmin.store.ProfileBusinessStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.ProfileBusinessModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
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
