Ext.define('MobileApp.view.Movies.StoresNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'storesnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         id: 'moviesNavBar',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            xtype: 'button',
            align: 'left',
            id: 'moviesSlideButton',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         //xtype: 'movieslist'
      }]

   }
});
