Ext.define('MobileApp.store.PlacesStoresFavListStore', {
   extend: 'Ext.data.Store',
/*
   config: {
      fields: [
         'name', 'street', 'city', 'img'
      ],
      data: [
         { img: 'woodland.jpg', name: 'Woodland', street: 'Baker Streer', city: 'London' },
         { img: 'spykar.jpg', name: 'Spykar Jeans', street: 'Walking Street', city: 'London' }
      ]

   }
});*/
   config: {
      model: 'MobileApp.model.PlacesStoresFavListModel',
      
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/UserLocation/GetFavLocationsByBusType'
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