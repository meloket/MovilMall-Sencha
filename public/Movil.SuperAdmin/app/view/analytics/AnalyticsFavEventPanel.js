Ext.define('SuperAdmin.view.analytics.AnalyticsFavEventPanel', {
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
         xtype: 'analyticseventscommentspanel',
         title: 'Comments',
         split: true,
         layout: 'fit',
         collapsed: true,
         collapsible: true,
         region: 'south',
         margins: '5 0 0 0',
         height: 200
      }]
});