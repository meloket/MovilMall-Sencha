Ext.define('BrandAdmin.classes.FormClass', {
   name: 'formclass',

   save: function(record, formpanel, win, store, lang)
   {
      console.log(lang);
      if (record.dirty)
      {
         if (!record.isValid())
         {
            if (lang == "fr")
            {
               Ext.example.msg('Cuidado', 'Campos marcados con <font color = "red">*</font> no pueden estar vacios');
            }
            if (lang == "en")
            {
               Ext.example.msg('Warning', 'Fields marked with <font color = "red">*</font> cannot be empty');
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
   }
});