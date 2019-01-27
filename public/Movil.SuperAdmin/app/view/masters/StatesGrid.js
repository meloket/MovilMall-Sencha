Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.masters.StatesGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'statesgrid',

   requires: [
      'Ext.grid.column.Action'
   ],

   title: 'States',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   columnLines: true,
   width: 500,
   store: 'StatesStore',
   
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
      id: 'editState',
      items: [{
         tooltip: 'Edit',
         action: 'edit',
         itemId: 'edit',
         iconCls: 'Edit'
      }, {xtype:  'tbspacer'},{
         tooltip: 'Delete',
         action: 'delete',
         itemId: 'delete',
         iconCls: 'Delete'
      }],
      flex: 0.55
   }],

   initComponent: function () {
      this.tbar = [{
         tooltip: 'New State',
         margin: '0 0 0 10',
         action: 'new',
         text: 'new',
         id: 'addState',
         cls: 'add-btn',
         overCls: 'add-btn-hover'
      }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});