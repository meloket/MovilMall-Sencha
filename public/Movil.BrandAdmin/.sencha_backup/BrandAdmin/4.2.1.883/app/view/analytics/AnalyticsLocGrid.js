Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticslocgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Locations',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsLocGridStore',
   columnLines: true,
   columns: [{
      text: 'Locations',
      dataIndex: 'location',
      flex: 3,
      sortable: true
   }, {
      text: 'City',
      dataIndex: 'CITY',
      flex: 3,
      sortable: true
   }, {
      text: 'State',
      dataIndex: 'STATE',
      flex: 3,
      sortable: true
   }, {
      text: 'Favourited',
      dataIndex: 'favCount',
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