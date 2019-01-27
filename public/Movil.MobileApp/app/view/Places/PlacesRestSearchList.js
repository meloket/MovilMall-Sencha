Ext.define('MobileApp.view.Places.PlacesRestSearchList', {
   extend: 'Ext.List',
   xtype: 'placesrestsearchlist',

   config: {
      title: 'Buscar Restaurantes',
      variableHeights: true,
      onItemDisclosure: true,
      syncRemovedRecords: true,
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
              itemId: 'placesRestSearchField',
              store: 'PlacesSearchByNameStore',
              placeHolder: 'Escribe aquí...',
              flex: 1
           }
         ]
      }], /*items: [{
         xtype: 'toolbar',
         docked: 'top',
         items: [
            {
               xtype: 'textfield',
               id: 'placesRestSearchField',
               placeHolder: 'Buscar...',
               flex: 1
            }
         ]
      }],*/
      store: 'PlacesRestSearchListStore',
      itemTpl: [
        '<div class="placeListTitle">{name}</div>'
         //DUE TO SEARCH ...NORMALLY IT LL CONTAIN ONLY NAME..LOCATION WILL BE ADDED WHILE SEARCHING ONLY...

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