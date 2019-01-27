Ext.define('MobileApp.view.Movies.MoviesTabPanel', {
   extend: 'Ext.tab.Panel',
   xtype: 'moviestabpanel',

   config: {
      tabBarPosition: 'bottom',
      ui: 'light',
      cls: 'eventsTabPanel',
      items: [{
            itemId: 'nearByTab',
         //title: 'Near By',
            title: 'Locales',
            xtype: 'moviesnearbynavigationview'
         }, {
            // iconCls: 'searchd', 
            //title: 'Search',
            title:'Buscar',
            xtype: 'moviessearchnavigationview'
         }/*, {
            title: 'Information',
            xtype: 'moviesinformationnavigationview'
         }, {
            // iconCls: 'searchd', 
            title: 'Show times',
            xtype: 'moviesshowtimesnavigationview'
         }*/]
   }
});