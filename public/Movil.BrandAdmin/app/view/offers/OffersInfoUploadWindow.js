Ext.define('BrandAdmin.view.offers.OffersInfoUploadWindow', {
   extend: 'Ext.window.Window',
   xtype: 'offersinfouploadwindow',
   itemId: 'offersinfouploadwindow',
   autoCreate: true,
   cls: 'popupwin',
   layout: 'fit',
  // cls: 'popupwin',
   //title: 'Photo Upload of Offer',
   locales: {
      title: 'window.offer.upload.title'
   },
   autoShow: true,
   height: 130,
   modal: true,
   width: 500,
   requires: ['Ext.form.field.File'],
   bbar: [
      '->',
      {
         locales: {
            text: 'buttons.upload'
         },
         action: 'upload',
         cls: 'window-button-flat',
         height: 30/*,
         glyph: '70@pictos'*/
      },
      {

         locales: {
            text: 'buttons.cancel'
         },
         action: 'cancel',
         cls: 'window-button-flat',
         height: 30/*,
         glyph: '88@pictos'*/
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
               name: 'photo-path',
               fieldLabel: 'File Location',
               locales: {
                  fieldLabel: 'form.uploadform.fieldLabel',
                  buttonText: 'buttons.buttonText'
               },
               itemId: 'uploadFileField',
               labelWidth: 160,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',


               listeners: {
                  change: function (me) {

                     //me.getEl().down('input[type=file]').dom.files[0]

                     // This gets the part of the file name after the last period
                     var maxSize = 250;
                     var indexofPeriod = me.getValue().lastIndexOf("."),
                         uploadedExtension = me.getValue().substr(indexofPeriod + 1, me.getValue().length - indexofPeriod);

                     var fullPath = me.getValue();
                     var lastIndex = fullPath.lastIndexOf('\\');
                     var fileName = fullPath.substring(lastIndex + 1);

                     var allowedExtns = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG'];

                     // See if the extension is in the 
                     //array of acceptable file extensions
                     if (!Ext.Array.contains(allowedExtns, uploadedExtension)) {
                        // Add the tooltip below to 
                        // the red exclamation point on the form field
                        me.setActiveError('Por favor, sube archivos con una extensión de: ' + allowedExtns.join() + ' sólo!');
                        // Let the user know why the field is red and blank!
                        Ext.MessageBox.show({
                           title: 'Tipo de archivo de error',
                           msg: 'Por favor, sube archivos con una extensión de: ' + allowedExtns.join() + ' sólo!',
                           buttons: Ext.Msg.OK,
                           icon: Ext.Msg.ERROR
                        });
                        // Set the raw value to null so that the extjs form submit
                        // isValid() method will stop submission.
                        me.setRawValue(null);
                        return;
                     }

                     var imageSize;
                     if (!me.fileInputEl.dom.files)
                     {
                        var myFSO = new ActiveXObject("Scripting.FileSystemObject");
                        var filepath = me.getValue();
                        var thefile = myFSO.getFile(filepath);
                        imageSize = thefile.size;
                     } else
                     {
                        imageSize = me.fileInputEl.dom.files[0].size;
                     }
                     if (imageSize > maxSize * 1024) {
                        me.setActiveError('Tamaño máximo de archivo debe ser inferior a ' + maxSize + ' kb');
                        // Let the user know why the field is red and blank!
                        Ext.MessageBox.show({
                           title: 'Tipo de archivo de error',
                           msg: 'Tamaño máximo de archivo debe ser inferior a ' + maxSize + ' kb',
                           buttons: Ext.Msg.OK,
                           icon: Ext.Msg.ERROR
                        });
                        // Ext.Msg.alert('Message', 'Max file size must be less than ' + maxSize + ' kb');
                        me.setRawValue(null);
                        return;
                     }
                     me.setRawValue(fileName);
                  }
               }
              // buttonText: 'Select File...'
            }]
      }]
});