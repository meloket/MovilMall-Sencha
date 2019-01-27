Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.masters.CountriesGrid', {
   extend: 'Ext.grid.Panel',
   title: 'Countries',
   titleAlign: 'left',
   xtype: 'countriesgrid',
   //ui: 'blue-panel',
   columnLines: true,
   width: 500,
   cls:'flatgrid',
   store: 'CountriesStore',
   scrollable: true,
   scroll: 'vertical',
   border: false,
   bodyBorder: true,

   columns: [ {
      text: 'Name',
      dataIndex: 'name',
      flex: 3,
      sortable: true
   }, {
      align: 'center',
      text: 'Actions',
      xtype: 'actioncolumn',
      sortable: false,
      menuDisabled: true,
      id: 'editCountry',
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
      }],
      flex: 0.55
   }],

   initComponent: function () {
      this.tbar = [{
         tooltip: 'New Country',
         margin: '0 0 0 10',
         action: 'new',
         text: 'new',
         id: 'addCountry',
         cls: 'add-btn',
         overCls: 'add-btn-hover'
      }];
      this.callParent(arguments);
      this.relayEvents(this.store, ['load'], 'store');
   }
});