
Ext.define('MobileApp.view.ForgotPassForm', {
   extend: 'Ext.Container',
   xtype: 'forgotpassform',

   requires: [
      'Ext.form.Panel',
      'Ext.form.FieldSet',
      'Ext.field.Text'
   ],

   config: {
      style: 'background:url("resources/images/loginimg.png"); background-size:cover;',
      cls: 'signInForm',
      layout: 'fit',
      title: 'Olvidó su clave?',
      items: [{
         xtype: 'img',
         src: 'resources/images/appIcon.png',
         height: '200px',
         margin: '30px'
      },
         {
            xtype: 'formpanel',
            style: { top: '45%' },
            items: [
               {
                  xtype: 'fieldset',
                  defaults: {
                     labelWidth: '35%'
                  },

                  items: [
                    
                     {
                        xtype: 'textfield',
                        placeHolder: 'Introduce tu correo electrónico',
                        allowBlank: false,
                        name: 'email'
                     },
                      {
                         xtype: 'image',
                         itemId: 'loadingGifForgotPass',
                         src: 'resources/images/loadinggif.GIF',
                         width: 132,
                         height: 15,
                         margin: '0 auto 0 auto',
                         hidden: true
                      },
                     {
                        xtype: 'container',
                        layout: {
                           type: 'hbox'
                        },
                        items: [{
                           xtype: 'button',
                           text: 'Continuar',
                           action: 'forgotpass',
                           cls:'flat-button-no-icon',
                           flex: 1
                        }, {
                           xtype: 'button',
                           text: 'Cancelar',
                           action: 'cancel',
                           flex: 1,
                           cls: 'flat-button-cancel'
                        }]
                     }
                  ]
               }
              
            ]
         }
      ]
   }
});