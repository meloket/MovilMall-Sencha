
Ext.apply(Ext.form.field.VTypes, {
   password: function (val, field) {
      if (field.initialPassField) {
         var pwd = field.up('form').down('#' + field.initialPassField);
         return (val == pwd.getValue());
      }
      return true;
   },
   passwordText: 'Passwords do not match'
});


Ext.define('BrandAdmin.view.ChangePwdPanel', {
   extend: 'Ext.form.Panel',
   xtype: 'changepwdpanel',
   border: true,
   cls:'flatpanel',
   //title: 'Change Password',
   locales: {
      title: 'changepwd.title'
   },
   width: 400,
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
         items: [{    
               xtype: 'textfield',
               allowBlank: false,
               //fieldLabel: 'Old Password',
               //emptyText: 'Enter Old Password',
               //tooltip: 'Enter Old Password',
               itemId: 'oldPassword',
               inputType: 'password',
               dataIndex: 'pwdHash',
               locales: {
                  fieldLabel: 'changepwd.old.fieldLabel'
               }
            }, {
               xtype: 'textfield',
               allowBlank: false,
               //fieldLabel: 'New Password',
               itemId: 'newPassword',
               //emptyText: 'Enter New Password',
               //tooltip: 'Enter New Password',
               inputType: 'password',
               name: 'newPwdHash',
               dataIndex: 'newPwdHash',
               locales: {
                  fieldLabel: 'changepwd.new.fieldLabel'
               }
            },
            {
               xtype: 'textfield',
               allowBlank: false,
               itemId: 'confirmPassword',
               //fieldLabel: 'Confirm Password',
               //emptyText: 'Enter Above Password ',
               //tooltip: 'Enter Above Password',
               inputType: 'password',
               vtype: 'password',
               dataIndex: 'newPwdHash',
               initialPassField: 'newPassword',
               name: 'confirmPassword',
               locales: {
                  fieldLabel: 'changepwd.confirm.fieldLabel'
               }
            }]        
      }
   ],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      border: false,
      layout: { pack: 'center' },
      items: [
         {
            action: 'save',
            //tooltip: 'Save',
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70,
            locales: {
               text: 'buttons.save'
            }
         }
      ]
   }]
});