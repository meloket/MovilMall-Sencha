Ext.define('BrandAdmin.store.CityComboStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.MasterComboModel',
    sorters: [{
       property: 'name',
       direction: 'ASC'
    }],

   proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               read: '../City/GetCities'
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