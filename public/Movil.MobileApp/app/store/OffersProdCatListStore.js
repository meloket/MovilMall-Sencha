Ext.define('MobileApp.store.OffersProdCatListStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.OffersProdCatListModel',
      sorters: [{
         property: 'likeCount',
         direction: 'DSC'
      },
         {
            property: 'name',
            direction: 'DSC'
         }],
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