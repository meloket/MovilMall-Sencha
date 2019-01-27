Ext.define('SuperAdmin.view.masters.StatesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'statespanel',
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
      xtype: 'statesgrid'
   }]
});