Ext.define('MobileApp.view.Offers.OffersNewNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'offersnewnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      defaultBackButtonText: '',
      autoDestroy: false,
      style: 'background:#ccc',
      navigationBar: {
         ui: 'light',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            align: 'left',
            id: 'newSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'offersnewdataview'
      }]
      
   }
});
