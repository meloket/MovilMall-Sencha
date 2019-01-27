Ext.define('SuperAdmin.view.movies.MoviesTabPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviestabpanel',
   layout: 'fit',
   width: 800,
   items: [{
      xtype: 'tabpanel',
      itemId: 'moviesTab',
      activeTab: 0,
      tabBar: {
         items: [{
            xtype: 'tbfill'
         }, {
            xtype: 'button',
            action: 'back',
            tooltip: 'Back',
            text: 'Back',
            glyph: '115@pictos'
         }]
      },
      items: [{
         title: "Information",
         //bodyPadding: 10,
         xtype: 'moviesinfopanel',
         itemId: 'moviesinfo'
         
      }, {
         title: "Locations/Show Times",
         xtype: 'movieslocpanel'
      }]
   }]
});