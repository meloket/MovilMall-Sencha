Ext.define('MobileApp.view.QRScaner.QRScanView', {
   extend: 'Ext.Panel',
   xtype: 'qrscanview',

   config: {
      items: [{
         xtype: 'button',
         cls: 'flat-button',
         itemId: 'scanCode',
         margin: '11em 5.2em 10em 5.2em',
         height: '2em',
         locales: {
            text: 'buttons.ScanQRcode'
         }
      }]
   }
});