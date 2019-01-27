Ext.define('MobileApp.store.EventsListStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.EventsListModel',
      proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               read: MobileApp.util.Config.getBaseUrl()+'/Event/GetEvents'
            },
         reader:
            {
               type: 'json'
            },
         writer:
            {
               type: 'json'

            }/*,
         actionMethods: {
            create: 'POST', read: 'POST', update: 'PUT', destroy: 'DELETE'
         }*/
      })


   }
});