Ext.define('SuperAdmin.controller.CitiesController', {
   extend: 'Ext.app.Controller',

   views: ['masters.CitiesPanel', 'masters.CitiesGrid', 'masters.CitiesForm', 'masters.CitiesWindow'],

   stores: ['CitiesStore', 'StateComboStore'],
   refs: [{
      ref: 'CitiesPanel',
      selector: 'citiespanel'
   }, {
      ref: 'CitiesGrid',
      selector: 'citiesgrid'
   }, {
      ref: 'CitiesForm',
      selector: 'citiesform'
   }, {
      ref: 'CitiesWindow',
      selector: 'citieswindow',
      autoCreate: true,
      xtype: 'citieswindow'
   }],

   init: function () {
      this.control({
         'citiesgrid [action=new]': {
            click: 'onNewCity'
         },
         'citiesgrid actioncolumn': {
            click: 'onCityGridActionColumn'
         },
         'citiesform [action=save]': {
            click: 'onSaveCity'
         },
         'citiesform [action=cancel]': {
            click: 'onCancel'
         },
         'citiesform [itemId=countryCombo]': {
            select: this.onSelectCountry
         },
         'citieswindow': {
            beforeclose: this.onCloseCityWindow
         }
      });
   },

   onCloseCityWindow: function () {
      var win = this.getCitiesWindow();
      var formpanel = this.getCitiesForm();
      var grid = this.getCitiesGrid();
      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      return navigation.backToGrid(win, grid, formpanel);
   },

   onSelectCountry: function (view, record) {
       var countryId=this.getCitiesForm().down('#countryCombo').value;
      var stateCombo = this.getCitiesForm().down('#stateCombo');
      var store = this.getStateComboStoreStore();
      stateCombo.clearValue();
      store.clearFilter();
      store.filter('countryId', countryId);

      /*for (var j = 0; j < store.data.items.length; j++) {
         if (store.data.items[j].data.isDefault == true) {

            var defaultState = store.data.items[j].data.key;

            stateCombo.setValue(defaultState);

         }

      }*/

   },

   onCancel: function () {
      var win = this.getCitiesWindow();
      var formpanel = this.getCitiesForm();
      var grid = this.getCitiesGrid();

      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      navigation.backToGrid(win, grid, formpanel);
   },

   onNewCity: function () {
      
      var win = this.getCitiesWindow();
      win.setTitle('<font color = "white"><b>City Detail</b></font>');
      win.animateTarget = 'addCity';
      var form = this.getCitiesForm();
      var navigation = Ext.create('SuperAdmin.classes.NavigationClass');
      navigation.gridToForm(win, form);

   },

   onCityGridActionColumn: function (grid, cell, row, col, e) {
    
      var form = 'citiesform';
      var win = this.getCitiesWindow();
      win.animateTarget = 'editCity';
      var gridClass = Ext.create('SuperAdmin.classes.GridClass', grid);
      gridClass.onGridActionColumn(grid, cell, row, col, e, form, win);
      var record = this.getCitiesForm().getRecord().data.stateId;
      var stateCombo = this.getCitiesForm().down('#stateCombo');
      stateCombo.value = record;
   },

   onSaveCity: function () {
      var store = this.getCitiesStoreStore();
      var formClass = Ext.create('SuperAdmin.classes.FormClass');

      var form = this.getCitiesForm();
      var win = this.getCitiesWindow();
      var record = form.getForm().getRecord();
      var isDefault = formClass.onCheckIfDefaultValueExists(store);
      var ifIsDefaultSelected = this.getCitiesForm().down('#yesDefault').getValue();
      form.updateRecord(record);
      if (record.dirty) {

         if (isDefault.isDefault == true && ifIsDefaultSelected == true) {
            Ext.MessageBox.show({
               msg: '"' + isDefault.name + '" is set as the default value for City. Please remove default option from it first.',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               buttons: Ext.MessageBox.OK,
               scope: this
            });

            return;
         }
      }

      formClass.save(record, form, win, store);
   },

   deleteRecord: function (grid, record) {
      grid.select(record);
      var sel = record;

      if (sel != '') {
         Ext.MessageBox.show({
            msg: 'You are about to delete your record. Are you sure?',
            icon: Ext.Msg.WARNING,
            title: 'Warning',
            buttons: Ext.MessageBox.YESNO,
            scope: this,
            fn: this.onDelete
         });
      } else {
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

   onDelete: function (button) {
      if (button != 'yes') {
         return;
      }
      var view = this.grid;
      var sel = view.getSelectionModel().getSelection();
      var store = view.getStore();
      store.remove(sel);
      store.sync({
         scope: this,
         success: function (response) {
            Ext.example.msg('Success', 'Record Deleted Successfully');
            this.grid.getSelectionModel().select(0);
         },

         failure: function (response, operation) {
            if (!response.exceptions[0].error) {
               var data = response.operations[0].request.proxy.reader.jsonData.message;
               Ext.example.msg('Message', data);
               store.rejectChanges();
            } else {
               store.rejectChanges();
               var errorCode = response.exceptions[0].error.status;
               var error = 'Something went wrong';
               if (errorCode == 401) {
                  error = 'Sorry, You are not authorized to access this module.';
               }
               Ext.example.msg('Message', error);
            }
         }
      });
   }
});