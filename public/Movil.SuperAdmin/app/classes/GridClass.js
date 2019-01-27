Ext.define('SuperAdmin.classes.GridClass', {
   name: 'gridclass',

   constructor: function(grid)
   {
      if (grid)
      {
         this.grid = grid;
      }
   },

   onGridActionColumn: function(grid, cell, row, col, e, form, win)
   {

      var m = e.getTarget().className.split(' '),
          record = grid.getStore().getAt(row);
      if (m[4] == 'Edit')
      {
         this.editRecord(form, record, win);
      } else if (m[4] == 'Delete')
      {
         this.deleteRecord(grid, record);
      } else
      {
         return;
      }
     
   },

   editRecord: function(formpanel, record, win)
   {
      var formpanel = win.down(formpanel);
   
      var navigation = Ext.create('SuperAdmin.classes.NavigationClass');
      navigation.gridToForm(win);

      var form = formpanel.getForm();
      form.loadRecord(record);
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
            title:'Warning',
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
      var view = this.grid;
      var sel = view.getSelectionModel().getSelection();
      var store = view.getStore();
      store.remove(sel);
      store.sync({
         scope: this,
         success: function(response)
         {
            Ext.example.msg('Success', 'Record Deleted Successfully');
           this.grid.getSelectionModel().select(0);
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

   loadGridStore: function(store,params)
   {
      store.load({
         scope: this,
         params:params,
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
            }
         }
      });
   }
});