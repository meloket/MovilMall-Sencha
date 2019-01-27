Ext.define('MobileApp.view.Offers.OffersFavNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'offersfavnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      style: 'background:#ccc',
      navigationBar: {
         ui: 'light',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            align: 'left',
            id: 'favSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'offersfavdataview'
      }]

   }
});
