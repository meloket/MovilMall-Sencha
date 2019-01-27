Ext.define('BrandAdmin.controller.EventsController', {
   extend: 'Ext.app.Controller',
   views: [
      'events.EventsGrid',
      'events.EventsPanel',
      'events.EventsTabPanel',
      'events.EventsInfoPanel',
      'events.EventsInfoForm',
      'events.EventsPhotoForm',
      'events.EventsSocialInfoForm',
      'events.EventsPhotoUploadWindow',
      'events.EventsImagePreviewWindow',
      'events.EventsImageCropWindow'
   ],

   stores: ['EventsStore'],

   refs: [{
         ref: 'EventsGrid',
         selector: 'eventsgrid'
      },
      {
         ref: 'EventsPanel',
         selector: 'eventspanel'
      },
      {
         ref: 'EventsTabPanel',
         selector: 'eventstabpanel'
      },
      {
         ref: 'EventsInfoForm',
         selector: 'eventsinfoform'
      },
      {
         ref: 'EventsSocialInfoForm',
         selector: 'eventssocialinfoform'
      },
      {
         ref: 'EventsInfoPanel',
         selector: 'eventsinfopanel'
      },
      {
         ref: 'EventsPhotoUploadWindow',
         selector: 'eventsphotouploadwindow',
         autoCreate: true,
         xtype: 'eventsphotouploadwindow'
      }, {
         ref: 'EventsPhotoForm',
         selector: 'eventsphotoform'
      },
      {
         ref: 'EventsImagePreviewWindow',
         selector: 'eventsimagepreviewwindow',
         autoCreate: true,
         xtype: 'eventsimagepreviewwindow'
      },
      {
         ref: 'EventsImageCropWindow',
         selector: 'eventsimagecropwindow',
         autoCreate: true,
         xtype: 'eventsimagecropwindow'
      }],

   init: function()
   {
      this.control({
         'eventsgrid actioncolumn': {
            click: 'onEventsPanelActionColumn'
         },
         'eventstabpanel [action=back]': {
            click: 'onBackEventsInfo'
         },
         'eventsgrid [action=new]': {
            click: this.onNewEventsGrid
         },
         'eventsinfopanel [action=cancel]': {
            click: 'onCancelEventsInfo'
         },
         'eventssocialinfoform [action=cancel]': {
            click: 'onCancelSocialInfo'
         },
         'eventsphotoform [action=upload]': {
            click: 'onPhotoUpload'
         },
         'eventsphotouploadwindow [action=cancel]': {
            click: 'onCancelUploadWindow'
         },
         'eventsinfopanel [action=save]': {
            click: 'onSaveInfoForm'
         },
         'eventssocialinfoform [action=save]': {
            click: 'onSaveSocialInfoForm'
         },
         //INSIDE THE WINDOW UPLOAD BUTTON
         'eventsphotouploadwindow [action=upload]': {
            click: this.onPhotoUploadClick
         },
         'eventsimagepreviewwindow [action=upload]': {
            click: this.onConfirmPhotoUpload
         },
         'eventsphotoform [itemId=eventsImageDataView]': {
            viewready: 'onViewReadyEventImageDataView'
         },
         'eventsphotoform [itemId=eventsCropImageDataView]': {
            viewready: 'onViewReadyEventCropImageDataView'
         },
         'eventsimagepreviewwindow [action=cancel]': {
            click: 'onPreviewCancel'
         },
         'eventsphotoform [action=openCropWindow]': {
            click: 'onOpenEventsImageCropWindow'
         }
      });
      this.record;
      this.loadFrom;

   },

   onViewReadyEventImageDataView: function()
   {
      var photo = document.getElementById('eventsInfoImageBox');
      var random = Math.random();
      if (this.record)
      {
         var key = this.record.data.key;
         if (photo)
         {
            photo.src = BrandAdmin.util.Config.getImgUrl() + '/image/300x225/1.5/' + key + '?' + random;
         } else
         {
            photo.src = "resources/images/NtAvailEvent.png";
         }
      }
      
   },
   
   onViewReadyEventCropImageDataView:function()
   {
      var photo = document.getElementById('eventsCropImageBox');
      var random = Math.random();
      if (this.record) {
         var key = this.record.data.key;
         if (photo)
         {
            photo.src = BrandAdmin.util.Config.getImgUrl() + '/image/110x110/1.5/' + key + '-crop?' + random;
         } else {
            photo.src = "resources/images/NtAvailEvent.png";
         }
      }
   },

   onSaveInfoForm: function()
   {
      var imageBox = document.getElementById('eventsInfoImageBox');
      var photoForm = this.getEventsPhotoForm().getForm();
      var form = this.getEventsInfoForm().getForm();
      var record = form.getRecord();
      var photoRecord = photoForm.getRecord();

     /* if (imageBox.src.search("NtAvailEvent.png") == -1)
      {
         if (photoRecord.data.photo != imageBox.src)
         {
            record.data.photo = this.compress(imageBox).src;
            record.setDirty();
         }
      } else
      {
         record.data.photo = "data:,";
      }*/

      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
      record.data.brandId = brandId;
      //console.log(record);
      var win = '';
      var store = this.getEventsStoreStore();

      form.updateRecord(record);
      // var safariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      //   if (safariBrowser)
      //   {
      if (record.data.date != null)
      {
         var recDate = new Date(record.data.date);
         recDate.setHours(0, -recDate.getTimezoneOffset(), 0, 0);
         record.data.date = recDate.toISOString();
      }
      //  }
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var formclass = Ext.create('BrandAdmin.classes.FormClass');
      formclass.save(record, form, win, store, lang);
   },

   compress: function(img)
   {
      var mimeType = "image/jpeg";
      var cvs = document.createElement('canvas');
      var actualHeight = img.naturalHeight;
      var actualWidth = img.naturalWidth;
      var maxHeight = 600;
      var maxWidth = 800;
      var imgRatio = actualWidth / actualHeight;
      var maxRatio = maxWidth / maxHeight;
      if (actualHeight > maxHeight || actualWidth > maxWidth)
      {
         if (imgRatio < maxRatio)
         {
            //adjust width according to maxHeight
            imgRatio = maxHeight / actualHeight;
            actualWidth = imgRatio * actualWidth;
            actualHeight = maxHeight;
         } else if (imgRatio > maxRatio)
         {
            //adjust height according to maxWidth
            imgRatio = maxWidth / actualWidth;
            actualHeight = imgRatio * actualHeight;
            actualWidth = maxWidth;
         } else
         {
            actualHeight = maxHeight;
            actualWidth = maxWidth;
         }
      }
      cvs.width = actualWidth;
      cvs.height = actualHeight;
      var ctx = cvs.getContext("2d").drawImage(img, 0, 0, actualWidth, actualHeight);
      var newImageData = cvs.toDataURL(mimeType, 50 / 100);
      var rimg = new Image();
      rimg.src = newImageData;
      return rimg;
   },

   onSave: function(record, form, win, store)
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record.dirty)
      {
         if (!record.isValid())
         {
            if (lang == "fr")
            {
               // Ext.example.msg('Warning', 'Fields marked with <font color = "red">*</font> cannot be empty');
               Ext.example.msg('Cuidado', 'Campos marcados con <font color = "red">*</font> no pueden estar vacios');
            }
            if (lang == "en")
            {
               Ext.example.msg('Warning', 'Fields marked with <font color = "red">*</font> cannot be empty');
               //Ext.example.msg('Cuidado', 'Campos marcados con <font color = "red">*</font> no pueden estar vacios');
            }
            return;
         }

         var statusBar = Ext.ComponentQuery.query('mainstatusbar');
         statusBar[0].showBusy();
         statusBar[0].setStatus({
            text: 'Saving Changes',
            iconCls: 'x-status-busy',
            clear: {
               wait: 8000,
               anim: false,
               useDefaults: false
            }
         });
         if (lang == "en")
         {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
            myMask.show();
         }
         if (lang == "fr")
         {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Cargando..." });
            myMask.show();
         }
         store.sync({
            scope: this,
            success: function(response)
            {
               myMask.hide();
               statusBar[0].clearStatus({ useDefaults: true });
               if (lang == "en")
               {
                  Ext.example.msg('Success', 'Record saved successfully.');
               }
               if (lang == "fr")
               {
                  Ext.example.msg('Exitoso', 'Los datos fueron guardados.');
               }
               if (win)
               {
                  var navigation = Ext.create('SuperAdmin.classes.NavigationClass');
                  navigation.backToGrid(win);
               }
            },

            failure: function(response, operations)
            {
               myMask.hide();
               statusBar[0].setStatus({ useDefaults: true });
               if (!response.exceptions[0].error)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else
               {
                  var errorCode = response.exceptions[0].error.status;
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     if (lang == "fr")
                     {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (lang == "en")
                     {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                  }
                  Ext.example.msg('Message', error);
               }
            }
         });
      } else
      {
         if (lang == "fr")
         {
            // Ext.example.msg('Warning', 'Found No Record to Save');
            Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
         if (lang == "en")
         {
            Ext.example.msg('Warning', 'Found No Record to Save');
            //Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
      }
   },

   onSaveSocialInfoForm: function()
   {
      var form = this.getEventsSocialInfoForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);
      var win = '';
      var store = this.getEventsStoreStore();

      //  var safariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      // if (safariBrowser) {
      if (record.data.date != null)
      {
         record.data.date = record.data.date.toISOString();
      }
      // }
      /* 
      var formclass = Ext.create('BrandAdmin.classes.FormClass');
      formclass.save(record, form, win, store);*/
      this.onSave(record, form, win, store);
   },

   onPhotoUpload: function()
   {
      var win = this.getEventsPhotoUploadWindow();
      win.animateTarget = 'eventsUpload';
      win.show();
   },
   
   //INSIDE THE WINDOW UPLOAD BUTTON
   onPhotoUploadClick:function()
   {
      var imgText = this.getEventsPhotoUploadWindow().down('#uploadPhotoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var rawValue = imgText.getRawValue();

      if (rawValue != '') {
         //this.getOffersInfoUploadWindow().close();
         var win = this.getEventsImagePreviewWindow();
         win.show();
         var confirmUploadBut = this.getEventsImagePreviewWindow().down('#confirmUpload');
         confirmUploadBut.enable();
         var previewImgBox = document.getElementById('eventsImagePreDataView');
         var reader = new FileReader();
         if (file) {
            reader.readAsDataURL(file);
            reader.onload = function (event) {
               previewImgBox.src = event.target.result;

            };
         }
         previewImgBox.onload = function () {
            var width = previewImgBox.naturalWidth;
            var height = previewImgBox.naturalHeight;
            if (width < 300 || height < 225) {
               confirmUploadBut.disable();
               previewImgBox.style.height = '';
               previewImgBox.style.width = '';
            } else {
               previewImgBox.style.height = '225px';
               previewImgBox.style.width = '300px';
            }
         };

      }
   },
   
   onConfirmPhotoUpload: function()
   {
      /*this.loadFrom = 'upload';
      var imgText = this.getEventsPhotoUploadWindow().down('#uploadPhotoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var me = this;
      var infoForm = this.getEventsInfoForm().getForm();
      var record = infoForm.getRecord();
      var rawValue = imgText.getRawValue();
      var lang = this.getApplication().getController('BrandAdminMainController').value;

      if (rawValue != '')
      {
         var imageBox = document.getElementById('eventsInfoImageBox');
         imageBox.src = '';
         var reader = new FileReader();
         if (file)
         {
            reader.readAsDataURL(file);
            reader.onload = function(event)
            {

               imageBox.onload = function()
               {
                  if (me.loadFrom == 'upload')
                  {
                     if (imageBox.naturalHeight < 450 || imageBox.naturalWidth < 600)
                     {
                        if (lang === "fr")
                        {
                           Ext.MessageBox.show({
                              msg: 'Resolución de las imágenes debe ser de al menos 600 * 450.',
                              title: 'Message',
                              cls: 'messagebox-css',
                              icon: Ext.Msg.ERROR,
                              buttons: Ext.MessageBox.OK,
                              scope: this
                           });
                        }
                        if (lang === "en")
                        {
                           Ext.MessageBox.show({
                              msg: 'Image resolution should be at least 600 * 450.',
                              title: 'Message',
                              cls: 'messagebox-css',
                              icon: Ext.Msg.ERROR,
                              buttons: Ext.MessageBox.OK,
                              scope: this
                           });
                        }
                        me.loadFrom = '';
                        imageBox.src = record.data.photo;
                        return;
                     } else
                     {
                        record.setDirty();
                        me.getEventsPhotoUploadWindow().close();
                        me.loadFrom = '';
                     }
                  }

               };
               imageBox.src = event.target.result;
            };

         }
      }

      this.getEventsPhotoUploadWindow().close();
      this.getEventsImagePreviewWindow().close();*/
      
      var infoForm = this.getEventsInfoForm().getForm();
      var record = infoForm.getRecord();
      var resArray = [{
         resolution: {
            height: 225,
            width: 300
         },
         aspectRatio: true
      }, {
         resolution: {
            height: 110,
            width: 110
         },
         aspectRatio: true
      }];
      // var index = this.getPressedButtonIndex();
      var key = record.data.key;
      if (key) {
         var form = this.getEventsPhotoUploadWindow().down('form').getForm();
         if (form.isValid()) {
            form.submit({
               url: BrandAdmin.util.Config.getImgUrl() + '/uploadImg',
               scope: this,
               params: {
                  resArray: Ext.encode(resArray),
                  key: key
               },
               waitMsg: 'Uploading your photo...',
               success: function (fp, o) {
                  //  Ext.example.msg('Success', 'Processed file "' + o.result.file + '" on the server');
                  var imagDiv = document.getElementById('eventsInfoImageBox');
                  var random = Math.random();
                  imagDiv.src = BrandAdmin.util.Config.getImgUrl() + '/image/300x225/1.5/' + key + '?' + random;
                  this.getEventsPhotoUploadWindow().close();
                  this.getEventsImagePreviewWindow().close();
                  document.getElementById('eventsCropImageBox').src = "resources/images/NtAvailEvent.png";
                  //this.setImageButtonsState();
               },
               failure: function () {
                  Ext.Msg.alert("Error", Ext.JSON.decode(this.response.responseText).message);
               }
            });
         }
      } else {
         Ext.example.msg('Warning', 'Please fill Information form first.');
      }
   },

   onCancelUploadWindow: function()
   {
      var win = this.getEventsPhotoUploadWindow();
      win.close();
   },
   
   onPreviewCancel: function () {
      var win = this.getEventsImagePreviewWindow();
      win.close();
   },

   onCancelEventsInfo: function()
   {
      var panel = this.getEventsPanel().getLayout();
      var store = this.getEventsStoreStore();
      //store.rejectChanges();
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var formpanel = this.getEventsInfoForm();
      var grid = this.getEventsGrid();
      //var navigation = Ext.create('BrandAdmin.classes.NavigationClass');
      //navigation.backTogridFromTab(panel, grid, formpanel);
      if (formpanel)
      {
         var form = formpanel.getForm();
         var record = form.getRecord();
         if (record.data.date != null)
         {
            record.data.date = new Date(record.data.date);
            record.data.date.setHours(00);
            record.data.date.setMinutes(00);
            record.data.date.setSeconds(00);
         }
         form.updateRecord(record);
         var dirty = record.dirty;
         //console.log(dirty);
         if (record.data.toEventsTime == "" || record.data.toEventsTime == null)
            record.dirty = false;

         if (record.data.fromEventsTime == "" || record.data.fromEventsTime == null)
            record.dirty = false;
         
         if (record.phantom == true && record.dirty == false)
         {
            //win.hide();

            var store = grid.getStore();
            var items = store.data.items;

            //console.log(store);
            var modifiedRecords = store.getModifiedRecords();
            for (var i = 0; i < items.length; i++)
            {
               if (items[i].phantom == true)
               {
                  store.remove(items[i]);
               }
            }
            panel.setActiveItem(0);
         } else if (dirty)
         {
            if (lang == "fr")
            {
               Ext.MessageBox.show({
                  msg: 'Ninguno de sus cambios van a ser salvados. Está seguro que desea hacer esto?',
                  icon: Ext.Msg.WARNING,
                  title: 'Cuidado',
                  cls: 'messagebox-css',
                  buttons: Ext.MessageBox.YESNO,
                  scope: this,
                  fn: this.confirmCancel
               });
            }
            if (lang == "en")
            {
               Ext.MessageBox.show({
                  msg: 'None of your changes will be saved. Are you sure you want to do this? ',
                  icon: Ext.Msg.WARNING,
                  title: 'Warning',
                  cls: 'messagebox-css',
                  buttons: Ext.MessageBox.YESNO,
                  scope: this,
                  fn: this.confirmCancel
               });
            }
            //return false;
         } else
         {


            if (!grid)
            {
               return false;
            }
            var store = grid.getStore();
            var items = store.data.items;
            var modifiedRecords = store.getModifiedRecords();
            for (var i = 0; i < items.length; i++)
            {
               if (items[i].phantom == true)
               {
                  store.remove(items[i]);
               }
            }
            panel.setActiveItem(0);
         }

      } else
      {
         panel.setActiveItem(0);
      }


   },

   onCancelSocialInfo: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      //var panel = this.getEventsPanel().getLayout();
      //var store = this.getEventsStoreStore();
      ////store.rejectChanges();

      ////panel.setActiveItem(0);
      //var grid = this.getEventsGrid();

      //var form1 = this.getEventsSocialInfoForm();
      //form1.onBack(form1);
      var panel = this.getEventsPanel().getLayout();
      var store = this.getEventsStoreStore();
      //store.rejectChanges();

      var formpanel = this.getEventsSocialInfoForm();
      var grid = this.getEventsGrid();
      //var navigation = Ext.create('BrandAdmin.classes.NavigationClass');
      //navigation.backTogridFromTab(panel, grid, formpanel);
      if (formpanel)
      {
         var form = formpanel.getForm();
         var record = form.getRecord();
         form.updateRecord(record);

         var dirty = record.dirty;
         //console.log(dirty);
         if (record.phantom == true && record.dirty == false)
         {
            //win.hide();

            var store = grid.getStore();
            var items = store.data.items;
            //console.log(store);
            var modifiedRecords = store.getModifiedRecords();
            for (var i = 0; i < items.length; i++)
            {
               if (items[i].phantom == true)
               {
                  store.remove(items[i]);
               }
            }
            panel.setActiveItem(0);
         } else if (dirty)
         {
            if (lang == "fr")
            {
               Ext.MessageBox.show({
                  msg: 'Ninguno de sus cambios van a ser salvados. Está seguro que desea hacer esto?',
                  icon: Ext.Msg.WARNING,
                  title: 'Cuidado',
                  cls: 'messagebox-css',
                  buttons: Ext.MessageBox.YESNO,
                  scope: this,
                  fn: this.confirmCancel
               });
            }
            if (lang == "en")
            {
               Ext.MessageBox.show({
                  msg: 'None of your changes will be saved. Are you sure you want to do this? ',
                  icon: Ext.Msg.WARNING,
                  title: 'Warning',
                  cls: 'messagebox-css',
                  buttons: Ext.MessageBox.YESNO,
                  scope: this,
                  fn: this.confirmCancel
               });
            }
            //return false;
         } else
         {


            if (!grid)
            {
               return false;
            }
            var store = grid.getStore();
            var items = store.data.items;
            var modifiedRecords = store.getModifiedRecords();
            for (var i = 0; i < items.length; i++)
            {
               if (items[i].phantom == true)
               {
                  store.remove(items[i]);
               }
            }
            panel.setActiveItem(0);
         }

      } else
      {
         panel.setActiveItem(0);
      }


   },

   confirmCancel: function(button)
   {
      var grid = this.getEventsGrid();
      var store = grid.getStore();

      if (button == 'yes')
      {
         // console.log(button);
         if (!grid)
         {
            return;
         }

         store.rejectChanges();
         var items = store.data.items;
         var modifiedRecords = store.getModifiedRecords();
         for (var i = 0; i < items.length; i++)
         {
            items[i].reject(true);
            if (items[i].phantom == true)
            {
               store.remove(items[i]);
            }
         }
         //grid.getView().refresh();
         var panel = this.getEventsPanel().getLayout();
         panel.setActiveItem(0);
      }
   },

   onNewEventsGrid: function()
   {
      var panel = this.getEventsPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getEventsInfoForm();
      var socialForm = this.getEventsSocialInfoForm();
      var photoForm = this.getEventsPhotoForm().getForm();
      var store = this.getEventsStoreStore();
      
    
      var record = new store.model;
      store.insert(store.data.length, record);
    
      form.loadRecord(record);
      form.getForm().reset();
      
      socialForm.loadRecord(record);
      photoForm.loadRecord(record);

      this.getEventsTabPanel().down('#eventsTab').setActiveTab(0);

      var imageBox = document.getElementById('eventsInfoImageBox');
      if (imageBox)
      {
         imageBox.src = "resources/images/NtAvailEvent.png";
      }
      
      var imageCropBox = document.getElementById('eventsCropImageBox');
      if (imageCropBox) {
         imageCropBox.src = "resources/images/NtAvailEvent.png";
      }


   },

   onBackEventsInfo: function()
   {
      var tabPanel = this.getEventsTabPanel().down('#eventsTab');

      var idx = tabPanel.items.indexOf(tabPanel.getActiveTab());
      if (idx == 0)    //INFORMATION TAB
      {
         this.onCancelEventsInfo();
      } else     // SOCIAL INFORMATION TAB
      {
         this.onCancelSocialInfo();
      }
   },

   onEventsPanelActionColumn: function(grid, cell, row, col, e)
   {
      var m = e.getTarget().className.split(' '),
          record = grid.getStore().getAt(row);
      if (m[4] == 'Edit')
      {
         this.editRecord(record);
      } else if (m[4] == 'Delete')
      {
         this.deleteRecord(grid, record);
      } else
      {
         return;
      }

   },

   editRecord: function(record)
   {
      this.record = record;
      var grid = this.getEventsGrid().getView();
      grid.select(record);

      var panel = this.getEventsPanel().getLayout();
      panel.setActiveItem(1);

      var form = this.getEventsInfoForm().getForm();
      var photoForm = this.getEventsPhotoForm().getForm();
      var socialForm = this.getEventsSocialInfoForm().getForm();
      form.loadRecord(record);
      socialForm.loadRecord(record);
      photoForm.loadRecord(record);
      var imageBox1 = document.getElementById('eventsInfoImageBox');
      var imageBoxCrop = document.getElementById('eventsCropImageBox');
      var key = record.data.key;
      var random = Math.random();
      if (imageBox1)
         {
          imageBox1.src = BrandAdmin.util.Config.getImgUrl() + '/image/300x225/1.5/' + key + '?' + random;
      }
      
      if (imageBoxCrop) {
         imageBoxCrop.src = BrandAdmin.util.Config.getImgUrl() + '/image/110x110/1.5/' + key + '-crop?' + random;
      }
      
      this.getEventsTabPanel().down('#eventsTab').setActiveTab(0);
   },

   deleteRecord: function(grid, record)
   {
      grid.select(record);
      var sel = record;
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (sel != '')
      {
         if (lang == "fr")
         {
            Ext.MessageBox.show({
               msg: 'Esta apunto de borrar un recod. Está seguro que quiere proceder?',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
         if (lang == "en")
         {
            Ext.MessageBox.show({
               msg: 'You are about to delete a Recod. Are you sure you want to proceed?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
      } else
      {
         if (lang == "en")
         {
            Ext.MessageBox.show({
               msg: 'Please Select Record',
               icon: Ext.Msg.ERROR,
               title: 'Message',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.OK,
               scope: this
            });
         }
         if (lang == "fr")
         {
            Ext.MessageBox.show({
               msg: 'Seleccione Record',
               icon: Ext.Msg.ERROR,
               title: 'Message',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.OK,
               scope: this
            });
         }
      }
   },

   onDelete: function(button)
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (button != 'yes')
      {
         return;
      }
      var view = this.getEventsGrid();
      //console.log(view);
      var sel = view.getSelectionModel().getSelection();
      var store = view.getStore();
      store.remove(sel);
      store.sync({
         scope: this,
         success: function(response)
         {
            if (lang == "fr")
            {
               Ext.example.msg('Exitoso', 'Registro eliminado con éxito.');
            }
            if (lang == "en")
            {
               Ext.example.msg('Success', 'Record deleted Successfully.');
            }
            view.getSelectionModel().select(0);
         },

         failure: function(response, operation)
         {
            if (!response.exceptions[0].error)
            {
               var data = response.operations[0].request.proxy.reader.jsonData.message;
               Ext.example.msg('Message', data);
               store.rejectChanges();
            } else
            {
               store.rejectChanges();
               var errorCode = response.exceptions[0].error.status;
               var error = 'Ocurrió un error.';
               if (errorCode == 401)
               {
                  if (lang == "fr")
                  {
                     error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                  }
                  if (lang == "en")
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
               }
               Ext.example.msg('Message', error);
            }
         }
      });
   },
   
   onOpenEventsImageCropWindow:function()
   {
      var parent = this;
      var photo = document.getElementById('eventsInfoImageBox');
      //get img data from the form's record
      /*var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      infoForm.updateRecord(record);*/

      //checks if main offer image already exists.
      if (photo.src == 'http://localhost:3000/Movil.BrandAdmin/resources/images/NtAvailOffer.png') {
         Ext.MessageBox.show({
            msg: 'Por favor, sube la imagen 1 primero.',
            icon: Ext.Msg.ERROR,
            title: 'Cuidado',
            buttons: Ext.MessageBox.OK,
            scope: this
         });
         return false;
      }
      var window = this.getEventsImageCropWindow();
      window.show();
      var image = document.getElementById('eveImageToBeCropped');
      image.crossOrigin = "Anonymous";
      var previewImage = document.getElementById('evePreviewImage');
      //cropping the image recieved from photo 1 because if that image is larger then 600*450 
      //then it would cause problems in cropping mechanism. We need the source image used in cropping to be in 600*450 
      //or almost nearby resolution
      // var offerImageExists = this.compressCropPhoto(photo).src;
      image.src = photo.src;
      previewImage.src = photo.src;

      /**************** JCROP CODE START*****************/

      jQuery(function ($) {
         // Create variables (in this scope) to hold the API and image size
         var me = this;
         var jcrop_api,
             boundx,
             boundy,
             // Grab some information about the preview pane
             $preview = $('#evePreview-pane'),
             $pcnt = $('#evePreview-pane .preview-container'),
             $pimg = $('#evePreview-pane .preview-container img'),
             xsize = $pcnt.width(),
             ysize = $pcnt.height();

         //create canvas element
         var canvas = document.createElement('canvas');
         $('#eveImageToBeCropped').Jcrop({
            onChange: updatePreview,
            onSelect: updatePreview,
            load: updatePreview,
            aspectRatio: xsize / ysize
         }, function () {
            // Use the API to get the real image size
            var bounds = this.getBounds();
            boundx = bounds[0];
            boundy = bounds[1];
            // Store the API in the jcrop_api variable
            jcrop_api = this;

            // Move the preview into the jcrop container for css positioning
            $preview.appendTo(jcrop_api.ui.holder);
            var defaultC = {
               h: 295,
               w: 295,
               x: 0,
               x2: 295,
               y: 4,
               y2: 299
            };
            updatePreview(defaultC);
         });

         function updatePreview(c) {
            console.log(c);
            if (parseInt(c.w) > 0) {
               var rx = xsize / c.w;
               var ry = ysize / c.h;
               $pimg.css({
                  width: Math.round(rx * boundx) + 'px',
                  height: Math.round(ry * boundy) + 'px',
                  marginLeft: '-' + Math.round(rx * c.x) + 'px',
                  marginTop: '-' + Math.round(ry * c.y) + 'px'
               });
            }
            canvas.height = 225;
            canvas.width = 300;
            //drawImage function gives error if height and width values from the source are 0, neagtive or greater then 
            //the target canvas. In our case when user clicks for the first time on the tap area then as no selected area
            //is avalable it was giving us 0 for h & w. so resetting h & w values to 300 when they are 0
            //NOTE - this issue existed is all other browsers except chrome.
            if (c.w === 0 && c.h === 0) {
               c.w = 300;
               c.h = 225;
            }

            //get its context attribute
            var context = canvas.getContext('2d');
            //what this does is for example if we are cropping an image of size 200 x 200 with x and y starting at
            //50 and 70 and we want the result image size of 100x100 pixels then call drawImage as follows
            //drawImage(image,50,70,200,200,0,0,100,100)
            context.drawImage(image, c.x, c.y, c.w, c.h, 0, 0, 300, 225);
            //record.setDirty();
         };
         /**************JCROP CODE END************/

         document.getElementById('eveImageCropButton').onclick = function () {
            var img = canvas.toDataURL("image/jpeg");

            //do not use window.hide() because it causes problems as window.hide does not remove the previously selected portion which was cropped. 
            window.close();
            document.getElementById('eventsCropImageBox').src = img;
            parent.confirmUploadCropImage(img);
         };
      });
   },

   confirmUploadCropImage: function (img) {
      console.log(img);
      var view = this.getEventsInfoForm();
      //console.log(view);
      //var record = view.getSelectionModel().getSelection()[0];
      var record = view.getRecord();
      var resArray = [{
         resolution: {
            height: 110,
            width: 110
         },
         aspectRatio: true
      }];
      // var index = this.getPressedButtonIndex();
      var key = record.data.key + '-crop';
      var imageData = img;

      Ext.Ajax.request({
         method: 'POST',
         url: BrandAdmin.util.Config.getImgUrl() + '/uploadImg',
         params: {
            resArray: Ext.encode(resArray),
            key: key,
            imageData: imageData,
            crop: true
         },



         scope: this,
         success: function (response) {

         },
         failure: function (response) {
            //console.log(response);
            var error = 'Something went wrong';
            if (response.status == 401) {
               if (lang == "fr") {
                  error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
               }
               if (lang == "en") {
                  error = 'Sorry, You are not authorized to access this module.';
               }
            }
            Ext.example.msg('Message', error);
         }
      });

   }
});