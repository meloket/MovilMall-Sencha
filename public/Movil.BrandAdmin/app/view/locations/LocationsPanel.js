Ext.define('BrandAdmin.view.locations.LocationsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'locationspanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },
   width: 900,
   border: true,

   items: [{
      xtype: 'locationsgridpanel'
   },
      {
         xtype: 'locationsdetailpanel'
      }]
});