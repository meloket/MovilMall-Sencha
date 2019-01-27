Ext.define('MobileApp.view.Settings.SettingsNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'settingsnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
        // navigationBar:false,
      navigationBar: {
         ui: 'light',
       /*  locales: {
            title: 'settings.profileView.title'
         },*/
         id: 'settingsNavBar',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            xtype: 'button',
            align: 'left',
            id: 'settingsSlideButton',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'settingslist'
      }]

   }
});
