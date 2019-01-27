Ext.define('MobileApp.view.Settings.SettingsEditProfileView', {
   extend: 'Ext.Container',
   xtype: 'settingseditprofileview',

   requires: [
      'Ext.form.Panel',
      'Ext.form.FieldSet',
      'Ext.field.Text'
   ],
   config: {
      title: 'Editar',
       /* locales: {
         title: 'settings.profileView.title'
      },*/
      layout: 'fit',
      items: [
         {
            xtype: 'formpanel',
            //margin:10,
            items: [
               {
                  xtype: 'fieldset',
                  defaults: {
                     labelWidth: '35%'
                  },

                  items: [
                     {
                        xtype: 'textfield',
                        name: 'name',
                        itemId: 'name',
                        placeHolder: 'Nombre'
                     },
                     {
                        xtype: 'textfield',
                        placeHolder: 'Email',
                        name: 'email',
                        readOnly: true
                     },
                     /* {
                        xtype: 'textfield',
                        placeHolder: 'Password',
                        name: 'pass'
                     },*/
                     {
                        xtype: 'datepickerfield',
                        placeHolder: 'Cumpleños',
                        dateFormat: 'd/m/Y',
                        picker: { yearFrom: 2014, yearTo: 1900 },
                        name: 'dob'
                     },
                     {
                        xtype: 'selectfield',
                        placeHolder: 'Ciudad',
                        typeAhead: true,
                        typeAheadDelay: 10,
                        name: 'cityId',
                        itemId: 'cityCombo',
                        dataIndex: 'cityId',
                        store: 'CityComboStore',
                        displayField: 'name',
                        valueField: 'key'
                     },
                     {
                        xtype: 'selectfield',
                        placeHolder: 'Provincia',
                        typeAhead: true,
                        typeAheadDelay: 10,
                        dataIndex: 'stateId',
                        itemId: 'StateCombo',
                        name: 'stateId',
                        store: 'StateComboStore',
                        displayField: 'name',
                        valueField: 'key'
                     },
                     /*{
                         margin: '10 0 10 3em',
                         xtype: 'image',
                         src: "resources/images/gucci.jpg",
                         id: 'profileImage',
                         //centered: true,
                         name: 'photo',
                         height: '9em',
                         width: '10em'
                      },*/
                     /*{
                           
                         /*height:'100%',#1#
                         xtype: 'dataview',
                         id: 'userProfilePic',
                         itemTpl: '<div class="main">' +
                         '<img  id="profilePic" src={photo} style="height: 141px;width: 135px;margin-top: 350px;margin-left: 81px;">' +
                            /*+ '<tpl else>' +#1#
                         //    '<img id="profilePic" src="resources/images/like2.png" style="height: 141px;width: 135px;margin-top: 350px;margin-left: 81px;">' + //'</tpl>' +
                              '</div>',

                         store: 'LoginStore'
                      }, */
                     {
                        margin: '10 auto 10 auto',
                        xtype: 'dataview',
                        //src: "resources/images/gucci.jpg",
                        id: 'userProfilePic',
                        scrollable: false,
                        //centered: true,
                        cls: 'settingsEditViewProfilePhoto',
                        name: 'photo',
                        height: '9em',
                        width: '10em',
                        store: 'LoginStore',
                        itemTpl: new Ext.XTemplate(
                           '<tpl if="photo == \'\'">' +
                               '<div>{[this.getPercentage()]}</div>'+
                              '<div class="editProfilePhoto">' +
                              '<img id="profilePic" src="resources/icons/nw-icons/userPicNtAvail.png">' +
                              '</div>' +
                              '<tpl else>' +
                              '<div class="editProfilePhoto">' +
                              '<img id="profilePic" src={photo}></img>' +
                              '</div>' +
                              '</tpl>' ,
                            {
                               getPercentage: function ()
                               {
                                  var lang = Ext.getStore('LoginSqlStore').data.items[0].data.lang;
                                  if (lang == 'en')
                                  {
                                     return '<div class="editProfilePhoto">' + '<img  src="resources/icons/nw-icons/userPicNtAvailEnglish.png">' + '</div>';
                                  }
                                  if (lang == 'fr') {
                                     return '<div class="editProfilePhoto">' + '<img  src="resources/icons/nw-icons/userPicNtAvail.png">' + '</div>';
                                  }
                                 
                               }
                            }
                        )
                        
                        //itemTpl: '<div class="editProfilePhoto">' +       
                        //   '<img id="profilePic" src={photo}></img>' +   
                        //   '</div>'
                     },
                     {
                        xtype: 'button',
                        locales: {
                           text: 'buttons.save'
                        },
                        //text: 'Guardar',
                        //margin: 25,
                        cls: 'flat-button-no-icon',
                        itemId: 'save'
                     }
               
                     /* {
                        xtype: 'image',
                        src: "#",
                        id: 'profileImage',
                        centered:true,
                        width: 200,
                   //     margin:'0 0 0 49',
                        name: 'photo',
                        height: 200,
                        margin:'292 0 0 0'
                     }*/
                  ]
               }
            ]
         }
         /*{
            
            xtype: 'dataview',
            id: 'userProfilePic',
            itemTpl: '<div class="main">' +
            '<img  id="profilePic" src={photo} style="height: 141px;width: 135px;margin-top: 350px;margin-left: 81px;">' +
               /*+ '<tpl else>' +#2#
            //    '<img id="profilePic" src="resources/images/like2.png" style="height: 141px;width: 135px;margin-top: 350px;margin-left: 81px;">' + //'</tpl>' +#1#
                 '</div>',

            store: 'LoginStore'
         }*/
      ],

      record: null
   }
});