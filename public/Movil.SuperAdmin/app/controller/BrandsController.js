Ext.define('SuperAdmin.controller.BrandsController', {
   extend: 'Ext.app.Controller',

   views: ['BrandsPanel', 'BrandsGrid', 'BrandsTabPanel', 'BrandsInfoFormPanel', 'BrandsProfileForm', 'BrandLocGridPanel', 'BrandSearchMenu'],

   stores: ['BrandsGridStore', 'BrandsLocStore'],

   refs: [{
         ref: 'BrandsTabPanel',
         selector: 'brandstabpanel'
      },
      {
         ref: 'BrandsGrid',
         selector: 'brandsgrid'
      },
      {
         ref: 'BrandsPanel',
         selector: 'brandspanel'
      },
      {
         ref: 'BrandsInfoFormPanel',
         selector: 'brandsinfoformpanel'
      }, {
         ref: 'BrandsProfileForm',
         selector: 'brandsprofileform'
      }, {
         ref: 'BrandSearchMenu',
         selector: 'brandsearchmenu'
      }],

   init: function()
   {
      this.control({
         'brandsgrid actioncolumn': {
            click: 'onBrandsPanelActionColumn'
         },
         'brandstabpanel [action=back]': {
            click: 'onBack'
         },
         'brandsinfoformpanel [action=cancel]': {
            click: 'onCancelBrandsInfo'
         },
         'brandsinfoformpanel [action=approve]': {
            click: this.onApprove
         },
         'brandsinfoformpanel [action=blockBrand]': {
            toggle: this.onBlockBrand
         },
         'brandsinfoformpanel [action=save]': {
            click: 'onSaveInfoForm'
         },
         'brandsearchmenu [action=pending]': {
            click: 'onClickPending'
         },
         'brandsearchmenu [action=approved]': {
            click: 'onClickApproved'
         },
         'brandsearchmenu [action=all]': {
            click: 'onClickAll'
         }
      });

      var me = this;

      me.getBrandsGridStoreStore().on({
         scope: me,
         load: me.onBrandsGridStoreLoad
      });
   },
   
   onBrandsGridStoreLoad: function(store)
   {
      var items = store.data.items;
      
      for (var i = 0; i < items.length; i++)
      {
         if (items[i].data.isVerified)
         {
            items[i].data.status = "Approved";
         } else
         {
            items[i].data.status = "Pending";
         }
      }
      var grid = this.getBrandsGrid().getView();
      grid.refresh();
      this.onClickPending();

   },

   onSaveInfoForm: function()
   {
      var form = this.getBrandsInfoFormPanel().getForm();
      var record = form.getRecord();
      form.updateRecord(record);

      if (record.dirty)
      {
         var store = this.getBrandsGridStoreStore();
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
               var txt = this.getBrandsProfileForm().down('#brandName');
               console.log(txt);
               txt.setValue(record.data.name);

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

   onBlockBrand: function(button, state)
   {
      var form = this.getBrandsInfoFormPanel();
      var record = form.getRecord();
      form.updateRecord(record);

      var brandId = record.data.key;
      var userId = record.data.userId;
      console.log(record);
      Ext.Ajax.request({
         method: 'POST',
         url: '../Brand/BlockBrand',
         scope: this,
         params: {
            brandId: brandId,
            userId: userId,
            toggled: state
         },
         success: function(response)
         {
            var result = Ext.JSON.decode(response.responseText);

            if (result)
            {
               if (state == true)
               {

                  Ext.example.msg('Success', 'Brand Blocked Successfully');
                  record.data.isBlocked = true;

               } else
               {
                  Ext.example.msg('Success', 'Brand Unblocked Successfully');
                  record.data.isBlocked = false;
               }


            }
         },
         failure: function(response)
         {
            var error = 'Something went wrong';
            if (response.status == 401)
            {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.example.msg('Message', error);
         }
      });
      var blockStatus = this.getBrandsInfoFormPanel().down('#blockStatus');
      if (state == true)
      {
         button.setText("Unblock Brand");
         blockStatus.setText("Blocked");
      } else
      {
         button.setText("Block Brand");
         blockStatus.setText("Unblocked");
      }

   },

   onApprove: function()
   {
      var form = this.getBrandsInfoFormPanel();
      var record = form.getRecord();
      form.updateRecord(record);

      var brandId = record.data.key;
      var userId = record.data.userId;
      Ext.Ajax.request({
         method: 'POST',
         url: '../Brand/ApproveBrand',
         scope: this,
         params: {
            brandId: brandId,
            userId: userId
         },
         success: function(response)
         {
            var result = Ext.JSON.decode(response.responseText);
            if (result)
            {
               Ext.example.msg('Success', 'Record approved Successfully');
            }
            var approvalStatus = form.down('#approvalStatus');
            approvalStatus.setText("Approved");
            form.down('#separator').hide();
            form.down('#approveBtn').hide();
            record.data.isVerified = true;
            var store = this.getStore('BrandsGridStore');
            var gridClass = Ext.create('SuperAdmin.classes.GridClass');
            gridClass.loadGridStore(store);
         },
         failure: function(response)
         {
            var error = 'Something went wrong';
            if (response.status == 401)
            {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.example.msg('Message', error);
         }
      });


   },

   onCancelBrandsInfo: function()
   {
      var grid = this.getBrandsGrid();
      var formpanel = this.getBrandsInfoFormPanel();
      if (formpanel)
      {
         var form = formpanel.getForm();
         var record = form.getRecord();
         form.updateRecord(record);

         var dirty = record.dirty;
         console.log(dirty);
         if (record.phantom == true && record.dirty == false)
         {
            var store = grid.getStore();
            var items = store.data.items;
            console.log(store);
            var modifiedRecords = store.getModifiedRecords();
            for (var i = 0; i < items.length; i++)
            {
               if (items[i].phantom == true)
               {
                  store.remove(items[i]);
               }
            }
         } else if (dirty)
         {
            Ext.MessageBox.show({
               msg: 'You are closing a form that has unsaved changes. Are you sure you want to close this form?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancel
            });
            return false;
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
            var panel = this.getBrandsPanel().getLayout();
            panel.setActiveItem(0);

         }
      }
   },

   confirmCancel: function(button)
   {
      var grid = this.getBrandsGrid();
      var store = grid.getStore();

      if (button == 'yes')
      {

         if (!grid)
         {
            return;
         }

         store.rejectChanges();
         var items = store.data.items;

         for (var i = 0; i < items.length; i++)
         {
            items[i].reject(true);
            if (items[i].phantom == true)
            {
               store.remove(items[i]);
            }
         }
         grid.getView().refresh();
         var panel = this.getBrandsPanel().getLayout();
         panel.setActiveItem(0);
      }
   },

   onBack: function()
   {
      var panel = this.getBrandsPanel().getLayout();
      panel.setActiveItem(0);
   },

   onBrandsPanelActionColumn: function(grid, cell, row, col, e)
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
      var grid = this.getBrandsGrid().getView();
      grid.select(record);

      var panel = this.getBrandsPanel().getLayout();
      panel.setActiveItem(1);

      var form = this.getBrandsInfoFormPanel();
      var profileForm = this.getBrandsProfileForm().getForm();
      profileForm.loadRecord(record);
      form.getForm().loadRecord(record);


      var approvalStatus = form.down('#approvalStatus');
      if (record.data.isVerified)
      {
         form.down('#approveBtn').hide();
         form.down('#separator').hide();
         approvalStatus.setText("Approved");
      } else
      {
         form.down('#approveBtn').show();
         form.down('#separator').show();
         approvalStatus.setText("Pending");
      }

      var blockStatus = this.getBrandsInfoFormPanel().down('#blockStatus');
      var button = this.getBrandsInfoFormPanel().down('#blockBrand');
      if (record.data.isBlocked)
      {
         console.log(button);
         button.pressed = true;
         button.setText("Unblock Brand");
         blockStatus.setText("Blocked");
      } else
      {
         button.setText("Block Brand");
         blockStatus.setText("Unblocked");
      }

      var brandId = record.data.key;
      var store = this.getBrandsLocStoreStore();
      var params = {
         brandId: brandId
      };

      var brandLogo = this.getBrandsProfileForm().down('#brandLogo');

      brandLogo.setSrc(SuperAdmin.util.Config.getImgUrl() + '/image/120x50/1.5/' + brandId + '-logo');
     // brandLogo.setSrc(record.data.logo);
      var gridClass = Ext.create('SuperAdmin.classes.GridClass');
      gridClass.loadGridStore(store, params);
      console.log(store);

   },

   deleteRecord: function(grid, record)
   {

      grid.select(record);
      var sel = record;
      if (record.data.isDefault == 'true')
      {
         Ext.MessageBox.show({
            msg: 'You are about to delete the default record. If you delete there will be no current default value set for this record. Are you sure ?',
            icon: Ext.Msg.WARNING,
            title: 'Warning',
            buttons: Ext.MessageBox.YESNO,
            scope: this,
            fn: this.onDelete
         });
         return;
      }
      if (sel != '')
      {
         Ext.MessageBox.show({
            msg: 'You are about to delete your record. Are you sure?',
            icon: Ext.Msg.WARNING,
            title: 'Warning',
            buttons: Ext.MessageBox.YESNO,
            scope: this,
            fn: this.onDelete
         });
      } else
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
   },

   onDelete: function(button)
   {
      if (button != 'yes')
      {
         return;
      }
      var grid = this.getBrandsGrid();
      var sel = grid.getSelectionModel().getSelection();
      var store = grid.getStore();
      store.remove(sel);
      store.sync({
         scope: this,
         success: function(response)
         {
            Ext.example.msg('Success', 'Record Deleted Successfully');
            grid.getSelectionModel().select(0);
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
               var error = 'Something went wrong';
               if (errorCode == 401)
               {
                  error = 'Sorry, You are not authorized to access this module.';
               }
               Ext.example.msg('Message', error);
            }
         }
      });
   },

   onClickPending: function()
   {
      var store = this.getBrandsGridStoreStore();
      store.filterBy(function(item)
      {
         if (item.data.isVerified == false)
         {
            return true;
         } else
         {
            return false;
         }
      },this);
   },
   
   onClickApproved:function()
   {
      var store = this.getBrandsGridStoreStore();
      store.filterBy(function (item) {
         if (item.data.isVerified) {
            return true;
         } else {
            return false;
         }
      }, this);
   },
   
   onClickAll:function()
   {
      var store = this.getBrandsGridStoreStore();
      store.clearFilter();
   }
});