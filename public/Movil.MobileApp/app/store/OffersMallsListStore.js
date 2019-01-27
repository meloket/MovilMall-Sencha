Ext.define('MobileApp.store.OffersMallsListStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.PlacesRestNearByListModel',
      sorters: [{
         property: 'name',
         direction: 'ASC'
      }],
   proxy:
   ({
      type: 'rest',
      idProperty: 'id',
      api:
         {
            read: MobileApp.util.Config.getBaseUrl() + '/GetMallLocations'
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
  /* config: {
      fields: [
         'name', 'street', 'city','img'
      ],
      data: [
         { img: 'kc.jpg', name: 'Kingly Court', street: 'Soho', city: 'London' },
         { img: 'tnc.jpg', name: 'Thomas Neal Centre', street: 'Covent Garden', city: 'London' },
         { img: 'tb.jpg', name: 'The Brunswick', street: 'Bloomsbury', city: 'London' },
         { img: 'onc.jpg', name: 'One New Change', street: 'Cheopside', city: 'London' }
      ]
   }
});*/