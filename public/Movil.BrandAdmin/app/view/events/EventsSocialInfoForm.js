Ext.define('BrandAdmin.view.events.EventsSocialInfoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'eventssocialinfoform',
   autoScroll: true,
   border: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
      'Ext.layout.container.Column',
      'Ext.form.Panel'
   ],
   layout: {
      type: 'vbox',
      align: 'center'
   },
   cls: 'at-form-large',
   width: '100%',
   items: [{
      xtype: 'fieldset',
      margin: '50 0 0 0',
      border: false,
      defaults: {
         fieldCls: 'at-textfield-large',
         cls: 'at-textfield-large',
         anchor: '100%',
         labelAlign: 'top',
         msgTarget: 'side'
      },
      items: [{
         xtype: 'label',
         margin: '0 0 40 80',
         style: 'font-size: 18px;',
         locales: {
            html: 'social.html'
         }
         // html: '<b>Agrega el link directo a tu red social</b>'

      }, {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            flex: 1,
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
                  margin: '0 0 0 50',
                  name: 'fb',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            flex: 1,
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
                  name: 'twitter',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            flex: 1,
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
                  name: 'linkedIn',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            flex: 1,
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
                  name: 'google',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            flex: 1,
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
                  margin: '0 0 0 50',
                  name: 'pinterest',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            flex: 1,
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
                  name: 'instagram',
                  flex: 3
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            width: 450,
            flex: 1,
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
         {
            action: 'save',
            //tooltip: 'Save',
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.save',
               tooltip: 'save.tooltip'
            }/*,
            height:30*/
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.cancel',
               tooltip: 'back.tooltip'
            }/*,
            height: 30*/
         }
      ]
   }]
});