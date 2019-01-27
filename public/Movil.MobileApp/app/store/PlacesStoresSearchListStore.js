Ext.define('MobileApp.store.PlacesStoresSearchListStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.PlacesStoresSearchListModel',
      sorters: [{
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
               read:'POST'
            }
         })
   }
});
      /*fields: [
         'title'
      ],
      data: [
          { title: 'Footwear' },
         { title: 'Apparel' },
         { title: 'Home Decor' },
         { title: 'Electronics' },
         { title: 'Medical Stores' },
         { title: 'Provision Stores' },
         { title: 'Furniture' }

      ]*/
      
  