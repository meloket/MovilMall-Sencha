var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('SuperAdmin.view.masters.CitiesForm', {
   extend: 'Ext.form.Panel',
   alias: 'widget.citiesform',

   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer'
   ],

  
   cls: 'at-form-large',
   border: false,
   //title: '<font color = "white"><b>Cities(Edit)</b></font>',
   width: 450,
   autoScroll: true,
   store: 'CitiesStore',

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
         forceSelection: true,
         itemId: 'countryCombo',
         store: 'CountryComboStore',
         displayField: 'name',
         valueField: 'key',
         lastQuery: '',
         afterLabelTextTpl: required,
         emptyText: 'Select Country',
         tooltip: 'Select Country',
        allowBlank: false,
         typeAhead: true,
         typeAheadDelay: 10,
         queryMode: 'local'
      }, {
         xtype: 'combo',
         fieldLabel: 'State',
         dataIndex: 'stateId',
         forceSelection: true,
         name: 'stateId',
         store: 'StateComboStore',
         displayField: 'name',
         valueField: 'key',
         lastQuery: '',
         afterLabelTextTpl: required,
         emptyText: 'Select State',
         tooltip: 'Select State',
         allowBlank: false,
         typeAhead: true,
         typeAheadDelay: 10,
         queryMode: 'local',
         itemId:'stateCombo'
      }, {
         fieldLabel: 'City Name',
         name: 'name',
         xtype: 'textfield',
         dataIndex: 'name',
         emptyText: 'Enter City Name',
         tooltip: 'City Name',
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
      border: false,
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