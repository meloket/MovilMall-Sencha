Ext.define('BrandAdmin.view.movies.MoviesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'moviespanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },

   border: false,

   items: [{
      xtype: 'moviesgrid'
   },
      {
         xtype: 'moviestabpanel'
      }]
});