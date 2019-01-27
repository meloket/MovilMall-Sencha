Ext.define('MobileApp.view.Movies.MoviesShowTimesNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'moviesshowtimesnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar:false,
/*      navigationBar: {
         ui: 'light',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            //xtype: 'button',
            align: 'left',
            iconCls: 'back',
            id: 'moviesshowBackButton',
            ui: 'plain'
         }
         ]
      },*/
   items: [
   {
      xtype: 'moviestimeview'
   }]

}
});
