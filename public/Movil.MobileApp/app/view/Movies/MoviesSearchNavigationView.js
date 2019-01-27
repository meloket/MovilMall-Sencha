Ext.define('MobileApp.view.Movies.MoviesSearchNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'moviessearchnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         backButton: {
            iconCls: 'back',
            ui: 'plain',
            id:'searchBack'
         },
         items: [{
            align: 'left',
            id: 'moviesSearchBackBut',
            iconCls: 'back',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
         xtype: 'moviessearchlist'
      }]

   }
});
