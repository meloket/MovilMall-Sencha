Ext.define('MobileApp.view.Events.EventsTabPanel', {
   extend: 'Ext.tab.Panel',
   xtype: 'eventstabpanel',

   config: {
      tabBarPosition: 'bottom',
      ui: 'light',
      title: 'Eventos',
      cls: 'eventsTabPanel',
      items: [ {

         xtype: 'eventslist',
         title: 'Eventos'
         //locales: {
         //   title: 'events.tabPanel.events.title'
         //}
      },{

         xtype: 'myeventslist',
         itemId:'myEventsTab',
         title: 'Mis Eventos'

      }]
   }
});