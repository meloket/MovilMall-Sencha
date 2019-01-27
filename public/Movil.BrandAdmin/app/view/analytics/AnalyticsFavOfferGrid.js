Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsFavOfferGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsfavoffergrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Users who have liked the offer',
   locales: {
      title: 'grid.analyticsfavoffergrid.title'
   },
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsFavOfferGridStore',
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
      }
   }, {
      //text: 'Points',
      dataIndex: '',
      flex: 2,
      sortable: true,
      locales: {
         text: 'grid.analyticsfavgrid.points.text'
      },
      editor: {
         xtype: 'datefield',
         //endDateField: 'toDate',
         vtype: 'daterange',
         format: 'd/m/Y'
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