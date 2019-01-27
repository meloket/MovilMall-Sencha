Ext.define('MobileApp.view.Places.PlacesStoresNearByNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesstoresnearbynavigationview',
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
            id: 'placesStoresNBSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placesstoreslist'
      }]

   }
});
