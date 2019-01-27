Ext.define('BrandAdmin.controller.OffersController', {
   extend: 'Ext.app.Controller',
   views: ['offers.OffersPanel', 'offers.OffersGrid', 'offers.OffersDetailsPanel',
      'offers.OffersBreadCrumbPanel', 'offers.OffersBreadCrumb', 'offers.OffersInfoForm',
      'offers.OffersDescriptionForm', 'offers.OffersCategoriesDataview', 'offers.OffersLocGrid',
      'offers.OffersInfoUploadWindow', 'offers.OffersCategoriesPanel'],
   stores: ['OffersStore', 'OffersLocStore', 'OffersCategoriesStore'],

   refs: [{
         ref: 'OffersGrid',
         selector: 'offersgrid'
      }, {
         ref: 'OffersPanel',
         selector: 'offerspanel'
      },
      {
         ref: 'OffersBreadCrumb',
         selector: 'offersbreadcrumb'
      },
      {
         ref: 'OffersBreadCrumbPanel',
         selector: 'offersbreadcrumbpanel'
      },
      {
         ref: 'OffersInfoForm',
         selector: 'offersinfoform'
      },
      {
         ref: 'OffersCategoriesDataview',
         selector: 'offerscategoriesdataview'
      },
      {
         ref: 'OffersCategoriesPanel',
         selector: 'offerscategoriespanel'
      },
      {
         ref: 'OffersDescriptionForm',
         selector: 'offersdescriptionform'
      },
      {
         ref: 'OffersInfoUploadWindow',
         selector: 'offersinfouploadwindow',
         autoCreate: true,
         xtype: 'offersinfouploadwindow'
      }],

   init: function()
   {
      this.control({
         'offersgrid actioncolumn': {
            click: 'onOffersPanelActionColumn'
         },
         'offersbreadcrumb [action=breadCrumb]': {
            click: this.onClickBreadCrumbMenu
         },
         'offersinfoform [action=next]': {
            click: this.onNextOffersInfo
         },
         'offersdescriptionform [action=next]':
            {
               click: 'onNextDescription'
            },
         'offerscategoriesform [action=next]': {
            click: 'onNextCategories'
         },
         'offerslocgrid [action=finish]': {
            click: 'onFinishBreadCrumb'
         },
         'offersinfoform [action=upload]': {
            click: 'onUploadOffersInfo'
         },
         'offersinfouploadwindow [action=cancel]': {
            click: 'onCancelUploadWindow'
         },
         'offersgrid [action=new]': {
            click: 'onNewOffers'
         },
         'offersinfoform [action=save]': {
            click: 'onSaveOffersInfo'
         },
         'offersdescriptionform [action=save]': {
            click: 'onSaveOffersDescription'
         },
         'offersinfouploadwindow [action=upload]': {
            click: 'onUploadImage'
         },
         'offersinfoform [action=back]': {
            click: 'onBackOffersInfo'
         },
         'offersdescriptionform [action=back]': {
            click: 'onBackDescription'
         },
         'offerscategoriespanel [action=back]': {
            click: 'onBackCategories'
         },
         'offerscategoriespanel [action=save]': {
            click: this.onSaveCategory
         },
         'offerscategoriesdataview': {
            viewready: this.onCategoryDataview,
            itemclick: this.onCategoryCheckBoxSelect
         }
      });
   },

   onCategoryCheckBoxSelect: function(view)
   {

      var max = document.offersMenu.length; //GETTING ALL ITEMS OF CATEGORIES
      var array = new Array;

      for (var i = 0; i < max; i++)
      {
         if (document.offersMenu[i].offersMenu.checked == true)
         {
            var catId = document.offersMenu[i].offersMenu.id;
            array.push(catId);
         }
      }
      return array;
   },

   onSaveCategory: function()
   {
      var categories = this.onCategoryCheckBoxSelect();
      if (categories.count == 0)
      {
         Ext.example.msg('Warning', 'Please select atleast one category. ');
         return;
      }
      var form = this.getOffersInfoForm().getForm();
      var record = form.getRecord();
      var preCategory = record.data.categories;

      record.data.categories = categories;

      if (preCategory.toString() != categories.toString())
      {

         record.setDirty();
      }
      form.updateRecord(record);
      var store = this.getOffersStoreStore();
      this.save(record, store);
   },

   onCategoryDataview: function(view)
   {
      var items = view.getNodes();
      console.log(items);
      var form = this.getOffersInfoForm().getForm();
      var record = form.getRecord();
      var catArray = record.data.categories;
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

   onBack: function(form)
   {
      var grid = this.getOffersGrid();
      var record = form.getRecord();
      form.updateRecord(record);
      var store = this.getOffersStoreStore();
      var dirty = record.dirty;
      if (dirty)
      {
         Ext.MessageBox.show({
            msg: 'You have not saved the changes made. All your changes made will not be saved. Are you sure you want to do that?',
            icon: Ext.Msg.WARNING,
            title: 'Warning',
            cls: 'messagebox-css',
            buttons: Ext.MessageBox.YESNO,
            scope: this,
            fn: this.confirmCancel
         });
      } else
      {
         var items = store.data.items;
         for (var i = 0; i < items.length; i++)
         {
            items[i].reject(true);
            if (items[i].phantom)
            {

               store.remove(items[i]);
            }
         }
         var panel = this.getOffersPanel().getLayout();
         panel.setActiveItem(0);
      }
   },

   onBackOffersInfo: function()
   {
      var form = this.getOffersInfoForm();
      this.onBack(form);

   },

   onBackDescription: function()
   {
      var form = this.getOffersDescriptionForm();
      this.onBack(form);
      form.getForm().reset();


   },

   onBackCategories: function()
   {
      var form = this.getOffersCategoriesForm();
      this.onBack(form);

   },

   confirmCancel: function(button)
   {

      var grid = this.getOffersGrid();
      var panel = this.getOffersPanel();
      var store = this.getOffersStoreStore();
      var items = store.data.items;

      if (button == 'yes')
      {
         panel.getLayout().setActiveItem(0);
         store.rejectChanges();

         for (var i = 0; i < items.length; i++)
         {
            items[i].reject(true);
            if (items[i].phantom)
            {
               store.remove(items[i]);
            }
         }

         grid.getView().refresh();
      } else
      {
         panel.getLayout().setActiveItem(1);

         for (var i = 0; i < items.length; i++)
         {
            if (items[i].phantom)
            {
               store.remove(items[i]);
            }
         }
         grid.getView().refresh();
      }
   },

   onSaveOffersInfo: function()
   {
      var offerImage = this.getOffersInfoForm().down('#imageBox');
      var form = this.getOffersInfoForm().getForm();
      var record = form.getRecord();
      if (offerImage.src)
      {
         record.data.img = offerImage.src;
         record.setDirty();
      }
      form.updateRecord(record);
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;

      record.data.brandId = brandId;
      
      var store = this.getOffersStoreStore();
      this.save(record, store);
   },

   onSaveOffersDescription: function()
   {
      var form = this.getOffersDescriptionForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);
      console.log(record);
      var store = this.getOffersStoreStore();
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

   onNewOffers: function()
   {
      var panel = this.getOffersPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getOffersInfoForm();
      var store = this.getStore('OffersStore');

      var record = new store.model;
      console.log(record);
      store.insert(store.data.length, record);
      form.loadRecord(record);
      var imageBox = this.getOffersInfoForm().down('#imageBox');

      imageBox.setSrc('');

      var descForm = this.getOffersDescriptionForm();
      descForm.loadRecord(record);
   },

   onCancelUploadWindow: function()
   {
      var win = this.getOffersInfoUploadWindow();
      win.close();
      var form = this.getOffersInfoForm();
      form.reset();
   },

   onUploadOffersInfo: function()
   {
      var win = this.getOffersInfoUploadWindow();
      win.show();

   },

   onUploadImage: function()
   {
      var imgText = this.getOffersInfoUploadWindow().down('#uploadFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var imageBox = this.getOffersInfoForm().down('#imageBox');
      var reader = new FileReader();
      if (file)
      {
         reader.onload = function(event)
         {
            imageBox.setSrc(event.target.result);
         };
         reader.readAsDataURL(file);
      }

      this.getOffersInfoUploadWindow().close();
   },

   onFinishBreadCrumb: function()
   {
      var panel = this.getOffersPanel().getLayout();
      panel.setActiveItem(0);
   },

   onNextCategories: function()
   {
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(3);
   },

   onNextDescription: function()
   {
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(2);
   },

   onNextOffersInfo: function()
   {
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(1);
   },

   onClickBreadCrumbMenu: function()
   {
      var me = this;
      Ext.get('offersinfo_tab').on('click', function(event, target)
      {
         me.onOffersInfo();
      });
      Ext.get('description_tab').on('click', function(event, target)
      {
         me.onDescription();
      });
      Ext.get('categories_tab').on('click', function(event, target)
      {
         me.onCategories();
      });
      Ext.get('locations_tab').on('click', function(event, target)
      {
         me.onLocations();
      });
   },

   onLocations: function()
   {
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(3);
   },

   onOffersInfo: function()
   {
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(0);
   },

   onCategories: function()
   {
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(2);
   },

   onDescription: function()
   {
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(1);
   },

   onOffersPanelActionColumn: function(grid, cell, row, col, e)
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
      var grid = this.getOffersGrid().getView();
      grid.select(record);

      var panel = this.getOffersPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getOffersInfoForm().getForm();
      form.loadRecord(record);

      var descriptionForm = this.getOffersDescriptionForm();
      descriptionForm.loadRecord(record);
      var offerImage = this.getOffersInfoForm().down('#imageBox');
      offerImage.setSrc(record.data.img);
      console.log(record);
      var store = this.getStore('OffersLocStore');
      console.log(record.data);
      var params = {
         brandId: record.data.brandId
      };
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      gridClass.loadGridStore(store, params);


      var catStore = this.getStore('OffersCategoriesStore');
      var brandStore = this.getStore('ProfileIdentityStore');
      var busCategories = brandStore.data.items[0].data.busCategories;

      var aparams = {
         categories: busCategories
      };

      gridClass.loadGridStore(catStore, aparams);

   }
});