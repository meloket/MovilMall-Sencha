Ext.define('BrandAdmin.controller.ProfileController', {
   extend: 'Ext.app.Controller',

   views: [
      'profile.ProfilePanel',
      'profile.ProfileBreadCrumbPanel',
      'profile.ProfileBreadCrumb',
      'profile.ProfileIdentityForm',
      'profile.ProfileBusinessDataView',
      'profile.ProfileSocialForm',
      'profile.ProfilePhotographForm',
      'profile.ProfileUploadImgWindow',
      'profile.ProfileUploadLogoWindow',
      'profile.ProfileBusinessPanel',
      'profile.ProfileCategoriesPanel',
      'profile.ProfileCategoriesDataview',
      'profile.ProfileImagePreviewWindow',
      'profile.ProfileLogoPreviewWindow'
   ],

   stores: [
      'ProfileIdentityStore',
      'ProfileBusinessStore',
      'ProfileCategoriesStore'
   ],

   refs: [{
         ref: 'ProfilePanel',
         selector: 'profilepanel'
      }, {
         ref: 'ProfileIdentityForm',
         selector: 'profileidentityform'
      },
      {
         ref: 'ProfileBreadCrumbPanel',
         selector: 'profilebreadcrumbpanel'
      },
      {
         ref: 'ProfileUploadLogoWindow',
         selector: 'profileuploadlogowindow',
         autoCreate: true,
         xtype: 'profileuploadlogowindow'
      },
      {
         ref: 'ProfileUploadImgWindow',
         selector: 'profileuploadimgwindow',
         autoCreate: true,
         xtype: 'profileuploadimgwindow'
      }, {
         ref: 'ProfileBusinessDataView',
         selector: 'profilebusinessdataview'
      }, {
         ref: 'ProfileBusinessPanel',
         selector: 'profilebusinesspanel'
      }, {
         ref: 'ProfileCategoriesPanel',
         selector: 'profilecategoriespanel'
      }, {
         ref: 'ProfileCategoriesDataview',
         selector: 'profilecategoriesdataview'
      }, {
         ref: 'ProfilePhotographForm',
         selector: 'profilephotographform'
      }, {
         ref: 'ProfileSocialForm',
         selector: 'profilesocialform'
      },
      {
         ref: 'ProfileImagePreviewWindow',
         selector: 'profileimagepreviewwindow',
         autoCreate: true,
         xtype: 'profileimagepreviewwindow'
      },
      {
         ref: 'ProfileLogoPreviewWindow',
         selector: 'profilelogopreviewwindow',
         autoCreate: true,
         xtype: 'profilelogopreviewwindow'
      }
   ],

   init: function()
   {
      this.idx;
      this.control({
         'profilebreadcrumb [action=breadCrumb]': {
            click: this.onClickBreadCrumbMenu
         },

         'profileidentityform [action=save]': {
            click: this.onSaveIdentityForm
         },
         
         /***************************Business*****************************************/
         'profilebusinessdataview': {
            itemclick: this.onBusTypeCheckBoxSelect,
            viewready: this.onProfileBusinessDataView
         },

         'profilebusinesspanel [action=save]': {
            click: this.onSaveBusinessType
         },


         /***************************category*****************************************/
         'profilecategoriespanel [action=save]': {
            click: this.onSaveCategories
         },
         'profilecategoriesdataview': {
            itemclick: this.onCategoryCheckBoxSelect,
            viewready: this.onCategoriesDataView
         },
         

         /***************************photograph*****************************************/
            

         //PROFILE PIC
         
         'profilephotographform [action=uploadLogo]': {
            click: this.onClickLogoUpload
         },
         'profilephotographform [action=removeLogo]': {
            click: this.onClickRemoveLogo
         },
         'profileuploadlogowindow [action=cancel]': {
            click: 'onCancelLogoWindow'
         },
         'profileuploadlogowindow [action=upload]': {
            click: this.onUploadLogoImage
         },
         'profileimagepreviewwindow [action=upload]': {
            click: this.onConfirmUploadLogoImage
         },
         'profileimagepreviewwindow [action=cancel]': {
            click: this.onCancelProfilePreview
         },

         //LOGO

         'profilephotographform [action=uploadProfile]': {
            click: this.onClickProfilePicUpload
         },
         
         'profilephotographform [action=removeProfilePic]': {
            click: this.onClickRemoveProfilePic
         },
         
         'profileuploadimgwindow [action=cancel]': {
            click: 'onCancelProfileImageWindow'
         },

         'profileuploadimgwindow [action=upload]': {
            click: this.onUploadProfilePic
         },
         
         'profilelogopreviewwindow [action=upload]': {
            click: this.onConfirmUploadProfilePic
         },
         
         'profilelogopreviewwindow [action=cancel]': {
            click: this.onPreviewCancel
         },

         'profilephotographform [action=save]': {
            click: this.onSavePhotograph
         },
         

         /**************************SOCIAL FORM***************************************/
         'profilesocialform [action=finish]': {
            click: this.onSaveSocialForm
         },
         
         /**************************************NEXT BUTTONS****************************************************/
         'profileidentityform [action=next]': {
            click: 'onNextIdentity'
         },
         'profilebusinesspanel [action=next]': {
            click: 'onNextBusinessPanel'
         },
         'profilecategoriespanel [action=next]': {
            click: 'onNextCategory'
         },
         'profilephotographform [action=next]': {
            click: 'onNextPhotograph'
         }
      });
      this.loadFrom;

   },

   onSaveSocialForm: function()
   {
      var store = this.getProfileIdentityStoreStore();
      var form = this.getProfileSocialForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);

      //console.log(record);
      this.save(record, store, "social");
   },
   
   /***************************category*****************************************/
   
   //FOR DEFAULT CHECKED CHECKBOX ACCORDING TO RECORD IN CATEGORIES DATAVIEW
   onCategoriesDataView: function(view)
   {
      var items = view.getNodes();
      //console.log(items);
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var catArray = record.data.busCategories;
      var keyArray = new Array();
      //GET KEYS,VALUES PAIR OF ALL ITEMS
      for (var i = 0; i < items.length; i++)
      {
         var splittedString = view.findItemByChild(items[i]).innerHTML.split("id=")[1];
         var keys = splittedString.split(" ")[0];
         keyArray.push({
            key: keys,
            value: view.findItemByChild(items[i]).innerHTML
         });

      }
      if (catArray.length != 0)
      {
         for (var d = 0; d < keyArray.length; d++)
         {
            for (var ds = 0; ds < catArray.length; ds++)
            {
               var busKey = "\"" + catArray[ds] + "\"";
               if (keyArray[d].key == busKey)
               {
                  var temp = keyArray[d].value.split(" ");
                  temp.splice(1, 0, "checked");
                  view.findItemByChild(items[d]).innerHTML = temp.join(" ");
               }
            }
         }
      }
   },

   onCategoryCheckBoxSelect: function(view, a, b, ctx, d, e, f)
   {

      var max = document.busCategoryMenu.length; //GETTING ALL ITEMS OF CATEGORIES
      var array = new Array;

      for (var i = 0; i < max; i++)
      {

         if (document.busCategoryMenu[i].busCategoryMenu)
         {
            if (document.busCategoryMenu[i].busCategoryMenu.checked == true)
            {
               var busTypeId = document.busCategoryMenu[i].busCategoryMenu.id;
               array.push(busTypeId);
            }
         } else
         {
            if (document.busCategoryMenu[i].checked == true)
            {
               var busTypeId = document.busCategoryMenu[i].id;
               array.push(busTypeId);
            }
         }

      }

      return array;
   },

   onSaveCategories: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var busCategories = this.onCategoryCheckBoxSelect();
      if (busCategories.count == 0)
      {
         if (lang == "fr")
         {
            Ext.example.msg('Cuidado', 'Por favor seleccione una categoría.');
         }
         if (lang == "en")
         {
            Ext.example.msg('Warning', 'Please select a category.');
         }
         return;
      }
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var preCategory = record.data.busCategories;
      var isOld = 0;
      if (preCategory.length != busCategories.length)
      {
         record.data.busCategories = busCategories;
         record.data.modified = 'true';
         record.setDirty();
      } else
      {
         for (var i = 0; i < busCategories.length; i++)
         {
            for (var j = 0; j < preCategory.length; j++)
            {

               if (busCategories[i] == preCategory[j])
               {
                  isOld = isOld + 1;
                  /* record.data.busCategories = busCategories;
                  record.setDirty();*/
               }
            }
         }
         if (isOld != preCategory.length)
         {
            record.data.busCategories = busCategories;
            record.data.modified = 'true';
            record.setDirty();
         }
      }


      form.updateRecord(record);
      var store = this.getProfileIdentityStoreStore();

      this.save(record, store, "Category");
   },
   
   /***************************Business*****************************************/
   

   //FOR DEFAULT CHECKED CHECKBOX ACCORDING TO RECORD IN BUSINESS DATAVIEW
   onProfileBusinessDataView: function(view)
   {
      var items = view.getNodes();
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var busStore = this.getStore('ProfileBusinessStore');
      var busRecord = busStore.findRecord('key', record.data.busTypeId);
      if (busRecord)
      {

         var keyArray = new Array();
         if (items)
         {
            //GET KEYS,VALUES PAIR OF ALL ITEMS
            for (var i = 0; i < items.length; i++)
            {
               var splittedString = view.findItemByChild(items[i]).innerHTML.split("id=")[1];
               var keys = splittedString.split(" ")[0];
               keyArray.push({
                  key: keys,
                  value: view.findItemByChild(items[i]).innerHTML
               });

            }
            if (busRecord.data.key)
            {

               var busKey = "\"" + busRecord.data.key + "\"";
               for (var d = 0; d < keyArray.length; d++)
               {
                  //CHECK KEY WITH RECORD 
                  if (keyArray[d].key == busKey)
                  {
                     //ADD "CHECKED" INTO INNER HTML AND SET AGAIN
                     var temp = keyArray[d].value.split(" ");
                     temp.splice(4, 0, "checked");
                     view.findItemByChild(items[d]).innerHTML = temp.join(" ");
                  }
               }
               //this.onBusTypeCheckBoxSelect();
            }
         }
      }
   },
   
   //TO CHECK ONLY ONE CHECKBOX IS CHECKED OR NOT
   onBusTypeCheckBoxSelect: function(view, recgord, item, idx, event, opts)
   {
      var max = document.menu.length; //GETTING ALL ITEMS

      for (var i = 0; i < max; i++)
      {
         if (document.menu[i].busType.checked == true)
         {
            document.menu[i].busType.checked = false;

         }

      }
      document.menu[idx].busType.checked = true;
      this.idx = idx;


   },

   onSaveBusinessType: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (this.idx == null)
      {
         if (lang == "fr")
         {
            Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
         if (lang == "en")
         {
            Ext.example.msg('Warning', 'Found no record to save.');
         }
         return;
      }
      // console.log(this.idx);
      var busTypeId = document.menu[this.idx].busType.id;
      if (!busTypeId)
      {
         if (lang == "fr")
         {
            // for 'Please select a business type.'
            Ext.example.msg('Cuidado', 'Por favor seleccione un tipo de negocio.');
         }
         if (lang == "en")
         {
            // for 'Please select a business type.'
            Ext.example.msg('Warning', 'Please select a business type.');
         }
         return;
      }
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var preBusTypeId = record.data.busTypeId;

      record.data.busTypeId = busTypeId;

      if (preBusTypeId != busTypeId)
      {
         record.data.busCategories = "";
         record.setDirty();
      }
      form.updateRecord(record);
      var store = this.getProfileIdentityStoreStore();
      this.save(record, store, "Business");
   },

   //SAME FUNCTION IS USED TO SAVE BUSINESS TYPE,CATEGORY FORM DUE TO SAME STORE
   onSaveIdentityForm: function()
   {
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);

      var store = this.getProfileIdentityStoreStore();
      this.save(record, store, "Identity");
   },

   save: function(record, store, tab)
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      /*var modified = 'false';*/
      if (record.dirty)
      {

         if (!record.isValid())
         {
            if (lang == "fr")
            {
               Ext.example.msg('Cuidado', 'Campos marcados con<font color = "red"> * </font>no pueden estar vacios');
            }
            if (lang == "en")
            {
               Ext.example.msg('Cuidado', 'Fields marked with <font color = "red">*</font> cannot be empty');
            }
            return;
         }
         // console.log(record);
         /*if (record.modified.busCategories)
         {
            modified = 'true';
         }*/
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
         if (lang == "fr")
         {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Cargando..." });
            myMask.show();
         }
         if (lang == "en")
         {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
            myMask.show();
         }

         store.sync({
            scope: this,
            success: function(response)
            {
               myMask.hide();
               statusBar[0].clearStatus({ useDefaults: true });
               if (lang == "fr")
               {
                  Ext.example.msg('Exitoso', 'Los datos fueron guardados.');
               }
               if (lang == "en")
               {
                  Ext.example.msg('Success', 'Record saved Successfully.');
               }
               // console.log(tab);
               if (tab == "Identity")
               {
                  this.onNextIdentity();
               } else if (tab == "Business")
               {
                  this.onNextBusinessPanel();
               }
               if (tab == "Category")
               {
                  this.onNextCategory();
               }
               if (tab == "Photo")
               {
                  this.onNextPhotograph();
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
   

   /***************************photograph*****************************************/
   onClickLogoUpload: function()
   {
      var win = this.getProfileUploadLogoWindow();
      win.animateTarget = 'uploadLogo';
      win.show();
   },
   
   onUploadLogoImage:function()
   {
      var imgText = this.getProfileUploadLogoWindow().down('#logoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var rawValue = imgText.getRawValue();

      if (rawValue != '') {
         //this.getOffersInfoUploadWindow().close();
         var win = this.getProfileImagePreviewWindow();
         win.show();
         var confirmUploadBut = this.getProfileImagePreviewWindow().down('#confirmUpload');
         confirmUploadBut.enable();
         var previewImgBox = document.getElementById('profileImagePreDataView');
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

   onConfirmUploadLogoImage: function()
   {
     /* var lang = this.getApplication().getController('BrandAdminMainController').value;
      this.loadFrom = 'upload';
      var me = this;
      var record = this.getProfilePhotographForm().getForm().getRecord();
      var imgText = this.getProfileUploadLogoWindow().down('#logoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var rawValue = imgText.getRawValue();
      if (rawValue != '')
      {
         var imageBox = document.getElementById('logoImage');
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
                        if (lang == "fr")
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
                        if (lang == "en")
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
                        imageBox.src = record.data.logo;
                        return;
                     } else
                     {
                        me.getProfileUploadLogoWindow().close();
                        me.getProfileImagePreviewWindow().close();
                        me.loadFrom = '';
                     }
                  }

               };

               imageBox.src = event.target.result;

            };


         }
      }*/
      
      var infoForm = this.getProfilePhotographForm().getForm();
      var record = infoForm.getRecord();
      var resArray = [{
         resolution: {
            height: 112,
            width: 150
         },
         aspectRatio: true
      }];
      // var index = this.getPressedButtonIndex();
      var key = record.data.key;
      if (key) {
         var form = this.getProfileUploadLogoWindow().down('form').getForm();
         if (form.isValid()) {
            form.submit({
               url: BrandAdmin.util.Config.getImgUrl() + '/uploadImg',
               scope: this,
               params: {
                  resArray: Ext.encode(resArray),
                  key: key+'-profile'
               },
               waitMsg: 'Uploading your photo...',
               success: function (fp, o) {
                  //  Ext.example.msg('Success', 'Processed file "' + o.result.file + '" on the server');
                  var imagDiv = document.getElementById('logoImage');
                  var random = Math.random();
                  imagDiv.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x112/1.5/' + key + '-profile' + '?' + random;
                  this.getProfileUploadLogoWindow().close();
                  this.getProfileImagePreviewWindow().close();
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

   onClickRemoveLogo: function()
   {
      var imageBox = document.getElementById('logoImage');
      //var imageBox = this.getProfilePhotographForm().down('#logoImageBox');
      imageBox.src = "resources/images/NtAvalImg.png";
      /* imageBox.setHeight(170);
      imageBox.setWidth(140);*/
   },

   onCancelLogoWindow: function()
   {
      var win = this.getProfileUploadLogoWindow();
      win.close();
   },

   onClickProfilePicUpload: function()
   {

      var win = this.getProfileUploadImgWindow();
      win.animateTarget = 'uploadProPic';
      win.show();
   },

   onConfirmUploadProfilePic: function()
   {
     
    /*  var lang = this.getApplication().getController('BrandAdminMainController').value;
      var me = this;
      var record = this.getProfilePhotographForm().getForm().getRecord();
      var imgText = this.getProfileUploadImgWindow().down('#profilePicFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var rawValue = imgText.getRawValue();
      if (rawValue != '')
      {
         var imageBox = document.getElementById('profileImage');
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
                     imageBox.src = event.target.result;
                     if (imageBox.naturalHeight != 100 || imageBox.naturalWidth != 240)
                     {
                        if (lang == "fr")
                        {
                           Ext.MessageBox.show({
                              msg: 'Resolución de las imágenes debe ser de al menos 240 * 100.',
                              title: 'Message',
                              cls: 'messagebox-css',
                              icon: Ext.Msg.ERROR,
                              buttons: Ext.MessageBox.OK,
                              scope: this
                           });
                        }
                        if (lang == "en")
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
                        imageBox.src = record.data.profileImage;
                        return;
                     }
                  } else
                  {
                     me.getProfileUploadImgWindow().close();
                     me.getProfileLogoPreviewWindow().close();
                     me.loadFrom = '';
                  }

               };

               imageBox.src = event.target.result;
            };

         }
      }*/
      

      var infoForm = this.getProfilePhotographForm().getForm();
      var record = infoForm.getRecord();
      var resArray = [{
         resolution: {
            height: 50,
            width: 150
         },
         aspectRatio: true
      }];
      // var index = this.getPressedButtonIndex();
      var key = record.data.key;
      if (key) {
         var form = this.getProfileUploadImgWindow().down('form').getForm();
         if (form.isValid()) {
            form.submit({
               url: BrandAdmin.util.Config.getImgUrl() + '/uploadImg',
               scope: this,
               params: {
                  resArray: Ext.encode(resArray),
                  key: key+'-logo'
               },
               waitMsg: 'Uploading your photo...',
               success: function (fp, o) {
                  //  Ext.example.msg('Success', 'Processed file "' + o.result.file + '" on the server');
                  var imagDiv = document.getElementById('profileImage');
                  var random = Math.random();
                  imagDiv.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x50/1.5/' + key +'-logo'+ '?' + random;
                  this.getProfileUploadImgWindow().close();
                  this.getProfileLogoPreviewWindow().close();
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
   
   onUploadProfilePic:function()
   {
      var imgText = this.getProfileUploadImgWindow().down('#profilePicFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var rawValue = imgText.getRawValue();
     
      if (rawValue != '')
      {
         //this.getOffersInfoUploadWindow().close();
         var win = this.getProfileLogoPreviewWindow();
         win.show();
         var confirmUploadBut = this.getProfileLogoPreviewWindow().down('#confirmUpload');
         confirmUploadBut.enable();
         var previewImgBox = document.getElementById('profilelogoPreDataView');
         var reader = new FileReader();
         if (file)
         {
            reader.readAsDataURL(file);
            reader.onload = function(event)
            {
               previewImgBox.src = event.target.result;
             
            };
         }
         previewImgBox.onload = function()
         {
            var width = previewImgBox.naturalWidth;
            var height = previewImgBox.naturalHeight;
            if (width < 300 || height < 100)
            {
               confirmUploadBut.disable();
               previewImgBox.style.height = '';
               previewImgBox.style.width = '';
            } else
            {
               previewImgBox.style.height  ='100px';
               previewImgBox.style.width = '300px';
            }
         };
      }
   },
   
   onPreviewCancel: function () {
      var win = this.getProfileLogoPreviewWindow();
      win.close();
   },
   
   onCancelProfilePreview:function()
   {
      var win = this.getProfileImagePreviewWindow();
      win.close();
   },

   onClickRemoveProfilePic: function()
   {
      var imageBox = document.getElementById('profileImage');
      imageBox.src = "resources/images/logo.png";
      /* imageBox.setHeight(170);
      imageBox.setWidth(140);*/
   },

   onCancelProfileImageWindow: function()
   {
      var win = this.getProfileUploadImgWindow();
      win.close();
   },

   onSavePhotograph: function()
   {
      /*var logoImage = this.getProfilePhotographForm().down('#logoImageBox');
      var profilePicImage = this.getProfilePhotographForm().down('#profilePicImageBox');*/
      /*var form = this.getProfilePhotographForm().getForm();
      var profileImageBox = document.getElementById('profileImage');
      var logoImageBox = document.getElementById('logoImage');
      var record = form.getRecord();

      if (logoImageBox.src.search("NtAvalImg.png") == -1)
      {
         if (record.data.logo != this.compress(logoImageBox).src)
         {
            record.data.logo = this.compress(logoImageBox).src;
            record.setDirty();
         }
      } else
      {
         record.data.logo = "data:,";
      }

      if (profileImageBox.src.search("logo.png") == -1)
      {
         if (record.data.profileImage != this.compress(profileImageBox).src)
         {
            record.data.profileImage = this.compress(profileImageBox).src;
            record.setDirty();
         }
      } else
      {
         record.data.profileImage = "data:,";
      }
      form.updateRecord(record);
      var store = this.getProfileIdentityStoreStore();
      this.save(record, store, "Photo");*/
      this.onNextPhotograph();
   },
   
   /* compress: function (img) {
      var mimeType = "image/jpeg";
      var cvs = document.createElement('canvas');
      cvs.width = img.naturalWidth;
      cvs.height = img.naturalHeight;
      var ctx = cvs.getContext("2d").drawImage(img, 0, 0);
      var newImageData = cvs.toDataURL(mimeType, 50 / 100);
      var rimg = new Image();
      rimg.src = newImageData;
      return rimg;
   },*/

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
   /***********************************MAIN BREADCRUMB********************************************/
   onClickBreadCrumbMenu: function()
   {
      var me = this;
      Ext.get('Identity_tab').on('click', function(event, target)
      {
         me.onIdentity();
      });
      Ext.get('BusinessType_tab').on('click', function(event, target)
      {
         me.onBusinessType();
      });
      Ext.get('ProductCategories_tab').on('click', function(event, target)
      {
         me.onProductCategories();
      });
      Ext.get('Photograph_tab').on('click', function(event, target)
      {
         me.onPhotograph();
      });
      Ext.get('social_tab').on('click', function(event, target)
      {
         me.onSocial();
      });
   },

   onIdentity: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(0);

      var identityTab = document.getElementById('Identity_tab');
      var anchor = document.getElementById('tab1');
      identityTab.onclick = this.preserveBreadcrumbColor(anchor, identityTab);
   },

   preserveBreadcrumbColor: function(anchor, courseinfoTab)
   {
      // TODO : consolidate code
      var crumb = document.getElementById('crumbs2');
      // Get <UL> element2
      var crumbList = crumb.children[0];
      // Loop around all breadcrumb to remove onclick class
      for (var i = 0; i < crumbList.children.length; i++)
      {
         var liElement = crumbList.children[i]; // Get <LI> element
         liElement.className = ""; //Clearing style on a:after pseudoclass
         var link = liElement.children[0]; // Get <A> element
         link.className = ""; // TODO Modify to preserve additionnal classes
      }

      // Add class on selected link
      anchor.className = "preserveBreadcrumbColor";
      courseinfoTab.className = "preserveAfterColor";
   },

   onBusinessType: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      // console.log(record);
      form.updateRecord(record);
      if (record.dirty)
      {
         if (lang == "fr")
         {
            Ext.Msg.show({
               title: 'Cuidado',
               //msg: 'Please save the changes made before changing tab',
               msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang == "en")
         {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save the changes made before changing tab',
               //msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }

         return;
      }

      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(1);
      var businessTypeTab = document.getElementById('BusinessType_tab');
      var anchor = document.getElementById('tab2');
      businessTypeTab.onclick = this.preserveBreadcrumbColor(anchor, businessTypeTab);
   },

   onProductCategories: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var busTypeStore = this.getProfileBusinessStoreStore();
      var view = this.getProfileBusinessDataView();
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var bId = record.data.busTypeId;
      //console.log(busTypeStore);
      //console.log(bId);

      var items = view.getNodes();
      if (document.menu)
      {
         for (var i = 0; i < document.menu.length; i++)
         {

            var checked1 = items[i][0].checked;
            //var checked2 = items[i].checked;
            //console.log(items[i][0].id;
            var checkedId = items[i][0].id;
            if (checked1)
            {
               if (checkedId != bId)
               {
                  if (lang == "fr")
                  {
                     Ext.Msg.show({
                        title: 'Cuidado',
                        msg: 'Por favor, salve los cambios antes de avanzar.',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                     });
                  }
                  if (lang == "en")
                  {
                     Ext.Msg.show({
                        title: 'Warning',
                        msg: 'Please save changes before proceeding.',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                     });
                  }

                  return;

               }
            }
         }

      }

      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(2);


      var productCatTab = document.getElementById('ProductCategories_tab');
      var anchor = document.getElementById('tab3');
      productCatTab.onclick = this.preserveBreadcrumbColor(anchor, productCatTab);


      var store = this.getStore('ProfileCategoriesStore');
      var pStore = this.getStore('ProfileIdentityStore');

      // console.log(pStore.data.items[0].data.busTypeId);
      var busTypeId = pStore.data.items[0].data.busTypeId;
      if (busTypeId)
      {
         var params = {
            busTypeId: busTypeId
         };
         //console.log(params);
         this.loadProfileBusStore(store, params);

      }


   },

   loadProfileBusStore: function(store, params)
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               if (response)
               {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else
               {
                  var errorCode = operation.error.status;
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

                  //todo : Messagebox color changes
               }
            } else
            {
               //TO CALL VIEWREADY OF CATEGORIES PANEL AFTER STORE LOAD
               var me = this;
               me.getProfileCategoriesDataview().fireEvent('viewready', me.getProfileCategoriesDataview());
            }
         }
      });
   },

   onSocial: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(4);

      var socialTab = document.getElementById('social_tab');
      var anchor = document.getElementById('tab5');
      socialTab.onclick = this.preserveBreadcrumbColor(anchor, socialTab);
   },

   onPhotograph: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var busTypeStore = this.getProfileCategoriesStoreStore();
      var view = this.getProfileCategoriesDataview();
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var bId = record.data.busCategories;
      var checkedIdArray = new Array();

      var items = view.getNodes();
      if (document.busCategoryMenu)
      {
         for (var i = 0; i < document.busCategoryMenu.length; i++)
         {
            var checked1 = items[i][0].checked;
            //console.log(items[i][0].id);
            var checkedId = items[i][0].id;
            if (checked1)
            {
               checkedIdArray.push(checkedId);
            }
         }
         var idx1;
         if (checkedIdArray.length > 0 && bId.length > 0)
         {
            var a1 = checkedIdArray.sort().join();
            var a2 = bId.sort().join();
            //console.log(a1);
            if (a1.length != a2.length)
            {
               if (lang == "fr")
               {
                  Ext.Msg.show({
                     title: 'Cuidado',
                     msg: 'Por favor, salve los cambios antes de avanzar. ',
                     buttons: Ext.Msg.OK,
                     icon: Ext.Msg.WARNING
                  });
               }
               if (lang == "en")
               {
                  Ext.Msg.show({
                     title: 'Warning',
                     msg: 'Please save changes before proceeding. ',
                     buttons: Ext.Msg.OK,
                     icon: Ext.Msg.WARNING
                  });
               }
               return;
            }
         }
      }
      if (bId.length == 0 && checkedIdArray.length > 0)
      {
         if (lang == "fr")
         {
            Ext.Msg.show({
               title: 'Cuidado',
               msg: 'Por favor, salve los cambios antes de avanzar. ',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang == "en")
         {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save changes before proceeding. ',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         return;
      }
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(3);

      var photoTab = document.getElementById('Photograph_tab');
      var anchor = document.getElementById('tab4');
      photoTab.onclick = this.preserveBreadcrumbColor(anchor, photoTab);
   },
      
   /****************************************NEXT BUTTONS************************************/
   onNextIdentity: function()
   {
      //var panel = this.getProfileBreadCrumbPanel().getLayout();
      //panel.setActiveItem(1);
      this.onBusinessType();
   },

   onNextBusinessPanel: function()
   {
      //var panel = this.getProfileBreadCrumbPanel().getLayout();
      //panel.setActiveItem(2);
      this.onProductCategories();
   },

   onNextCategory: function()
   {
      //var panel = this.getProfileBreadCrumbPanel().getLayout();
      //panel.setActiveItem(3);
      this.onPhotograph();
   },

   onNextPhotograph: function()
   {
      //var panel = this.getProfileBreadCrumbPanel().getLayout();
      //panel.setActiveItem(4);
      this.onSocial();
   }
});