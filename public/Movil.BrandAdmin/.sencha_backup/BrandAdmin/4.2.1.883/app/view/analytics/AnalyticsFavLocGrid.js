Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsFavLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsfavlocgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Users who have favourited the locations',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsFavLocGridStore',
   columnLines: true,
   columns: [{
      text: 'Name',
      dataIndex: 'name',
      flex: 3,
      sortable: true
   }, {
      text: 'Email',
      dataIndex: 'email',
      flex: 3,
      sortable: true
   }, {
      text: 'City',
      dataIndex: '',
      flex: 3,
      sortable: true
   }, {
      text: 'State',
      dataIndex: '',
      flex: 3,
      sortable: true
   }, {
      text: 'DOB',
      dataIndex: 'dob',
      flex: 3,
      sortable: true
   }, {
      text: 'Points',
      dataIndex: '',
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