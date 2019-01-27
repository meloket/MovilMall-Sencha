Ext.define('BrandAdmin.store.StateComboStore', {
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