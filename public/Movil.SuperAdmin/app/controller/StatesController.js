Ext.define('SuperAdmin.controller.StatesController', {
   extend: 'Ext.app.Controller',

   views: ['masters.StatesPanel', 'masters.StatesGrid', 'masters.StatesForm', 'masters.StatesWindow'],

   stores: ['StatesStore', 'CountryComboStore'],



   refs: [{
      ref: 'StatesPanel',
      selector: 'statespanel'
   }, {
      ref: 'StatesGrid',
      selector: 'statesgrid'
   }, {
      ref: 'StatesForm',
      selector: 'statesform'
   }, {
      ref: 'StateSearchMenu',
      selector: 'statesearchmenu'
   }, {
      ref: 'StatesWindow',
      selector: 'stateswindow',
      autoCreate: true,
      xtype: 'stateswindow'
   }],


   init: function () {
      this.control({
         'statesgrid [action=new]': {
            click: 'onNewStates'
         },
         'statesform [action=save]': {
            click: 'onSaveState'
         },
         'statesgrid actioncolumn': {
            click: 'onStateGridActionColumn'
         },
         'statesform [action=cancel]': {
            click: 'onCancel'
         },
         'stateswindow': {
            beforeclose: this.onCloseStateWindow
         }
      });
   },

   onCloseStateWindow: function () {
      var win = this.getStatesWindow();
      var formpanel = this.getStatesForm();
      var grid = this.getStatesGrid();

      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      return navigation.backToGrid(win, grid, formpanel);
   },

   onCancel: function () {
      var win = this.getStatesWindow();
      var formpanel = this.getStatesForm();
      var grid = this.getStatesGrid();

      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      navigation.backToGrid(win, grid, formpanel);
   },

   onStateGridActionColumn: function (grid, cell, row, col, e) {
      var form = 'statesform';
      var win = this.getStatesWindow();
      win.animateTarget = 'editState';
      var gridClass = Ext.create('SuperAdmin.classes.GridClass', grid);
      gridClass.onGridActionColumn(grid, cell, row, col, e, form, win);
   },

   onNewStates: function () {
      var win = this.getStatesWindow();
      win.setTitle('<font color = "white"><b>State Detail</b></font>');
      win.animateTarget = 'addState';
      win.show();
      var form = this.getStatesForm();
    


      var countryStore = Ext.getStore('CountryComboStore');
      var countryCombo = form.down('combo[itemId=countryCombo]');
      var store = this.getStatesStoreStore();

      var record = new store.model;
      store.insert(store.data.length, record);
      form.loadRecord(record);
      
      for (var i = 0; i < countryStore.data.items.length; i++) {
         if (countryStore.data.items[i].data.isDefault == true) {

            var defaultCountry = countryStore.data.items[i].data.key;

            countryCombo.setValue(defaultCountry);

            //SEND SELECTED STATE OBJECT AS A PARAMETER

            var recrd = store.data.items[i];
            countryCombo.fireEvent('select', countryCombo, recrd);
         }

      }

   },

   onSaveState: function () {
      var store = this.getStatesStoreStore();
      var formClass = Ext.create('SuperAdmin.classes.FormClass');
      var countryStore = Ext.getStore('CountryComboStore');
      var form = this.getStatesForm();
      var win = this.getStatesWindow();
      var record = form.getForm().getRecord();
      var countryId = this.getStatesForm().down('[name=countryId]').value;
      var isDefault = formClass.onCheckIfDefaultValueExists(store);
      var isDefaultCountry = formClass.onCheckIfDefaultValueExists(countryStore);
      var ifIsDefaultSelected = this.getStatesForm().down('#yesDefault').getValue();
      form.updateRecord(record);
      if (record.dirty) {
         if (isDefault.isDefault == true && ifIsDefaultSelected == true) {
            Ext.MessageBox.show({
               msg: '"' + isDefault.name + '" is set as the default value for State. Please remove default option from it first.',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               buttons: Ext.MessageBox.OK,
               scope: this
            });

            return;
         }
      }
      console.log(isDefaultCountry);

      formClass.save(record, form, win, store);
   }


});
