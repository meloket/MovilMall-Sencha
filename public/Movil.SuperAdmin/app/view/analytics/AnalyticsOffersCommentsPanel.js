Ext.define('SuperAdmin.view.analytics.AnalyticsOffersCommentsPanel', {
   extend: 'Ext.panel.Panel',
   cls: 'flatTabPanel',
   xtype: 'analyticsofferscommentspanel',
   cls: 'flatgrid',
   items:[{
      xtype: 'analyticsofferscommentsdataview'
   }]
});