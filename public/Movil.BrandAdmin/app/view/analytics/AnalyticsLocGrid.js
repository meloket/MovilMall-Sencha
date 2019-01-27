Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticslocgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   //title: 'Locations',
   
   locales: {
      title: 'grid.movieslocgrid.title'
   },
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
   bodyBorder: true,
   store: 'AnalyticsLocGridStore',
   columnLines: true,
   columns: [{
      //text: 'Locations',
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
   }, {
      //text: 'State',
      dataIndex: 'stateName',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.movieslocgrid.state.text'
      }
   }, {
      //text: 'Favourited',
      dataIndex: 'favCount',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.movieslocgrid.favourited.text'
      }
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