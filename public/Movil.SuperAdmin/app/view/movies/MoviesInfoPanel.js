Ext.define('SuperAdmin.view.movies.MoviesInfoPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviesinfopanel',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   items: [{
      xtype: 'moviesinfoform',
      region: 'west',
      flex:1
      }, {
         xtype: 'moviesphotoform',
         region: 'center',
         flex: 1.5
      }],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
	border: true,
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         {
            action: 'save',
            tooltip: 'Save',
            text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Back to Grid',
            text: 'Cancel',
            width: 70
         }
      ]
   }]
});