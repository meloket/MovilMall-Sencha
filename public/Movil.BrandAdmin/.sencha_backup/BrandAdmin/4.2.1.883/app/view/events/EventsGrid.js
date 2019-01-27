Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.events.EventsGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'eventsgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Events',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 700,
   store: 'EventsStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      text: 'Sr.No.',
      flex: 2
   }, {
      text: 'Event Name',
      dataIndex: 'name',
      flex: 3,
      sortable: true
   }, {
      text: 'Date',
      dataIndex: 'datetime',
      flex: 3,
      sortable: true
   },
      {
         text: 'Type',
         dataIndex: 'type',
         flex: 3,
         sortable: true
      },
      {
         align: 'center',
         text: 'Actions',
         xtype: 'actioncolumn',
         // id: 'editCaste',
         sortable: false,
         menuDisabled: true,
         // flex: 0.55,
         items: [{
            tooltip: 'Edit',
            action: 'edit',
            itemId: 'edit',
            iconCls: 'Edit'
         }, { xtype: 'tbspacer' }, {
            tooltip: 'Delete',
            action: 'delete',
            itemId: 'delete',
            iconCls: 'Delete'
         }]
      }],
   dockedItems: [{
      xtype: 'pagingtoolbar',
      //store: 'CourseContentStore',
      //itemId: 'brandlocgridpanelpagingtoolbar',
      displayInfo: true,
      dock: 'bottom',
      pageSize: 10
   }],
   initComponent: function () {
      this.tbar = [{
         tooltip: 'New Event',
         margin: '0 0 0 5',
        // id: 'addEvent',
         text: 'new',
         action: 'new',
         cls: 'add-btn',
         overCls: 'add-btn-hover'
         //glyph: 43
      }, '->',
   {
      iconCls: 'button',
      text: 'search',
      tooltip: 'Search'
   }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});