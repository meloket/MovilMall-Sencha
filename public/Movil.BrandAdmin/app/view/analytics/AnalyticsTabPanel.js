Ext.define('BrandAdmin.view.analytics.AnalyticsTabPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticstabpanel',
   layout: 'fit',
   cls:'flatTabPanel',
   width: 800,
   items: [{
      xtype: 'tabpanel',
      itemId: 'analyticTabPanel',
      activeTab: 0,
      tabBar: {
         items: [{
            xtype: 'tbfill'
         }/*, {
            xtype: 'button',
            //text: 'Export data to Excel',
            locales: {
               text: 'buttons.exportToexcel'
            }

         }*/]
      },
      items: [{
         //title: "Locations",
         xtype: 'analyticslocpanel',
         locales: {
            title: 'tabpanel.analyticsloc.title'
         }
      },
      {
         //title: "Offers",
         xtype: 'analyticsofferpanel',
         locales: {
            title: 'tabpanel.analyticsoffer.title'
         }
      },
      {
         //title: "Events",
         xtype: 'analyticseventspanel',
         locales: {
            title: 'tabpanel.analyticsevents.title'
         }
      }]
   }]
});