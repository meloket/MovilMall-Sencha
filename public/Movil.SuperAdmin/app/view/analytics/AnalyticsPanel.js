Ext.define('SuperAdmin.view.analytics.AnalyticsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticspanel',
   cls: 'flatTabPanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },
   width: 950,
   /*  deferredRender: true,
  
     animCollapse: true,*/

   border: false,

   items: [{
      xtype: 'analyticstabpanel'
   }]
});