Ext.define('MobileApp.store.QRLocationsPointListStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.QRLocationsPointListModel',
      proxy:
      ({
         type: 'rest',
         api:
            {
               read: MobileApp.util.Config.getBaseUrl() + '/UserPoint/GetUserPoints'
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
            create: 'POST', read: 'POST', update: 'PUT', destroy: 'DELETE'
         }
      })


   }
});