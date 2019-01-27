Ext.define('SuperAdmin.controller.MoviesController', {
   extend: 'Ext.app.Controller',

   views: ['movies.MoviesPanel', 'movies.MoviesGrid', 'movies.MoviesTabPanel',
      'movies.MoviesInfoForm', 'movies.MoviesInfoPanel', 'movies.MoviesPhotoForm',
      'movies.MoviesPhotoUploadWindow', 'movies.MoviesLocGrid', 'movies.MoviesLocPanel',
      'movies.MoviesShowTimeDataview', 'movies.MoviesShowTimesPanel'],

   stores: ['MoviesStore', 'MoviesRatingComboStore', 'MoviesLocGridStore', 'MoviesShowTimeStore'],

   refs: [{
         ref: 'MoviesPanel',
         selector: 'moviespanel'
      },
      {
         ref: 'MoviesGrid',
         selector: 'moviesgrid'
      },
      {
         ref: 'MoviesTabPanel',
         selector: 'moviestabpanel'
      },
      {
         ref: 'MoviesPhotoUploadWindow',
         selector: 'moviesphotouploadwindow',
         autoCreate: true,
         xtype: 'moviesphotouploadwindow'
      },
      {
         ref: 'MoviesLocGrid',
         selector: 'movieslocgrid'
      },
      {
         ref: 'MoviesLocPanel',
         selector: 'movieslocpanel'
      }, {
         ref: 'MoviesInfoForm',
         selector: 'moviesinfoform'
      }, {
         ref: 'MoviesShowTimeDataview',
         selector: 'moviesshowtimedataview'
      }, {
         ref: 'MoviesPhotoForm',
         selector: 'moviesphotoform'
      }
   ],

   init: function()
   {
      this.control({
         'moviesgrid actioncolumn': {
            click: this.onMoviesPanelActionColumn
         },
         'moviesphotoform [action=upload]': {
            click: 'onClickPhotoUpload'
         },
         'moviesphotoform [itemId=photoDataView]': {
            viewready: 'onViewReadyPhotoDataView'
         },

         'moviesphotouploadwindow [action=cancel]': {
            click: 'onCancelUploadWindow'
         },
         'moviestabpanel [action=back]': {
            click: 'onBackTabPanel'
         },
         'moviesinfopanel [action=cancel]': {
            click: 'onCancelInfoPanel'
         },
         'moviesinfopanel [action=save]': {
            click: 'onSaveInfoForm'
         },
         'moviesgrid [action=new]': {
            click: 'onNewMovies'
         },
         //UPLOAD OF THE WINDOW
         'moviesphotouploadwindow [action=uploadMoviePhoto]': {
            click: this.onPhotoUpload
         },
         'movieslocgrid': {
            select: this.onSelectMoviesLocation
         },
         'moviestabpanel [itemId=moviesTab]': {
            tabchange: this.onTabChange
         }
      });
      this.record;
   },
   
   //NEEDED FOR FIRST TIME FOR RENDERING DATAVIEW
   onViewReadyPhotoDataView: function()
   {
      var photo = document.getElementById('mmovieImageBox');

      if (this.record)
      {
         if (photo)
         {
            photo.src = this.record.data.photo;
         }


      }

   },

   onSaveInfoForm: function()
   {
      var form = this.getMoviesInfoForm().getForm();
      var record = form.getRecord();
      var d = record.data.photo;
      var imageBox = document.getElementById('mmovieImageBox');
     
      form.updateRecord(record);
      
      if (!record.data.name)
      {
         console.log(record.data.photo);
         if (record.data.photo) {
            Ext.example.msg('Warning', 'Please fill atleast name of the movie.');
            return;
         }
      }
      if (d != imageBox.src) {
         record.data.photo = this.compress(imageBox).src;
      }
      var store = this.getMoviesStoreStore();
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
               this.getController('SuperAdminMainController').moviesStoreLoad(store);
               record.data.releaseDate = new Date(record.data.releaseDate);
               record.data.releaseDate.setHours(00);
               record.data.releaseDate.setMinutes(00);
               record.data.releaseDate.setSeconds(00);
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


   },

   onNewMovies: function()
   {
      var panel = this.getMoviesPanel().getLayout();
      panel.setActiveItem(1);

      var form = this.getMoviesInfoForm();
      var store = this.getMoviesStoreStore();
      var record = new store.model;
      this.record = record;
      store.insert(store.data.length, record);
      form.loadRecord(record);
      console.log(record);
      var photo = document.getElementById('mmovieImageBox');
      if (this.record)
      {
         if (photo)
         {
            photo.src = this.record.data.photo;
         }
      }
      this.getMoviesTabPanel().down('#moviesTab').setActiveTab(0);
   },

   onCancelInfoPanel: function()
   {
      var form = this.getMoviesInfoForm();
      var record = form.getRecord();
     
      form.updateRecord(record);
      var store = this.getMoviesStoreStore();
      var dirty = record.dirty;
      if (dirty)
      {
         Ext.MessageBox.show({
            msg: 'You have not saved the changes made. All your changes made will not be saved. Are you sure you want to do that?',
            icon: Ext.Msg.WARNING,
            title: 'Warning',
            cls: 'messagebox-css',
            buttons: Ext.MessageBox.YESNO,
            scope: this,
            fn: this.confirmCancel
         });
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
         var panel = this.getMoviesPanel().getLayout();
         panel.setActiveItem(0);
         this.getMoviesInfoForm().getForm().reset();

      }
   },

   confirmCancel: function(button)
   {

      var grid = this.getMoviesGrid();
      var panel = this.getMoviesPanel();
      var store = this.getMoviesStoreStore();
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
         this.getMoviesInfoForm().getForm().reset();
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

   onBackTabPanel: function()
   {
      var tabPanel = this.getMoviesTabPanel().down('#moviesTab');

      var idx = tabPanel.items.indexOf(tabPanel.getActiveTab());
      if (idx == 0)    //INFORMATION TAB
      {
         this.onCancelInfoPanel();
      } else     //LOCATION TAB
      {
         var panel = this.getMoviesPanel().getLayout();
         panel.setActiveItem(0);
      }
   },

   onCancelUploadWindow: function()
   {
      var win = this.getMoviesPhotoUploadWindow();
      win.close();
   },

   onClickPhotoUpload: function()
   {
      var win = this.getMoviesPhotoUploadWindow();
      win.show();
   },

   onPhotoUpload: function()
   {

      var imgText = this.getMoviesPhotoUploadWindow().down('#uploadPhotoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var imageBox = document.getElementById('mmovieImageBox');
      // var imageBox = this.getMoviesPhotoForm().down('#movieImageBox');
      var reader = new FileReader();
      if (file)
      {
         reader.onload = function(event)
         {
            imageBox.src = event.target.result;

         };
         reader.readAsDataURL(file);
      }
      this.getMoviesPhotoUploadWindow().close();
   },

   compress: function(img)
   {
      var mimeType = "image/jpeg";
      var cvs = document.createElement('canvas');
      cvs.width = img.naturalWidth;
      cvs.height = img.naturalHeight;
      var ctx = cvs.getContext("2d").drawImage(img, 0, 0);
      var newImageData = cvs.toDataURL(mimeType, 50 / 100);
      var rimg = new Image();
      rimg.src = newImageData;
      return rimg;
   },

   onMoviesPanelActionColumn: function(grid, cell, row, col, e)
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
      this.record = record;
      var grid = this.getMoviesGrid().getView();
      grid.select(record);

      var panel = this.getMoviesPanel().getLayout();
      panel.setActiveItem(1);

      var form = this.getMoviesInfoForm().getForm();
      form.loadRecord(record);

      var store = this.getMoviesLocGridStoreStore();
      var movieId = record.data.key;
      var params = {
         movieId: movieId
      };
      var gridClass = Ext.create('SuperAdmin.classes.GridClass');
      gridClass.loadGridStore(store, params);

      var photo = document.getElementById('mmovieImageBox');

      if (photo)  //AS IT WILL NOT RENDER FIRST TIME,AT FIRST TIME "onViewReadyPhotoDataView" FUNCTION WILL CALL
      {
         photo.src = this.record.data.photo;
      }
      var photoForm = this.getMoviesPhotoForm();
      photoForm.loadRecord(record);

       this.getMoviesTabPanel().down('#moviesTab').setActiveTab(0);
      this.getStore('MoviesShowTimeStore').removeAll();
   },

   onSelectMoviesLocation: function(grid, record, index)
   {
      var locationId = record.data.key;
      if (!locationId)
      {
         return;
      }
      var store = this.getMoviesShowTimeStoreStore();
      var movieRow = this.getMoviesGrid().getSelectionModel().getSelection()[0];
      var params = {
         locationId: locationId,
         movieId: movieRow.data.key
      };
      this.loadGridStore(store, params);
   },
   
   //DEFAULT SELECT FIRST ROW IF ANY.
   onTabChange: function(view, newCards)
   {
      var idx = view.items.indexOf(view.getActiveTab());
      if (idx == 1)
      {
         var grid = this.getMoviesLocGrid().getView();
         var count = grid.all.getCount();
         console.log(count);
         if (count > 0)
         {
            grid.select(0);
         }
      }
   },

   loadGridStore: function(store, params)
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
                  var error = 'Something went wrong';
                  if (errorCode == 401)
                  {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);

                  //todo : Messagebox color changes
               }
            } else
            {

               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.date != null)
                  {
                     var date = response[i].data.date;
                     var fullDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                     var dateR = fullDate.split("/")[1];
                     var monthR = fullDate.split("/")[0];
                     var yearR = fullDate.split("/")[2];
                     var newDate = dateR + '/' + monthR + '/' + yearR;
                     response[i].data.date = newDate;

                     var view = this.getMoviesShowTimeDataview();
                     view.refresh();
                  }
               }
            }
         }
      });
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
            title: 'Warning',
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
      var grid = this.getMoviesGrid();
      var sel = grid.getSelectionModel().getSelection();
      var store = grid.getStore();
      store.remove(sel);
      store.sync({
         scope: this,
         success: function(response)
         {
            Ext.example.msg('Success', 'Record Deleted Successfully');
            grid.getSelectionModel().select(0);
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
   }
});