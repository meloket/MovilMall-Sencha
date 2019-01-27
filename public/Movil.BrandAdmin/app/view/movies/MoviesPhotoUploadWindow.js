Ext.define('BrandAdmin.view.movies.MoviesPhotoUploadWindow', {
   extend: 'Ext.window.Window',
   xtype: 'moviesphotouploadwindow',
   itemId: 'moviesphotouploadwindow',
   autoCreate: true,
   layout: 'fit',
   cls: 'popupwin',
   locales: {
      title: 'window.profile.uploadimage.title'
   },
   //title: 'Photo Upload',
   animateTarget:'moviesUpload',
   autoShow: true,
   height: 130,
   modal: true,
   width: 500,
   requires: ['Ext.form.field.File'],
   bbar: [
      '->',
      {
         //text: 'Upload',
         action: 'uploadMoviePhoto',
         cls: 'window-button-flat',
         height: 30,
         locales: {
            text: 'buttons.upload'
         }
      },
      {
         // text: 'Cancel',
         locales: {
            text: 'buttons.cancel'
         },
         action: 'cancelUpload',
         cls: 'window-button-flat',
         height: 30
      }
   ],
   items: [
      {
         xtype: 'form',
         itemId: 'uploadForm',
         padding: '5 5 0 5',
         border: false,
         style: 'background-color: #fff;',
         store: 'CenterEastTreeGridStore',
         items: [
            {
               xtype: 'filefield',
               name: 'uploadedfile',
               itemId: 'uploadPhotoFileField',
               fieldLabel: 'File Location',
               labelWidth: 80,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',
               locales: {
                  fieldLabel: 'form.uploadform.fieldLabel',
                  buttonText: 'buttons.buttonText'
               }
               //buttonText: 'Select File...'
            }]
      }]
});