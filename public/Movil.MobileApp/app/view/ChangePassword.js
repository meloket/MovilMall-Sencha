
Ext.define('MobileApp.view.ChangePassword', {
   extend: 'Ext.Container',
   xtype: 'changepassword',

   requires: [
      'Ext.form.Panel',
      'Ext.form.FieldSet',
      'Ext.field.Text'
   ],

   config: {

      layout: 'fit',
      title: 'Cambiar la Contraseña',
      items: [
         {
            xtype: 'formpanel',

            margin: 10,
            items: [
               {
                  xtype: 'fieldset',
                  defaults: {
                     labelWidth: '35%'
                  },

                  items: [

                     {
                        xtype: 'textfield',
                        locales: {
                           placeHolder: 'settings.changePass.old.placeHolder'
                        },
                        //placeHolder: 'Contraseña Antigua',
                        allowBlank: false,
                        name: 'oldPass'
                     },
                      {
                         xtype: 'textfield',
                         locales: {
                            placeHolder: 'settings.changePass.new.placeHolder'
                         },
                         //placeHolder: 'Nueva Contraseña',
                         allowBlank: false,
                         name: 'newPass'
                      },
                      {
                         xtype: 'textfield',
                         locales: {
                            placeHolder: 'settings.changePass.confirm.placeHolder'
                         },
                        // placeHolder: 'Confirmar Contraseña',
                         allowBlank: false,
                         name: 'confirmPass'
                      },
                      {
                         xtype: 'button',
                         //  text: 'Continuar',
                         locales: {
                            text: 'buttons.continue'
                         },
                         cls: 'flat-button-no-icon',
                         action: 'changepass'
                         //margin: 25
                      }


                  ]
               }
            ]
         }
      ]
   }
});