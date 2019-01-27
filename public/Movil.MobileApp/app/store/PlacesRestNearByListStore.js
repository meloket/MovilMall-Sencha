Ext.define('MobileApp.store.PlacesRestNearByListStore', {
   extend: 'Ext.data.Store',

   config: {
     /* fields: [
         'name', 'street', 'city', 'img'
      ],
      data: [
        { img: 'bur.jpg', name: 'Zomato', street: 'Baker Streer', city: 'London' },
         { img: 'nef1.jpg', name: 'Hungry', street: 'Philip Street', city: 'London' },
         { img: 'nef2.jpg', name: 'Red Mirchi', street: 'Walking Street', city: 'London' },
         { img: 'nef3.jpg', name: 'Greenland', street: 'B Street', city: 'London' },
         { img: 'nef4.jpg', name: 'Street Food', street: 'C Road', city: 'London' }
      ]*/

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