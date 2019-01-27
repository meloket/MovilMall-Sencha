Ext.define('MobileApp.view.Settings.SettingsNotificationsList', {
   extend: 'Ext.Container',
   xtype: 'settingsnotificationslist',

   requires: [
      'Ext.form.Panel',
      'Ext.form.FieldSet',
      'Ext.field.Text'
   ],

   config: {
      locales: {
         title: 'settings.profileView.title'
      },
      layout: 'fit',
      items: [
         {
            xtype: 'formpanel',
            
            items: [
               {
                  xtype: 'fieldset',
                  defaults: {
                     labelWidth: '66%'
                  },

                  items: [
                     {
                        xtype: 'togglefield',
                        label: 'Pop-ups'
                     },
                     {
                        xtype: 'togglefield',
                        label: 'Silencio'
                     }
                  ]
               }
            ]
         }
      ],


      record: null
   }
});