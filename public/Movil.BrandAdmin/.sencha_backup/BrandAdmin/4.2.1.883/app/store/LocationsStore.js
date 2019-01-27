Ext.define('BrandAdmin.store.LocationsStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.LocationsModel',
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetBrandLocationByBrand',
               create:'/CreateBrandLocation',
               update: '../UpdateBrandLocation'/*,
                 create: '../CreateMovie',
                 destroy: '../DeleteMovie'*/
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
               update:'PUT'
            }
      })
});