Ext.define('SuperAdmin.view.analytics.AnalyticsTabPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticstabpanel',
   cls: 'flatgrid',
   layout: 'fit',
   width: 800,
   border: false,
   items: [{
      xtype: 'tabpanel',
      itemId:'analyticTabPanel',
      activeTab: 0,
      tabBar: {
         items: [{
            xtype: 'tbfill'
         }/*, {
            xtype: 'button',
           text: 'Export data to Excel'
          
         }*/]
      },
      items: [{
         title: "Locations",
         xtype: 'analyticslocpanel'
      },
      {
         title: "Offers",
         xtype: 'analyticsofferpanel'
      },
      {
         title: "Events",
         xtype: 'analyticseventspanel'
      }]
   }]
});