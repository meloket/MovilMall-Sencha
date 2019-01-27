Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsEventsGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticseventsgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Events',
   titleAlign: 'left',
   scrollable: true,
   border:true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsEventsGridStore',
   columnLines: true,
   columns: [{
      text: 'Event Name',
      dataIndex: 'name',
      flex: 3,
      sortable: true
   }, {
      text: 'Date',
      dataIndex: 'datetime',
      flex: 1.8,
      sortable: true
   }, {
      text: 'Attendees',
      dataIndex: 'attendeeCount',
      flex: 1.2,
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