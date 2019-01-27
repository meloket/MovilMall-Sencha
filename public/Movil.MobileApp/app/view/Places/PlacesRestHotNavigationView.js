Ext.define('MobileApp.view.Places.PlacesRestHotNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesresthotnavigationview',
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
            id: 'placesRestHotBackBut',
            iconCls: 'back',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placesresthotlist'
      }]

   }
});
