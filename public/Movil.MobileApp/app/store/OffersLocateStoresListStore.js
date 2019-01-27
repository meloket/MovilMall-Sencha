Ext.define('MobileApp.store.OffersLocateStoresListStore', {
   extend: 'Ext.data.Store',
   config: {
   model: 'MobileApp.model.OffersLocateStoresListModel',

   proxy:
       ({
          type: 'rest',
          api:
             {
                read: MobileApp.util.Config.getBaseUrl() + '/GetLocationsByOffer'
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
/*
   config: {
      fields: [
         'name', 'street', 'city', 'img'
      ],
      data: [
         { img: 'aeropostale.jpg', name: 'Aeropostale', street: 'Soho', city: 'London' },
         { img: 'aeropostale.jpg', name: 'Aeropostale', street: 'Covent Garden', city: 'Nevada' },
         { img: 'aeropostale.jpg', name: 'Aeropostale', street: 'Bloomsbury', city: 'Texas' },
         { img: 'aeropostale.jpg', name: 'Aeropostale', street: 'Cheopside', city: 'New York' }
      ]
   }
});*/