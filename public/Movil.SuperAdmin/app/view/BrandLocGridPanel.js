
Ext.define('SuperAdmin.view.BrandLocGridPanel', {
   extend: 'Ext.grid.Panel',
   xtype: 'brandlocgridpanel',
   emptyText: 'No Data to Display',
   requires: [
      'Ext.grid.column.Action'
   ],
   cls:'flatgrid',
   border: true,
   width: 490,
    store: 'BrandsLocStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      text: 'Sr.No.',
      flex: 0.8,
      align: 'center'
   }, {
         text: 'Location',
         dataIndex: 'location',
         flex: 4,
         sortable: true,
         align:'left'
      }, {
         text: 'City',
         dataIndex: 'cityName',
         flex: 2,
         sortable: true,
         align: 'left'
      }, {
         text: 'State',
         dataIndex: 'stateName',
         flex: 2,
         sortable: true,
         align: 'left'
      },
      {
         text: 'In Mall?',
         dataIndex: 'insideMall',
         sortable: true,
         flex: 1.0,
         align: 'left'
      }],
   dockedItems: [{
      xtype: 'pagingtoolbar',
      //store: 'CourseContentStore',
      //itemId: 'brandlocgridpanelpagingtoolbar',
      displayInfo: true,
      dock: 'bottom',
      pageSize: 10
   }] 
});