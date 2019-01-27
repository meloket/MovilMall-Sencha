Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.points.PointsGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'pointsgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   
   locales: {
      title: 'grid.Point.title'
   },
   //title:'Locations',
   titleAlign: 'left',
   cls:'flatgrid',
   scrollable: true,
   scroll: 'vertical',
   width: 900,
   store: 'PointsGridStore',
   columnLines: true,
   columns: [{
      xtype: 'rownumberer',
      locales: {
         text: 'grid.locations.srno.text'
      },
      //text:'Sr. No.',
      flex: 1.2
   }, {
       //text: 'Name',
      //text:'Location',
      locales: {
         text: 'grid.analyticsfavgrid.name.text'
      },
      dataIndex: 'userName',
      flex: 4,
      sortable: true
   },
      {
         locales: {
            text: 'grid.analyticsfavgrid.email.text'
         },
         dataIndex: 'email',
         flex: 3,
         sortable: true
      },
      {
         locales: {
            text: 'grid.Point.points.text'
         },
         dataIndex: 'points',
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
         // id: 'editCaste',
         sortable: false,
         menuDisabled: true,
         // flex: 0.55,
         items: [{
            
            action: 'edit',
            itemId: 'edit',
            iconCls: 'Edit'
         }]
      }],
   initComponent: function ()
   {
      this.tbar = [{
         xtype: 'combo',
        /// fieldLabel: 'form.locations.city.fieldLabel',
         //dataIndex: 'cityId',
         forceSelection: true,
         name: 'cityId',
         width:230,
         store: 'LocationsComboStore',
         displayField: 'location',
         valueField: 'key',
         lastQuery: '',
         emptyText: 'Select Location',
         tooltip: 'Select Location',
         typeAhead: true,
         typeAheadDelay: 10,
         queryMode: 'local',
         itemId: 'locCombo'
      },'->', {
         xtype: 'textfield',
         enableKeyEvents:true,
         itemId: 'searchField',
         emptyText: 'Buscar Usuario'
      }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});