Ext.define('SuperAdmin.view.masters.CitiesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'citiespanel',
   cls: 'flatTabPanel',

   requires: [
		'Ext.layout.container.Card'
   ],

   layout: {
      type: 'card'
   },
   deferredRender: true,

   animCollapse: true,

   border: true,
   items: [{
      xtype: 'citiesgrid'
   }]
});