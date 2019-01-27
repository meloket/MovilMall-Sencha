Ext.define('BrandAdmin.view.analytics.AnalyticsOfferPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticsofferpanel',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   width: 1000,

   border: true,
   items: [{
      xtype: 'analyticsoffersgrid',
      split: true,
      region: 'west',
      flex: 1
   }, {
      xtype: 'analyticsfavofferpanel',
      split: true,
      region: 'center',
      flex: 1.2
   }]
});