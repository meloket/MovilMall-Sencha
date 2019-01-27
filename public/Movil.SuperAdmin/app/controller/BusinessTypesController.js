Ext.define('SuperAdmin.controller.BusinessTypesController', {
   extend: 'Ext.app.Controller',

   views: ['businessTypes.BusinessTypesWestGrid', 'businessTypes.BusinessTypesPanel', 'businessTypes.CategoriesCenterGrid',
      'businessTypes.CategoriesForm',
      'businessTypes.CategoriesWindow'],

   stores: ['BusinessTypesWestGridStore', 'BusTypeCategoriesCenterStore'],

   refs: [{
         ref: 'BusinessTypesWestGrid',
         selector: 'businesstypeswestgrid'
      }, {
         ref: 'CategoriesCenterGrid',
         selector: 'categoriescentergrid'
      }, {
         ref: 'CategoriesCenterGrid',
         selector: 'categoriescentergrid'
      }, {
         ref: 'CategoriesWindow',
         selector: 'categorieswindow',
         autoCreate: true,
         xtype: 'categorieswindow'
      }, {
         ref: 'CategoriesForm',
         selector: 'categoriesform'
      }],
   
   init: function()
   {
      this.control({
         'categoriescentergrid actioncolumn': {
            click: 'onCategoryActionColumn'
         },

         'categoriescentergrid [action=new]': {
            click: 'addCategory'
         },
         'categoriesform [action=cancel]': {
            click: 'onCancelCategoryForm'
         },
         'businesstypeswestgrid': {
            select: this.onSelectBusTypesWestGrid
         },
         'categoriesform [action=save]': {
            click: this.onSaveCategory
         },
         'categorieswindow': {
            beforeclose:this.onCloseCategoriesWin
         }
      });
   },
   onCloseCategoriesWin:function()
   {
      var win = this.getCategoriesWindow();
      var grid = this.getCategoriesCenterGrid();
      var formpanel = this.getCategoriesForm();

      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      return navigation.backToGrid(win, grid, formpanel);
   },
   onSaveCategory: function()
   {
     var form = this.getCategoriesForm().getForm();
      var record = form.getRecord();
     
      var bgrid = this.getBusinessTypesWestGrid().getSelectionModel().getSelection()[0];
      var busTypeId = bgrid.data.key;

      record.data.busTypeId = busTypeId;
      form.updateRecord(record);
      console.log(record);
      var win = this.getCategoriesWindow();
      var store = this.getBusTypeCategoriesCenterStoreStore();
      var navigation = Ext.create('SuperAdmin.classes.FormClass');
      navigation.save(record, form, win,store);
     
   },
   
   onCancelCategoryForm: function()
   {
      var win = this.getCategoriesWindow();
      var grid = this.getCategoriesCenterGrid();
      var formpanel = this.getCategoriesForm();
      
      var navigation = Ext.create('SuperAdmin.classes.NavigationClass', win, grid);
      navigation.backToGrid(win, grid, formpanel);

   },
   
   
   onCategoryActionColumn: function(grid, cell, row, col, e)
   {
      var win = this.getCategoriesWindow();
      win.animateTarget = 'editCategory';
      var form = this.getCategoriesForm();
      var gridClass = Ext.create('SuperAdmin.classes.GridClass', grid);
      gridClass.onGridActionColumn(grid, cell, row, col, e, form, win);


      var bgrid = this.getBusinessTypesWestGrid().getSelectionModel().getSelection()[0];
      var busTypeTxtField = form.down('#busTypeName');
      busTypeTxtField.setValue(bgrid.data.name);
   },
   
   addCategory: function()
   {
      var win = this.getCategoriesWindow();
      win.setTitle('<font color = "white"><b>Add Category Type</b></font>');
      win.animateTarget = 'addCategory';
      var form = this.getCategoriesForm();
      var store = this.getBusTypeCategoriesCenterStoreStore();
      var record = new store.model;
      win.show();

      store.insert(store.data.length, record);
      form.loadRecord(record);

      var grid = this.getBusinessTypesWestGrid().getSelectionModel().getSelection()[0];
      var busTypeTxtField = form.down('#busTypeName');
     busTypeTxtField.setValue(grid.data.name);
   },

   onSelectBusTypesWestGrid: function(grid, record, index)
   {
      var busTypeId = record.data.key;
      if (!busTypeId)
      {
         return;
      }
      var store = this.getBusTypeCategoriesCenterStoreStore();
      store.load({
         scope: this,
         params: { busTypeId: busTypeId },
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
               }
            } else
            {
               this.selectFirstRecord();
            }
         }
      });

   },
   
   selectFirstRecord: function()
   {
      var grid = this.getCategoriesCenterGrid().getView();
      var count = grid.all.getCount();
      if (count > 0)
      {
         grid.select(0);
      }

   }
});