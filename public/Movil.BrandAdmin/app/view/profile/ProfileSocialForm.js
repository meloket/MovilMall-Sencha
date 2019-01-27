Ext.define('BrandAdmin.view.profile.ProfileSocialForm', {
   extend: 'Ext.form.Panel',
   xtype: 'profilesocialform',
   autoScroll: true,

   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
      'Ext.layout.container.Column',
      'Ext.form.Panel'
   ],
   store: 'ProfileIdentityStore',
   layout: 'column',
   border: false,
   cls: 'at-form-large',
  
   items: [{
      xtype: 'fieldset',
      margin: '70px 0 0 170px',
      border: false,
      //cls: 'at-fieldset-large',
      defaults: {
         fieldCls: 'at-textfield-large',
         cls: 'at-textfield-large',
         /*labelCls: 'at-fieldlabel-large',*/
         anchor: '100%',
         //labelAlign: 'top',
         msgTarget: 'side'
      },
      //defaultType: 'textfield',
      items: [{
         xtype: 'label',
         margin: '0 0 40 80',
         style: 'font-size: 18px;',
         locales: {
            html: 'social.html'
         }
        // html: '<b>Agrega el link directo a tu red social</b>'

      },{
            xtype: 'container',
            layout: 'hbox',
            style: 'margin-top: 35px !important;',
            width: 450,
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/fb.png',
                  height: 35,
                  width: 35,
                  margin: '0 0 10 0'
               },
               {
                  xtype: 'label',
                  text: 'Facebook',
                  margin: '0 0 0 10',
                  style: { 'font-size': '15px' },
                  flex: 0.7
               },
               {
                  xtype: 'textfield',
                  emptyText: 'https://www.facebook.com/pages/Fort-Movile/145',
                  margin: '0 0 0 50',
                  name: 'fb',
                  flex: 3
               }]
         }, {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/google.png',
                  height: 35,
                  width: 35,
                  margin: '0 0 10 0'
               },
               {
                  xtype: 'label',
                  text: 'Google',
                  margin: '0 0 0 10',
                  style: { 'font-size': '15px' },
                  flex: 0.7
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 50',
                  emptyText: 'https://www.google.com/pages/Fort-Movile/145',
                  name: 'google',
                  flex: 3
               }]
         }, {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/twitter.png',
                  height: 35,
                  width: 35,
                  margin: '0 0 10 0'
               },
               {
                  xtype: 'label',
                  text: 'Twitter',
                  
                  margin: '0 0 0 10',
                  style: { 'font-size': '15px' },
                  flex: 0.7
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 50',
                  emptyText: 'https://www.twitter.com/pages/Fort-Movile/145',
                  name: 'twitter',
                  flex: 3
               }]
         }, {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/pinterest.png',
                  height: 35,
                  width: 35,
                  margin: '0 0 10 0'
               },
               {
                  xtype: 'label',
                  text: 'Pinterest',
                  margin: '0 0 0 10',
                  style: { 'font-size': '15px' },
                  flex: 0.7
               },
               {
                  xtype: 'textfield',
                  emptyText: 'https://www.pinterest.com/pages/Fort-Movile/145',
                  margin: '0 0 0 50',
                  name: 'pinterest',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/instagram.png',
                  height: 35,
                  width: 35,
                  margin: '0 0 10 0'
               },
               {
                  xtype: 'label',
                  text: 'Instagram',
                  margin: '0 0 0 10',
                  style: { 'font-size': '15px' },
                  flex: 0.7
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 50',
                  emptyText: 'https://www.instagram.com/pages/Fort-Movile/145',
                  name: 'instagram',
                  flex: 3
               }]
         }, {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/linkedin.png',
                  height: 35,
                  width: 35,
                  margin: '0 0 10 0'
               },
               {
                  xtype: 'label',
                  text: 'Linked-In',
                  margin: '0 0 0 10',
                  style: { 'font-size': '15px' },
                  flex: 0.7
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 50',
                  emptyText: 'https://www.linkedIn.com/pages/Fort-Movile/145',
                  name: 'linkedIn',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/youtube.png',
                  height: 35,
                  width: 35,
                  margin: '0 0 10 0'
               },
               {
                  xtype: 'label',
                  text: 'You Tube',
                  margin: '0 0 0 10',
                  style: { 'font-size': '15px' },
                  flex: 0.7
               },
               {
                  xtype: 'textfield',
                  emptyText: 'https://www.youtube.com/pages/Fort-Movile/145',
                  margin: '0 0 0 50',
                  name: 'youtube',
                  flex: 3
               }]
         }]
   }],

   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         '->', {
            action: 'finish',
            //tooltip: 'Finish',
            //text: 'Finish',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.finish',
               tooltip: 'save.tooltip'
            }
         }
      ]
   }]
});