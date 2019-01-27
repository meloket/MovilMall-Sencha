Ext.define('SuperAdmin.store.BrandsGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.BrandsGridModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../Brand/GetBrands',
               update: '../Brand/UpdateBrand',
               destroy: '../Brand/DeleteBrand'
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