Ext.define('MobileApp.store.SignUpFormStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Rest'
   ],
   config: {
      model: 'MobileApp.model.SignUpFormModel',
     // autoLoad: true,
      proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               create: MobileApp.util.Config.getBaseUrl() + '/User/CreateUser'
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
