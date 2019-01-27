Ext.define('MobileApp.view.Events.EventsNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'eventsnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         id: 'eventsNavBar',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            xtype: 'button',
            align: 'left',
            id: 'eventsSlideButton',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'eventstabpanel'
      }]

   }
});
