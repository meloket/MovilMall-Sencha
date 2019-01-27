var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('SuperAdmin.view.businessTypes.CategoriesForm', {
   extend: 'Ext.form.Panel',
   xtype: 'categoriesform',
   store: 'CategoriesCenterStore',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   cls: 'at-form-large',
   border: false,
   minWidth: 450,
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
            xtype: 'container',
            layout: 'hbox',
            items: [{
                  xtype: 'label',
                  text: 'Business Type:',
                  margin: '6 10 0 0 '
               }, {
                  xtype: 'textfield',
                  afterLabelTextTpl: required,
                  readOnly: true,
                  itemId: 'busTypeName',
                  tooltip: 'Enter new business type',
                  emptyText: 'Enter new business type',
                  allowBlank: false
               }]
         }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                  xtype: 'label',
                  text: 'Category Name:',
                  margin: '6 5 0 0 '
               }, {
                  name: 'name',
                  xtype: 'textfield',
                  afterLabelTextTpl: required,
                  
                  tooltip: 'Enter new Category',
                  dataIndex: 'name',
                  emptyText: 'Enter new category'
                  //allowBlank: false
               }]
         }
      ]
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
            cls: 'save-flat-btn',
            margin: '5 5 0 -60',
            width: 70,
            height: 30
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            tooltip: 'Back to Grid',
            cls: 'save-flat-btn',
            text: 'Cancel',
            width: 70,
            height: 30
         }
      ]
   }]
});