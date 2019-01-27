Ext.define('MobileApp.store.PlacesEntertainmentListStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.PlacesEntertainmentListModel',
      sorters: [{
         property: 'name',
         direction: 'ASC'
      }],
      //autoLoad: true,
      proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               read: MobileApp.util.Config.getBaseUrl() +'/GetMallLocations'
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