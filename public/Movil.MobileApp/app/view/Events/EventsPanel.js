Ext.define('MobileApp.view.Events.EventsPanel', {
   extend: 'Ext.Panel',
   xtype: 'moviespanel',

   config: {

      cls: 'slide',
      width: '100%',
      items: [{
         xtype: 'eventsnavigationview',
         width: '100%'
      }]
   }
});