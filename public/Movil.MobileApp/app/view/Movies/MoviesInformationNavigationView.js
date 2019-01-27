Ext.define('MobileApp.view.Movies.MoviesInformationNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'moviesinformationnavigationview',
   config: {
      fullscreen: true,
      height: '100%',
      autoDestroy: false,
      navigationBar: false,
      ui:'light',
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
            },*/ items: [
         {
            xtype: 'moviesprofileview'
         }]
   }
});
