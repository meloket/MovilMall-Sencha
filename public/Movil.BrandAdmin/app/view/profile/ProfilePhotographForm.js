Ext.define('BrandAdmin.view.profile.ProfilePhotographForm', {
   extend: 'Ext.form.Panel',
   xtype: 'profilephotographform',
   autoScroll: true,
   store: 'ProfileIdentityStore',
   items: [
      {
         xtype: 'container',
         layout: 'hbox',
         items: [{
               xtype: 'container',
               layout: 'vbox',
               margin: '20 0 0 100',
               items: [{
                  xtype: 'label',
                  margin: '0 0 5 36',
                  style: 'font-size: 18px;',
                  locales: {
                     html: 'form.profilephotoinfo.photoTitle.html'
                  }
                //  html: '<b>Foto de Tienda</b>'
                  
               },{
                     xtype: 'dataview',
                     trackOver: true,
                     margin: '5 0 0 4',
                     itemId: 'logoDataView',
                     tpl: Ext.create('Ext.XTemplate',
                        '<div class="moviePhoto">',
                        '<tpl for=".">',
                        '<div>',
                        '<img id="logoImage" style="height:150px;width:200px;" src={logo}>' +
                           '</div>',
                        '</div>',
                        '</tpl>'),

                     itemSelector: 'div.main',
                     store: {
                        fields: ['logo'],
                        data: [
                           { logo: 'img', type: 'auto' }
                        ]
                     }
                  },
                  {
                     xtype: 'fieldcontainer',
                   //  layout: 'hbox',
                     items: [{
                           xtype: 'button',
                           id: 'uploadLogo',
                           cls: 'upload-button-flat',
                           action: 'uploadLogo',
                           margin: '20 0 0 72',
                           locales: {
                              text: 'buttons.upload'
                           }
                       /* }, {
                           xtype: 'tbspacer'
                        }, {
                           xtype: 'button',
                           //text: 'Remove',
                           cls: 'upload-button-flat',
                           action: 'removeLogo',
                           margin: '20 0 0 15',
                           locales: {
                              text: 'buttons.remove'
                           }*/
                        }]
                  }]
            },
            {
               xtype: 'label',
               locales: {
                  html: 'form.profilephotoinfo.logo.html'
               },
               margin: '62 20 0 100 ',
               cls: 'main-info-BusType'
            }
         ]
      },
      {
         xtype: 'container',
         layout: 'hbox',
         items: [{
               xtype: 'container',
               layout: 'vbox',
               margin: '20 0 0 100',
               items: [{
                  xtype: 'label',
                  margin: '0 0 10 36',
                  style: 'font-size: 18px;',
                  locales: {
                     html: 'form.profilephotoinfo.logoTitle.html'
                  }
                //  html: '<b>Logo de Tienda</b>'

               }, {
                     xtype: 'dataview',
                     trackOver: true,
                     margin: '0 0 0 42',
                     itemId: 'profileDataView',
                     /*    tpl: Ext.create('Ext.XTemplate',
                      '<div class="moviePhoto">',
                           '<tpl for=".">',
                        '<div>',
                        '<tpl if="logo == null">' +
                         '<img  src="resources/images/NtAvalLogo.png">' +
                           '<tpl else>' + '<img id="logoImage" style="height:150px;width:200px;" src={logo}>' +
                         '</tpl>' +
                      '</div>',
                        '</div>',
                         '</tpl>'),*/
                     tpl: Ext.create('Ext.XTemplate',
                        '<div class="moviePhoto">',
                        '<tpl for=".">',
                        '<div>',
                        '<img id="profileImage" style="height:50px;width:120px;" src={proImage}>' +
                           '</div>',
                        '</div>',
                        '</tpl>'),
                     itemSelector: 'div.main',
                     store: {
                        fields: ['proImage'],
                        data: [
                           { proImage: 'img', type: 'auto' }
                        ]
                     }
                  },
                  {
                     xtype: 'fieldcontainer',
                     //layout: 'hbox',
                     items: [{
                           xtype: 'button',
                           //text: 'Upload',
                           action: 'uploadProfile',
                           margin: '20 0 0 72',
                           id: 'uploadProPic',
                           cls: 'upload-button-flat',
                           locales: {
                              text: 'buttons.upload'
                           }
                      /*  }, {
                           xtype: 'tbspacer'
                        }, {
                           xtype: 'button',
                           //text: 'Remove',
                           cls: 'upload-button-flat',
                           action: 'removeProfilePic',
                           margin: '20 0 0 15',
                           locales: {
                              text: 'buttons.remove'
                           }*/
                        }]
                  }]
            },
            {
               xtype: 'label',
               //html: 'Agregue su logo o </br>imágen de su local',
               locales: {
                  html: 'form.profilephotoinfo.proImage.html'
               },
               margin: '14 20 0 100 ',
               cls: 'main-info-BusType'
            }
         ]
      },
      /* {
         xtype: 'container',
         layout: 'hbox',
         items: [
            {
               xtype: 'container',
               layout: 'vbox',
               margin: '20 0 0 100',
               items: [/*{
                     xtype: 'image',
                     cls: 'photo',
                     src: 'resources/images/NtavailablePhoto.png',
                     name: 'profileImage',
                     itemId: 'profilePicImageBox',
                     margin: '0 0 0 20'
                  }#1#{
                     xtype: 'dataview',
                     trackOver: true,
                     margin: '0 0 0 25',
                       itemId: 'profileDataView',
                     tpl: Ext.create('Ext.XTemplate',
                        '<div class="main">',
                             '<tpl for=".">',

                           '<div>',
                            '<tpl if="profileImage == null">' +
                     '<img  src="resources/images/NtAvalProfilePic.png">' +
                   //    '<tpl else>' + '<img id="profileImage" style="height:120px;width:50px;" src={profileImage}>' +
                     '</tpl>' +
                          // '<img id="profileImage" style="height:200px;width:150px;" src={profileImage}>' +

                              '</div>',
                          '</div>',
                           '</tpl>'),


                     itemSelector: 'div.main',
                     store: {
                        fields: ['img', 'profileImage'],
                        data: [
                           { img: 'resources/images/NtavailablePhoto.png' }
                        ]
                     }
                  },
                  {
                     xtype: 'fieldcontainer',
                     layout: 'hbox',
                     items: [{
                           xtype: 'button',
                           //text: 'Upload',
                           action: 'uploadProfile',
                           margin: '20 0 0 27',
                           locales: {
                              text: 'buttons.upload'
                           }
                        }, {
                           xtype: 'button',
                           //text: 'Remove',
                           action: 'removeProfilePic',
                           margin: '20 0 0 15',
                           locales: {
                              text: 'buttons.remove'
                           }
                        }]
                  }]
            }/*, 
                  {
                     xtype: 'label',
                     html: 'Please upload your </br>photograph for your </br>business which will be </br>displayed in business profile.',
                     margin: '31 0 0 150 ',
                     cls: 'main-info-BusType'
                  }#1#]
      },*/
      {
         xtype: 'label',
         //text: '*After upload or remove photo ,please click on save button',
         locales: {
            text: 'form.profilephotoinfo.note.text'
         },
         margin: '20 0 0 50'
      }],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         '->', {
            action: 'save',
            //tooltip: 'Save',
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.next',
               tooltip: 'next.tooltip'
            }
         }
      ]
   }]
});