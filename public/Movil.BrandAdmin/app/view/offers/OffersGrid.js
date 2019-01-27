Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.offers.OffersGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'offersgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   //title: 'Offers',
   locales: {
      title: 'grid.offers.title'
   },
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 700,
   store: 'OffersStore',
   columnLines: true,
   columns: [{
         xtype: 'rownumberer',
         //text: 'Sr.No.',
         flex: 0.5,
         locales: {
            text: 'grid.offers.srno.text'
         }
      }, {
         //text: 'Offer Details',
         dataIndex: 'tagLine',
         flex: 3,
         sortable: true,
         locales: {
            text: 'grid.offers.offersDetail.text'
         }
      },
   /*   {
         //text: 'Code',
         dataIndex: 'code',
         flex: 2,
         sortable: true,
         locales: {
            text: 'form.offersinfo.couponcode.fieldLabel'
         }
      },*/
      {
         dataIndex: 'validTo',
         flex: 2,
         sortable: true,
         locales: {
            text: 'form.offersinfo.validto.fieldLabel'
         },
         renderer: function(value)
         {
            if (value)
            {
               var currentFullDate = new Date();
               var currentDate = currentFullDate.getDate() + '/' + (currentFullDate.getMonth() + 1) + '/' + currentFullDate.getFullYear();
               var fullDate = value.getDate() + '/' + (value.getMonth() + 1) + '/' + value.getFullYear();
               if (value < currentFullDate && currentDate != fullDate)
               {
                  return '<span style="color:red">' + fullDate + '</span>';
               }
               return fullDate;
            }
         }
      },
      {
         align: 'center',
         //text: 'Actions',
         locales: {
            text: 'grid.offers.action.text'
         },
         xtype: 'actioncolumn',
         // id: 'editCaste',
         sortable: false,
         menuDisabled: true,
         // flex: 0.55,
         items: [{
            //tooltip: 'Edit',
            action: 'view',
            itemId: 'view',
            iconCls: 'View'
         }, { xtype: 'tbspacer' }, {
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
   initComponent: function()
   {
      this.tbar = [{
         margin: '0 0 0 5',
         id: 'addOffer',
         action: 'new',
         locales: {
            text: 'buttons.new',
            tooltip: 'add.offer.tooltip'
         }
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