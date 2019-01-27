Ext.define('SuperAdmin.controller.CountriesController', {
   extend: 'Ext.app.Controller',
   requires: [
      'SuperAdmin.classes.NavigationClass',
      'SuperAdmin.classes.GridClass',
      'SuperAdmin.classes.FormClass'
   ],
   views: ['masters.CountriesForm', 'masters.CountriesGrid',
      'masters.CountriesPanel', 'masters.CountriesWindow'],
   stores: ['CountriesStore'],

   refs: [{
         ref: 'MainCenterContainer',
         selector: 'maincentercontainer'
      }, {
         ref: 'CountriesPanel',
         selector: 'countriespanel'
      }, {
         ref: 'CountriesGrid',
         selector: 'countriesgrid'
      }, {
         ref: 'CountriesForm',
         selector: 'countriesform'
      }, {
         ref: 'CountriesWindow',
         selector: 'countrieswindow',
         autoCreate: true,
         xtype: 'countrieswindow'
      }],

   init: function()
   {
      this.control({
         'countriesgrid actioncolumn': {
            click: 'onCountryGridActionColumn'
         },
         'countriesgrid [action=new]': {
            click: 'onNewCountry'
         },
         'countriesform [action=save]': {
            click: 'onSaveCountry'
         },
         'countriesform [action=cancel]': {
            click: 'onCancel'
         },
         'countrieswindow': {
            beforeclose: this.onCloseCountryWindow
         }
      });
   },
 
   onCloseCountryWindow: function () {
      var win = this.getCountriesWindow();
      var formpanel = this.getCountriesForm();
      var grid = this.getCountriesGrid();

      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      return navigation.backToGrid(win, grid, formpanel);
   },
   onCountryGridActionColumn: function(grid, cell, row, col, e)
   {
      var form = 'countriesform';
      var win = this.getCountriesWindow();
      win.animateTarget = 'editCountry';
      var gridClass = Ext.create('SuperAdmin.classes.GridClass', grid);
      gridClass.onGridActionColumn(grid, cell, row, col, e, form, win);
   },
   onNewCountry: function()
   {

      var win = this.getCountriesWindow();
      win.setTitle('<font color = "white"><b>Country Detail</b></font>');
      win.animateTarget = 'addCountry';
      var form = this.getCountriesForm();

      var navigation = Ext.create('SuperAdmin.classes.NavigationClass');
      navigation.gridToForm(win, form);

   },
   onSaveCountry: function()
   {
      var store = this.getCountriesStoreStore();
      var form = this.getCountriesForm();
      var win = this.getCountriesWindow();
     
      var formClass = Ext.create('SuperAdmin.classes.FormClass');
      var isDefault = formClass.onCheckIfDefaultValueExists(store);
      var ifIsDefaultSelected = this.getCountriesForm().down('#yesDefault').getValue();
      console.log(isDefault);
      var record = form.getForm().getRecord();
      form.updateRecord(record);
      if (record.dirty)
      {
         if (isDefault.isDefault == true && ifIsDefaultSelected == true)
         {
            Ext.MessageBox.show({
               msg: '"' + isDefault.name + '" is set as the default value for Country. Please remove default option from it first.',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               buttons: Ext.MessageBox.OK,
               scope: this
            });

            return;
         }
      }

      console.log(store.data.items[0]);
     
      console.log(record);
      formClass.save(record, form, win, store);
   },
   onCancel: function()
   {
      var win = this.getCountriesWindow();
      var formpanel = this.getCountriesForm();
      var grid = this.getCountriesGrid();

      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      navigation.backToGrid(win, grid, formpanel);
   }
});