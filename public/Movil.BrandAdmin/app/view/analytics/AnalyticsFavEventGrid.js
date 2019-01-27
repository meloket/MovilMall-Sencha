
Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsFavEventGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsfaveventgrid',
   requires: [
      'Ext.grid.column.Action'
   ],

   //title: 'Users attending this event',
   locales: {
      title: 'grid.analyticsfaveventgrid.title'
   },
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsFavEventGridStore',
   columnLines: true,
   columns: [{
      //text: 'Name',
      dataIndex: 'name',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.analyticsfavgrid.name.text'
      }
   }, {
      //text: 'Email',
      dataIndex: 'email',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.analyticsfavgrid.email.text'
      }
   }, {
      //text: 'City',
      dataIndex: 'cityName',
      flex: 2,
      sortable: true,
      locales: {
         text: 'grid.analyticsfavgrid.city.text'
      }
   }, {
      //text: 'State',
      dataIndex: 'stateName',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.analyticsfavgrid.state.text'
      }
   }, {
      xtype: 'datecolumn',
      //text: 'DOB',
      dataIndex: 'dob',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.analyticsfavgrid.DOB.text'
      },
      editor: {
         xtype: 'datefield',
         //endDateField: 'toDate',
         vtype: 'daterange',
         format: 'd/m/Y'
      }
   }, {
      //text: 'Points',
      dataIndex: '',
      flex: 2,
      sortable: true,
      locales: {
         text: 'grid.analyticsfavgrid.points.text'
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