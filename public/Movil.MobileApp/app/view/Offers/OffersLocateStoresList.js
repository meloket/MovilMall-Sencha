Ext.define('MobileApp.view.Offers.OffersLocateStoresList', {
   extend: 'Ext.Container',
   xtype: 'offerslocatestoreslist',
   config: {
      title: 'Selecciona la tienda',
      items: [{
         xtype: 'map',
         //height: '200px',
         margin: '2 0 0 0',
         draggable: false,
         cls: 'offersMapContainer',
         itemId: 'map'
      }]
   }
   /* config: {
      title: 'Localizar Tienda',
      cls: 'placesList',
      variableHeights: true,
      scrollToTopOnRefresh: false,
      store: 'OffersLocateStoresListStore',
      itemTpl: [
         '<div class="placeBlock">' +
           '<div class="placeImage"> <img src="{img}"</img></div>',
             '<div class="placeDetails">' +
            '<p class="placeTitle">{location}</p>' +
             '<p class="placeLocation">{location} , {city}</p>' +
            '</div>' +
            '</div>'
         
      ].join('')
   }*/
});
