Ext.define('BrandAdmin.view.points.PointsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'pointspanel',
   requires: [
        'Ext.layout.container.Card'
   ],
 
  /* layout: {
      type: 'card'
   },s*/
   width: 900,
   border: true,

   items: [{
      xtype: 'pointsgrid'
   }]
});