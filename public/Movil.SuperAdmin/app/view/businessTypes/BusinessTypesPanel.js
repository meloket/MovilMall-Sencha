Ext.define('SuperAdmin.view.businessTypes.BusinessTypesPanel', {
   extend: 'Ext.panel.Panel',
   
   xtype: 'businesstypespanel',
   requires: [
      'Ext.layout.container.Card'
   ],
   cls:'flatgrid',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   width: 900,
   border: false,
   items: [{
         xtype: 'businesstypeswestgrid',
         split: true,
         region: 'west',
         flex: 0.5
      }, {
         xtype: 'categoriescentergrid',
         split: true,
         region: 'center',
         flex: 1
      }]
});