var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('SuperAdmin.view.masters.StatesForm', {
   extend: 'Ext.form.Panel',
   alias: 'widget.statesform',

   requires: [
     'Ext.toolbar.Spacer',
      'Ext.form.Label',
       'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   cls: 'at-form-large',
   border: false,
   //title: '<font color = "white"><b>States(Edit)</b></font>',
   autoScroll: true,
   width: 600,
   store: 'StatesStore',
   
  
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
      defaultType: 'textfield',
      items: [{
         xtype: 'combo',
         fieldLabel: 'Country',
         dataIndex: 'countryId',
         name: 'countryId',
         store: 'CountryComboStore',
         displayField: 'name',
         forceSelection: true,
         valueField: 'key',
         lastQuery: '',
         emptyText: 'Select Country',
         tooltip: 'Select Country',
         allowBlank: false,
         afterLabelTextTpl: required,
         typeAhead: true,
         typeAheadDelay: 10,
         queryMode: 'local',
         itemId: 'countryCombo'
      }, {
         fieldLabel: 'State Name',
         name: 'name',
         xtype: 'textfield',
         dataIndex: 'name',
         emptyText: 'Enter Name',
         tooltip: 'Enter Name',
         afterLabelTextTpl: required,
         maxLength: 50,
         allowBlank: false
      }, {
         xtype: 'checkboxgroup',
         fieldLabel: 'Is Default? ',
         tooltip: 'Set this as default Country when creating country?',
         items: [{
            boxLabel: 'Yes',
            name: 'isDefault',
            inputValue: 'true',
            itemId: 'yesDefault'
         }]
      }]
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
            width: 70,
            height: 30
         }
      ]
   }]
});