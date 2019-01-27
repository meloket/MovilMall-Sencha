
Ext.define('BrandAdmin.view.movies.MoviesLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'movieslocgrid',
   //title: 'Locations',
   locales: {
      title: 'grid.movieslocgrid.title'
   },
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,
   border: true,
   store:'MoviesLocGridStore',
   scroll: 'vertical',
   width: 490,
   columnLines: true,
   columns: [{
      //text: 'Location',
      dataIndex: 'location',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.movieslocgrid.location.text'
      }
   }, {
      //text: 'City',
      dataIndex: 'cityName',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.movieslocgrid.city.text'
      }
   },
      {
         //text: 'State',
         dataIndex: 'stateName',
         flex: 3,
         sortable: true,
         locales: {
            text: 'grid.movieslocgrid.state.text'
         }
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