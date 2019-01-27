Ext.define('MobileApp.view.Events.EventsCommentsContainer', {
   extend: 'Ext.Container',
   xtype: 'eventscommentscontainer',
   requires: [
   'Ext.TitleBar'
   ],
   config: {
      fullscreen: true,
      layout: 'hbox',

      items: [{
         xtype: 'eventcommentoverlayview',
         width: '80%'

      }]
   }
});
