Ext.define('BrandAdmin.view.movies.MoviesLocPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'movieslocpanel',
  
   layout: {
      type: 'border',
      align: 'stretch'
   },
   items: [{
      xtype: 'movieslocgrid',
      region: 'west',
      flex: 1
   },
      {
         xtype: 'moviesshowtimespanel',
         region: 'center',
         flex: 1
      }]

});