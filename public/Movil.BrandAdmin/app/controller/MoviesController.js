Ext.define('BrandAdmin.controller.MoviesController', {
   extend: 'Ext.app.Controller',

   views: ['movies.MoviesPanel', 'movies.MoviesGrid', 'movies.MoviesTabPanel',
      'movies.MoviesInfoPanel', 'movies.MoviesInfoForm', 'movies.MoviesPhotoForm',
      'movies.MoviesLocPanel', 'movies.MoviesLocGrid', 'movies.MoviesShowTimesPanel',
      'movies.MoviesShowTimesForm', 'movies.MoviesShowTimesDataview', 'movies.MoviesShowTimesWindow', 'movies.MoviesPhotoUploadWindow'],

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
      }, {
         ref: 'MoviesPhotoUploadWindow',
         selector: 'moviesphotouploadwindow',
         autoCreate: true,
         xtype: 'moviesphotouploadwindow'
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
         'moviesgrid [action=new]': {
            click: 'onNewMovie'
         },
         'moviesinfopanel [action=save]': {
            click: 'onSaveMovies'
         },
         'moviesshowtimespanel [action=new]': {
            click: 'onNewShowTimes'
         },
         'moviesshowtimesdataview': {
            itemclick: this.onItemClick
         },
         'moviesphotoform [action=upload]': {
            click: 'onClickPhotoUpload'
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
         },
         'moviesphotouploadwindow [action=uploadMoviePhoto]': {
            click: this.onPhotoUpload
         },
         'moviesphotouploadwindow [action=cancelUpload]': {
            click: this.onCancelUpload
         },
         'moviesinfopanel [action=cancel]': {
            click: this.onCancelInfoForm
         },
         'moviesphotoform [itemId=movieImageBox]': {
            viewready: 'onViewReadyPhotoDataView'
         }
      });
      this.record;
      this.loadFrom;
   },

   onViewReadyPhotoDataView: function()
   {
      var photo = document.getElementById('movieImageBox');

      if (this.record)
      {
         if (photo)
         {
            photo.src = this.record.data.photo;
         }
      }
   },

   onCancelInfoForm: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var form = this.getMoviesInfoForm();
      var record = form.getRecord();

      form.updateRecord(record);
      var store = this.getMoviesStoreStore();
      var dirty = record.dirty;
      if (dirty)
      {
         if (lang == "fr")
         {
            Ext.MessageBox.show({
               msg: 'Esta apunto de borrar un record. Está seguro que quiere proceder?',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancelShow
            });
         }
         if (lang == "en") {
            Ext.MessageBox.show({
               msg: 'You are about to delete a record. Are you sure you want to proceed?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancelShow
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
         var panel = this.getMoviesPanel().getLayout();
         panel.setActiveItem(0);
         this.getMoviesInfoForm().getForm().reset();

      }
   },

   confirmCancelShow: function(button)
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

   onCancelUpload: function()
   {
      this.getMoviesPhotoUploadWindow().close();
   },

   onPhotoUpload: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      this.loadFrom = 'upload';
      var me = this;
      var record = this.getMoviesGrid().getSelectionModel().getSelection()[0];
      var imgText = this.getMoviesPhotoUploadWindow().down('#uploadPhotoFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var rawValue = imgText.getRawValue();
      if (rawValue != '')
      {
         var imageBox = document.getElementById('movieImageBox');
         var reader = new FileReader();
         if (file)
         {
            reader.readAsDataURL(file);
            reader.onload = function(event)
            {
               imageBox.onload = function()
               {
                  if (me.loadFrom == 'upload')
                  {
                     if (imageBox.naturalHeight < 450 || imageBox.naturalWidth < 600)
                     {
                        if (lang == "fr")
                        {
                           Ext.MessageBox.show({
                              msg: 'Resolución de las imágenes debe ser de al menos 600 * 450.',
                              title: 'Message',
                              cls: 'messagebox-css',
                              icon: Ext.Msg.ERROR,
                              buttons: Ext.MessageBox.OK,
                              scope: this
                           });
                        }
                        if (lang == "en") {
                           Ext.MessageBox.show({
                              msg: 'Image resolution should be at least 600 * 450.',
                              title: 'Message',
                              cls: 'messagebox-css',
                              icon: Ext.Msg.ERROR,
                              buttons: Ext.MessageBox.OK,
                              scope: this
                           });
                        }
                        me.loadFrom = '';
                        imageBox.src = record.data.photo;
                        return;

                     } else
                     {
                        record.setDirty();
                        me.getMoviesPhotoUploadWindow().close();
                        me.loadFrom = '';
                     }
                  }
               };
               imageBox.src = event.target.result;
            };
         }

      }

   },

   onClickPhotoUpload: function()
   {
      var win = this.getMoviesPhotoUploadWindow();
      win.animatetarget = 'moviesUpload';
      win.show();
   },

   compress: function(img)
   {
      var mimeType = "image/jpeg";
      var cvs = document.createElement('canvas');
      var actualHeight = img.naturalHeight;
      var actualWidth = img.naturalWidth;
      var maxHeight = 600;
      var maxWidth = 800;
      var imgRatio = actualWidth / actualHeight;
      var maxRatio = maxWidth / maxHeight;
      if (actualHeight > maxHeight || actualWidth > maxWidth)
      {
         if (imgRatio < maxRatio)
         {
            //adjust width according to maxHeight
            imgRatio = maxHeight / actualHeight;
            actualWidth = imgRatio * actualWidth;
            actualHeight = maxHeight;
         } else if (imgRatio > maxRatio)
         {
            //adjust height according to maxWidth
            imgRatio = maxWidth / actualWidth;
            actualHeight = imgRatio * actualHeight;
            actualWidth = maxWidth;
         } else
         {
            actualHeight = maxHeight;
            actualWidth = maxWidth;
         }
      }
      cvs.width = actualWidth;
      cvs.height = actualHeight;
      var ctx = cvs.getContext("2d").drawImage(img, 0, 0, actualWidth, actualHeight);
      var newImageData = cvs.toDataURL(mimeType, 50 / 100);
      var rimg = new Image();
      rimg.src = newImageData;
      return rimg;
   },

   onSaveMovies: function()
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var loginStore = this.getStore('LoginStore').data.items[0].data;
      var form = this.getMoviesInfoForm().getForm();
      var record = form.getRecord();
      var d = record.data.photo;
      var imageBox = document.getElementById('movieImageBox');

      form.updateRecord(record);

      if (!record.data.name)
      {
         if (record.data.photo)
         {
            if (lang == "fr")
            {
               Ext.example.msg('Cuidado', 'Por favor, rellene al menos un nombre de la película ');
            }
            if (lang == "en") {
               Ext.example.msg('Warning', 'Please fill atleast name of the movie.');
            }
            return;
         }
      }
      if (d != imageBox.src)
      {
         record.data.photo = this.compress(imageBox).src;
         record.setDirty();
      }
      var store = this.getMoviesStoreStore();
      if (record.dirty)
      {
         if (!record.isValid())
         {
            if (lang == "fr")
            {
               if (record.data.synopsis.length < 100)
               {
                  //Ext.example.msg('Warning', 'Fields marked with <font color = "red">*</font> cannot be empty');
                  Ext.example.msg('Cuidado ', 'Sinopsis debe ser de 100 caracteres mínimo');
               } else
               {
                  Ext.example.msg('Cuidado ', 'Los campos marcados con <font color = "red">*</font> no pueden estar vacíos');
               }
               return;
            }
            if (lang == "en") {
               if (record.data.synopsis.length < 100) {
                  Ext.example.msg('Warning ', 'Synopsis must be 100 characters minimum');
               } else {
                  Ext.example.msg('Warning', 'Fields marked with <font color = "red">*</font> cannot be empty');
               }
               return;
            }
         }

         record.data.brandId = loginStore.brandId;
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
         console.log(record.data);
      //   var safariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
     //    if (safariBrowser) {
            if (record.data.releaseDate != null) {
               record.data.releaseDate = record.data.releaseDate.toISOString();
            }
           
     //    }
         var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Saving data..." });
         myMask.show();
         store.sync({
            scope: this,
            success: function(response)
            {
               myMask.hide();
               // console.log(response);
               statusBar[0].clearStatus({ useDefaults: true });
               if (lang == "fr")
               {
                  Ext.example.msg('Exitoso', 'Los datos fueron guardados.');
               }
               if (lang == "en") {
                  Ext.example.msg('Success', 'Record saved Successfully.');
               }

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
                  var error = 'Ocurrió un error';
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
         if (lang == "fr") {
            // Ext.example.msg('Warning', 'Found No Record to Save');
            Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
         if (lang == "en") {
            Ext.example.msg('Warning', 'Found No Record to Save');
            //Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
      }
   },

   onNewMovie: function()
   {

      var panel = this.getMoviesPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getMoviesInfoForm().getForm();
      var store = this.getMoviesStoreStore();
      var record = new store.model;
      this.record = record;
      store.insert(store.data.length, record);
      form.loadRecord(record);
      var photo = document.getElementById('movieImageBox');
      if (this.record)
      {
         if (photo)
         {
            photo.src = this.record.data.photo;
         }
      }
      this.getMoviesTabPanel().items.items[0].getLayout().setActiveItem(0);
   },

   loadEmptyModel: function(formpanel)
   {
      var form = formpanel.getForm();
      var store = Ext.data.StoreManager.lookup(formpanel.store);
      var record = new store.model;

      store.insert(store.data.length, record);
      form.loadRecord(record);
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
      var lang = this.getApplication().getController('BrandAdminMainController').value;
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
                     if (lang == "fr") {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (lang == "en") {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
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

      record.data.date = dateR;
      record.data.showTimes = shwTimeR;
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
      var selItem = event.target.className;
      var newDate = document.getElementById('showTimeDate').innerHTML.split(";")[1];
      //var newDate = record.data.date;
    //  var selItem = event.target.className;

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
      if (record.data.showTimes.length != 0)
      {
         var shwTimes = record.data.showTimes.split(',');
         var arr = new Array;
         for (var i = 0; i < shwTimes.length; i++)
         {
            var d = this.getStore('MoviesShowTimesStore').findRecord("name", shwTimes[i].trim());
            arr.push(d.data.value);
         }
         form.down('#showTimesStoreCombo').setValue(arr);
      }

      form.down('#location').setValue(locRecord.data.location);

      var newDate = record.data.date;
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
      var lang = this.getApplication().getController('BrandAdminMainController').value;
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
      form.updateRecord(record);

      record.data.showTimes = showTime;
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
      record.data.brandId = brandId;
      record.data.movieId = movieId;
      record.data.locationId = locationId;
      var store = this.getStore('MoviesShowTimesDataViewStore');

      if (record.dirty)
      {
         if (!record.isValid())
         {
            if (lang == "fr")
            {
               Ext.example.msg('Cuidado', 'Campos marcados con <font color = "red">*</font> no pueden estar vacios');
            }
            if (lang == "en") {
               Ext.example.msg('Warning ', 'Fields marked with <font color = "red">*</font> cannot be empty');
            }
            return;
         }
       //  var safariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    
        // if (safariBrowser) {
            if (record.data.date != null) {
               record.data.date = record.data.date.toISOString();
            }

       //  }
         
         store.sync({
            scope: this,
            success: function(response)
            {
               if (lang == "fr")
               {
                  Ext.example.msg('Exitoso', 'Los datos fueron guardados.');
               }
               if (lang == "en") {
                  Ext.example.msg('Success', 'Record saved Successfully.');
               }
               var win = this.getMoviesShowTimesWindow();
               win.hide();
               var date = record.data.date;
               console.log(date);
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
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401)
                  {
                     error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                  }
                  Ext.example.msg('Message', error);
               }
            }
         });
      } else
      {
         if (lang == "fr") {
            // Ext.example.msg('Warning', 'Found No Record to Save');
            Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
         if (lang == "en") {
            Ext.example.msg('Warning', 'Found No Record to Save');
            //Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
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
      this.record = record;
      var grid = this.getMoviesGrid().getView();
      grid.select(record);

      //set tab 1 active 
      this.getMoviesTabPanel().items.items[0].getLayout().setActiveItem(0);

      var panel = this.getMoviesPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getMoviesInfoForm().getForm();
      form.loadRecord(record);

      var store = this.getMoviesLocGridStoreStore();
      store.removeAll();
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      gridClass.loadGridStore(store, params);

      var photo = document.getElementById('movieImageBox');
      if (photo)
      {
         photo.src = this.record.data.photo;
      }

   },

   deleteRecord: function(grid, record)
   {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      grid.select(record);
      var sel = record;
      if (record.data.isDefault == 'true')
      {
         if (lang == "fr")
         {
            Ext.MessageBox.show({
               msg: 'Usted está a punto de eliminar el registro predeterminado. Si elimina habrá ningún valor predeterminado actual establecido para este registro. ¿Está seguro?',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
         if (lang == "en") {
            Ext.MessageBox.show({
               msg: 'You are about to delete the default record. If you delete there will be no current default value set for this record. Are you sure ?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
         return;
      }
      if (sel != '')
      {
         if (lang == "fr") {
            Ext.MessageBox.show({
               msg: 'Esta apunto de borrar un recod. Está seguro que quiere proceder?',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
         if (lang == "en") {
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
         if (lang == "en") {
            Ext.MessageBox.show({
               msg: 'Please Select Record',
               icon: Ext.Msg.ERROR,
               title: 'Message',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.OK,
               scope: this
            });
         }
         if (lang == "fr") {
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
      var grid = this.getMoviesGrid();
      var sel = grid.getSelectionModel().getSelection();
      var store = grid.getStore();
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
   }
});