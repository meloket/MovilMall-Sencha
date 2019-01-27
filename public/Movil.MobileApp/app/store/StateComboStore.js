Ext.define('MobileApp.store.StateComboStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.StateComboModel',
      sorters: [{
         property: 'name',
         direction: 'ASC'
      }],
      autoLoad: true,
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/State/getStates'
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
   }
});