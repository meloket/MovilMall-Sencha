Ext.define('MobileApp.view.Places.PlacesMainNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'placesmainnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         id: 'placesNavBar',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
               xtype:'button',
            align: 'left',
            id: 'placesSlideButton',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'placeslist'
      }]

   }
});
