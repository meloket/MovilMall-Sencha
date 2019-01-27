Ext.define('BrandAdmin.store.LocationsStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.LocationsModel',
   sorters: [{
      property: 'location',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetBrandLocationByBrand',
               create:'/CreateBrandLocation',
               update: '../UpdateBrandLocation',
               destroy: '../DeleteBrandLoc'/*,
                 create: '../CreateMovie',
         */
            },
         reader:
            {
               type: 'json'
            },
         writer:
            {
               type: 'json'
            },
         actionMethods:
            {
               read: 'POST',
               create:'POST',
               update: 'PUT',
               destroy:'DELETE'
            }
      })
});