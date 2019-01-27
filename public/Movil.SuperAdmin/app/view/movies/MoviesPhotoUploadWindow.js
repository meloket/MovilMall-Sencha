Ext.define('SuperAdmin.view.movies.MoviesPhotoUploadWindow', {
   extend: 'Ext.window.Window',
   xtype: 'moviesphotouploadwindow',
   itemId: 'moviesphotouploadwindow',
   autoCreate: true,
   layout: 'fit',
   title: 'Photo Upload',
   autoShow: true,
   height: 130,
   modal: true,
   width: 400,
   requires: ['Ext.form.field.File'],
   bbar: [
      '->',
      {
         text: 'Upload',
         action: 'uploadMoviePhoto',
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
         store: 'CenterEastTreeGridStore',
         items: [
            {
               xtype: 'filefield',
               name: 'uploadedfile',
               itemId:'uploadPhotoFileField',
               fieldLabel: 'File Location',
               labelWidth: 80,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',
               buttonText: 'Select File...'
            }]
      }]
});