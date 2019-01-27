Ext.define('BrandAdmin.controller.MoviesController', {
   extend: 'Ext.app.Controller',

   views: ['movies.MoviesPanel', 'movies.MoviesGrid', 'movies.MoviesTabPanel',
      'movies.MoviesInfoPanel', 'movies.MoviesInfoForm', 'movies.MoviesPhotoForm',
      'movies.MoviesLocPanel', 'movies.MoviesLocGrid', 'movies.MoviesShowTimesPanel',
      'movies.MoviesShowTimesForm', 'movies.MoviesShowTimesDataview', 'movies.MoviesShowTimesWindow'],

   stores: ['MoviesStore', 'MoviesShowTimesDataViewStore', 'MoviesRatingComboStore', 'MoviesShowTimesStore', 'MoviesLocGridStore'],

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
         ref: 'MoviesShowTimesWindow',
         selector: 'moviesshowtimeswindow',
         autoCreate: true,
         xtype: 'moviesshowtimeswindow'
      },
      {
         ref: 'MoviesShowTimesForm',
         selector: 'moviesshowtimesform'
      },
      {
         ref: 'MoviesShowTimesDataview',
         selector: 'moviesshowtimesdataview'
      }, {
         ref: 'MoviesLocGrid',
         selector: 'movieslocgrid'
      },
      {
         ref: 'MoviesLocPanel',
         selector: 'movieslocpanel'
      }, {
         ref: 'MoviesInfoForm',
         selector: 'moviesinfoform'
      },
      {
         ref: 'MoviesShowTimesWindow',
         selector: 'moviesshowtimeswindow'
      }, {
         ref: 'MoviesPhotoForm',
         selector: 'moviesphotoform'
      }],

   init: function()
   {
      this.control({
         'moviesgrid actioncolumn': {
            click: 'onMoviesPanelActionColumn'
         },
         'moviestabpanel [action=back]': {
            click: 'onBackTabPanel'
         },
         'moviesshowtimespanel [action=new]': {
            click: 'onNewShowTimes'
         },
         'moviesshowtimesdataview': {
            itemclick: this.onItemClick
         },
         'moviesshowtimesform [action=cancel]': {
            click: 'onCancelMoviesShowTimesForm'
         },

         'moviestabpanel [itemId=moviesTabPanel]': {
            tabchange: this.onTabChange
         },
         'moviesshowtimesform [action=save]': {
            click: this.onSaveShowTime
         },
         'movieslocgrid': {
            select: this.onSelectMoviesLocation
         },
         'moviesshowtimeswindow': {
            beforeclose: this.onCancelMoviesShowTimesForm
         }
      });
   },

   onSelectMoviesLocation: function(grid, record, index)
   {
      var locationId = record.data.key;
      if (!locationId)
      {
         return;
      }
      var store = this.getMoviesShowTimesDataViewStoreStore();
      var movieRow = this.getMoviesGrid().getSelectionModel().getSelection()[0];
      var params = {
         locationId: locationId,
         movieId: movieRow.data.key
      };
      this.loadGridStore(store, params);
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
                  }
                  response[i].data.location = this.getMoviesLocGrid().getSelectionModel().getSelection()[0].data.location;
                  console.log(this.getMoviesLocGrid().getSelectionModel().getSelection()[0]);

                  var view = this.getMoviesShowTimesDataview();
                  view.refresh();
               }
            }
         }
      });
   },
   
   //DEFAULT SELECT FIRST ROW IF ANY,ON TABCHANGE.
   onTabChange: function(view, newCards)
   {
      var idx = view.items.indexOf(view.getActiveTab());

      if (idx == 1)
      {
         var grid = this.getMoviesLocGrid().getView();
         var count = grid.all.getCount();
         if (count > 0)
         {
            grid.select(0);
         }
      }
   },

   onCancelMoviesShowTimesForm: function()
   {
      var win = this.getMoviesShowTimesWindow();
      var store = this.getMoviesShowTimesDataViewStoreStore();
      var items = store.data.items;
      var formpanel = this.getMoviesShowTimesForm();
      var form = formpanel.getForm();
      var record = form.getRecord();
      var dateR = record.data.date;
      var shwTimeR = record.data.showTimes;
      form.updateRecord(record);
      var shwTime = formpanel.down('#showTimesStoreCombo').value;
      if (shwTime)
      {
         record.setDirty();
      }
      if (record.phantom == true && record.dirty == false)
      {
         win.hide();
         for (var i = 0; i < items.length; i++)
         {
            if (items[i].phantom == true)
            {
               store.remove(items[i]);
            }

         }
      }
      if (record.dirty)
      {
         for (var i = 0; i < items.length; i++)
         {
            if (items[i].phantom == true)
            {
               store.remove(items[i]);
            }
         }
      }
      record.data.date = dateR;
      record.data.showTimes = shwTimeR;
      console.log(record);
      var view = this.getMoviesShowTimesDataview();
      view.refresh();
      win.hide();

   },

   confirmCancel: function(/*button*/)
   {
      var win = this.getMoviesShowTimesWindow();
      var store = this.getMoviesShowTimesDataViewStoreStore();

      /* if (button == 'yes')
      {*/
      if (win)
      {
         win.hide();
      }


      store.rejectChanges();
      var items = store.data.items;

      for (var i = 0; i < items.length; i++)
      {
         items[i].reject(true);
         if (items[i].phantom == true)
         {
            store.remove(items[i]);
         }
         //  }

      }
   },

   onItemClick: function(view, record, item, idx, event, opts)
   {

      var date = view.findItemByChild(item).innerHTML;
      var newDate = date.substring(date.lastIndexOf("<b>"), date.lastIndexOf("</b>")).split(">")[1];

      var selItem = event.target.className;

      if (selItem == 'editicon')
      {
         this.onClickEdit(record, newDate);
      }
      // if (selItem == 'deleteicon')
      //{
      //   this.onClickDelete(idx, record);
      //}
   },

   onClickEdit: function(record, newDate)
   {
      var win = this.getMoviesShowTimesWindow();
      win.show();
      var form = this.getMoviesShowTimesForm();
      form.loadRecord(record);

      var locRecord = this.getMoviesLocGrid().getSelectionModel().getSelection()[0];
      var shwTimes = record.data.showTimes.split(',');

      var arr = new Array;
      for (var i = 0; i < shwTimes.length; i++)
      {
         var d = this.getStore('MoviesShowTimesStore').findRecord("name", shwTimes[i].trim());
         arr.push(d.data.value);
      }

      form.down('#location').setValue(locRecord.data.location);
      form.down('#showTimesStoreCombo').setValue(arr);
      var dt = newDate;

      var dateR = dt.split("/")[0];
      var monthR = dt.split("/")[1];
      var yearR = dt.split("/")[2];
      dt = monthR + '/' + dateR + '/' + yearR;
      newDate = dt;
      form.down('#dateFld').setValue(new Date(newDate));

   },

   onSaveShowTime: function()
   {
      var movieGrid = this.getMoviesGrid().getSelectionModel().getSelection()[0];
      var movieId = movieGrid.data.key;

      var locGrid = this.getMoviesLocGrid().getSelectionModel().getSelection()[0];
      var locationId = locGrid.data.key;

      var form = this.getMoviesShowTimesForm().getForm();
      var shw = this.getMoviesShowTimesForm().down('#showTimesStoreCombo').rawValue.split(",");

      function sortOnNum(a, b)
      {
         return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
      }

      var d = shw.sort(sortOnNum);

      var v = d.join();
      var showTime = v;
      //   var showTime = this.getMoviesShowTimesForm().down('#showTimesStoreCombo').rawValue.split(",");
      var record = form.getRecord();
      console.log(this.getMoviesShowTimesForm().down('#showTimesStoreCombo'));
      form.updateRecord(record);

      record.data.showTimes = showTime;
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
      record.data.brandId = brandId;
      record.data.movieId = movieId;
      record.data.locationId = locationId;
      var store = this.getStore('MoviesShowTimesDataViewStore');

      if (record.dirty)
      {
         console.log(record);

         store.sync({
            scope: this,
            success: function(response)
            {
               Ext.example.msg('Success', 'Record Saved Successfully');
               var win = this.getMoviesShowTimesWindow();
               win.hide();
               var date = record.data.date;
               var fullDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
               var dateR = fullDate.split("/")[1];
               var monthR = fullDate.split("/")[0];
               var yearR = fullDate.split("/")[2];
               var newDate = dateR + '/' + monthR + '/' + yearR;
               record.data.date = newDate;

               var view = this.getMoviesShowTimesDataview();
               view.refresh();

            },

            failure: function(response, operations)
            {

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

   onNewShowTimes: function()
   {
      var win = this.getMoviesShowTimesWindow();
      win.animateTarget = 'addMovieShowTime';
      var form = this.getMoviesShowTimesForm();
      var store = this.getMoviesShowTimesDataViewStoreStore();
      var record = new store.model;
      win.show();

      store.insert(store.data.length, record);
      form.loadRecord(record);
      var locRecord = this.getMoviesLocGrid().getSelectionModel().getSelection()[0];
      form.down('#location').setValue(locRecord.data.location);
   },

   onBackTabPanel: function()
   {
      var panel = this.getMoviesPanel().getLayout();
      panel.setActiveItem(0);
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
      var grid = this.getMoviesGrid().getView();
      grid.select(record);

      var panel = this.getMoviesPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getMoviesInfoForm().getForm();
      form.loadRecord(record);

      var store = this.getMoviesLocGridStoreStore();

      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
  var params = {
         brandId: brandId
      };
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      gridClass.loadGridStore(store, params);

      var photo = this.getMoviesPhotoForm().down('#movieImageBox');
      photo.setSrc(record.data.photo);
   }
});