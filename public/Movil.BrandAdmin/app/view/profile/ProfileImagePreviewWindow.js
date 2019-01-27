Ext.define('BrandAdmin.view.profile.ProfileImagePreviewWindow', {
   extend: 'Ext.window.Window',
   xtype: 'profileimagepreviewwindow',
   autoCreate: true,
   layout: 'fit',
   cls: 'popupwin',
   locales: {
      title: 'window.offer.upload.title'
   },
   autoShow: true,
   height: '308px',
   modal: true,
   width: '310px',
   requires: ['Ext.form.field.File'],
   bbar: [
      {
         locales: {
            text: 'buttons.upload'
         },
         action: 'upload',
         itemId: 'confirmUpload',
         cls: 'window-button-flat',
         height: 30
      },
      {
         locales: {
            text: 'buttons.cancel'
         },
         action: 'cancel',
         cls: 'window-button-flat',
         height: 30
      }
   ],
   items: [
      {
         xtype: 'container',
         height: '225px',
         style: 'background-image:url(resources/images/muychika.png)',
         width: '300px',
         items: [
            {
               xtype: 'container',
               itemId: 'profileImagePreDataView',
               html:
                  '<div>' +
                     '<img id="profileImagePreDataView">' +
                     '</div>'
            }]
      }
   ]
});