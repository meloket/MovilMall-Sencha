var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('MobileApp.view.SignUpForm', {
   extend: 'Ext.Container',
   xtype: 'signupform',

   requires: [
      'Ext.form.Panel',
      'Ext.form.FieldSet',
      'Ext.field.Text',
      'Ext.field.Password'
   ],

   config: {
      title: 'Registrarse',
     // style: 'background:url("resources/images/loginimg.png"); background-size:cover;',
     // cls: 'signInForm',
      layout: 'fit',
      items: [{
         xtype: 'formpanel',
         margin: 10,
         items: [{
            xtype: 'fieldset',
            defaults: {
               labelWidth: '35%'
            },

            items: [{
               xtype: 'textfield',
               name: 'name',
               itemId: 'name',
               afterLabelTextTpl: required,
               placeHolder: 'Nombre',
               allowBlank: false
            }, {
               xtype: 'textfield',
               placeHolder: 'Email',
               allowBlank: false,
               html: '<font style="font-size: 0.7em;margin-left: 0.7em;" color="red">Para confirmar su registro.</font>',
               name: 'email'
            }, /*{
               xtype: 'label',
               html: '<font color="red">Para confirmar su registro.</font>'
            } ,*/{
               xtype: 'passwordfield',
               placeHolder: 'Contraseña',
               name: 'pass',
               allowBlank: false
            }, {
               xtype: 'datepickerfield',
               placeHolder: 'Cumpleaños',
               picker: { yearFrom: 2014, yearTo: 1900 },
               dateFormat: 'd/m/Y',
               name: 'dob',
               renderer: function (value) {
                  if (value) {
                     var currentFullDate = new Date();
                     var currentDate = currentFullDate.getDate() + '/' + (currentFullDate.getMonth() + 1) + '/' + currentFullDate.getFullYear();
                     var fullDate = value.getDate() + '/' + (value.getMonth() + 1) + '/' + value.getFullYear();
                     if (value < currentFullDate && currentDate != fullDate) {
                        return '<span style="color:red">' + fullDate + '</span>';
                     }
                     return fullDate;
                  }
               }
            }, {
               xtype: 'selectfield',
               placeHolder: 'Ciudad',
               typeAhead: true,
               typeAheadDelay: 10,
               name: 'cityId',
               dataIndex: 'cityId',
               store: 'CityComboStore',
               displayField: 'name',
               valueField: 'key'
            }, {

               xtype: 'selectfield',
               placeHolder: 'Provincia',
               typeAhead: true,
               typeAheadDelay: 10,
               dataIndex: 'stateId',
               name: 'stateId',
               store: 'StateComboStore',
               displayField: 'name',
               valueField: 'key'
            },
                {
                   xtype: 'image',
                   itemId: 'loadingGifSignUp',
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
                  text: 'Regístrame',
                  action: 'register',
                  id: 'registerBtn',
                  cls:'flat-button-no-icon',
                  flex: 1
               }, {
                  xtype: 'button',
                  text: 'Cancelar',
                  action: 'cancel',
                  flex: 1,
                  cls: 'flat-button-cancel'
               }]
            }]
         }, {
            xtype: 'label',
            ui: 'plain',
            style: {
              'font-size': '0.5em'
            },
            margin: '-15 10 0 10',
            itemId: 'privacy',
            html: '<input type="checkbox" name="vehicle" id="privacyChekbox" checked="true" style="vertical-align: middle;">&nbsp;&nbsp;&nbsp;Estoy de acuerdo con las leyes de ' +
               '<span id="privacy" style="text-decoration: underline;">privacidad.</span></a>',
            //html:'<img src="resources/icons/nw-icons/chkbox.png">'+'Leí y estoy de acuerdo con las leyes de '+'<span id="PrivacyLink">privacidad.</span>',  
            cls: 'privacy',
            listeners:
               {
                  element: 'element',
                  tap: function (e, t) {
                     var touch = e.target.id;

                     if (touch == "privacy") {
                        var termsServiceLink = "movil-mall.com/condiciones.html";
                        window.open("http://" + termsServiceLink, '_system');
                     }
                     if (touch == "privacyChekbox") {
                        var checked = document.getElementById("privacyChekbox").checked;
                        console.log(checked);
                        if (checked) {
                           Ext.getCmp('registerBtn').setDisabled(true);
                        } else {
                           Ext.getCmp('registerBtn').setDisabled(false);
                        }
                     }
                  }
               }
         }
        ]
      }],


      record: null
   },

   updateRecord: function(newRecord) {
      this.down('formpanel').setRecord(newRecord);
   },

   saveRecord: function() {

      var formPanel = this.down('formpanel'),
         record = formPanel.getRecord();
      console.log(record);
      formPanel.updateRecord(record);
      return record;
   }
});