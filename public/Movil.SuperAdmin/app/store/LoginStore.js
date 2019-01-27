Ext.define('SuperAdmin.store.LoginStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.LoginModel',
   autoLoad: true,
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '/GetUser'
            },
         reader:
            {
               type: 'json'
            },
         writer:
            {
               type: 'json'
            }
      })/*,
   listeners: {
      beforeload: function (store) {
         var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
         myMask.show();
      },
      dataChanged: function (store) {
         var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
         myMask.hide();
      }
   }*/
});

