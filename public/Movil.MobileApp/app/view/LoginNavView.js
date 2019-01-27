Ext.define('MobileApp.view.LoginNavView', {
   extend: 'Ext.navigation.View',
   xtype: 'loginnavview',
   requires: [
   'Ext.TitleBar'
   ],
   config: {
      navigationBar: false,
      autoDestroy: false,
      defaultBackButtonText: '',
      fullscreen: true,
      items:[ 
          {
             xtype: 'loginmainpanel'
          }]
      
   }
});
