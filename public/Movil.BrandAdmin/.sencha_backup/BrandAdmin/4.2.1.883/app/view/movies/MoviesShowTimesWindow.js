Ext.define('BrandAdmin.view.movies.MoviesShowTimesWindow', {
   extend: 'Ext.window.Window',
   xtype: 'moviesshowtimeswindow',
   title: 'Add Show Times',
   closeAction: 'show',
   titleAlign: 'center',
   width: 400,
   layout: 'fit',
   resizable: true,
   animateTarget: 'addMovieShowTime',
   modal: true,
   shadow: true,
   shadowOffset: 25,
   border: 1,
   style: {
      'box-shadow': '0 0 25px rgba(0, 0, 0, 0.8)'
   },
   items: [{
      xtype: 'moviesshowtimesform'
   }]
});
