Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsEventsGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticseventsgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   //title: 'Events',
   locales: {
      title: 'grid.eventsgrid.title'
   },
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,

   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsEventsGridStore',
   columnLines: true,
   columns: [{
      //text: 'Event Name',
      dataIndex: 'name',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.eventsgrid.eventname.text'
      }
   }, {
      xtype: 'datecolumn',
      //text: 'Date',
      dataIndex: 'date',
      flex: 1.8,
      format: 'd/m/Y',
      sortable: true,
      locales: {
         text: 'grid.eventsgrid.date.text'
      },
      editor: {
         xtype: 'datefield',
         //endDateField: 'toDate',
         vtype: 'daterange',
         format: 'd/m/Y'
      }
   }, {
      //text: 'Attendees',
      dataIndex: 'attendeeCount',
      flex: 1.2,
      sortable: true,
      locales: {
         text: 'grid.eventsgrid.attendees.text'
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