Ext.define('MobileApp.store.PlacesStoresListStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.PlacesRestNearByListModel',
      proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               read: MobileApp.util.Config.getBaseUrl() + '/UserLocation/GetNearByLocations'
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