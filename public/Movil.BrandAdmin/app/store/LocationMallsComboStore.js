Ext.define('BrandAdmin.store.LocationMallsComboStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.LocationMallsComboModel',
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetMallLocations'
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