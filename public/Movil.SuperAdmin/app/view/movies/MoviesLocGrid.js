Ext.define('SuperAdmin.view.movies.MoviesLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'movieslocgrid',
   emptyText: 'No Data to Display',
   title: 'Locations',
   titleAlign: 'left',
   scrollable: true,
   store: 'MoviesLocGridStore',
   border: true,
   scroll: 'vertical',
   width: 490,
   columnLines: true,
   columns: [{
      text: 'Location',
      dataIndex: 'location',
      flex: 3,
      sortable: true
   }, {
      text: 'City',
      dataIndex: 'city',
      flex: 2,
      sortable: true
   },
      {
         text: 'State',
         dataIndex: 'state',
         flex: 2,
         sortable: true
      }]/*,
   dockedItems: [{
      xtype: 'pagingtoolbar',
      //store: 'CourseContentStore',
      //itemId: 'brandlocgridpanelpagingtoolbar',
      displayInfo: true,
      dock: 'bottom',
      pageSize: 10
   }]*/
});