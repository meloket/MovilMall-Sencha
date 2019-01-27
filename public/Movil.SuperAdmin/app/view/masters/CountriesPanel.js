Ext.define('SuperAdmin.view.masters.CountriesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'countriespanel',
   cls: 'flatTabPanel',
   layout: {
      type: 'card'
   },
   deferredRender: true,

   animCollapse: true,

   border: true,
   items: [{
      xtype: 'countriesgrid'
   }]
});