var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
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
               fieldLabel: 'form.profileidentity.name.fieldLabel'
            },
            readOnly: true,
            name: 'name',
            emptyText: 'Brand Name'
         },
         {
            xtype: 'textfield',
            //fieldLabel: 'Contact Person',
            name: 'contactPerson',
            //emptyText: 'Name of Contact Person',
            locales: {
               fieldLabel: 'form.profileidentity.contactperson.fieldLabel'/*,
               emptyText: 'form.profileidentity.contactperson.emptyText'*/
            }
         },
         {
            xtype: 'textarea',
            //fieldLabel: 'Description',
            //readOnly: true,
            name: 'description',
            //emptyText: 'Description of Brand',
            fieldCls: 'at-textarea-large',
            locales: {
               fieldLabel: 'form.profileidentity.description.fieldLabel'/*,
               emptyText: 'form.profileidentity.description.emptyText'*/
            }
         },
         {
            xtype: 'textfield',
            //fieldLabel: 'E-mail Address',
            readOnly: true,
            name: 'email',
            emptyText: 'E-mail Address',
            locales: {
               fieldLabel: 'form.profileidentity.email.fieldLabel'
            }
         },        
         {
            xtype: 'textfield',
            //fieldLabel: 'Contact No.',
            //  readOnly: true,
            name: 'contactNo',
            allowBlank: false,
            emptyText: 'Contact No.',
            afterLabelTextTpl: required,
            locales: {
               fieldLabel: 'form.profileidentity.contactno.fieldLabel'
            }
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
         },
         {
            xtype: 'textfield',
            //fieldLabel: 'E-mail Address',
            //readOnly: true,
            name: 'website',
            emptyText: 'WebSite',
            locales: {
               fieldLabel: 'form.profileidentity.website.fieldLabel'
            }
         }
      ]
   }],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      items: [
         '->', {
            action: 'save',
            //tooltip: 'Save',
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.save',
               tooltip: 'save.tooltip'
            }
         }/*, '->', {
            action: 'next',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Next page',
            //text: 'Next',
            width: 70,
            locales: {
               text: 'buttons.next'
            }
         }*/
      ]
   }]
});