Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.businessTypes.CategoriesCenterGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'categoriescentergrid',
   emptyText: 'No Data to Display',
   requires: [
      'Ext.grid.column.Action'
   ],
   cls:'flatgrid',
   title: 'Categories for',
   //titleAlign: 'left',
   scrollable: true,
   border: true,
   scroll: 'vertical',
   width: 490,
    store: 'BusTypeCategoriesCenterStore',
   columnLines: true,
   columns: [{
      text: 'Name',
      dataIndex: 'name',
      flex: 1,
      sortable: true
   },  {
      align: 'center',
      text: 'Actions',
      xtype: 'actioncolumn',
      sortable: false,
      menuDisabled: true,
      id:'editCategory',
      flex: 0.55,
      items: [{
         tooltip: 'Edit',
         action: 'edit',
         itemId: 'edit',
         iconCls: 'Edit'
      }, { xtype: 'tbspacer' },{
         tooltip: 'Delete',
         action: 'delete',
         itemId: 'delete',
         iconCls: 'Delete'
      }]
   }],
   initComponent: function () {
      this.tbar = [{
         tooltip: 'New Category',
         margin: '0 0 0 5',
         id: 'addCategory',
         action: 'new',
         text:'add'  
      }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }

});