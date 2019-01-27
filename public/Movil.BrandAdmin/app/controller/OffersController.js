Ext.define('BrandAdmin.controller.OffersController', {
   extend: 'Ext.app.Controller',

   views: ['offers.OffersPanel', 'offers.OffersGrid', 'offers.OffersDetailsPanel',
      'offers.OffersBreadCrumbPanel', 'offers.OffersBreadCrumb', 'offers.OffersInfoForm',
      'offers.OffersDescriptionForm', 'offers.OffersCategoriesDataview', 'offers.OffersLocGrid',
      'offers.OffersInfoUploadWindow', 'offers.OffersCategoriesPanel', 'offers.OffersImageCropWindow',
   'offers.OffersInfoImagePreviewWindow', 'offers.OffersImagesForm'],

   stores: ['OffersStore', 'OffersLocStore', 'OffersCategoriesStore'],

   refs: [{
      ref: 'OffersGrid',
      selector: 'offersgrid'
   }, {
      ref: 'OffersPanel',
      selector: 'offerspanel'
   },
      {
         ref: 'OffersBreadCrumb',
         selector: 'offersbreadcrumb'
      },
      {
         ref: 'OffersBreadCrumbPanel',
         selector: 'offersbreadcrumbpanel'
      },
      {
         ref: 'OffersInfoForm',
         selector: 'offersinfoform'
      },
      {
         ref: 'OffersCategoriesDataview',
         selector: 'offerscategoriesdataview'
      },
      {
         ref: 'OffersCategoriesPanel',
         selector: 'offerscategoriespanel'
      },
      {
         ref: 'OffersDescriptionForm',
         selector: 'offersdescriptionform'
      },
      {
         ref: 'OffersInfoUploadWindow',
         selector: 'offersinfouploadwindow',
         autoCreate: true,
         xtype: 'offersinfouploadwindow'
      }, {
         ref: 'OffersLocGrid',
         selector: 'offerslocgrid'
      }, {
         ref: 'OffersImageCropWindow',
         selector: 'offersimagecropwindow',
         autoCreate: true,
         xtype: 'offersimagecropwindow'
      }, {
         ref: 'OffersInfoImagePreviewWindow',
         selector: 'offersinfoimagepreviewwindow',
         autoCreate: true,
         xtype: 'offersinfoimagepreviewwindow'
      }],

   init: function () {
      this.control({
         'offersgrid actioncolumn': {
            click: 'onOffersPanelActionColumn'
         },
         'offersbreadcrumb [action=breadCrumb]': {
            click: this.onClickBreadCrumbMenu
         },
         'offersinfoform [action=offersImageDataView]': {
            click: this.onNextOffersInfo
         },

         'offersdescriptionform [action=next]':
            {
               click: 'onNextDescription'
            },
         'offerscategoriespanel  [action=next]': {
            click: 'onNextCategories'
         },
         'offerslocgrid [action=save]': {
            click: this.onSaveLocation
         },
         'offerslocgrid [action=back]': {
            click: this.onBackLocation
         },
         'offerslocgrid [action=finish]': {
            click: this.onFinishBreadCrumb
         },
         'offersimagesform [action=upload]': {
            click: 'onUploadOffersInfo'
         },
         'offersimagesform [action=openCropWindow]': {
            click: 'onOpenOfferImageCropWindow'
         },
         'offersinfouploadwindow [action=cancel]': {
            click: 'onCancelUploadWindow'
         },

         'offersgrid [action=new]': {
            click: 'onNewOffers'
         },
         'offersinfoform [action=save]': {
            click: 'onSaveOffersInfo'
         },
         'offersdescriptionform [action=save]': {
            click: 'onSaveOffersDescription'
         },
         'offersinfouploadwindow [action=upload]': {
            click: 'onUploadImage'
         },
         'offersinfoimagepreviewwindow [action=upload]': {
            click: 'onConfirmUploadImage'
         },

         'offersinfoimagepreviewwindow [action=cancel]': {
            click: 'onPreviewCancel'
         },
         'offersinfoform [action=back]': {
            click: 'onBackOffersInfo'
         },
         'offersdescriptionform [action=back]': {
            click: 'onBackDescription'
         },
         'offerscategoriespanel [action=back]': {
            click: 'onBackCategories'
         },
         'offerscategoriespanel [action=save]': {
            click: this.onSaveCategory
         },
         'offersinfoform [itemId=isActiveOffer]': {
            change: this.onChangeIsActive
         },
         'offerscategoriesdataview': {
            viewready: this.onCategoryDataview,
            itemclick: this.onCategoryCheckBoxSelect
         },
         'offersimagesform [itemId=offersImageDataView]': {
            viewready: 'onViewReadyOfferImageDataView'
         },
         'offersimagesform [itemId=offersCropImageDataView]': {
            viewready: 'onViewReadyOfferCropImageDataView'
         },
         'offersimagesform [action=back]': {
            click: this.onBackImages
         },
         'offersimagesform [action=next]': {
            click: this.onNextImages
         }
      });
      var me = this;

      me.getOffersLocStoreStore().on({
         scope: me,
         load: me.onOffersLocStoreLoad
      });
      this.record;
      this.loadFrom;
   },

   onViewReadyOfferImageDataView: function () {
      var random = Math.random();
      var photo = document.getElementById('offersInfoImageBox');

      // console.log(this.record);
      if (this.record) {
         var key = this.record.data.key;
         photo.src = BrandAdmin.util.Config.getImgUrl() + '/image/300x225/1.5/' + key + '?' + random;
         //var listData = this.record.data.img;
         //if (listData != 'data:,')
         //{
         //   if (photo)
         //   {
         //      photo.src = this.record.data.img;
         //   } else
         //   {
         //      photo.src = "resources/images/NtAvailOffer.png";
         //   }
         //}
      }

   },

   onViewReadyOfferCropImageDataView: function () {
      var random = Math.random();
      var photo = document.getElementById('offersCropImageBox');

      // console.log(this.record);
      console.log(this.record);
      if (this.record) {
         var key = this.record.data.key;
         photo.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x112/1.5/' + key + '-crop' + '?' + random;
         /*
         var listData = this.record.data.img;
         if (listData != 'data:,') {
            if (photo) {
               photo.src = this.record.data.listImg;
            } else {
               photo.src = "resources/images/NtAvailOffer.png";
            }
         }*/
      }
   },

   onBackLocation: function () {
      var form = this.getOffersInfoForm().getForm();
      var offersStore = this.getOffersGrid().getStore();
      var record = form.getRecord();
      var grid = this.getOffersLocGrid().getSelectionModel().getSelection();
      var store = this.getOffersLocStoreStore();
      var locations = Array();
      if (grid.length != 0) {
         for (var i = 0; i < grid.length; i++) {
            locations.push(grid[i].data.key);
         }
      }
      if (record.data.locations.toString() != locations.toString()) {
         record.setDirty();
         form.updateRecord(record);
         record.data.locations = locations;
      }
      var dirty = record.dirty;
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (dirty) {
         if (lang == "fr") {
            Ext.MessageBox.show({
               msg: 'Usted no ha salvado sus cambios. Ninguno de sus cambios van a ser salvados. Está seguro que desea hacer esto? ',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancel
            });
         }
         if (lang == "en") {
            Ext.MessageBox.show({
               msg: 'You have not saved your changes. None of your changes will be saved. Are you sure you want to do this?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancel
            });
         }
      } else {
         var items = offersStore.data.items;
         for (var i = 0; i < items.length; i++) {
            items[i].reject(true);
            if (items[i].phantom) {
               offersStore.remove(items[i]);
            }
         }
         var panel = this.getOffersPanel().getLayout();
         panel.setActiveItem(0);
      }
   },

   onChangeIsActive: function (view, value) {
      var status = this.getOffersInfoForm().down('#offerStatus');
      if (value) {
         status.setText("Válido");
      } else {
         status.setText("Caducado");
      }
   },

   onOffersLocStoreLoad: function (store) {
      var response = store.data.items;
      var grid = this.getOffersGrid().getSelectionModel().getSelection()[0];
      if (grid) {
         var locations = grid.data.locations;
         var locGrid = this.getOffersLocGrid().getView();
         var select = Array();

         for (var j = 0; j < locations.length; j++) {
            for (var i = 0; i < response.length; i++) {
               if (response[i].data.key == locations[j]) {
                  response[i].data.name = true;
                  select.push(response[j]);
               }
            }
         }
         //  console.log(select);
         if (select.length != 0) {
            locGrid.select(select, true);
            locGrid.refresh();
         }
         var infoForm = this.getOffersInfoForm().getForm();
         var record = infoForm.getRecord();
         this.setQrCodeInGrid();
         if (!record.phantom) {
            this.setQrCodeInGrid();
         } else {
            var offersLocGrid = this.getOffersLocGrid();

            offersLocGrid.getSelectionModel().deselectAll();
            for (var k = 0; k < store.data.items.length; k++) {


               store.data.items[k].data.qrCode = '';

            }
            this.getOffersLocGrid().getView().refresh();
         }
      }

   },

   onCheckChange: function (view, index, value) {
      if (value) {
         var grid = this.getOffersLocGrid();
         grid.getView().select(index);
      }
   },

   onCategoryCheckBoxSelect: function (view) {

      var max = document.offersMenu.length; //GETTING ALL ITEMS OF CATEGORIES
      var array = new Array;

      for (var i = 0; i < max; i++) {
         if (document.offersMenu[i].offersMenu) {
            if (document.offersMenu[i].offersMenu.checked == true) {
               var catId = document.offersMenu[i].offersMenu.id;
               array.push(catId);
            }
         } else {
            if (document.offersMenu[i].checked == true) {
               var catId = document.offersMenu[i].id;
               array.push(catId);
            }
         }
      }
      return array;
   },

   onSaveCategory: function () {
      var categories = this.onCategoryCheckBoxSelect();
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (categories.count == 0) {
         if (lang == "fr") {
            Ext.example.msg('Cuidado', 'Por favor seleccione una categoría.');
            return;
         }
         if (lang == "en") {
            Ext.example.msg('Warning', 'Please select atleast one category. ');
            return;
         }
      }
      var form = this.getOffersInfoForm().getForm();
      var record = form.getRecord();
      var preCategory = record.data.categories;

      record.data.categories = categories;

      if (preCategory.toString() != categories.toString()) {

         record.setDirty();
      }
      form.updateRecord(record);
      var store = this.getOffersStoreStore();
      this.save(record, store, "categories");
   },

   onCategoryDataview: function (view) {
      var items = view.getNodes();
      // console.log(items);
      var form = this.getOffersInfoForm().getForm();
      var record = form.getRecord();
      var catArray = record.data.categories;
      var keyArray = new Array();
      //GET KEYS,VALUES PAIR OF ALL ITEMS
      for (var i = 0; i < items.length; i++) {
         var splittedString = view.findItemByChild(items[i]).innerHTML.split("id=")[1];
         var keys = splittedString.split(" ")[0];
         keyArray.push({
            key: keys,
            value: view.findItemByChild(items[i]).innerHTML
         });

      }
      if (catArray.length != 0) {
         for (var d = 0; d < keyArray.length; d++) {
            for (var ds = 0; ds < catArray.length; ds++) {
               var busKey = "\"" + catArray[ds] + "\"";
               if (keyArray[d].key == busKey) {
                  var temp = keyArray[d].value.split(" ");
                  temp.splice(2, 0, "checked");
                  view.findItemByChild(items[d]).innerHTML = temp.join(" ");
               }
            }
         }


      }
   },

   onBack: function (form) {
      var grid = this.getOffersGrid();
      var record = form.getRecord();

      form.updateRecord(record);
      var store = this.getOffersStoreStore();
      // store.rejectChanges();
      var dirty = record.dirty;
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (dirty) {
         if (lang == "fr") {
            Ext.MessageBox.show({
               msg: 'Usted no ha salvado sus cambios. Ninguno de sus cambios van a ser salvados. Está seguro que desea hacer esto? ',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancel
            });
         }
         if (lang == "en") {
            Ext.MessageBox.show({
               msg: 'You have not saved your changes. None of your changes will be saved. Are you sure you want to do this?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               cls: 'messagebox-css',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.confirmCancel
            });
         }
      } else {
         var items = store.data.items;
         for (var i = 0; i < items.length; i++) {
            items[i].reject(true);
            if (items[i].phantom) {

               store.remove(items[i]);
            }
         }
         var panel = this.getOffersPanel().getLayout();
         panel.setActiveItem(0);
      }
   },

   onBackOffersInfo: function () {
      var form = this.getOffersInfoForm();
      var record = form.getRecord();
      //console.log(record);
      if (record.data.validFrom != null) {
         record.data.validFrom = new Date(record.data.validFrom);
         record.data.validFrom.setHours(00);
         record.data.validFrom.setMinutes(00);
         record.data.validFrom.setSeconds(00);
      }
      if (record.data.validTo != null) {
         record.data.validTo = new Date(record.data.validTo);
         record.data.validTo.setHours(00);
         record.data.validTo.setMinutes(00);
         record.data.validTo.setSeconds(00);
      }
      this.onBack(form);

   },

   onBackDescription: function () {
      var form = this.getOffersDescriptionForm();
      this.onBack(form);
      //form.getForm().reset();


   },

   onBackCategories: function () {
      var form = this.getOffersDescriptionForm();
      this.onBack(form);

   },

   onBackImages: function () {
      var panel = this.getOffersPanel().getLayout();
      panel.setActiveItem(0);
      var store = this.getOffersStoreStore();
      store.rejectChanges();
   },

   onNextImages: function () {
      this.onDescription();
   },

   confirmCancel: function (button) {

      var grid = this.getOffersGrid();
      var panel = this.getOffersPanel();
      var store = this.getOffersStoreStore();
      var items = store.data.items;

      if (button == 'yes') {
         panel.getLayout().setActiveItem(0);
         store.rejectChanges();

         for (var i = 0; i < items.length; i++) {
            items[i].reject(true);
            if (items[i].phantom) {
               store.remove(items[i]);
            }
         }

         grid.getView().refresh();
      }
   },

   onSaveOffersInfo: function () {
      var form = this.getOffersInfoForm().getForm();
      var record = form.getRecord();

      //IF IMAGE IS NOT EXIST THEN IMAGE WOULD BE NULL...
      //if (offerImage.src.search("NtAvailOffer.png") == -1)
      //{

      //   if (record.data.img != this.compress(offerImage).src)
      //   {
      //      console.log("image");
      //      record.data.img = this.compress(offerImage).src;

      //   }

      //   if (record.data.listImg != this.compress(offersCropImage).src)
      //   {
      //      console.log("listImage");
      //      record.data.listImg = this.compress(offersCropImage).src;
      //   }
      //} else
      //{

      //   record.data.img = "data:,";
      //   record.data.listImg = "data:,";
      //}
      console.log(record.data);
      form.updateRecord(record);
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
      var busTypeId = this.getStore('ProfileIdentityStore').data.items[0].data.busTypeId;
      record.data.brandId = brandId;
      record.data.busTypeId = busTypeId;

      // var safariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      // if (safariBrowser)
      //   {
      if (record.data.validFrom != null) {
         record.data.validFrom = record.data.validFrom.toISOString();
      }
      if (record.data.validTo != null) {
         record.data.validTo = record.data.validTo.toISOString();
      }
      // }

      var store = this.getOffersStoreStore();
      this.saveoffersInfo(record, store, "info");
   },

   onSaveOffersDescription: function () {
      var form = this.getOffersDescriptionForm().getForm();
      var record = form.getRecord();
      form.updateRecord(record);
      //  console.log(record);
      var store = this.getOffersStoreStore();
      this.save(record, store, "desc");
   },

   saveoffersInfo: function (record, store, tab) {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record.dirty) {
         if (!record.isValid()) {
            if (lang == "fr") {
               if (record.data.tagLine.length > 28) {
                  Ext.example.msg('Cuidado ', 'Su lema será hasta 28 caracteres.');
               } else {
                  Ext.example.msg('Cuidado ', 'Los campos marcados con el <font color = "red">*</font> no puede estar vacío');
               }

               return;
            }
            if (lang == "en") {
               if (record.data.tagLine.length > 28) {
                  Ext.example.msg('Warning ', 'Your Tagline will be up to 28 characters.');
               } else {
                  Ext.example.msg('Warning ', 'Fields marked with <font color = "red">*</font> cannot be empty');
               }

               return;
            }
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
         if (lang == "fr") {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Cargando..." });
            myMask.show();
         }
         if (lang == "en") {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
            myMask.show();
         }
         store.sync({
            scope: this,
            success: function (response) {
               myMask.hide();
               statusBar[0].clearStatus({ useDefaults: true });
               Ext.example.msg('Exitoso', 'Los datos fueron guardados.');
               if (record.data.validFrom != null) {
                  record.data.validFrom = new Date(record.data.validFrom);
                  record.data.validFrom.setHours(00);
                  record.data.validFrom.setMinutes(00);
                  record.data.validFrom.setSeconds(00);
               }
               if (record.data.validTo != null) {
                  record.data.validTo = new Date(record.data.validTo);
                  record.data.validTo.setHours(00);
                  record.data.validTo.setMinutes(00);
                  record.data.validTo.setSeconds(00);
               }
               if (tab == "info") {

                  var catStore = this.getStore('OffersCategoriesStore');
                  var brandStore = this.getStore('ProfileIdentityStore');
                  var busCategories = brandStore.data.items[0].data.busCategories;

                  var aparams = {
                     categories: busCategories
                  };
                  var gridClass = Ext.create('BrandAdmin.classes.GridClass');
                  gridClass.loadGridStore(catStore, aparams);

                  this.onNextOffersInfo();
               } else if (tab == "desc") {
                  this.onNextDescription();
               } else if (tab == "categories") {
                  this.onNextCategories();
               } /*else
               {
                  this.onFinishBreadCrumb();
               }*/
            },

            failure: function (response, operations) {
               myMask.hide();
               statusBar[0].setStatus({ useDefaults: true });
               if (!response.exceptions[0].error) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = response.exceptions[0].error.status;
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401) {
                     error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                  }
                  Ext.example.msg('Message', error);
               }
            }
         });
      } else {
         if (record.data.validFrom != null) {
            record.data.validFrom = new Date(record.data.validFrom);
            record.data.validFrom.setHours(00);
            record.data.validFrom.setMinutes(00);
            record.data.validFrom.setSeconds(00);
         }
         if (record.data.validTo != null) {
            record.data.validTo = new Date(record.data.validTo);
            record.data.validTo.setHours(00);
            record.data.validTo.setMinutes(00);
            record.data.validTo.setSeconds(00);
         }
         if (lang == "fr") {
            Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
         if (lang == "en") {
            Ext.example.msg('Warning', 'Found no data to save');
         }
      }
   },

   save: function (record, store, tab) {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record.dirty) {
         if (!record.isValid()) {
            if (lang == "fr") {
               //  Ext.example.msg('Warning ', 'Fields marked with <font color = "red">*</font> cannot be empty');
               Ext.example.msg('Cuidado ', 'Campos marcados con <font color = "red">*</font> no pueden estar vacios');
               return;
            }
            if (lang == "en") {
               Ext.example.msg('Warning ', 'Fields marked with <font color = "red">*</font> cannot be empty');
               //Ext.example.msg('Cuidado ', 'Campos marcados con <font color = "red">*</font> no pueden estar vacios');
               return;
            }
         }
         // var safariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
         // if (safariBrowser)
         // {
         if (record.data.validFrom != null) {
            record.data.validFrom = record.data.validFrom.toISOString();
         }
         if (record.data.validTo != null) {
            record.data.validTo = record.data.validTo.toISOString();
         }
         //   }
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
         if (lang == "en") {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
            myMask.show();
         }
         if (lang == "fr") {
            var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Cargando..." });
            myMask.show();
         }
         store.sync({
            scope: this,
            success: function (response) {
               myMask.hide();
               statusBar[0].clearStatus({ useDefaults: true });
               Ext.example.msg('Exitoso', 'Los datos fueron guardados.');
               if (record.data.validFrom != null) {
                  record.data.validFrom = new Date(record.data.validFrom);
                  record.data.validFrom.setHours(00);
                  record.data.validFrom.setMinutes(00);
                  record.data.validFrom.setSeconds(00);
               }
               if (record.data.validTo != null) {
                  record.data.validTo = new Date(record.data.validTo);
                  record.data.validTo.setHours(00);
                  record.data.validTo.setMinutes(00);
                  record.data.validTo.setSeconds(00);
               }
               if (tab == "info") {

                  var catStore = this.getStore('OffersCategoriesStore');
                  var brandStore = this.getStore('ProfileIdentityStore');
                  var busCategories = brandStore.data.items[0].data.busCategories;

                  var aparams = {
                     categories: busCategories
                  };
                  var gridClass = Ext.create('BrandAdmin.classes.GridClass');
                  gridClass.loadGridStore(catStore, aparams);

                  this.onNextOffersInfo();
               } else if (tab == "desc") {
                  this.onNextDescription();
               } else if (tab == "categories") {
                  this.onNextCategories();
               } /*else
               {
                  this.onFinishBreadCrumb();
               }*/
            },

            failure: function (response, operations) {
               myMask.hide();
               statusBar[0].setStatus({ useDefaults: true });
               if (!response.exceptions[0].error) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = response.exceptions[0].error.status;
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401) {
                     if (this.value == "fr") {
                        error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                     }
                     if (this.value == "en") {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                  }
                  Ext.example.msg('Message', error);
               }
            }
         });
      } else {

         if (lang == "fr") {
            Ext.example.msg('Cuidado', 'No hubo nada que guardar.');
         }
         if (lang == "en") {
            Ext.example.msg('Warning', 'Found no data to save');
         }
      }
   },

   onNewOffers: function () {
      this.record = '';
      var panel = this.getOffersPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getOffersInfoForm();
      var store = this.getStore('OffersStore');
      var imageBox = document.getElementById('offersInfoImageBox');
      //need to remove image src when creating new offer or else old image appears
      if (imageBox) {
         imageBox.src = "resources/images/NtAvailOffer.png";
      }
      var cropImageBox = document.getElementById('offersCropImageBox');
      if (cropImageBox) {
         cropImageBox.src = "resources/images/NtAvailOffer.png";
      }
      form.getForm().reset();
      var record = new store.model;
      store.insert(store.data.length, record);

      form.loadRecord(record);

      var descForm = this.getOffersDescriptionForm();
      descForm.loadRecord(record);
      this.onOffersInfo();
      /*  var locGrid = this.getOffersLocGrid();
      locGrid.getSelectionModel().deselectAll();*/

      var status1 = this.getOffersInfoForm().down('#isActiveOffer');
      status1.disable();
      var status = this.getOffersInfoForm().down('#offerStatus');
      status.setText("");
      var locStore = this.getStore('OffersLocStore');
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;

      var params = {
         brandId: brandId
      };
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      this.locationGridStore(locStore, params);

      var catStore = this.getStore('OffersCategoriesStore');
      var brandStore = this.getStore('ProfileIdentityStore');
      var busCategories = brandStore.data.items[0].data.busCategories;
      var aparams = { categories: busCategories };
      gridClass.loadGridStore(catStore, aparams);

      /*var crpImage = form.down('#offersCropImageContainer');
      crpImage.hide();*/
   },

   onCancelUploadWindow: function () {
      var win = this.getOffersInfoUploadWindow();
      win.close();

      //var form = this.getOffersInfoForm();
      //form.reset();
   },

   onUploadOffersInfo: function () {
      var win = this.getOffersInfoUploadWindow();
      win.show();

   },

   onUploadImage: function () {
      var imgText = this.getOffersInfoUploadWindow().down('#uploadFileField');

      var file = imgText.fileInputEl.dom.files[0];
      var rawValue = imgText.getRawValue();

      if (rawValue != '') {
         //this.getOffersInfoUploadWindow().close();
         var win = this.getOffersInfoImagePreviewWindow();
         win.show();
         var confirmUploadBut = this.getOffersInfoImagePreviewWindow().down('#confirmUpload');
         confirmUploadBut.enable();
         var previewImgBox = document.getElementById('offersImagePreDataView');
         var reader = new FileReader();
         if (file) {
            reader.readAsDataURL(file);
            reader.onload = function (event) {
               previewImgBox.src = event.target.result;

            };
         }
         previewImgBox.onload = function () {
            var width = previewImgBox.naturalWidth;
            var height = previewImgBox.naturalHeight;
            if (width < 300 || height < 225) {
               confirmUploadBut.disable();
               previewImgBox.style.height = '';
               previewImgBox.style.width = '';
            } else {
               previewImgBox.style.height = '225px';
               previewImgBox.style.width = '300px';
            }
         };

      }


   },

   onConfirmUploadImage: function (a, b, c) {
      /*this.loadFrom = 'upload';
      var me = this;
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var imgText = this.getOffersInfoUploadWindow().down('#uploadFileField');
      var file = imgText.fileInputEl.dom.files[0];
      var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      //infoForm.updateRecord(record);
      var rawValue = imgText.getRawValue();
      if (rawValue != '')
      {
         var imageBox = document.getElementById('offersInfoImageBox');
         imageBox.src = '';
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
                        if (lang === "fr")
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
                        if (lang === "en") {
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

                        imageBox.src = record.data.img;
                        return;
                     } else
                     {
                        record.setDirty();
                        
                        document.getElementById('offersCropImageBox').src = "";
                        me.getOffersInfoUploadWindow().close();
                        me.getOffersInfoImagePreviewWindow().close();
                        me.loadFrom = '';
                     }
                  }
               };
               imageBox.src = event.target.result;
             
            };


         }
      }*/

      var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      var resArray = [{
         resolution: {
            height: 225,
            width: 300
         },
         aspectRatio: true
      }];
      // var index = this.getPressedButtonIndex();
      var key = record.data.key;
      if (key) {
         var form = this.getOffersInfoUploadWindow().down('form').getForm();
         if (form.isValid()) {
            form.submit({
               url: BrandAdmin.util.Config.getImgUrl() + '/uploadImg',
               scope: this,
               params: {
                  resArray: Ext.encode(resArray),
                  key: key
               },
               waitMsg: 'Uploading your photo...',
               success: function (fp, o) {
                  //  Ext.example.msg('Success', 'Processed file "' + o.result.file + '" on the server');
                  var imagDiv = document.getElementById('offersInfoImageBox');
                  var random = Math.random();
                  imagDiv.src = BrandAdmin.util.Config.getImgUrl() + '/image/300x225/1.5/' + key + '?' + random;
                  this.getOffersInfoUploadWindow().close();
                  this.getOffersInfoImagePreviewWindow().close();
                  document.getElementById('offersCropImageBox').src = "resources/images/NtAvailOffer.png";
               },
               failure: function () {
                  Ext.Msg.alert("Error", Ext.JSON.decode(this.response.responseText).message);
               }
            });
         }
      } else {
         Ext.example.msg('Warning', 'Please fill Information form first.');
      }

   },

   onPreviewCancel: function () {
      var win = this.getOffersInfoImagePreviewWindow();
      win.close();
   },

   onSaveLocation: function () {
      var form = this.getOffersInfoForm().getForm();
      var record = form.getRecord();
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (!record.data.key) {
         if (lang === "fr") {
            //  Ext.example.msg('Cuidado', 'Please fill Information form first.');
            Ext.example.msg('Cuidado', 'Por favor llene el formulario.');
            return;
         }
         if (lang === "en") {
            Ext.example.msg('Warning', 'Please fill Information form first.');
            //Ext.example.msg('Cuidado', 'Por favor llene el formulario.');
            return;
         }
      }

      var grid = this.getOffersLocGrid().getSelectionModel().getSelection();
      var store = this.getOffersLocStoreStore();

      var locations = Array();
      if (grid.length != 0) {
         for (var i = 0; i < grid.length; i++) {
            locations.push(grid[i].data.key);
         }
      }
      if (record.data.locations.toString() != locations.toString()) {
         record.setDirty();
         form.updateRecord(record);
         //console.log(record);
         record.data.locations = locations;
      }

      var ostore = this.getOffersStoreStore();
      this.save(record, ostore, "location");
      this.updateOfferLocation(record);
      this.setQrCodeInGrid();

   },

   updateOfferLocation: function (record) {
      var lang = this.getApplication().getController('BrandAdminMainController').value;

      var rec = record.data;
      Ext.Ajax.request({
         method: 'POST',
         url: '/UpdateOfferLocation',
         params:
            rec,

         scope: this,
         success: function (response) {

         },
         failure: function (response) {
            //console.log(response);
            var error = 'Something went wrong';
            if (response.status == 401) {
               if (lang == "fr") {
                  error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
               }
               if (lang == "en") {
                  error = 'Sorry, You are not authorized to access this module.';
               }
            }
            Ext.example.msg('Message', error);
         }
      });
   },

   onFinishBreadCrumb: function () {
      var panel = this.getOffersPanel().getLayout();
      /* var store = this.getOffersStoreStore();
       store.rejectChanges();*/
      panel.setActiveItem(0);
   },

   onNextCategories: function () {
      //var panel = this.getOffersBreadCrumbPanel().getLayout();
      //panel.setActiveItem(3);
      this.onLocations();
   },

   onNextDescription: function () {
      //var panel = this.getOffersBreadCrumbPanel().getLayout();
      //panel.setActiveItem(2);
      this.onCategories();
   },

   onNextOffersInfo: function () {
      //var panel = this.getOffersBreadCrumbPanel().getLayout();
      //panel.setActiveItem(1);
      this.onImages();
   },

   onClickBreadCrumbMenu: function () {
      var me = this;
      Ext.get('offersinfo_tab').on('click', function (event, target) {
         me.onOffersInfo();
      });
      Ext.get('description_tab').on('click', function (event, target) {
         me.onDescription();
      });
      Ext.get('images_tab').on('click', function (event, target) {
         me.onImages();
      });
      Ext.get('categories_tab').on('click', function (event, target) {
         me.onCategories();
      });
      Ext.get('locations_tab').on('click', function (event, target) {
         me.onLocations();
      });
   },

   preserveBreadcrumbColor: function (anchor, courseinfoTab) {
      // TODO : consolidate code
      var crumb = document.getElementById('crumbs2');
      // Get <UL> element2
      var crumbList = crumb.children[0];
      // Loop around all breadcrumb to remove onclick class
      for (var i = 0; i < crumbList.children.length; i++) {
         var liElement = crumbList.children[i]; // Get <LI> element
         liElement.className = ""; //Clearing style on a:after pseudoclass
         var link = liElement.children[0]; // Get <A> element
         link.className = ""; // TODO Modify to preserve additionnal classes
      }

      // Add class on selected link
      anchor.className = "preserveBreadcrumbColor";
      courseinfoTab.className = "preserveAfterColor";
   },

   onLocations: function () {
      var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      infoForm.updateRecord(record);
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record.dirty) {
         if (lang === "fr") {
            Ext.Msg.show({
               title: 'Cuidado',
               msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang === "en") {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save changes before proceeding.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         return;
      }

      var view = this.getOffersCategoriesDataview();
      var form1 = this.getOffersInfoForm().getForm();
      var record1 = form1.getRecord();
      var bId = record1.data.categories;
      var checkedIdArray = new Array();

      var items = view.getNodes();
      if (document.offersMenu) {
         for (var i = 0; i < document.offersMenu.length; i++) {
            var checked1 = items[i][0].checked;
            //console.log(items[i][0].id);
            var checkedId = items[i][0].id;
            if (checked1) {
               checkedIdArray.push(checkedId);
            }
         }
         var idx1;
         if (checkedIdArray.length > 0 && bId.length > 0) {
            var a1 = checkedIdArray.sort().join();
            var a2 = bId.sort().join();
            //console.log(a1);
            if (a1.length != a2.length) {
               if (lang === "fr") {
                  Ext.Msg.show({
                     title: 'Cuidado',
                     msg: 'Por favor, salve los cambios antes de avanzar.',
                     buttons: Ext.Msg.OK,
                     icon: Ext.Msg.WARNING
                  });
               }
               if (lang === "en") {
                  Ext.Msg.show({
                     title: 'Warning',
                     msg: 'Please save changes before proceeding.',
                     buttons: Ext.Msg.OK,
                     icon: Ext.Msg.WARNING
                  });
               }

               return;

            }
         }
      }
      if (bId.length == 0 && checkedIdArray.length > 0) {
         if (lang === "fr") {
            Ext.Msg.show({
               title: 'Cuidado',
               msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang === "en") {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save changes before proceeding.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }

         return;
      }
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(3);

      var locationTab = document.getElementById('locations_tab');
      var anchor = document.getElementById('tab4');
      locationTab.onclick = this.preserveBreadcrumbColor(anchor, locationTab);
      // if (!record.phantom)
      // {
      //this.setQrCodeInGrid();
      // }

   },

   setQrCodeInGrid: function () {
      var selOffer = this.getOffersGrid().getSelectionModel().getSelection()[0];
      if (selOffer) {
         var offerId = selOffer.data.key;

         var splittedOfferId = offerId.split('::');
         var qrCodePartOne = 'BO' + splittedOfferId[1] + splittedOfferId[3];
         var code = selOffer.data.code;
         var qrCode;
         var qrCodePartTwo = '';
         var store = this.getStore('OffersLocStore');
         for (var j = 0; j < store.data.items.length; j++) {
            if (selOffer.data.locations.indexOf(store.data.items[j].data.key) != -1) {
               var splittedLocId = store.data.items[j].data.key.split('::');
               qrCodePartTwo = 'BL' + splittedLocId[1] + splittedLocId[3];
               qrCode = qrCodePartOne + '-' + qrCodePartTwo + '-' + code;
               store.data.items[j].data.qrCode = qrCode;
            }
         }
         this.getOffersLocGrid().getView().refresh();
      }

   },

   onOffersInfo: function () {
      var descriptionForm = this.getOffersDescriptionForm().getForm();
      var record1 = descriptionForm.getRecord();
      descriptionForm.updateRecord(record1);
      console.log(record1);
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record1.dirty && !record1.phantom) {
         if (lang === "fr") {
            Ext.Msg.show({
               title: 'Cuidado',
               msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang === "en") {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save changes before proceeding.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }

         return;
      }

      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(0);

      var offersInfoTab = document.getElementById('offersinfo_tab');
      var anchor = document.getElementById('tab1');
      offersInfoTab.onclick = this.preserveBreadcrumbColor(anchor, offersInfoTab);
   },

   onCategories: function () {
      //var offerImage = document.getElementById('offersInfoImageBox');
      var descriptionForm = this.getOffersDescriptionForm().getForm();
      var infoForm = this.getOffersInfoForm().getForm();
      var record1 = infoForm.getRecord();
      var record = descriptionForm.getRecord();
      console.log(record);
      infoForm.updateRecord(record1);
      descriptionForm.updateRecord(record);
      /*   if (record1.data.img != this.compress(offerImage).src) {
         record1.data.img = this.compress(offerImage).src;
         // record1.setDirty();
      }*/
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record1.dirty || record.dirty) {
         if (lang === "fr") {
            Ext.Msg.show({
               title: 'Cuidado',
               msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang === "en") {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save changes before proceeding.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }

         return;
      }

      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(2);

      var categoriesTab = document.getElementById('categories_tab');
      var anchor = document.getElementById('tab3');
      categoriesTab.onclick = this.preserveBreadcrumbColor(anchor, categoriesTab);
      this.onCategoryDataview(this.getOffersCategoriesDataview());
   },

   onDescription: function () {
      // var offerImage = document.getElementById('offersInfoImageBox');
      var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      infoForm.updateRecord(record);
      console.log(record);
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record.dirty && !record.phantom) {
         if (lang === "fr") {
            Ext.Msg.show({
               title: 'Cuidado',
               msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang === "en") {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save changes before proceeding.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         return;
      }

      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(1);

      var descriptionTab = document.getElementById('description_tab');
      var anchor = document.getElementById('tab2');
      descriptionTab.onclick = this.preserveBreadcrumbColor(anchor, descriptionTab);
   },

   onImages: function () {
      var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      infoForm.updateRecord(record);
      console.log(record);
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      if (record.dirty && !record.phantom) {
         if (lang === "fr") {
            Ext.Msg.show({
               title: 'Cuidado',
               msg: 'Por favor, salve los cambios antes de avanzar.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         if (lang === "en") {
            Ext.Msg.show({
               title: 'Warning',
               msg: 'Please save changes before proceeding.',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
            });
         }
         return;
      }
      var panel = this.getOffersBreadCrumbPanel().getLayout();
      panel.setActiveItem(4);

      var descriptionTab = document.getElementById('images_tab');
      var anchor = document.getElementById('tab5');
      descriptionTab.onclick = this.preserveBreadcrumbColor(anchor, descriptionTab);
   },

   onOffersPanelActionColumn: function (grid, cell, row, col, e) {
      var m = e.getTarget().className.split(' '),
          record = grid.getStore().getAt(row);
      if (m[4] == 'Edit') {
         this.editRecord(record);
      } else if (m[4] == 'Delete') {
         this.deleteRecord(grid, record);
      } else if (m[4] == 'View') {
         this.viewRecord(record);
      } else {
         return;
      }
   },

   viewRecord: function (record) {
      this.record = record;

      var grid = this.getOffersGrid().getView();
      grid.select(record);

      var panel = this.getOffersPanel().getLayout();
      panel.setActiveItem(1);
      var form = this.getOffersInfoForm().getForm();
      form.loadRecord(record);

      var descriptionForm = this.getOffersDescriptionForm();
      descriptionForm.loadRecord(record);
      var random = Math.random();
      var offerImage = document.getElementById('offersInfoImageBox');
      var offersCropImage = document.getElementById('offersCropImageBox');

      if (offerImage) {
         offerImage.src = BrandAdmin.util.Config.getImgUrl() + '/image/300x225/1.5/' + record.data.key + '?' + random;;
      }
      if (offersCropImage) {
         offersCropImage.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x112/1.5/' + record.data.key + '-crop' + '?' + random;;
      }

      var store = this.getStore('OffersLocStore');
      var params = {
         brandId: record.data.brandId
      };
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      this.locationGridStore(store, params);


      var catStore = this.getStore('OffersCategoriesStore');
      var brandStore = this.getStore('ProfileIdentityStore');
      var busCategories = brandStore.data.items[0].data.busCategories;

      var aparams = {
         categories: busCategories
      };

      var status1 = this.getOffersInfoForm().down('#isActiveOffer');
      status1.enable();
      gridClass.loadGridStore(catStore, aparams);
      this.onLocations();
   },

   editRecord: function (record) {
      this.record = record;

      var grid = this.getOffersGrid().getView();
      grid.select(record);

      var panel = this.getOffersPanel().getLayout();
      panel.setActiveItem(1);

      var form = this.getOffersInfoForm().getForm();
      form.loadRecord(record);

      var descriptionForm = this.getOffersDescriptionForm();
      descriptionForm.loadRecord(record);

      //  console.log(offersCropImage);
      // console.log(record);
      var store = this.getStore('OffersLocStore');
      // console.log(record.data);
      var params = {
         brandId: record.data.brandId
      };
      var gridClass = Ext.create('BrandAdmin.classes.GridClass');
      this.locationGridStore(store, params);


      var catStore = this.getStore('OffersCategoriesStore');
      var brandStore = this.getStore('ProfileIdentityStore');
      var busCategories = brandStore.data.items[0].data.busCategories;

      var aparams = {
         categories: busCategories
      };

      var status1 = this.getOffersInfoForm().down('#isActiveOffer');
      status1.enable();
      gridClass.loadGridStore(catStore, aparams);
      this.onOffersInfo();

      var offerImage = document.getElementById('offersInfoImageBox');
      var offersCropImage = document.getElementById('offersCropImageBox');
      var key = record.data.key;
      var random = Math.random();
      if (offerImage) {
         offerImage.src = "resources/images/NtAvailOffer.png";
         console.log(offerImage.src);
         offerImage.src = BrandAdmin.util.Config.getImgUrl() + '/image/300x225/1.5/' + key + '?' + random;

      }
      if (offersCropImage) {
         offersCropImage.src = "resources/images/NtAvailOffer.png";
         console.log(offerImage.src);
         offersCropImage.src = BrandAdmin.util.Config.getImgUrl() + '/image/150x112/1.5/' + key + '-crop' + '?' + random;

      }
      //if (record.data.img != "data:,") {
      //   if (offerImage) {
      //      offerImage.src = record.data.img;
      //   }
      //   if (offersCropImage) {
      //      offersCropImage.src = record.data.listImg;
      //   }
      //} else {
      //   if (offerImage) {
      //      offerImage.src = "resources/images/NtAvailOffer.png";
      //   }
      //   if (offersCropImage) {
      //      offersCropImage.src = "resources/images/NtAvailOffer.png";
      //   }
      //}
      /*var crpImage = this.getOffersInfoForm().down('#offersCropImageContainer');
      crpImage.show();*/
   },

   locationGridStore: function (store, params) {
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      store.load({
         scope: this,
         params: params,
         callback: function (response, operation, success) {
            if (success != true) {
               if (response) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = operation.error.status;
                  var error = 'Ocurrió un error.';
                  if (errorCode == 401) {
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
            } else {
               /*var selOffer = this.getOffersGrid().getSelectionModel().getSelection()[0];
               var offerId = selOffer.data.key;

               var splittedOfferId = offerId.split('::');
               var qrCodePartOne = 'BO' + splittedOfferId[1] + splittedOfferId[3];
               var code = selOffer.data.code;
               var qrCode;
               var qrCodePartTwo = '';*/
               for (var i = 0; i < response.length; i++) {
                  if (response[i].data.insideMall == true) {
                     response[i].data.insideMall = "Si";
                  } else {
                     response[i].data.insideMall = "No";
                  }


                  /* if (selOffer.data.locations.indexOf(response[i].data.key) != '-1')
                  {
                     var splittedLocId = response[i].data.key.split('::');
                     qrCodePartTwo = 'BL' + splittedLocId[1] + splittedLocId[3];
                     qrCode = qrCodePartOne + '-' + qrCodePartTwo + '-' + code;
                     response[i].data.qrCode = qrCode;
                  }*/

               }

               /*for (var j = 0; j < store.data.items.length; j++)
               {
                  if (selOffer.data.locations.indexOf(store.data.items[j].data.key) != -1)
                  {
                     var splittedLocId = store.data.items[j].data.key.split('::');
                     qrCodePartTwo = 'BL' + splittedLocId[1] + splittedLocId[3];
                     qrCode = qrCodePartOne + '-' + qrCodePartTwo + '-' + code;
                     store.data.items[j].data.qrCode = qrCode;
                  }
               }*/
            }
         }
      });
   },

   compressCropPhoto: function (img) {
      var mimeType = "image/jpeg";
      var cvs = document.createElement('canvas');
      var actualHeight = img.naturalHeight;
      var actualWidth = img.naturalWidth;
      var maxHeight = 450;
      var maxWidth = 600;
      var imgRatio = actualWidth / actualHeight;
      var maxRatio = maxWidth / maxHeight;
      if (actualHeight > maxHeight || actualWidth > maxWidth) {
         if (imgRatio < maxRatio) {
            //adjust width according to maxHeight
            imgRatio = maxHeight / actualHeight;
            actualWidth = imgRatio * actualWidth;
            actualHeight = maxHeight;
         } else if (imgRatio > maxRatio) {
            //adjust height according to maxWidth
            imgRatio = maxWidth / actualWidth;
            actualHeight = imgRatio * actualHeight;
            actualWidth = maxWidth;
         } else {
            actualHeight = maxHeight;
            actualWidth = maxWidth;
         }
      }
      cvs.width = actualWidth;
      cvs.height = actualHeight;
      /*img.onload = function()
      {*/
      var ctx = cvs.getContext("2d").drawImage(img, 0, 0, actualWidth, actualHeight);
      // };
      var newImageData = cvs.toDataURL(mimeType, 1.0);
      var rimg = new Image();
      rimg.src = newImageData;
      return rimg;
   },

   compress: function (img) {
      var mimeType = "image/jpeg";
      var cvs = document.createElement('canvas');
      var actualHeight = img.naturalHeight;
      var actualWidth = img.naturalWidth;
      var maxHeight = 450;
      var maxWidth = 600;
      var imgRatio = actualWidth / actualHeight;
      var maxRatio = maxWidth / maxHeight;
      if (actualHeight > maxHeight || actualWidth > maxWidth) {
         if (imgRatio < maxRatio) {
            //adjust width according to maxHeight
            imgRatio = maxHeight / actualHeight;
            actualWidth = imgRatio * actualWidth;
            actualHeight = maxHeight;
         } else if (imgRatio > maxRatio) {
            //adjust height according to maxWidth
            imgRatio = maxWidth / actualWidth;
            actualHeight = imgRatio * actualHeight;
            actualWidth = maxWidth;
         } else {
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

   deleteRecord: function (grid, record) {
      grid.select(record);
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var sel = record;
      if (sel != '') {
         if (lang === "fr") {
            Ext.MessageBox.show({
               msg: 'Esta apunto de borrar un record. Está seguro que quiere proceder?',
               icon: Ext.Msg.WARNING,
               title: 'Cuidado',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
         if (lang === "en") {
            Ext.MessageBox.show({
               msg: 'You are about to delete a record. Are you sure you want to proceed?',
               icon: Ext.Msg.WARNING,
               title: 'Warning',
               buttons: Ext.MessageBox.YESNO,
               scope: this,
               fn: this.onDelete
            });
         }
      } else {
         if (lang === "fr") {
            Ext.MessageBox.show({
               msg: 'Por favor seleccione un record.',
               title: 'Message',
               cls: 'messagebox-css',
               icon: Ext.Msg.ERROR,
               buttons: Ext.MessageBox.OK,
               scope: this
            });
         }
         if (lang === "en") {
            Ext.MessageBox.show({
               msg: 'Please select a record.',
               title: 'Message',
               cls: 'messagebox-css',
               icon: Ext.Msg.ERROR,
               buttons: Ext.MessageBox.OK,
               scope: this
            });
         }
      }
   },

   onDelete: function (button) {
      if (button != 'yes') {
         return;
      }
      var lang = this.getApplication().getController('BrandAdminMainController').value;
      var view = this.getOffersGrid();
      var sel = view.getSelectionModel().getSelection();
      var store = view.getStore();
      store.remove(sel);
      store.sync({
         scope: this,
         success: function (response) {
            if (lang === "fr") {
               Ext.example.msg('Exitoso', 'Registro eliminado con éxito.');
            }
            if (lang === "en") {
               Ext.example.msg('Success', 'Record deleted successfully');
            }
            view.getSelectionModel().select(0);
         },

         failure: function (response, operations) {

            if (!response.exceptions[0].error) {
               var data = response.operations[0].request.proxy.reader.jsonData.message;
               Ext.example.msg('Message', data);
               store.rejectChanges();
            } else {
               store.rejectChanges();
               var errorCode = response.exceptions[0].error.status;
               var error = 'Ocurrió un error.';
               if (errorCode == 401) {
                  if (lang === "fr") {
                     error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
                  }
                  if (lang === "en") {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
               }
               Ext.example.msg('Message', error);
            }
         }
      });
   },

   onOpenOfferImageCropWindow: function () {
      var parent = this;
      var photo = document.getElementById('offersInfoImageBox');
      //get img data from the form's record
      var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      infoForm.updateRecord(record);

      //checks if main offer image already exists.
      if (photo.src == 'http://localhost:3000/Movil.BrandAdmin/resources/images/NtAvailOffer.png') {
         Ext.MessageBox.show({
            msg: 'Por favor, sube la imagen 1 primero.',
            icon: Ext.Msg.ERROR,
            title: 'Cuidado',
            buttons: Ext.MessageBox.OK,
            scope: this
         });
         return false;
      }
      var window = this.getOffersImageCropWindow();
      window.show();
      var image = document.getElementById('imageToBeCropped');
      image.crossOrigin = "Anonymous";
      var previewImage = document.getElementById('previewImage');
      //cropping the image recieved from photo 1 because if that image is larger then 600*450 
      //then it would cause problems in cropping mechanism. We need the source image used in cropping to be in 600*450 
      //or almost nearby resolution
      // var offerImageExists = this.compressCropPhoto(photo).src;
      image.src = photo.src;
      previewImage.src = photo.src;

      /**************** JCROP CODE START*****************/

      jQuery(function ($) {
         // Create variables (in this scope) to hold the API and image size
         var me = this;
         var jcrop_api,
             boundx,
             boundy,
             // Grab some information about the preview pane
             $preview = $('#preview-pane'),
             $pcnt = $('#preview-pane .preview-container'),
             $pimg = $('#preview-pane .preview-container img'),
             xsize = $pcnt.width(),
             ysize = $pcnt.height();

         //create canvas element
         var canvas = document.createElement('canvas');
         $('#imageToBeCropped').Jcrop({
            onChange: updatePreview,
            onSelect: updatePreview,
            load: updatePreview,
            aspectRatio: xsize / ysize
         }, function () {
            // Use the API to get the real image size
            var bounds = this.getBounds();
            boundx = bounds[0];
            boundy = bounds[1];
            // Store the API in the jcrop_api variable
            jcrop_api = this;

            // Move the preview into the jcrop container for css positioning
            $preview.appendTo(jcrop_api.ui.holder);
            var defaultC = {
               h: 295,
               w: 295,
               x: 0,
               x2: 295,
               y: 4,
               y2: 299
            };
            updatePreview(defaultC);
         });

         function updatePreview(c) {
            console.log(c);
            if (parseInt(c.w) > 0) {
               var rx = xsize / c.w;
               var ry = ysize / c.h;
               $pimg.css({
                  width: Math.round(rx * boundx) + 'px',
                  height: Math.round(ry * boundy) + 'px',
                  marginLeft: '-' + Math.round(rx * c.x) + 'px',
                  marginTop: '-' + Math.round(ry * c.y) + 'px'
               });
            }
            canvas.height = 225;
            canvas.width = 300;
            //drawImage function gives error if height and width values from the source are 0, neagtive or greater then 
            //the target canvas. In our case when user clicks for the first time on the tap area then as no selected area
            //is avalable it was giving us 0 for h & w. so resetting h & w values to 300 when they are 0
            //NOTE - this issue existed is all other browsers except chrome.
            if (c.w === 0 && c.h === 0) {
               c.w = 300;
               c.h = 225;
            }

            //get its context attribute
            var context = canvas.getContext('2d');
            //what this does is for example if we are cropping an image of size 200 x 200 with x and y starting at
            //50 and 70 and we want the result image size of 100x100 pixels then call drawImage as follows
            //drawImage(image,50,70,200,200,0,0,100,100)
            context.drawImage(image, c.x, c.y, c.w, c.h, 0, 0, 300, 225);
            //record.setDirty();
         };
         /**************JCROP CODE END************/

         document.getElementById('imageCropButton').onclick = function () {
            var img = canvas.toDataURL("image/jpeg");

            //do not use window.hide() because it causes problems as window.hide does not remove the previously selected portion which was cropped. 
            window.close();
            document.getElementById('offersCropImageBox').src = img;
            parent.confirmUploadCropImage(img);
         };
      });
   },

   confirmUploadCropImage: function (img) {
      console.log(img);
      var infoForm = this.getOffersInfoForm().getForm();
      var record = infoForm.getRecord();
      var resArray = [{
         resolution: {
            height: 112,
            width: 150
         },
         aspectRatio: true
      }];
      // var index = this.getPressedButtonIndex();
      var key = record.data.key + '-crop';
      var imageData = img;

      Ext.Ajax.request({
         method: 'POST',
         url: BrandAdmin.util.Config.getImgUrl() + '/uploadImg',
         params: {
            resArray: Ext.encode(resArray),
            key: key,
            imageData: imageData,
            crop: true
         },



         scope: this,
         success: function (response) {

         },
         failure: function (response) {
            //console.log(response);
            var error = 'Something went wrong';
            if (response.status == 401) {
               if (lang == "fr") {
                  error = 'Lo sentimos, usted no está autorizado a usar este módulo.';
               }
               if (lang == "en") {
                  error = 'Sorry, You are not authorized to access this module.';
               }
            }
            Ext.example.msg('Message', error);
         }
      });

   }

});