Ext.define('MobileApp.view.Places.PlacesRestFavNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesrestfavnavigationview',
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
            id: 'placesRestFavBackBut',
            iconCls: 'back',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placesrestfavlist'
      }]

   }
});
