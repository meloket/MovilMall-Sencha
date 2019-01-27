Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.BrandsGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'brandsgrid',
   cls: 'flatgrid',
   emptyText: 'No Data to Display',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Brands',
   titleAlign: 'left',
   scrollable: true,
   border:true,
   scroll: 'vertical',
   width: 490,
    store: 'BrandsGridStore',
  columnLines:true,
   columns: [/*{
      text: 'Sr.No',
      dataIndex: '',
      flex: 1,
      sortable: true
   }, */{
      xtype: 'rownumberer',
      text: 'Sr.No.',
      flex: 1
      },{
      text: 'Name',
      dataIndex: 'name',
      flex: 3.5,
      sortable: true
   }, {
      text: 'Approval Status',
      dataIndex: 'status',
      flex: 2.5,
      sortable: true
   }, {
      align: 'center',
      text: 'Actions',
      xtype: 'actioncolumn',
     // id: 'editCaste',
      sortable: false,
      menuDisabled: true,
    
      items: [{
         tooltip: 'Edit',
         action: 'edit',
         itemId: 'edit',
         iconCls: 'Edit'
      }/*, { xtype: 'tbspacer' },{
         tooltip: 'Delete',
         action: 'delete',
         itemId: 'delete',
         iconCls: 'Delete'
      }*/]
   }],
   tbar:['->',{
      iconCls: 'button',
      tooltip: 'Filter',
      text: 'Filter',
      cls: 'search-btn',
      overCls: 'search-btn:hover',
      margin: '0 10 0 0',
      action: 'Search',
      arrowCls: 'false',
      menu: {
         xtype: 'brandsearchmenu'
      }
     }]
});