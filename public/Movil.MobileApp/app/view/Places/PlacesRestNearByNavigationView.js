Ext.define('MobileApp.view.Places.PlacesRestNearByNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesrestnearbynavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
               align: 'left',
               id: 'placesRestNearByBackBut',
               //text: 'Back',
               //ui: 'back'
               iconCls: 'back',
               ui: 'plain'
            }
         ]
      },
      items: [
         {
            xtype: 'placesrestnearbylist'
         }]
   }
});