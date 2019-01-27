Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.masters.CitiesGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'citiesgrid',
   
   requires: [
      'Ext.grid.column.Action'
   ],

   title: 'Cities',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   columnLines: true,
   width: 500,
   store: 'CitiesStore',
   border: false,
   bodyBorder: true,
   cls: 'flatgrid',

   columns: [ {
      text: 'Name',
      dataIndex: 'name',
      flex: 3,
      sortable: true
   }, {
      align: 'center',
      text: 'Actions',
      xtype: 'actioncolumn',
      sortable: false,
      menuDisabled: true,
      id: 'editCity',
      items: [{
         tooltip: 'Edit',
         action: 'edit',
         itemId: 'edit',
         iconCls: 'Edit'
      },{xtype: 'tbspacer'}, {
         tooltip: 'Delete',
         action: 'delete',
         itemId: 'delete',
         iconCls: 'Delete'
      }],
      flex: 0.55
   }],

   initComponent: function () {
      this.tbar = [{
         tooltip: 'New City',
         margin: '0 0 0 10',
         action: 'new',
         text: 'new',
         id: 'addCity',
         cls: 'add-btn',
         overCls: 'add-btn-hover'
     
      }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});
/*function OnEdit(grid, rowIndex, colIndex) {
   var rec = grid.getStore().getAt(rowIndex);
   var win = Ext.ComponentQuery.query('countrywindow')[0].getLayout();
   win.setActiveItem(1);

   var form = Ext.ComponentQuery.query('countryform')[0].getForm();
   form.loadRecord(rec);
}*/