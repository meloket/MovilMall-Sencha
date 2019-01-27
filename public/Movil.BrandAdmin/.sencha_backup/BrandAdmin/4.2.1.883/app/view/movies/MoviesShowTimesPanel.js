Ext.define('BrandAdmin.view.movies.MoviesShowTimesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviesshowtimespanel',

   items: [
      {
         xtype: 'moviesshowtimesdataview'
      }],
 
      tbar :[{
         tooltip: 'New Show Time',
         margin: '0 0 0 5',
         id: 'addShowTime',
         text: 'new',
         action: 'new',
         cls: 'add-btn',
         overCls: 'add-btn-hover'
         //glyph: 43
      }]
 
});