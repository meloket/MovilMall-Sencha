Ext.define('BrandAdmin.view.events.EventsTabPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'eventstabpanel',
   layout: 'fit',
   cls: 'flatTabPanel',
   width: 950,
 
   items: [{
      xtype: 'tabpanel',
      itemId: 'eventsTab',
      //activeTab: 0,
      border: false,
      tabBar: {
         items: [{
            xtype: 'tbfill'
         }, {
            xtype: 'button',
            action: 'back',
            cls: 'back-button-flat',
            glyph: '115@pictos',
            locales: {
               text: 'buttons.back',
               tooltip: 'back.tooltip'
            }
         }]
      },
      items: [{
         //title: "Event Info",
         //bodyPadding: 10,
         xtype: 'eventsinfopanel',
         itemId: 'eventsinfo',
         locales: {
            title: 'tabpanel.eventstab1title.title'
         }

      },  {
         xtype: 'eventsphotoform',
         locales: {
            title: 'tabpanel.eventstab3title.title'
         }
      },
      {
         //title: "Social Info",
         xtype: 'eventssocialinfoform',
         locales: {
            title: 'tabpanel.eventstab2title.title'
         }
      }]
   }]
});