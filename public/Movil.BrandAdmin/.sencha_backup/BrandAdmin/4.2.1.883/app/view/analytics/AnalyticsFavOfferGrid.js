Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsFavOfferGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsfavoffergrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Users who have liked the offer',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsFavOfferGridStore',
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
      dataIndex: '',
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