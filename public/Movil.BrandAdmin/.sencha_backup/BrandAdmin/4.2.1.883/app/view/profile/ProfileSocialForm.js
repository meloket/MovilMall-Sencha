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
   store:'ProfileIdentityStore',
   layout: 'column',
   border: false,
   cls: 'at-form-large',
   items: [{
      xtype: 'fieldset',
      width: 700,
      //margin:'88 0 0 150',
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

      //defaultType: 'textfield',
      items: [{
         xtype: 'container',
         layout: 'hbox',
         margin: '88 0 0 150',
         items: [
            {
               xtype: 'image',
               src: 'resources/icons/facebook.png',
               height: 16,
               width: 16
               //flex:1
            },
            {
               xtype: 'label',
               text: 'Facebook',
               margin: '0 0 0 10',
               style: { 'font-weight': 'bold' }
               //flex:1
            },
            {
               xtype: 'textfield',
               margin: '0 0 0 50',
               width: 300,
               name:'fb'
               //flex: 1
            }]
      },

         {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 0 150',
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/twitter.png',
                  height: 16,
                  width: 16
                  //flex:1
               },
               {
                  xtype: 'label',
                  text: 'Twitter',
                  margin: '0 0 0 10',
                  style: { 'font-weight': 'bold' }
                  //flex:1
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 68',
                  width: 300,
                  name: 'twitter'
                  //flex: 1
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 0 150',
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/linkedin.png',
                  height: 16,
                  width: 16
                  //flex:1
               },
               {
                  xtype: 'label',
                  text: 'Linked-In',
                  margin: '0 0 0 10',
                  style: { 'font-weight': 'bold' }
                  //flex:1
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 54',
                  width: 300,
                  name: 'linkedIn'
                  //flex: 1
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 0 150',
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/google.png',
                  height: 16,
                  width: 16
                  //flex:1
               },
               {
                  xtype: 'label',
                  text: 'Google',
                  margin: '0 0 0 10',
                  style: { 'font-weight': 'bold' }
                  //flex:1
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 66',
                  width: 300,
                  name: 'google'
                  //flex: 1
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 0 150',
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/pinterest.png',
                  height: 16,
                  width: 16
                  //flex:1
               },
               {
                  xtype: 'label',
                  text: 'Pinterest',
                  margin: '0 0 0 10',
                  style: { 'font-weight': 'bold' }
                  //flex:1
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 55',
                  width: 300,
                  name: 'pinterest'
                  //flex: 1
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 0 150',
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/instagram.png',
                  height: 16,
                  width: 16
                  //flex:1
               },
               {
                  xtype: 'label',
                  text: 'Instagram',
                  margin: '0 0 0 10',
                  style: { 'font-weight': 'bold' }
                  //flex:1
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 47',
                  width: 300,
                  name: 'instagram'
                  //flex: 1
               }]
         },
         {
            xtype: 'container',
            layout: 'hbox',
            margin: '0 0 0 150',
            items: [
               {
                  xtype: 'image',
                  src: 'resources/icons/youtube.png',
                  height: 16,
                  width: 16
                  //flex:1
               },
               {
                  xtype: 'label',
                  text: 'You Tube',
                  margin: '0 0 0 10',
                  style: { 'font-weight': 'bold' }
                  //flex:1
               },
               {
                  xtype: 'textfield',
                  margin: '0 0 0 49',
                  width: 300,
                  name: 'youtube'
                  //flex: 1
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
            action: 'finish',
            tooltip: 'Finish',
            text: 'Finish',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70
         }
      ]
   }]

});