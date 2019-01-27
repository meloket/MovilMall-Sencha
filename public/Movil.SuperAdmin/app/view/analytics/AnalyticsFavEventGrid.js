
Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.analytics.AnalyticsFavEventGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsfaveventgrid',
   emptyText: 'No Data to Display',
   cls: 'flatgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   border: true,
   title: 'Users attending this event',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
    store: 'AnalyticsFavEventGridStore',
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
      dataIndex: '',
      flex: 1.5,
      sortable: true,
      format: 'd/m/y',
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