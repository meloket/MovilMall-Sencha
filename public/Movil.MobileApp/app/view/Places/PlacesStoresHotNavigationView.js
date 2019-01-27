Ext.define('MobileApp.view.Places.PlacesStoresHotNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesstoreshotnavigationview',
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
            id: 'placesStoresHotSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placesstoreshotlist'
      }]

   }
});
