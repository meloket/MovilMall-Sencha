Ext.define('MobileApp.view.QRScaner.QRScanerNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'qrscanernavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         id: 'eventsNavBar',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            xtype: 'button',
            align: 'left',
            id: 'qrScanerSlideButton',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'qrscanertabpanel'
      }]

   }
});
