Ext.define('MobileApp.view.Offers.OffersSearchNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'offerssearchnavigationview',
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
            id: 'searchSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'offerssearchlist'
      }]

   }
});
