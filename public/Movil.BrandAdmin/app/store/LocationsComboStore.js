Ext.define('BrandAdmin.store.LocationsComboStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.MasterComboModel',
   sorters: [{
      property: 'location',
      direction: 'ASC'
   }],
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
         actionMethods:
            {
               read: 'POST'
            }
      })
});