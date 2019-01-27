Ext.define('BrandAdmin.view.events.EventsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'eventspanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },

   border: false,

   items: [{
      xtype: 'eventsgrid'
   },
      {
         xtype: 'eventstabpanel'
      }]
});