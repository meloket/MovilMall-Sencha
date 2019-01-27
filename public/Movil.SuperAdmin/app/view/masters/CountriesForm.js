//var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('SuperAdmin.view.masters.CountriesForm', {
   extend: 'Ext.form.Panel',
   xtype: 'countriesform',
   //title: '<b>Countries</b>',

   autoScroll: true,
   width: 600,
   store: 'CountriesStore',

   requires: [
      'Ext.toolbar.Spacer',
      'Ext.form.Label',
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   cls: 'at-form-large',

   items: [{
      xtype: 'fieldset',
      border: false,
      cls: 'at-fieldset-large',
      defaults: {
         fieldCls: 'at-textfield-large',
         cls: 'at-textfield-large',
         labelCls: 'at-fieldlabel-large',
         anchor: '100%',
         labelAlign: 'top',
         msgTarget: 'side'
      },
      //defaultType: 'textfield',
      items: [{
            fieldLabel: 'Country Name',
            name: 'name',
            xtype: 'textfield',
            afterLabelTextTpl: required,
            maxLength: 50,
            dataIndex: 'name',
            emptyText: 'Enter Country Name',
            tooltip: 'Enter Country Name',
            allowBlank: false
         },
        {
         xtype: 'checkboxgroup',
         fieldLabel: 'Is Default? ',
        
          tooltip: 'Set this as default Country when creating country?',
           items: [{
              boxLabel: 'Yes',
              name: 'isDefault',
              inputValue: 'true',
              itemId: 'yesDefault'
           }]
         }
      ]
   }],

   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         {
            action: 'save',
            tooltip: 'Save',
            text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70,
            height: 30
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            tooltip: 'Back to Grid',
            text: 'Cancel',
            //glyph: '88@Pictos',
            width: 70,
            height: 30
         }
      ]
   }]
});