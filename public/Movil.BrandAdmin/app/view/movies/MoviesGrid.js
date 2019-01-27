Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.movies.MoviesGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'moviesgrid',
   cls: 'flatgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   //title: 'Movies',
   locales: {
      title: 'grid.moviesgrid.title'
   },
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 550,
   border: true,
   store: 'MoviesStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      //text: 'Sr.No.',
      flex: 1,
      locales: {
         text: 'grid.moviesgrid.srno.text'
      }
   }, {
      //text: 'Name',
      dataIndex: 'name',
      flex: 4,
      sortable: true,
      locales: {
         text: 'grid.moviesgrid.name.text'
      }
   }, {
      //text: 'Rating',
      dataIndex: 'rating',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.moviesgrid.rating.text'
      }
   },
      {
         //text: 'Runtime(in min)',
         dataIndex: 'runTime',
         flex: 3,
         sortable: true,
         locales: {
            text: 'grid.moviesgrid.runtime.text'
         }
      },
      {
         align: 'center',
         //text: 'Actions',
         locales: {
            text: 'grid.moviesgrid.action.text'
         },
         xtype: 'actioncolumn',
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
         //tooltip: 'New Movie',
         margin: '0 0 0 5',
         //text: 'new',
         locales: {
            text: 'buttons.new',
            tooltip: 'add.offer.tooltip'
         },
         action: 'new',
         cls: 'add-btn',
         overCls: 'add-btn-hover'
         //glyph: 43
      /*}, '->',
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