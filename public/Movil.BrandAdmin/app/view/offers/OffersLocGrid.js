Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.offers.OffersLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'offerslocgrid',

   requires: [
      'Ext.grid.column.Action',
      'Ext.grid.column.CheckColumn'
   ],
   viewConfig: {
      stripeRows: true,
      enableTextSelection: true/*,
      listeners: {
         cellclick: function(table, td, columnIndex, record, tr, rowIndex, e)
         {
            if (columnIndex == 5)
            {
               var qrCode = record.data.qrCode;
               if (qrCode)
               {
                  window.prompt("Copy to clipboard: Ctrl+C, Enter", td.innerText);
               }
            }
         }
      }*/
   },
   cls: 'flatgrid',
   //title: 'Offers',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 700,
   store: 'OffersLocStore',
   columnLines: true,
   columns: [{
         xtype: 'rownumberer',
         //text: 'Sr.No.',
         flex: 0.5,
         locales: {
            text: 'grid.offerslocgrid.srno.text'
         }
      }, {
         //text: 'Location',
         dataIndex: 'location',
         flex: 3,
         sortable: true,
         locales: {
            text: 'grid.offerslocgrid.location.text'
         }
      },
      {
         //text: 'City',
         dataIndex: 'cityName',
         flex: 2,
         sortable: true,
         locales: {
            text: 'grid.offerslocgrid.city.text'
         }
      },
      {
         //text: 'State',
         dataIndex: 'stateName',
         flex: 2,
         sortable: true,
         locales: {
            text: 'grid.offerslocgrid.state.text'
         }
      },
      {
         //text: 'In Mall?',
         dataIndex: 'qrCode',
         flex: 3,
         sortable: true,
         locales: {
            text: 'grid.offerslocgrid.Qrcode.text'
         }
      }/*,
      {
         xtype: 'checkcolumn',
         text: 'action',
         sortable: false,
         dataIndex:'',
         menuDisabled: true,
         layout: 'fit',
         tooltip: 'Action'
      }*/],

   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         {
            action: 'back',
            //tooltip: 'Back',
            //text: 'Back',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.back',
               tooltip: 'back.tooltip'
            }
         }, '->',
         {
            action: 'save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.finish',
               tooltip: 'save.tooltip'
            }
         }
      ]
   }],
   initComponent: function()
   {
      this.sm = Ext.create('Ext.selection.CheckboxModel', {
         mode: 'MULTI',
         checkOnly: true
      });
      Ext.apply(this, {
         selModel: this.sm
      });
      this.callParent(arguments);
   }
});