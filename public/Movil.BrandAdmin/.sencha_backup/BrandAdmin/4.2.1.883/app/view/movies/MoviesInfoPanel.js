Ext.define('BrandAdmin.view.movies.MoviesInfoPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviesinfopanel',
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
   }]
});