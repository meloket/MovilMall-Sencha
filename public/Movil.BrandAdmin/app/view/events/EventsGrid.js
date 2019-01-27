Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.events.EventsGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'eventsgrid',
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
   width: 700,
   border: true,
   store: 'EventsStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      //text: 'Sr.No.',
      flex: 0.5,
      locales: {
         text: 'grid.eventsgrid.srno.text'
      }
   }, {
      //text: 'Event Name',
      dataIndex: 'name',
      flex: 4,
      sortable: true,
      locales: {
         text: 'grid.eventsgrid.eventname.text'
      }
   },
      {
         xtype: 'datecolumn',
         //text: 'Event Name',
         dataIndex: 'date',
         flex: 2,
         format: 'd/m/y',
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
      },/*{
      text: 'Date',
      dataIndex: 'date',
      flex: 3,
      sortable: true
   },*/
     /* {
         text: 'Time',
         dataIndex: 'time',
         flex: 3,
         sortable: true
      },*/
      {
         align: 'center',
         //text: 'Actions',
         xtype: 'actioncolumn',
         locales: {
            text: 'grid.eventsgrid.action.text'
         },
         // id: 'editCaste',
         sortable: false,
         menuDisabled: true,
         // flex: 0.55,
         items: [{
            //tooltip: 'Edit',
            action: 'edit',
            itemId: 'edit',
            iconCls: 'Edit'
         }, { xtype: 'tbspacer' }, {
            //tooltip: 'Delete',
            action: 'delete',
            itemId: 'delete',
            iconCls: 'Delete'
         }]
      }],
  /* dockedItems: [{
      xtype: 'pagingtoolbar',
      //store: 'CourseContentStore',
      //itemId: 'brandlocgridpanelpagingtoolbar',
      displayInfo: true,
      dock: 'bottom',
      pageSize: 10
   }],*/
   initComponent: function () {
      this.tbar = [{
         //tooltip: 'New Event',
         margin: '0 0 0 5',
        // id: 'addEvent',
         //text: 'new',
         action: 'new',
         cls: 'add-btn',
         overCls: 'add-btn-hover',
         locales: {
            text: 'buttons.new',
            tooltip: 'add.events.tooltip'
         }
         //glyph: 43
     /* }, '->',
   {
      iconCls: 'button',
      //text: 'search',
      tooltip: 'Search',
      locales: {
         text: 'buttons.search',
         tooltip: 'search.tooltip'
      }*/
   }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});