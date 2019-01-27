Ext.define('MobileApp.view.MainTabContainer', {
   extend: 'Ext.Container',
   xtype: 'maintabcontainer',
   //cls: 'mainnn',
   
   config: {
      width: '100%',
      cls: 'slide',
      items:[{
         xtype:'offerspanel'
   }]
    
   }
});