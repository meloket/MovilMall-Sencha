Ext.define('BrandAdmin.view.HomePanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'homepanel',
   autoScroll: true,
   width: 1000,
   border: false,
   margin: '150 0 0 0',
   items: [{
      xtype: 'homedataview'
   }]
});