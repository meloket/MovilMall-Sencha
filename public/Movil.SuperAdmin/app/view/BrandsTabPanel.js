Ext.define('SuperAdmin.view.BrandsTabPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'brandstabpanel',
   cls: 'flatTabPanel',
   width: 800,
   layout: 'fit',
   border: false,
   items: [{
      xtype: 'tabpanel',
      activeTab: 0,
      tabBar: {
         items: [{
            xtype: 'tbfill'
         }, {
            xtype: 'button',
            action: 'back',
            cls: 'back-button-flat',
            tooltip: 'Back',
            text: 'Back',
            height:29,
            glyph: '115@pictos'
         }]
      },
      items: [{
         title: "Info",
         bodyPadding: 10,
         xtype: 'brandsinfoformpanel'
      }, {
         title: "Profile",
         xtype: 'brandsprofileform'
      }, {
         title: "Locations",
         xtype: 'brandlocgridpanel'
      }]
   }]
});