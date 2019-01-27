Ext.define('SuperAdmin.view.movies.MoviesLocPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'movieslocpanel',
  border: true,
   layout: {
      type: 'border',
      align: 'stretch'
   },
   items: [{
      xtype: 'movieslocgrid',
      region: 'west',
      flex:1.2
   },
      {
         xtype: 'moviesshowtimespanel',
         region: 'center',
         flex:1
      }]
   
});