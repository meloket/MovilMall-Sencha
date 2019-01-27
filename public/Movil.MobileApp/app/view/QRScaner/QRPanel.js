Ext.define('MobileApp.view.QRScaner.QRPanel', {
   extend: 'Ext.Panel',
   xtype: 'qrpanel',

   config: {

      cls: 'slide',
      width: '100%',
      items: [{
         xtype: 'qrscanernavigationview',
         width: '100%'
      }]
   }
});