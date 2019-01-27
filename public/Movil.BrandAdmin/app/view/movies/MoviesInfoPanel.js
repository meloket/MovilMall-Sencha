Ext.define('BrandAdmin.view.movies.MoviesInfoPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviesinfopanel',
  /* locales: {
      title: 'grid.moviestab1title.title'
   },*/
   //border:true,
   layout: {
      type: 'border',
      align: 'stretch'
   },
   items: [{
      xtype: 'moviesinfoform',
      region: 'west',
      flex: 1
   }, {
      xtype: 'moviesphotoform',
      region: 'center',
      flex: 1.5
   }], dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      border: true,
      layout: { pack: 'center' },
      items: [
        {
           action: 'save',
           //tooltip: 'Save',
           //text: 'Save',
           margin: '5 5 0 0',
           cls: 'save-flat-btn',
           locales: {
              text: 'buttons.save',
              tooltip: 'save.tooltip'
           },
           height:30

        }, {
           action: 'cancel',
           margin: '5 5 0 0',
           cls: 'save-flat-btn',
           locales: {
              text: 'buttons.cancel',
              tooltip: 'cancel.tooltip'
           },
           height: 30
        }
      ]
   }]
});