Ext.define('BrandAdmin.controller.ProfileController', {
   extend: 'Ext.app.Controller',

   views: ['profile.ProfilePanel', 'profile.ProfileBreadCrumbPanel',
      'profile.ProfileBreadCrumb', 'profile.ProfileIdentityForm', 'profile.ProfileBusinessDataView',
      'profile.ProfileSocialForm', 'profile.ProfilePhotographForm', 'profile.ProfileUploadImgWindow',
      'profile.ProfileUploadLogoWindow', 'profile.ProfileBusinessPanel', 'profile.ProfileCategoriesPanel',
      'profile.ProfileCategoriesDataview'],

   stores: ['ProfileIdentityStore', 'ProfileBusinessStore', 'ProfileCategoriesStore'],

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
      }
   ],

   init: function()
   {
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
            
         //LOGO
         'profilephotographform [action=uploadLogo]': {
            click: this.onClickLogoUpload
         },
         'profileuploadlogowindow [action=cancel]': {
            click: 'onCancelLogoWindow'
         },
         'profileuploadlogowindow [action=upload]': {
            click: this.onUploadLogoImage
         },


         //PROFILE PIC
         'profilephotographform [action=uploadProfile]': {
            click: this.onClickProfilePicUpload
         },

         'profileuploadimgwindow [action=cancel]': {
            click: 'onCancelProfileImageWindow'
         },

         'profileuploadimgwindow [action=upload]': {
            click: this.onUploadProfilePic
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
   },

   onSaveSocialForm: function()
   {
      var store = this.getProfileIdentityStoreStore();
      var form = this.getProfileSocialForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);

      console.log(record);
      this.save(record, store);
   },
   
   /***************************category*****************************************/
   
   //FOR DEFAULT CHECKED CHECKBOX ACCORDING TO RECORD IN CATEGORIES DATAVIEW
   onCategoriesDataView: function(view)
   {
      var items = view.getNodes();
      console.log(items);
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var catArray = record.data.busCategories;
      var keyArray = new Array();
      //GET KEYS,VALUES PAIR OF ALL ITEMS
      for (var i = 0; i < items.length; i++)
      {
         var splittedString = view.findItemByChild(items[i]).innerHTML.split("id=")[1];
         var keys = splittedString.split(">")[0];
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
                  temp.splice(4, 0, "checked");
                  view.findItemByChild(items[d]).innerHTML = temp.join(" ");
               }
            }
         }


      }
   },

   onCategoryCheckBoxSelect: function(view)
   {
      /* console.log(view);
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      record.data.busCategories = "";*/
      var max = document.busCategoryMenu.length; //GETTING ALL ITEMS OF CATEGORIES
      var array = new Array;

      for (var i = 0; i < max; i++)
      {
         if (document.busCategoryMenu[i].busCategoryMenu.checked == true)
         {
            var busTypeId = document.busCategoryMenu[i].busCategoryMenu.id;
            array.push(busTypeId);
         }
      }

      return array;
   },

   onSaveCategories: function()
   {
      var busCategories = this.onCategoryCheckBoxSelect();
      if (busCategories.count == 0)
      {
         Ext.example.msg('Warning', 'Please select atleast one category. ');
         return;
      }
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      var preCategory = record.data.busCategories;

      record.data.busCategories = busCategories;

      if (preCategory.toString() != busCategories.toString())
      {

         record.setDirty();
      }
      form.updateRecord(record);
      var store = this.getProfileIdentityStoreStore();
      this.save(record, store);
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
               var keys = splittedString.split(">")[0];
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
               this.onBusTypeCheckBoxSelect();
            }
         }
      }
   },
   
   //TO CHECK ONLY ONE CHECKBOX IS CHECKED OR NOT
   onBusTypeCheckBoxSelect: function(view, recgord, item, idx, event, opts)
   {
      var serNoChecked = "";
      var max = document.menu.length; //GETTING ALL ITEMS
      var count = 0;

      for (var i = 0; i < max; i++)
      {
         if (document.menu[i].busType.checked == true)
         {
            count++;
            serNoChecked = i;
            var busTypeId = document.menu[i].busType.id;
         }
      }
      if (count == 1)
      {
         for (var i = 0; i < max; i++)
         {
            if (document.menu[i].busType.checked == false)
            {
               document.menu[i].busType.disabled = true;
            }
         }
      } else if (count == 0)
      {
         for (var i = 0; i < max; i++)
         {
            document.menu[i].busType.disabled = false;
         }
      }
      //set busTypeId
      //var form = this.getProfileIdentityForm().getForm();
      //var record = form.getRecord();

      //record.data.busTypeId = busTypeId;

      //record.setDirty();


      if (null == max)
      {
         return false;
      }
      if (count == 0)  //ANY CHECKBOX IS CHECKED OR NOT
      {
         return false;
      } else if (count > 0) //LL RETURN ONLY ONE BUSTYPE
      {
         return busTypeId;
      }

   },

   onSaveBusinessType: function()
   {
      var busTypeId = this.onBusTypeCheckBoxSelect();
      if (!busTypeId)
      {
         Ext.example.msg('Warning', 'Please select atleast one business type. ');
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
      this.save(record, store);
   },

   //SAME FUNCTION IS USED TO SAVE BUSINESS TYPE,CATEGORY FORM DUE TO SAME STORE
   onSaveIdentityForm: function()
   {
      var form = this.getProfileIdentityForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);

      var store = this.getProfileIdentityStoreStore();
      this.save(record, store);
   },

   save: function(record, store)
   {
      if (record.dirty)
      {

         if (!record.isValid())
         {
            Ext.example.msg('Warning', 'Fields marked with <font color = "red">*</font> cannot be empty');
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
         var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Saving data..." });
         myMask.show();
         store.sync({
            scope: this,
            success: function(response)
            {
               myMask.hide();
               statusBar[0].clearStatus({ useDefaults: true });
               Ext.example.msg('Success', 'Record Saved Successfully');

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
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);
               }
            }
         });
      } else
      {
         Ext.example.msg('Warning', 'Found No Record to Save');
      }
   },
   

   /***************************photograph*****************************************/
   onClickLogoUpload: function()
   {
      var win = this.getProfileUploadLogoWindow();
      win.show();
   },

   onUploadLogoImage: function()
   {
      var imgText = this.getProfileUploadLogoWindow().down('#logoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var imageBox = this.getProfilePhotographForm().down('#logoImageBox');
      var reader = new FileReader();
      if (file)
      {
         reader.onload = function(event)
         {
            imageBox.setSrc(event.target.result);
         };
         reader.readAsDataURL(file);
      }

      this.getProfileUploadLogoWindow().close();
   },

   onCancelLogoWindow: function()
   {
      var win = this.getProfileUploadLogoWindow();
      win.close();
   },

   onClickProfilePicUpload: function()
   {

      var win = this.getProfileUploadImgWindow();
      win.show();
   },

   onUploadProfilePic: function()
   {
      var imgText = this.getProfileUploadImgWindow().down('#profilePicFileField');
      var file = imgText.fileInputEl.dom.files[0];
      console.log(file);
      var imageBox = this.getProfilePhotographForm().down('#profilePicImageBox');
      var reader = new FileReader();
      if (file)
      {
         reader.onload = function(event)
         {
            imageBox.setSrc(event.target.result);
         };
         reader.readAsDataURL(file);
      }

      this.getProfileUploadImgWindow().close();
   },
   onCancelProfileImageWindow: function()
   {
      var win = this.getProfileUploadImgWindow();
      win.close();
   },
   onSavePhotograph: function()
   {
      var logoImage = this.getProfilePhotographForm().down('#logoImageBox');
      var profilePicImage = this.getProfilePhotographForm().down('#profilePicImageBox');
      var form = this.getProfilePhotographForm().getForm();
      var record = form.getRecord();
      if (logoImage.src)
      {
         record.data.logo = logoImage.src;
         record.setDirty();
      }
      if (profilePicImage.src)
      {
         record.data.profileImage = profilePicImage.src;
         record.setDirty();
      }
      form.updateRecord(record);
      var store = this.getProfileIdentityStoreStore();
      this.save(record, store);
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
   },

   onBusinessType: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(1);
   },

   onProductCategories: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(2);
      var store = this.getStore('ProfileCategoriesStore');
      var pStore = this.getStore('ProfileIdentityStore');

      console.log(pStore.data.items[0].data.busTypeId);
      var busTypeId = pStore.data.items[0].data.busTypeId;
      if (busTypeId)
      {
         var params = {
            busTypeId: busTypeId
         };
         console.log(params);
         this.loadProfileBusStore(store, params);

      }

   },
   loadProfileBusStore: function(store, params)
   {
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
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
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
   },

   onPhotograph: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(3);
   },
      
   /****************************************NEXT BUTTONS************************************/
   onNextIdentity: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(1);
   },

   onNextBusinessPanel: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(2);
      this.onProductCategories();
   },

   onNextCategory: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(3);
   },

   onNextPhotograph: function()
   {
      var panel = this.getProfileBreadCrumbPanel().getLayout();
      panel.setActiveItem(4);
   }
});