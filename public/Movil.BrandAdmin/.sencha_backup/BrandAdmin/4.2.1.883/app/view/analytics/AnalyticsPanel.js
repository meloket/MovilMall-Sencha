Ext.define('BrandAdmin.view.analytics.AnalyticsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticspanel',
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