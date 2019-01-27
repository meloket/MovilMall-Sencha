Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.movies.MoviesGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'moviesgrid',
   emptyText: 'No Data to Display',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Movies',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   border: true,
   width: 550,
   store: 'MoviesStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      text: 'Sr.No.',
      flex: 1
   }, {
         text: 'Name',
         dataIndex: 'name',
         flex: 3,
         sortable: true
      }, {
         text: 'Rating',
         dataIndex: 'rating',
         flex: 2,
         sortable: true
      },
      {
         text: 'Runtime(in min)',
         dataIndex: 'runTime',
         flex: 2.5,
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
  /* dockedItems: [{
      xtype: 'pagingtoolbar',
      //store: 'CourseContentStore',
      //itemId: 'brandlocgridpanelpagingtoolbar',
      displayInfo: true,
      dock: 'bottom',
      pageSize: 10
   }],*/
   initComponent: function ()
      {
         this.tbar = [{
            tooltip: 'New Movie',
            margin: '0 0 0 5',
            id: 'addMovie',
            text:'new',
            action: 'new',
            cls: 'add-btn',
            overCls: 'add-btn-hover'
            //glyph: 43
         },'->',
      {
         iconCls: 'button',
         text:'search',
         tooltip: 'Search'
      }];
         this.callParent(arguments);
         this.relayEvents(this.store, ['load'], 'store');
      }
});