Ext.define('MobileApp.store.PlacesStoresViewOffersStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
      sorters: [{
         property: 'likeCount',
         direction: 'DESC'
      }],
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/GetOfferByLocation'
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
  /* config: {
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
      data: [
         { img: './resources/images/Aero.jpg', tagLine: 'Aeropostle', validTo: 'Termina Hoy', likeCount: '1', commentCount: '1' },
         { img: './resources/images/gap.jpg', tagLine: 'GAP', validTo: 'Tiempo Limitado', likeCount: '14', commentCount: '14' },
         { img: './resources/images/gucci.jpg', tagLine: 'Gucci', validTo: 'Termina Mañana', likeCount: '15', commentCount: '1' }
      ]
   }
});*/