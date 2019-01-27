Ext.define('BrandAdmin.classes.FormClass', {
   name: 'formclass',

   save: function(record,formpanel, win,store)
   {
     console.log(record);
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
               Ext.example.msg('Message', 'Record Saved Successfully');
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
   }
});