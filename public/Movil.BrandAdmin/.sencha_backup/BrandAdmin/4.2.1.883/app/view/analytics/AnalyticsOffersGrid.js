Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsOffersGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsoffersgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
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
      flex: 3,
      sortable: true
   }, {
      text: 'City',
      dataIndex: '',
      flex: 3,
      sortable: true
   }, {
      text: 'Likes',
      dataIndex: 'likeCount',
      flex: 3,
      sortable: true
   }, {
      text: 'Click',
      dataIndex: 'clickCount',
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