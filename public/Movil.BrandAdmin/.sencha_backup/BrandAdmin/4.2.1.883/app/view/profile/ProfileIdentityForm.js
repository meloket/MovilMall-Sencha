
Ext.define('BrandAdmin.view.profile.ProfileIdentityForm', {
   extend: 'Ext.form.Panel',
   xtype: 'profileidentityform',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   store: 'ProfileIdentityStore',
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
      // defaultType: 'textfield',
      items: [{
         xtype: 'textfield',
         locales: {
            fieldLabel: 'fields.name'
         },
        
         readOnly: true,
         name: 'name',
         emptyText: 'Brand Name'
      },
         {
            xtype: 'textfield',
            fieldLabel: 'Contact Person',
            name: 'contactPerson',
            emptyText: 'Name of Contact Person'
         },
         {
            xtype: 'textarea',
            fieldLabel: 'Description',
            //readOnly: true,
            name: 'description',
            emptyText: 'Description of Brand',
            fieldCls: 'at-textarea-large'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'E-mail Address',
            readOnly: true,
            name: 'email',
            emptyText: 'E-mail Address'
         },
        
         {
            xtype: 'textfield',
            fieldLabel: 'Contact No.',
            readOnly: true,
            name: 'contactNo',
            emptyText: 'Contact No.'
            /*xtype: 'container',
            layout: 'hbox',
            items: [
               {
                  xtype: 'label',
                  text: 'Contact No.',
                  style: {
                     fontWeight: 'bold'
                  },
                  margin: '10 5 0 0 '
               },
               {
                  xtype: 'textfield',
                  margin: '6 3 0 30 ',
                  width: 50,
                  height: 28,
                  readOnly: true
               },
               {
                  xtype: 'textfield',
                  margin: '6 5 0 12 ',
                  height: 28,
                  name: 'contactNo',
                  readOnly: true
               }]*/
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
            width: 70
         }, '->', {
            action: 'next',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Next page',
            text: 'Next',
            width: 70
         }
      ]
   }]
});