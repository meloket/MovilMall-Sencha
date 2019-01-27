Ext.define('BrandAdmin.view.movies.MoviesShowTimesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviesshowtimespanel',
   cls:'flatpanel',
   items: [
      {
         xtype: 'moviesshowtimesdataview'
      }],
   autoScroll: true,
   border:true,
   tbar: [{
      //tooltip: 'New Show Time',
      margin: '0 0 0 5',
      id: 'addShowTime',
      //text: 'new',
      action: 'new',
     // cls: 'window-button-flat',
      locales: {
         text: 'buttons.new',
         tooltip: 'add.movieshowtime.tooltip'
      }
   }] 
});