Ext.define('BrandAdmin.store.ProfileIdentityStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.ProfileIdentityModel',
   autoLoad:true,
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../Brand/GetBrandProfile',
               update: '../Brand/UpdateBrand'/*,
               destroy: '../Brand/DeleteBrand'*/
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
            read: 'GET',
            update:'PUT'
         }
      })
});
