Ext.define('SuperAdmin.view.BrandsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'brandspanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },
   border: false,

   items: [{
      xtype: 'brandsgrid'
   },
      {
         xtype: 'brandstabpanel'
      }]
});