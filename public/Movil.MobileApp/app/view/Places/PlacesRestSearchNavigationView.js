Ext.define('MobileApp.view.Places.PlacesRestSearchNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesrestsearchnavigationview',
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
            id: 'placesRestSearchBackBut',
            iconCls: 'back',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placesrestsearchlist'
      }]

   }
});
