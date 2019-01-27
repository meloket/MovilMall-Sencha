Ext.define('MobileApp.view.Settings.SettingsLanguageForm', {
   extend: 'Ext.Container',
   xtype: 'settingslanguageform',

   requires: [
      'Ext.form.Panel',
      'Ext.form.FieldSet',
      'Ext.field.Text'
   ],

   config: {
      title: 'Idioma',
      layout: 'fit',
      items: [
         {
            xtype: 'formpanel',
            id:'lanform',
            items: [
               {
                  xtype: 'fieldset',
                  defaults: {
                     labelWidth: '70%'
                  },

                  items: [
                     {
                        xtype: 'radiofield',
                        label: 'English',
                        value:'en',
                        name: 'lang',
                        itemId: 'english'
                       
                             
                     },
                     {
                        xtype: 'radiofield',
                        name: 'lang',
                        value: 'fr',
                        label: 'Español',
                        itemId: 'spanish',
                        checked: true
                     }
                  ]
               }
            ]
         }
      ],


      record: null
   }
});