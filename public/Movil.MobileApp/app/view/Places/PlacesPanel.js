Ext.define('MobileApp.view.Places.PlacesPanel', {
   extend: 'Ext.Panel',
   xtype: 'placespanel',

   config: {
      
      cls: 'slide',
      width: '100%',
      items: [{
         xtype: 'placesmainnavigationview',
         width: '100%'
      }]
   }
});