Ext.define('BrandAdmin.view.offers.OffersInfoUploadWindow', {
   extend: 'Ext.window.Window',
   xtype: 'offersinfouploadwindow',
   itemId: 'offersinfouploadwindow',
   autoCreate: true,
   layout: 'fit',
   title: 'Photo Upload of Offer',
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
               name: 'uploadedfile',
               fieldLabel: 'File Location',
               itemId: 'uploadFileField',
               labelWidth: 80,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',
               buttonText: 'Select File...'
            }]
      }]
});