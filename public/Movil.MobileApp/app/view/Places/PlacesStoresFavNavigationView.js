Ext.define('MobileApp.view.Places.PlacesStoresFavNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesstoresfavnavigationview',
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
            id: 'placesStoresFavSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placesstoresfavlist'
      }]

   }
});
