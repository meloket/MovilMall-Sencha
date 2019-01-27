Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.locations.LocationsGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'locationsgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
  
  locales: {
     title: 'grid.locations.title'
      },
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 700,
   store: 'LocationsStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      locales: {
         text: 'grid.locations.srno.text'
      },
   
      flex: 1.2
   }, {
      locales: {
         text: 'grid.locations.locations.text'
      },
      dataIndex: 'location',
      flex: 3,
      sortable: true
   },
      {
         locales: {
            text: 'grid.locations.city.text'
         },
         dataIndex: 'cityName',
         flex: 3,
         sortable: true
      },
      {
         locales: {
            text: 'grid.locations.state.text'
         },
         dataIndex: 'stateName',
         flex: 3,
         sortable: true
      },
      {
         locales: {
            text: 'grid.locations.inmall.text'
         },
         dataIndex: 'insideMall',
         flex: 3,
         sortable: true
      },

      {
         align: 'center',
         locales: {
            text: 'grid.locations.action.text'
         },
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
         tooltip: 'New Location',
         margin: '0 0 0 5',
         id: 'addLocation',
         locales: {
            text: 'buttons.new'
         },
         action: 'new',
         cls: 'add-btn',
         overCls: 'add-btn-hover'
         //glyph: 43
      }, '->',
   {
      iconCls: 'button',
      locales: {
         text: 'buttons.search'
      },
      tooltip: 'Search'
   }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});