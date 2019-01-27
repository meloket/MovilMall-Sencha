Ext.define('MobileApp.view.Movies.StoresPanel', {
   extend: 'Ext.Panel',
   xtype: 'storespanel',

   config: {
      fullscreen:true,
      cls: 'slide',
      width: '100%',
      items: [{
         xtype: 'storesnavigationview',
         width: '100%'
      }]
   }
});