Ext.define('SuperAdmin.view.movies.MoviesShowTimesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviesshowtimespanel',
   title:'Show Time',
   border: true,
   items: [{
      xtype: 'moviesshowtimedataview'
   }]
});