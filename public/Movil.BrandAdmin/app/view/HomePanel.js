Ext.define('BrandAdmin.view.HomePanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'homepanel',
   autoScroll: true,
   width: 1254,
   border: false,
   items: [{
      xtype: 'homedataview'
   }]
});