Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.offers.OffersLocGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'offerslocgrid',
   requires: [
      'Ext.grid.column.Action',
        'Ext.grid.column.CheckColumn'
   ],
   //title: 'Offers',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 700,
   store: 'OffersLocStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      text: 'Sr.No.',
      flex: 1
   }, {
      text: 'Location',
      dataIndex: 'location',
      flex: 3,
      sortable: true
   },
      {
         text: 'City',
         dataIndex: 'city',
         flex: 2,
         sortable: true
      },
      {
         text: 'State',
         dataIndex: 'state',
         flex: 2,
         sortable: true
      },
      {
         text: 'In Mall?',
         dataIndex: 'inmall',
         flex: 1,
         sortable: true
      },
    {
       xtype: 'checkcolumn',
      text:'action',
      sortable: false,
       dataIndex: '',
       menuDisabled: true,
       layout: 'fit',
       tooltip: 'Action'
      }],
   
      dockedItems: [{
         xtype: 'toolbar',
         dock: 'bottom',
         bodyBorder: true,
         layout: { pack: 'center' },
         items: [
         '->', {
               action: 'finish',
               margin: '5 5 0 0',
               cls: 'cancel-btn-flat',
               tooltip: 'Finish',
               text: 'Finish',
               width: 70
            }
         ]
      }]
});