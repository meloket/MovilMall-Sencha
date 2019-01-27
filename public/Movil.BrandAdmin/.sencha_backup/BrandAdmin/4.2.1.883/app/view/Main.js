Ext.define('BrandAdmin.view.Main', {
   extend: 'Ext.container.Container',
   requires: [
      'Ext.tab.Panel',
      'Ext.layout.container.Border'
   ],
   style: {
      background: '#ffffff'
   },

   xtype: 'app-main',

   layout: {
      type: 'border'
   },

   items: [{
      region: 'north',
      xtype: 'mainnorthpanel'
   }, {
      region: 'south',
      xtype: 'mainstatusbar'
   }, {
      region: 'center',
      xtype: 'maincentercontainer'
   }]
});