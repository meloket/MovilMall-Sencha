Ext.define('MobileApp.store.LoginSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
       'Ext.data.proxy.Sql'
  ],

   config: {
      model: 'MobileApp.model.LoginModel',
       autoLoad: true,
      proxy:
      {
         type: 'sql'

      }


   }
});
