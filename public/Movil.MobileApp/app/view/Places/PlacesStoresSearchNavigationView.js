Ext.define('MobileApp.view.Places.PlacesStoresSearchNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesstoressearchnavigationview',
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
            id: 'placesStoresSearchSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placesstoressearchlist'
      }]

   }
});
