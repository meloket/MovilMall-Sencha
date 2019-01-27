Ext.define('BrandAdmin.view.profile.ProfileUploadLogoWindow', {
   extend: 'Ext.window.Window',
   xtype: 'profileuploadlogowindow',
   autoCreate: true,
   layout: 'fit',
   title: 'Logo Upload',
   autoShow: true,
   height: 150,
   modal: true,
   width: 550,
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
               name: 'uploadedfile',
               fieldLabel: 'File Location',
               itemId: 'logoFileField',
               labelWidth: 80,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',
               buttonText: 'Select File...',
               buttonWidth:10
            }]
      }]
});