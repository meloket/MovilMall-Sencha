Ext.define('MobileApp.store.PlacesStoresSearchCatListStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.PlacesStoresSearchCatListModel',
     
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/UserLocation/GetLocByCategory'
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
               read: 'POST'
            }
         })
   }
});