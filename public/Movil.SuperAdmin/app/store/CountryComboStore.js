Ext.define('SuperAdmin.store.CountryComboStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.CountryComboModel',
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
               read: '../Country/GetCountries'
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