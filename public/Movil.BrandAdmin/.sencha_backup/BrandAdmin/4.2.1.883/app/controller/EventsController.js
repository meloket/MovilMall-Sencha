Ext.define('BrandAdmin.controller.EventsController', {
   extend: 'Ext.app.Controller',
   views: ['events.EventsGrid', 'events.EventsPanel', 'events.EventsTabPanel', 'events.EventsInfoPanel',
      'events.EventsInfoForm', 'events.EventsPhotoForm', 'events.EventsSocialInfoForm',
      'events.EventsPhotoUploadWindow'],
   
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
         ref:'EventsPhotoForm',
         selector: 'eventsphotoform'
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
            click: 'onNewEventsGrid'
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
         }
      });
   },
  
   onSaveInfoForm: function()
   {
      var form = this.getEventsInfoForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
      record.data.brandId = brandId;
      console.log(record);
      var win = '';
      var store = this.getEventsStoreStore();
      var formclass = Ext.create('BrandAdmin.classes.FormClass');
      formclass.save(record, form, win, store);
   },
   
   onSaveSocialInfoForm: function()
   {
      var form = this.getEventsSocialInfoForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);
      var win = '';
      var store = this.getEventsStoreStore();
      var formclass = Ext.create('BrandAdmin.classes.FormClass');
      formclass.save(record, form, win, store);
   },
   
   onPhotoUpload: function()
   {
      var win = this.getEventsPhotoUploadWindow();
      win.show();
   },
   
   //INSIDE THE WINDOW UPLOAD BUTTON
   onPhotoUploadClick:function()
   {
      var imgText = this.getEventsPhotoUploadWindow().down('#uploadPhotoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var imageBox = this.getEventsPhotoForm().down('#eventImageBox');
      var reader = new FileReader();
      if (file) {
         reader.onload = function (event) {
            imageBox.setSrc(event.target.result);
         };
         reader.readAsDataURL(file);
      }

      this.getEventsPhotoUploadWindow().close();
   },
   
   onCancelUploadWindow: function()
   {
      var win = this.getEventsPhotoUploadWindow();
      win.close();
   },
   
   onCancelEventsInfo: function()
   {
      var panel = this.getEventsPanel().getLayout();
      var store = this.getEventsStoreStore();
      //store.rejectChanges();

      var formpanel = this.getEventsInfoForm();
      var grid = this.getEventsGrid();
      //var navigation = Ext.create('BrandAdmin.classes.NavigationClass');
      //navigation.backTogridFromTab(panel, grid, formpanel);
      if (formpanel)
      {
         var form = formpanel.getForm();
         var record = form.getRecord();
         form.updateRecord(record);

         var dirty = record.dirty;
         console.log(dirty);
         if (record.phantom == true && record.dirty == false)
         {
            //win.hide();

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
         console.log(button);
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
   
   onCancelSocialInfo: function()
   {
      var panel = this.getEventsPanel().getLayout();
      var store = this.getEventsStoreStore();
      //store.rejectChanges();

      //panel.setActiveItem(0);
      var grid = this.getEventsGrid();
      var form1 = this.getEventsSocialInfoForm();
      var navigation = Ext.create('BrandAdmin.classes.NavigationClass');
      navigation.backTogridFromTab(panel, grid, form1);
   },
   
   onNewEventsGrid: function()
   {
      var panel = this.getEventsPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getEventsInfoForm();
      var form1 = this.getEventsSocialInfoForm();
      var store = this.getEventsStoreStore();
      var record = new store.model;

      store.insert(store.data.length, record);
      form.loadRecord(record);
      form1.loadRecord(record);
   },
   
   onBackEventsInfo: function()
   {

      var panel = this.getEventsPanel().getLayout();
      var store = this.getEventsStoreStore();
      store.rejectChanges();

      panel.setActiveItem(0);

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
      var grid = this.getEventsGrid().getView();
      grid.select(record);

      var panel = this.getEventsPanel().getLayout();
      panel.setActiveItem(1);

      var form = this.getEventsInfoForm().getForm();
      var socialForm =  this.getEventsSocialInfoForm().getForm();
      form.loadRecord(record);
      socialForm.loadRecord(record);
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
      var view = this.getEventsGrid();
      console.log(view);
      var sel = view.getSelectionModel().getSelection();
      var store = view.getStore();
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
   }
});