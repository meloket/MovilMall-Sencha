Ext.define('BrandAdmin.view.locations.LocationsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'locationspanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },
   width: 800,
   border: false,

   items: [{
      xtype: 'locationsgrid'
   },
      {
         xtype: 'locationsdetailpanel'
      }]
});