Ext.define('MobileApp.view.Parking.ParkingNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'parkingnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         id: 'parkingNavBar',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            xtype: 'button',
            align: 'left',
            id: 'parkingSlideButton',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'parkingcontainer'
      }]

   }
});
