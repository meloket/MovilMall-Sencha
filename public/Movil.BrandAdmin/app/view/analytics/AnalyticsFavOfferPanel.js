Ext.define('BrandAdmin.view.analytics.AnalyticsFavOfferPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticsfavofferpanel',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   width: 1000,
   border: false,
   items: [{
      xtype: 'analyticsfavoffergrid',
      split: true,
      region: 'north',
      height: 950
   },
      {
         xtype: 'analyticsoffercommentspanel',
         //title: 'Comments',
         locales: {
            title: 'commenttitle.offers.title'
         },
         split: true,
         layout: 'fit',
         collapsed: true,
         collapsible: true,
         region: 'south',
         margins: '5 0 0 0',
         height: 200
      }]
});