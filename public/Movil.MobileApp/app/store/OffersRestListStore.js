Ext.define('MobileApp.store.OffersRestListStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.OffersRestListModel',

      proxy:
         ({
            type: 'rest',
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
               read: 'POST'
            }
         })
   }
});