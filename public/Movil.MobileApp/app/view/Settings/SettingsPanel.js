Ext.define('MobileApp.view.Settings.SettingsPanel', {
   extend: 'Ext.Panel',
   xtype: 'settingspanel',

   config: {

      cls: 'slide',
      width: '100%',
      items: [{
         xtype: 'settingsnavigationview',
         width: '100%'
      }]
   }
});