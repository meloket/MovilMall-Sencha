
Ext.define('BrandAdmin.view.movies.MoviesLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'movieslocgrid',
   title: 'Locations',
   titleAlign: 'left',
   scrollable: true,
   store:'MoviesLocGridStore',
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
      dataIndex: 'cityName',
      flex: 3,
      sortable: true
   },
      {
         text: 'State',
         dataIndex: 'stateName',
         flex: 3,
         sortable: true
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