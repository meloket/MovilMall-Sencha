Ext.define('MobileApp.store.PlacesRestSearchListStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.PlacesRestNearByListModel',
      sorters: [{
         property: 'name',
         direction: 'DSC'
      }],
      proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               read: MobileApp.util.Config.getBaseUrl() + '/GetCategoryByBusTypeId'
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