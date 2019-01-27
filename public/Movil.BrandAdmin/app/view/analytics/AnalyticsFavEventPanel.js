Ext.define('BrandAdmin.view.analytics.AnalyticsFavEventPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticsfaveventpanel',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   width: 1000,

   border: false,
   items: [{
      xtype: 'analyticsfaveventgrid',
      split: true,
      region: 'north',
      height: 950
   },
      {
        // xtype: 'analyticscommentspanel',
         //title: 'Comments',
         locales: {
            title: 'commenttitle.events.title'
         },
         split: true,
         collapsed: true,
         collapsible: true,
         region: 'south',
         height: 220
      }]
});