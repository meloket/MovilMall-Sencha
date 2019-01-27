Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.users.UsersGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'usersgrid',
   cls: 'flatgrid',
   emptyText: 'No Data to Display',
   requires: [
      'Ext.grid.column.Action'
   ],
   title: 'Users',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   border: true,
   width: 600,
   store: 'UsersGridStore',
   columnLines: true,
   columns: [{
         xtype: 'rownumberer',
         text: 'Sr.No.',
         flex: 0.6
      }, {
         text: 'User Name',
         dataIndex: 'name',
         flex: 1.8,
         sortable: false
      }, {
         text: 'Email',
         dataIndex: 'email',
         flex: 3,
         sortable: false
      }, {
         text: 'Register Date',
         xtype: 'datecolumn',
         format:'d/m/Y',
         dataIndex: 'createdAt',
         flex: 1.3,
         sortable: false
      }]
});