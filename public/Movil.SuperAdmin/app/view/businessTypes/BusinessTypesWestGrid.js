Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.businessTypes.BusinessTypesWestGrid', {
   extend: 'Ext.grid.Panel',
   cls: 'flatgrid',
   xtype: 'businesstypeswestgrid',
   store: 'BusinessTypesWestGridStore',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Business Type',
   border: true,
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   columns: [{
         text: 'Type',
         dataIndex: 'name',
         flex: 3,
         sortable: true
      }]
});