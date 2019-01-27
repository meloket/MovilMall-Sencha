Ext.define('MobileApp.view.Parking.ParkingPanel', {
   extend: 'Ext.Panel',
   xtype: 'parkingpanel',

   config: {

      cls: 'slide',
      width: '100%',
      items: [{
         xtype: 'parkingnavigationview',
         width: '100%'
      }]
   }
});