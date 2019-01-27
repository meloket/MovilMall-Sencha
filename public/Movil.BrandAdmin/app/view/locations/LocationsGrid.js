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
   viewConfig: {      
      enableTextSelection: true
     /* listeners: {
         cellclick: function(table, td, columnIndex, record, tr, rowIndex, e)
         {
            if (columnIndex == 4)
            {
               var qrCode = record.data.qrCodeOne;
               if (qrCode)
               {
                  window.prompt("Copy to clipboard: Ctrl+C, Enter", td.innerText);
               }
            }
         }
      }*/
   },
   //title:'Locations',
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 900,
   store: 'LocationsStore',
   columnLines: true,
   columns: [{
         xtype: 'rownumberer',
         locales: {
            text: 'grid.locations.srno.text'
         },
         //text:'Sr. No.',
         flex: 1.2
      }, {
         locales: {
            text: 'grid.locations.locations.text'
         },
         //text:'Location',
         dataIndex: 'location',
         flex: 4,
         sortable: true
      },
      {
         locales: {
            text: 'grid.locations.city.text'
         },
         //text:'City',
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
            text: 'grid.offerslocgrid.Qrcode.text'
         },
         //text:'Inside Mall',
         dataIndex: 'qrCodeOne',
         flex: 3,
         sortable: true
      },
      {
         align: 'center',
         locales: {
            text: 'grid.locations.action.text'
         },
         //text:'actions',
         xtype: 'actioncolumn',
         id: 'editLocation',
         sortable: false,
         menuDisabled: true,
         // flex: 0.55,
         items: [{
               //tooltip: 'Edit',
               /* locales: {
               tooltip: 'edit.tooltip'
            },*/
               action: 'edit',
               itemId: 'edit',
               iconCls: 'Edit'
            }, { xtype: 'tbspacer' }, {
               //tooltip: 'Delete',
               locales: {
                  tooltip: 'delete.tooltip'
               },
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
   initComponent: function()
   {
      this.tbar = [{
         margin: '0 0 0 5',
         id: 'addLocation',
         locales: {
            text: 'buttons.new',
            tooltip: 'add.location.tooltip'
         },
         action: 'new'
      }]/*, '->',
   {
      iconCls: 'button',
    /*ocales: {
         text: 'buttons.search'
      },#1#
      tooltip: 'Search'
   }*/;
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});