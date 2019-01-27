Ext.define('MobileApp.view.Places.PlacesStoresSearchList', {
   extend: 'Ext.List',
   xtype: 'placesstoressearchlist',

   config: {
      title: 'Buscar Tiendas',
      variableHeights: true,
      syncRemovedRecords: true,
      onItemDisclosure: true,
      items: [{
         xtype: 'toolbar',
         docked: 'top',
         cls: 'searchToolbarCls',
         layout: {
            type: 'hbox'
         },
         items: [
           {
              xtype: 'image',
              src: 'resources/icons/nw-icons/searchTop.png',
              //placeHolder:'Buscar...',
              flex: 0.18,
              height: '0.8em'
           }, {
              xtype: 'textfield',
              itemId: 'storesSearchField',
              store: 'PlacesSearchByNameStore',
              placeHolder: 'Escribe aquí...',
              flex: 1
           }
         ]
      }],
     /* items: [{
         xtype: 'toolbar',
         docked: 'top',
         items: [
            {
               xtype: 'textfield',
               id: 'placesSearchField',
               placeHolder: 'Buscar...',
               flex: 1
            }
         ]
      }],*/
      store: 'PlacesStoresSearchListStore',
      itemTpl: [
         
      '<div class="placeListTitle">{name}</div>'
        
      ].join(''),

      listeners: {
         initialize: function (comp, eOpts) {
            comp.bodyElement.on(
               'swipe',
               function (event, node, options, eOpts) {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );
         }
      }
   }
});