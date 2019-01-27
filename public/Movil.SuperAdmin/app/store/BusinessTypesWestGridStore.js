Ext.define('SuperAdmin.store.BusinessTypesWestGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.BusinessTypesWestGridModel',

   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetBusinessTypes'
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
