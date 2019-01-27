Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.analytics.AnalyticsFavOfferGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsfavoffergrid',
   emptyText: 'No Data to Display',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Users who have liked the offer',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   border: true,
   width: 490,
   store: 'AnalyticsFavOfferGridStore',
   columnLines: true,
   columns: [{
      text: 'Name',
      dataIndex: 'name',
      flex: 2,
      sortable: true
   }, {
      text: 'Email',
      dataIndex: 'email',
      flex: 3,
      sortable: true
   }, {
      text: 'City',
      dataIndex: 'cityName',
      flex: 1,
      sortable: true
   }, {
      text: 'State',
      dataIndex: 'stateName',
      flex: 1,
      sortable: true
   }, {
      xtype: 'datecolumn',
      text: 'DOB',
      dataIndex: 'dob',
      format: 'd/m/y',
      flex: 1.5,
      sortable: true,
      editor: {
         xtype: 'datefield',
         //endDateField: 'toDate',
         vtype: 'daterange',
         format: 'd/m/Y'
      }
   }, {
      text: 'Points',
      dataIndex: '',
      flex: 1,
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