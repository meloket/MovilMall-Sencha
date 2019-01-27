Ext.define('MobileApp.view.Movies.MoviesNearByNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'moviesnearbynavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            align: 'left',
            //text: 'Back',
            id:'moviesNearByBackBut',
            //ui: 'back'
            iconCls: 'back',
            ui: 'plain'
         }
         ]
      },
      items: [
         {
            xtype: 'movieslist'
         }]
   }
});