Ext.define('BrandAdmin.view.profile.ProfileUploadLogoWindow', {
   extend: 'Ext.window.Window',
   xtype: 'profileuploadlogowindow',
   autoCreate: true,
   layout: 'fit',
   cls: 'popupwin',
   //title: 'Logo Upload',
   locales: {
      title: 'window.profile.uploadlogo.title'
   },
   animateTarget: 'uploadLogo',
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
               locales: {
                  fieldLabel: 'form.uploadform.fieldLabel',
                  buttonText: 'buttons.buttonText'
               },
               itemId: 'logoFileField',
               labelWidth: 160,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',
               // buttonText: 'Select File...',
               buttonWidth: 10,

               listeners: {
                  change: function(me)
                  {

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
                     if (!Ext.Array.contains(allowedExtns, uploadedExtension))
                     {
                        // Add the tooltip below to 
                        // the red exclamation point on the form field
                        //  me.setActiveError('Please upload files with an extension of :  ' + allowedExtns.join() + ' only!');
                        me.setActiveError('Por favor, sube archivos con una extensión de: ' + allowedExtns.join() + ' sólo!');
                        // Let the user know why the field is red and blank!
                        Ext.MessageBox.show({
                           //title: 'File Type Error',
                           // msg: 'Please upload files with an extension of :  ' + allowedExtns.join() + ' only!',
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

                     var imageSize = me.fileInputEl.dom.files[0].size;
                     if (imageSize > maxSize * 1024)
                     {
                        //   me.setActiveError('Max file size must be less than ' + maxSize + ' kb');
                        me.setActiveError('Tamaño máximo de archivo debe ser inferior a ' + maxSize + ' kb');
                        // Let the user know why the field is red and blank!
                        Ext.MessageBox.show({
                           // title: 'File Type Error',
                          //  msg: 'Max file size must be less than ' + maxSize + ' kb',
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
            }]
      }]
});