Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.analytics.AnalyticsOffersGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsoffersgrid',
   emptyText: 'No Data to Display',
   cls: 'flatgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   border: true,
   title: 'Offers',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
    store: 'AnalyticsOffersGridStore',
   columnLines: true,
   columns: [{
      text: 'Offer Details',
      dataIndex: 'tagLine',
      flex: 2.5,
      sortable: true
   }, {
      text: 'Brand',
      dataIndex: 'brandName',
      flex: 2.5,
      sortable: true
   }, /*{
      text: 'City',
      dataIndex: '',
      flex: 2,
      sortable: true
   },*/ {
      text: 'Likes',
      dataIndex: 'likeCount',
      flex: 1.25,
      sortable: true
   }, {
      text: 'Click',
      dataIndex: 'clickCount',
      flex: 1.25,
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