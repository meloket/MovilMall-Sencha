Ext.define('SuperAdmin.store.StateComboStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.StateComboModel',
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
               read: '../State/GetStates'
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