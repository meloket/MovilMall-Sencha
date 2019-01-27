Ext.define('MobileApp.view.Places.PlacesList', {
   extend: 'Ext.List',
   xtype: 'placeslist',

   config: {
      title: 'Lugares',
      /*cls: 'x-contacts',*/
      variableHeights: true,
      onItemDisclosure: true,
      store: 'PlacesListStore',
      itemTpl: new Ext.XTemplate(
           '<tpl if="lang==\'en\'">' +
          '<div class="placeListTitle">{nameEn}</div>' +
            '</tpl>' +
                '<tpl if="lang==\'fr\'">' +
          '<div class="placeListTitle">{nameSp}</div>' +
            '</tpl>'
    ),

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
         
         comp.bodyElement.on(
            'tap',
            function (event, node, options, eOpts) {

               /*send event as a argument to get direction of swipe*/
               this.fireEvent('tap', event);
            },
            comp
         );
      }
      
   }
   }
});
