Ext.define('BrandAdmin.view.profile.ProfilePhotographForm', {
   extend: 'Ext.form.Panel',
   xtype: 'profilephotographform',
   autoScroll: true,
   store: 'ProfileIdentityStore',
   items: [{
         xtype: 'container',
         layout: 'vbox',
         margin: '20 0 0 100',
         items: [{
               xtype: 'image',
               height: 170,
               itemId: 'logoImageBox',
               src: '#',
               name: 'logo',
               margin: '0 0 0 20'
            },
            {
               xtype: 'button',
               text: 'Upload',
               action: 'uploadLogo',
               margin: '20 0 0 80'
            }]
      },
      {
         xtype: 'container',
         layout: 'vbox',
         margin: '20 0 0 100',
         items: [{
               xtype: 'image',
               height: 170,
               src: '#',
               //name: 'profileImage',
               itemId: 'profilePicImageBox',
               margin: '0 0 0 20'
            },
            {
               xtype: 'button',
               text: 'Upload',
               action: 'uploadProfile',
               margin: '20 0 0 80'
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
            tooltip: 'Save',
            text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70
         }, '->', {
            action: 'next',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Next page',
            text: 'Next',
            width: 70
         }
      ]
   }]
});