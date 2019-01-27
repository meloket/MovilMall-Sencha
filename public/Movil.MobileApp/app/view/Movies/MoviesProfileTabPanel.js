Ext.define('MobileApp.view.Movies.MoviesProfileTabPanel', {
   extend: 'Ext.tab.Panel',
   xtype: 'moviesprofiletabpanel',

   config: {
      tabBarPosition: 'bottom',
      /*  width: '100%',*/
      //cls: 'eventsTabPanel',
      ui: 'light',
      cls: 'eventsTabPanel',
      items: [ {
         title: 'Información',
         xtype: 'moviesinformationnavigationview'
      }, {
         // iconCls: 'searchd', 
         title: 'Horarios',
         xtype: 'moviesshowtimesnavigationview'
      }]
   }
});