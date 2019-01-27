Ext.define('SuperAdmin.view.HomePanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'homepanel',
   autoScroll: true,
   width: 1000,
   border:false,
   margin:'10 0 0 0',
   items: [{
      xtype: 'homedataview'
   }]
});