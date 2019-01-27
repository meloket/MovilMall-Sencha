
Ext.define('BrandAdmin.controller.LocationsController', {
   extend: 'Ext.app.Controller',

   views: ['locations.LocationsPanel',
      'locations.LocationsGrid',
      'locations.LocationsDetailPanel',
      'locations.LocationsDetailForm',
      'locations.LocationsMapPanel',
      'locations.LocationsGridPanel',
      'locations.LocationQRIframeView'],

   stores: ['LocationsStore', 'StateComboStore', 'CityComboStore', 'LocationMallsComboStore',
      'FromToWorkingHoursComboStore', 'LocWithinMallComboStore'],

   refs: [{
         ref: 'LocationsGrid',
         selector: 'locationsgrid'
      },
      {
         ref: 'LocationsPanel',
         selector: 'locationspanel'
      },
      {
         ref: 'LocationsDetailForm',
         selector: 'locationsdetailform'
      },
      {
         ref: 'LocationsDetailPanel',
         selector: 'locationsdetailpanel'
      },
      {
         ref: 'LocationsMapPanel',
         selector: 'locationsmappanel'
      }],

   init: function()
   {
      this.control({
         'locationsgrid actioncolumn': {
            click: 'onLocationsPanelActionColumn'
         },
         'locationsdetailpanel [action=cancel]': {
            click: 'onBack'
         },
         'locationsdetailpanel [action=back]': {
            click: 'onBack'
         },
         'locationsdetailpanel [action=save]': {
            click: 'onSave'
         },
         'locationsgrid [action=new]': {
            click: 'onNewLocation'
         },

         'locationsdetailform [itemId=stateCombo]': {
            select: this.onSelectState
         },
         'locationsdetailform [itemId=cityCombo]': {
            expand: this.onExpandCity
         },

         'locationsmappanel [itemId=mapPanel]': {
            mapready: this.onRenderMap
         },
         'locationsdetailform [action=yinside]': {
            change: this.onInsideMall
         },
         'locationsdetailpanel [action=searchMap]': {
            click: this.onMapGo
         },
         'locationsdetailform [action=genQRCodeOne]': {
            click: this.onGenQrCodeOne
         }
      });
      this.Record;
      this.map = 0;
   },
   
   onExpandCity: function()
   {
      var stateCombo = this.getLocationsDetailForm().down('#stateCombo');
      console.log(stateCombo);
      var data = stateCombo.displayTplData;
      if (!data[0])
      {
         return;
      }
      var stateId = data[0].key;
      console.log(stateId);
      //   var cityCombo = this.getLocationsDetailForm().down('#cityCombo');
      var store = this.getStore('CityComboStore');
      store.clearFilter();
      //store.filter('countryId', countryId);
      store.filter(function(rec)
      {
         return rec.get('stateId') === stateId;
      });
   },

   onInsideMall: function(view, value)
   {
      //console.log(value);
      //   var insideMall = this.getLocationsDetailForm().down('#insideMall').getValue();
      // console.log(this.getLocationsDetailForm().down('#insideMall'));
      var malll = this.getLocationsDetailForm().down('#mall');
      var locWithinMall = this.getLocationsDetailForm().down('#locWithinMall');

      if (value)
      {
         malll.show();
         locWithinMall.show();

      } else
      {
         malll.hide();
         locWithinMall.hide();
      }

   },

   onSelectState: function(view)
   {

      var stateCombo = this.getLocationsDetailForm().down('#stateCombo');
      var stateId = stateCombo.value;
      var cityCombo = this.getLocationsDetailForm().down('#cityCombo');
      var store = this.getStore('CityComboStore');
      cityCombo.setValue('');
      store.clearFilter();
      store.filter('stateId', stateId);
      console.log(store);
      for (var i = 0; i < store.data.items.length; i++)
      {
         console.log("sd");
         //   console.log(store.data.items[i].data.isDefault);
         if (store.data.items[i].data.isDefault == true)
         {
            console.log("j");
            var defaultState = store.data.items[i].data.key;
            //  console.log(store.data.items);
            cityCombo.setValue(defaultState);
         }

      }
   },

   onSave: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var form = this.getLocationsDetailForm();
      var record = form.getRecord();
      form.updateRecord(record);
      if (!this.getLocationsMapPanel().down('#mapPanel').gmap.marker)
      {
         if (lang == "fr")
         {
            //Ext.example.msg('Cuidado', 'Please mark a position');
            Ext.example.msg('Cuidado', 'Por favor marque una posición');
         }
         if (lang == "en")
         {
            Ext.example.msg('Warning', 'Please mark a position');
            //Ext.example.msg('Cuidado', 'Por favor marque una posición');
         }
         return;
      }
      var mapLocPos = this.getLocationsMapPanel().down('#mapPanel').gmap.marker.position;
      var lati = mapLocPos.lat();
      var longitude = mapLocPos.lng();
      var mapLoc = new Array();
      mapLoc.push(lati);
      mapLoc.push(longitude);
      if (record.data.mapLoc.toString() != mapLoc.toString())
      {
         record.data.mapLoc = mapLoc;
         record.setDirty();
      }

      form.updateRecord(record);
      var store = this.getLocationsStoreStore();
      this.save(record, store);

   },

   onNewLocation: function()
   {
      this.Record = null;
      this.map = this.map + 1;

      var panel = this.getLocationsPanel().getLayout();
      panel.setActiveItem(1);

      var form = this.getLocationsDetailForm().getForm();
      var store = this.getLocationsStoreStore();
      var record = new store.model;

      store.insert(store.data.length, record);
      form.loadRecord(record);
      form.reset();
      if (this.map != 1)
      {
         this.onRenderMap();
      }

      var stateStore = this.getStateComboStoreStore();
      var stateCombo = this.getLocationsDetailForm().down('#stateCombo');

      for (var j = 0; j < stateStore.data.items.length; j++)
      {
         if (stateStore.data.items[j].data.isDefault == true)
         {
            var defaultState = stateStore.data.items[j].data.key;

            stateCombo.setValue(defaultState);
            //  console.log(stateCombo.setValue);
         }
         stateCombo.fireEvent('select', stateCombo, stateStore.data.items[j].data);
        // record.dirty = false;
      }
      this.clearLatLongField();
      // this.getLocationsDetailForm().down('#genQRCodeOne').disable();
   },
   
   //we set value to record data, thts y it gives dirty data on new record. this is to set dirty false 
   onSetDirtyFalse: function(record)
   {
      if (record.data.insideMall == false)
         record.dirty = false;

      if (record.data.workingHoursFrom == "" || record.data.workingHoursFrom == null)
         record.dirty = false;
      
      if (record.data.workingHoursTo == "" || record.data.workingHoursTo == null)
         record.dirty = false;
   },

   onBack: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var store = this.getLocationsStoreStore();
      //store.rejectChanges();
      var grid = this.getLocationsGrid();
      var form = this.getLocationsDetailForm();

      var record = form.getRecord();
      form.updateRecord(record);
      
      if (record.data.insideMall == "true")
      {
         record.data.insideMall = 'Si';
      } else if (record.data.insideMall == "false")
      {
         record.data.insideMall = 'No';
      }
      this.getLocationsGrid().getView().refresh();
      var dirty = record.dirty;
      this.onSetDirtyFalse(record);
      if (dirty)
      {
         if (lang == "fr")
         {
            Ext.MessageBox.show({
               msg: 'Usted no ha salvado sus cambios. Ninguno de sus cambios van a ser salvados. Está seguro que desea hacer esto.  ',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancel
            });
         }
         if (lang == "en")
         {
            Ext.MessageBox.show({
               msg: 'You have not saved your changes. None of your changes will be saved. Are you sure you want to do this? ',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancel
            });
         }
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

         var panel = this.getLocationsPanel().getLayout();
         panel.setActiveItem(0);
      }
   },

   confirmCancel: function(button)
   {

      var grid = this.getLocationsGrid();
      var panel = this.getLocationsPanel();
      var store = this.getLocationsStoreStore();
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

   onLocationsPanelActionColumn: function(grid, cell, row, col, e)
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
      this.Record = record;

      if (record.data.insideMall == "Si")
      {
         record.data.insideMall = 'true';
      } else if (record.data.insideMall == "No")
      {
         record.data.insideMall = 'false';
      }
      this.map = this.map + 1;
      var grid = this.getLocationsGrid().getView();
      grid.select(record);

      var panel = this.getLocationsPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getLocationsDetailForm().getForm();
      form.loadRecord(record);
      if (this.map != 1)
      {
         this.onRenderMap();
      }
      this.clearLatLongField();

      /*if (record.data.qrCodeOne != '')
      {
         this.getLocationsDetailForm().down('#genQRCodeOne').disable();
      } else
      {
         this.getLocationsDetailForm().down('#genQRCodeOne').enable();
      }*/

   },

   deleteRecord: function(grid, record)
   {
      grid.select(record);
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var sel = record;
      if (sel != '')
      {
         if (lang == "fr")
         {
            Ext.MessageBox.show({
               msg: 'Esta apunto de borrar un recod. Está seguro que quiere proceder?',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
         if (lang == "en")
         {
            Ext.MessageBox.show({
               msg: 'You are about to delete a Recod. Are you sure you want to proceed?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
      } else
      {

         if (lang == "en")
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
         if (lang == "fr")
         {
            Ext.MessageBox.show({
               msg: 'Seleccione Record',
               icon: Ext.Msg.ERROR,
               title: 'Message',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.OK,
               scope: this
            });
         }
      }
   },

   onDelete: function(button)
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (button != 'yes')
      {
         return;
      }

      var view = this.getLocationsGrid();
      var sel = view.getSelectionModel().getSelection();
      var store = view.getStore();
      store.remove(sel);
      store.sync({
         scope: this,
         success: function(response)
         {
            if (lang == "fr") {
               Ext.example.msg('Exitoso', 'Registro eliminado con éxito.');
            }
            if (lang == "en") {
               Ext.example.msg('Success', 'Record deleted Successfully.');
            }
            view.getSelectionModel().select(0);
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
                  if (lang == "fr") {
                     error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                  }
                  if (lang == "en") {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
               }
               Ext.example.msg('Message', error);
            }
         }
      });
   },

   save: function(record, store)
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record.dirty)
      {

         if (!record.isValid())
         {
            Ext.example.msg('Cuidado', 'Campos marcados con<font color = "red">*</font> no pueden estar vacios');
            return;
         }
         var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
         var busTypeId = this.getStore('ProfileIdentityStore').data.items[0].data.busTypeId;
         var categories = this.getStore('ProfileIdentityStore').data.items[0].data.busCategories;
         var stateName = this.getLocationsDetailForm().down('#stateCombo').rawValue;
         var cityName = this.getLocationsDetailForm().down('#cityCombo').rawValue;
         record.data.brandId = brandId;
         record.data.busTypeId = busTypeId;
         record.data.categories = categories;

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
         if (lang == "en") {
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
               if (lang == "en") {
                  Ext.example.msg('Success', 'Record saved Successfully');
               }
               record.data.stateName = stateName;
               record.data.cityName = cityName;
               /*var qrCodeOneGenBut = this.getLocationsDetailForm().down('#genQRCodeOne');
               if (record.data.qrCodeOne == '' || record.data.qrCodeOne == null) {
                  qrCodeOneGenBut.enable();
               }*/
               this.getLocationsGrid().getView().select(record);
               this.editRecord(record);
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
                     if (lang == "fr") {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (lang == "en") {
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
            Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
         if (lang == "en") {
            Ext.example.msg('Warning', 'Found no record to save.');
         }
      }
   },

   onRenderMap: function()
   {
      var map = this.getLocationsMapPanel().down('#mapPanel');
      if (this.Record != null)
      {
         var marker = new google.maps.Marker({
            map: map.gmap,
            position: new google.maps.LatLng(this.Record.data.mapLoc[0], this.Record.data.mapLoc[1])
         });
         //   map.gmap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
         var pos = new google.maps.LatLng(this.Record.data.mapLoc[0], this.Record.data.mapLoc[1]);
         if (map.gmap)
         {
            map.gmap.setCenter(pos);

            if (map.gmap.marker)
            {
               map.gmap.marker.setMap(null);
            }
            map.gmap.marker = marker;
         }


         marker.setMap(map.gmap);
      } else
      {
         var marker1 = new google.maps.Marker({ map: map.gmap, position: new google.maps.LatLng(8.9936000, -79.5197300) });
         var pos1 = new google.maps.LatLng(8.9936000, -79.5197300);
         //   map.gmap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
         if (map.gmap)
         {
            map.gmap.setCenter(pos1);

            if (map.gmap.marker)
            {
               map.gmap.marker.setMap(null);
            }
            map.gmap.marker = marker1;
         }


         marker1.setMap(map.gmap);
      }
   },

   onMapGo: function()
   {
      var map = this.getLocationsMapPanel().down('#mapPanel');
      var lat = this.getLocationsDetailPanel().down('#Lat').getValue();
      var longi = this.getLocationsDetailPanel().down('#Long').getValue();
      var pos = new google.maps.LatLng(lat, longi);
      map.gmap.setCenter(pos);
   },

   clearLatLongField: function()
   {
      this.getLocationsDetailPanel().down('#Lat').setValue('');
      this.getLocationsDetailPanel().down('#Long').setValue('');
   },

   onGenQrCodeOne: function()
   {
      /*var selection = this.getLocationsGrid().getSelectionModel().getSelection()[0];
      var qrCodeOneField = this.getLocationsDetailForm().down('#qrCodeOne');
      var qrCodeOneGenBut = this.getLocationsDetailForm().down('#genQRCodeOne');
      if (selection)
      {
         var key = selection.data.key;
      } else
      {
         key = this.getLocationsDetailForm().getRecord().data.key;
      }
      var initKey = key.split('::');

      var text = '';
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 4; i++)
      {
         text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      var uniqueCode = 'B' + initKey[1] + '-' + 'L' + initKey[3] + '-1' + '-' + text;
      qrCodeOneField.setValue(uniqueCode);
      qrCodeOneGenBut.disable();
      if (selection) {
         selection.set('qrCodeOne', uniqueCode);
      } else {
         this.getLocationsDetailForm().getRecord().set('qrCodeOne', uniqueCode);;
      }
      
      this.onSave();*/
      window.open('https://www.the-qrcode-generator.com/', '_blank');
   }
});