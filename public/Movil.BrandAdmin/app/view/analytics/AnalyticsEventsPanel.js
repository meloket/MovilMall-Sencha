Ext.define('BrandAdmin.view.analytics.AnalyticsEventsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticseventspanel',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   width: 1000,

   border: true,
   items: [{
      xtype: 'analyticseventsgrid',
      split: true,
      region: 'west',
      flex: 1
   }, {
      xtype: 'analyticsfaveventpanel',
      split: true,
      region: 'center',
      flex: 1.2
   }]
});