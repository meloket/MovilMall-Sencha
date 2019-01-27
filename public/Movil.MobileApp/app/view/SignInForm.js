Ext.define('MobileApp.view.SignInForm', {
   extend: 'Ext.Container',
   xtype: 'signinform',

   requires: [
      'Ext.form.Panel',
      'Ext.form.FieldSet',
      'Ext.field.Text'
   ],

   config: {
      layout: 'fit',
      style: 'background:url("resources/images/loginimg.png"); background-size:cover;',
      cls: 'signInForm',
      items: [{
         xtype: 'img',
         src: 'resources/images/appIcon.png',
         height: '200px',
         margin: '30px'
      }, {
         xtype: 'formpanel',
         style: { top: '45%' },
            //margin: '9em 0 0 0 ',
         items: [{
               xtype: 'fieldset',
               defaults: {
                  labelWidth: '35%'
               },
               items: [{
                     xtype: 'textfield',
                     name: 'email',
                     itemId: 'name',
                     placeHolder: 'Email'
                  }, {
                     xtype: 'passwordfield',
                     placeHolder: 'Contraseña',
                     name: 'pass'
                  }, {
                     xtype: 'container',
                     layout: {
                        type: 'hbox'
                     },

                     items: [{
                           xtype: 'button',
                           text: 'Ingresar',
                           action: 'submit',
                           cls: 'flat-button-no-icon',
                           flex: 1
                        }, {
                           xtype: 'button',
                           text: 'Cancelar',
                           action: 'cancel',
                           flex: 1,
                           cls: 'flat-button-cancel'
                        }]
                  }]
            },
            {
               xtype: 'image',
               itemId: 'loadingGifSignIn',
               src: 'resources/images/loadinggif.GIF',
               width: 132,
               height: 15,
               margin: '0 auto 0 auto',
               hidden: true
            }]
      }],

      record: null
   },

   updateRecord: function(newRecord)
   {
      this.down('formpanel').setRecord(newRecord);
   },

   saveRecord: function()
   {

      var formPanel = this.down('formpanel'),
          record = formPanel.getRecord();
      console.log(record);
      formPanel.updateRecord(record);
      return record;
   }
});