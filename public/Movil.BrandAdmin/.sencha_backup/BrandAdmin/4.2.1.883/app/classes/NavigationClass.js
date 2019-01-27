Ext.define('BrandAdmin.classes.NavigationClass', {
   constructor: function (win, grid, stateCombo, districtCombo)
   {
      if (win)
      {
         this.win = win;
      }

      if (grid)
      {
         this.grid = grid;
      }
  
    },

   gridToForm: function(win, form)
   {
      
      if (win)
      {
         win.show();
      }

      if (form)
      {
         form.getForm().reset();
         this.loadEmptyModel(form);
      }
   },

   loadEmptyModel: function(formpanel, grid)
   {
      var form = formpanel.getForm();
      var store = Ext.data.StoreManager.lookup(formpanel.store);
      var record = new store.model;
      store.insert(store.data.length, record);
      if (grid)
      {
         grid.select(record);
      }
      form.loadRecord(record);
   },

   backToGrid: function(win, grid, formpanel)
   {
      if (formpanel)
      {
         var form = formpanel.getForm();
         var record = form.getRecord();
         form.updateRecord(record);
        
         var dirty = record.dirty;
         console.log(dirty);
         if (record.phantom == true && record.dirty == false)
         {
            win.hide();

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
         } 
           
         else if (dirty)
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
            if (win)
            {
               win.hide();
            }

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
         }
      } else
      {
         win.hide();
      }

   },
 
  
   confirmCancel: function(button)
   {
    
      var store = grid.getStore();

      if (button == 'yes')
      {
         if (this.win)
         {
            this.win.hide();
         }

         if (!this.grid)
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
         this.grid.getView().refresh();
      }
   }
});