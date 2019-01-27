Ext.define('BrandAdmin.view.events.EventsTabPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'eventstabpanel',
   layout: 'fit',
   width: 800,
   items: [{
      xtype: 'tabpanel',
      activeTab: 0,
      tabBar: {
         items: [{
            xtype: 'tbfill'
         }, {
            xtype: 'button',
            action: 'back',
            tooltip: 'Back',
            text: 'Back',
            glyph: '115@pictos'
         }]
      },
      items: [{
         title: "Event Info",
         //bodyPadding: 10,
         xtype: 'eventsinfopanel',
         itemId: 'eventsinfo'

      }, {
         title: "Social Info",
         xtype: 'eventssocialinfoform'
      }]
   }]
});