Ext.define('MobileApp.store.PlacesMallsCatListStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.PlacesRestNearByListModel',
      proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               read: MobileApp.util.Config.getBaseUrl() +'/GetBrandLocByMallId'
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