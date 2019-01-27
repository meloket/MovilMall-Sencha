Ext.define('MobileApp.view.Offers.OffersRestList', {
   extend: 'Ext.List',
   xtype: 'offersrestlist',

   config: {
      title: 'Restaurantes',
      /*cls: 'x-contacts',*/
      variableHeights: true,
      onItemDisclosure: true,
      store: 'OffersRestListStore',
      itemTpl: [
'<div class="placeListTitle">{name}</div>'
      ].join('')
   }
});
