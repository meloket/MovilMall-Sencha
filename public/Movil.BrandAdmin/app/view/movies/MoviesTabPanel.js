Ext.define('BrandAdmin.view.movies.MoviesTabPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviestabpanel',
   layout: 'fit',
   width: 800,
   //border:true,
   items: [{
      xtype: 'tabpanel',
      itemId: 'moviesTabPanel',
      cls: 'flatTabPanel',
      activeTab: 0,
      border: false,
      tabBar: {
         items: [{
            xtype: 'tbfill'
         }, {
            xtype: 'button',
            action: 'back',
            cls:'back-button-flat',
            tooltip: 'Back',
            glyph: '115@pictos',
            locales: {
               text: 'buttons.back'
            }
         }]
      },
      items: [{
         
            locales: {
               title: 'tabpanel.moviestab1title.title'
            },
        
         //bodyPadding: 10,
         xtype: 'moviesinfopanel',
         itemId: 'moviesinfo'

      }, {
         //title: "Locations/Show Times",
         xtype: 'movieslocpanel',
         locales: {
            title: 'tabpanel.moviestab2title.title'
         }
      }]
   }]
});