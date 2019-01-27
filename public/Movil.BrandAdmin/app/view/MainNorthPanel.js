Ext.define('BrandAdmin.view.MainNorthPanel', {
   extend: 'Ext.panel.Panel',
   requires: [
      'Ext.layout.container.Border'
   ],
   border: false,

   /* bodyStyle: {
       background: '#ffffff'
    },*/

   xtype: 'mainnorthpanel',

   layout: {
      type: 'vbox',
      align: 'stretch'
   },

   items: [{
      xtype: 'maintoolbar',
      height: 47/*,
      flex: 1*/
   }]
});