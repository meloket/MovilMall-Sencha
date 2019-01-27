Ext.define('BrandAdmin.controller.PointsController', {
   extend: 'Ext.app.Controller',

   views: ['points.PointsPanel',
      'points.PointsGrid'],

   stores: ['LocationsComboStore',
      'PointsGridStore'],

   refs: [{
      ref: 'PointsGrid',
      selector: 'pointsgrid'
   }],

   init: function()
   {
      this.control({
         'pointsgrid [itemId=locCombo]': {
            select: this.onSelectLocCombo
         },
         'pointsgrid actioncolumn': {
            click: 'onPointsGridActionColumn'
         },
         'pointsgrid [itemId=searchField]': {
            keyup: 'onSearchFieldKeyUp'
         }
      });

   },

   onSelectLocCombo: function(combo, record)
   {
      var store = this.getPointsGridStoreStore();
      var locationId = record[0].data.key;
      var params = { locationId: locationId };
      this.loadPointsGridStore(store, params);
   },

   loadPointsGridStore: function(store, params)
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
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            }
         }
      });

   },

   onPointsGridActionColumn: function(grid, cell, row, col, e)
   {
      var m = e.getTarget().className.split(' '),
          record = grid.getStore().getAt(row);

      if (m[4] == 'Edit')
      {
         this.editRecord(record);
      } else
      {
         return;
      }
   },

   editRecord: function(record)
   {
      var store = this.getPointsGridStoreStore();
      Ext.Msg.prompt('Nombre', 'Introduzca su Nombre:', function (btn, text)
      {
         if (btn == 'ok')
         {
            if (text != '')
            {
               if (text > record.data.points)
               {
                  alert('Por favor introduzca Puntos válidos');
                  return;
               }
               var newVal = record.data.points - parseInt(text);
               record.set('points', newVal);
               //  console.log(record);
               //  console.log(newVal);
               store.sync({
                  scope: this,
                  success: function(response)
                  {
                     Ext.example.msg('Exitoso', 'Registro eliminado con éxito.');

                  },

                  failure: function(response, operations)
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
                           error = 'Lo sentimos, usted no está autorizado a usar este módulo';
                        }
                        Ext.example.msg('Message', error);
                     }
                  }
               });
            }
         }
      }, this);
   },
   
   onSearchFieldKeyUp:function(text)
   {
      var grid = this.getPointsGrid();
      var store = this.getPointsGridStoreStore();
      store.clearFilter(true);
      var val = text.lastValue;

      if (!val) {
        // console.log(val);
         store.clearFilter(true);
         grid.getView().refresh();
         
      }
      
      store.filter({
         property: 'email',
         anyMatch: true,
         value: val
      });

      
   }
});