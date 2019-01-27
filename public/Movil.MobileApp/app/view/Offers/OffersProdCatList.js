Ext.define('MobileApp.view.Offers.OffersProdCatList', {
   extend: 'Ext.List',
   xtype: 'offersprodcatlist',

   config: {
      title: '',
      /*cls: 'x-contacts',*/
      variableHeights: true,
      onItemDisclosure: true,
      store: 'OffersProdCatListStore',
      itemTpl: [
         '<div class="placeListTitle">{name}</div>'
      ].join(''),
      listeners: {
         initialize: function(comp, eOpts)
         {
            comp.bodyElement.on(
               'painted',
               function(event, node, options, eOpts)
               {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('painted', event);
               },
               comp
            );
         }
      }
   }
});