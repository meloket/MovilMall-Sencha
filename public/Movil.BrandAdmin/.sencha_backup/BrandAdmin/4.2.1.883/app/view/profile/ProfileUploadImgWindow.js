Ext.define('BrandAdmin.view.profile.ProfileUploadImgWindow', {
   extend: 'Ext.window.Window',
   xtype: 'profileuploadimgwindow',
   autoCreate: true,
   layout: 'fit',
   title: 'Image Upload',
   autoShow: true,
   height: 130,
   modal: true,
   width: 400,
   requires: ['Ext.form.field.File'],
   bbar: [
      '->',
      {
         text: 'Upload',
         action: 'upload',
         glyph: '70@pictos'
      },
      {
         text: 'Cancel',
         action: 'cancel',
         glyph: '88@pictos'
      }
   ],
   items: [
      {
         xtype: 'form',
         itemId: 'uploadForm',
         padding: '5 5 0 5',
         border: false,
         style: 'background-color: #fff;',
         //store: 'CenterEastTreeGridStore',
         items: [
            {
               xtype: 'filefield',
               itemId: 'profilePicFileField',
               name: 'uploadedfile',
               fieldLabel: 'File Location',
               labelWidth: 80,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',
               buttonText: 'Select File...'
            }]
      }]
});