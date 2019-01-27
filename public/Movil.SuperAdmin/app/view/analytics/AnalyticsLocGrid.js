Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.analytics.AnalyticsLocGrid', {
   extend: 'Ext.grid.Panel',
   cls: 'flatgrid',
   xtype: 'analyticslocgrid',
   emptyText: 'No Data to Display',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Locations',
   titleAlign: 'left',
   scrollable: true,
   border: true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsLocGridStore',
   columnLines: true,
   columns: [ {
      text: 'Locations',
      dataIndex: 'location',
      flex: 3,
      sortable: true
   }, {
      text: 'Brand',
      dataIndex: 'brandName',
      flex: 2,
      sortable: true
   }, {
      text: 'City',
      dataIndex: 'cityName',
      flex: 2,
      sortable: true
   }, {
      text: 'State',
      dataIndex: 'stateName',
      flex: 2,
      sortable: true
   }, {
      text: 'Favourited',
      dataIndex: 'favCount',
      flex: 1.5,
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