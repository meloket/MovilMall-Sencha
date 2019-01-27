Ext.define('MobileApp.controller.ParkingController', {
   extend: 'Ext.app.Controller',

   config: {
      views: ['Parking.ParkingNavigationView',
         'Parking.ParkingPanel',
         'Parking.ParkingContainer',
         'Parking.ParkingMapView',
         'Parking.ParkingNoteView',
         'Parking.ParkingImageView',
         'Parking.ParkingAudioView',
         'Parking.ParkingAudioList'
      ],
      models: ['ParkingLatLongSqlModel', 'ParkingPhotoSqlModel', 'ParkingNoteSqlModel', 'ParkingAudioSqlModel'],
      stores: ['ParkingLatLongSqlStore', 'ParkingPhotoSqlStore', 'ParkingNoteSqlStore',
         'ParkingTempPhotoStore', 'ParkingAudioSqlStore'],
      refs: {
         pinMapDataView: '#pinMapDataView',
         takePhotoDataview: '#takePhotoDataview',
         makeNoteDataView: '#makeNoteDataView',
         parkingNoteView: 'parkingnoteview',
         parkingImageView: 'parkingimageview',
         parkingAudioView: 'parkingaudioview',
         parkingAudioList: 'parkingaudiolist',
         parkingMapView: 'parkingmapview',
         parkingSlideButton: '#parkingSlideButton',
         parkingNavigationView: 'parkingnavigationview',
         doneMap: '#doneMap',
         slidelist: 'slidelist',
         parkingContainer: 'parkingcontainer',
         viewBlocks: '#viewBlocks',
         parkingPhotoDataView: '#parkingPhotoDataView'
      },

      control: {
         viewBlocks: {
            tap: 'onTapViewBlocks'
            //tap: 'onTapPinOnMapDataView'
         },
         /* takePhotoDataview: {
            itemsingletap: 'onTapTakePhotoDataView'
         },
         makeNoteDataView: {
            itemsingletap: 'onTapMakeNoteDataView'
         },*/
         parkingSlideButton: {
            tap: 'onTapParkingSlideButton'
         },
         parkingNavigationView: {
            push: 'onPushParkingNav',
            pop: 'onPopParkingNav'
         },
         doneMap: {
            tap: 'onTapDoneMap'
         },
         parkingcontainer: {
            swipe: 'onSwipeParking',
            tap: 'onTapParkingContainer',
            painted: 'onPaintParkingView'
         },

         'parkingmapview #locateMe': {
            tap: 'onTapLocateMe'
         },

         'parkingmapview #saveLoc': {
            tap: 'onTapSaveLoc'
         },
         'parkingnoteview #saveNote': {
            tap: 'onTapSaveNote'
         },
         'parkingimageview #changePhoto': {
            tap: 'onTakePhoto'
         },
         'parkingimageview #done': {
            tap: 'onTapDonePhotoView'
         },
         'parkingaudioview #new': {
            tap: 'onTapNewAudio'
         },
         'parkingaudioview #stop': {
            tap: 'onTapStopAudio'
         },
         parkingAudioList: {
            itemtap: 'onTapParkingAudioList'
         },
         'parkingaudioview #stopRecording': {
            tap: 'onTapStopRecordingAudio'
         }
      }
   },

   init: function () {
      this.lat;
      this.longi;
      this.track;
      this.recording;
      this.recIn;

   },

   onPaintParkingView: function () {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getParkingNavigationView().getNavigationBar().setTitle("Guía de Parqueo");
      } else {
         this.getParkingNavigationView().getNavigationBar().setTitle("Parking Guide");
      }
   },

   onTapSaveNote: function () {
      var me = this;
      var direction = this.getParkingNoteView().down('#direction').getValue();

      var store = Ext.getStore('ParkingNoteSqlStore');
      me.model = Ext.create('MobileApp.model.ParkingNoteSqlModel');

      var proxyStoreString = store.getInitialConfig().storeId;
      var db = openDatabase("Sencha", "", "Sencha", 200000);
      db.transaction(function (e) {
         e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function () {
         }, function (tx, error) {
         });
      });
      store.removeAll();
      me.model.data.direction = direction;
      store.add(me.model);
      store.sync();
      /* if (direction != "")
      {
         document.getElementById('noteText').innerHTML = "Note ya está guardado.";
      } else
      {
         document.getElementById('noteText').innerHTML = "Escribir una Nota";
      }*/
      this.getParkingNavigationView().pop();
   },

   onTapViewBlocks: function (element) {
      if (element.target.id == "pinMapDataView") {
         this.onTapPinOnMapDataView();
      }
      if (element.target.id == "takePhotoDataview") {
         this.onTapTakePhotoDataView();
      }
      if (element.target.id == "makeNoteDataView") {
         this.onTapMakeNoteDataView();
      }
      if (element.target.id == "takeAudio") {
         this.onTapAudio();
      }


   },

   //play audio
   onTapParkingAudioList: function (view, index, list, record, touch) {
      var me = this;
      if (touch.target.id == "audioCross") {
         var store = Ext.getStore('ParkingAudioSqlStore');
         this.model = Ext.create('MobileApp.model.ParkingAudioSqlModel');

         var proxyStoreString = store.getInitialConfig().storeId;
         var db = openDatabase("Sencha", "", "Sencha", 200000);
         db.transaction(function (e) {
            e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function () {
            }, function (tx, error) {
            });
         });
         store.removeAll();
         this.getParkingAudioView().down('#stopRecording').hide();
         me.getParkingAudioView().down('#stop').hide();
      }

      //document.addEventListener("deviceready", onDeviceReady, false);

      //function onDeviceReady()
      // {
      var audioStore = Ext.getStore('ParkingAudioSqlStore').data.items;
      if (audioStore.length != 0) {
         var src = audioStore[0].data.recording;
         playAudio(src);
      }
      // }

      var my_media = null;

      function playAudio(src) {

         if (my_media == null) {

            my_media = new Media(src, onSuccess, onError);
         }
         my_media.play();
         document.getElementById('audio_position').innerHTML = "";
         me.track = my_media;

         me.getParkingAudioView().down('#stop').show();


      }

      function setAudioPosition(position) {
         document.getElementById('audio_position').innerHTML = position;
      }

      function onSuccess() {

         var duration = me.track.getDuration();


         for (var i = 0; i < Math.ceil(duration) ; i++) {
            me.getParkingAudioView().down('#stop').show();
         }
         me.getParkingAudioView().down('#stop').hide();
         /* for(var i=0;i>=Math.ceil(duration);i++) 
             {
               console.log(i);
                 me.getParkingAudioView().down('#stop').hide();
             }*/
         //  me.getParkingAudioView().down('#stop').hide();
         //  alert("playAudio():Audio Success");
      }

      function onError(error) {
         console.log(error);
         /* alert('code: ' + error.code + '\n' +
               'message: ' + error.message + '\n');*/
      }


   },

   onTapNewAudio: function () {
      /*var me = this;
      if (Ext.getStore('ParkingAudioSqlStore').data.items.length != 0) {
         console.log(Ext.getStore('ParkingAudioSqlStore').data.items[0].data.recording);
      }
      var captureSuccess = function (mediaFiles) {

         var i, path, len;
         for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;

            var store = Ext.getStore('ParkingAudioSqlStore');
            me.model = Ext.create('MobileApp.model.ParkingAudioSqlModel');
            var f = path.split("/");

            path = "/" + f[(f.length) - 2] + "/" + f[(f.length) - 1];

            if (path.indexOf("%20") != -1) {
               path = path.replace("%20", " ");
            }

            var proxyStoreString = store.getInitialConfig().storeId;
            var db = openDatabase("Sencha", "", "Sencha", 200000);
            db.transaction(function (e) {
               e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function () {
               }, function (tx, error) {
               });
            });
            store.removeAll();
            me.model.data.recording = path;

            store.add(me.model);
            store.sync();

         }
      };


      var captureError = function (error) {
         navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
      };

      navigator.device.capture.captureAudio(captureSuccess, captureError, { limit: 1 });*/

      var currentDate = new Date();
      var fullDate = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      console.log(strTime);
      var displayFormat = strTime + "-" + fullDate;
      var src = displayFormat;
      var media = new Media(src);
      media.startRecord();
      var recTime = 0;
      var recInterval = setInterval(function () {
         recTime = recTime + 1;
         setAudioPosition(recTime + " sec");
      }, 1000);
      this.recIn = recInterval;
      this.recording = media;

      function setAudioPosition(position) {
         document.getElementById('audio_position').innerHTML = position;
      }

      this.getParkingAudioView().down('#stop').hide();
      this.getParkingAudioView().down('#stopRecording').show();
   },

   onTapStopRecordingAudio: function () {
      var currentDate = new Date();
      var fullDate = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      var displayFormat = strTime + "-" + fullDate;
      var src = displayFormat;
      clearInterval(this.recIn);
      console.log(this.recIn);
      this.recording.stopRecord();
      this.getParkingAudioView().down('#stopRecording').hide();

      var store = Ext.getStore('ParkingAudioSqlStore');
      this.model = Ext.create('MobileApp.model.ParkingAudioSqlModel');

      var proxyStoreString = store.getInitialConfig().storeId;
      var db = openDatabase("Sencha", "", "Sencha", 200000);
      db.transaction(function (e) {
         e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function () {
         }, function (tx, error) {
         });
      });
      store.removeAll();
      this.model.data.recording = src;

      store.add(this.model);
      store.sync();
      document.getElementById('audio_position').innerHTML = "";
   },

   onTapStopAudio: function () {
      var src = Ext.getStore('ParkingAudioSqlStore').data.items[0].data.recording;
      this.track.stop();
      this.getParkingAudioView().down('#stop').hide();

   },

   onTapAudio: function () {

      if (!this.parkingAudioView) {
         this.parkingAudioView = Ext.create('MobileApp.view.Parking.ParkingAudioView');
      }
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.parkingAudioView.setTitle("Grabar un Memo");
      } else {
         this.parkingAudioView.setTitle("Record a Memo");
      }

      this.getParkingNavigationView().push(this.parkingAudioView);
      this.getParkingAudioView().down('#stop').hide();
   },

   onTapMakeNoteDataView: function () {
      if (!this.parkingNoteView) {
         this.parkingNoteView = Ext.create('MobileApp.view.Parking.ParkingNoteView');
      }
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      var store = Ext.getStore('ParkingNoteSqlStore');

      if (skipLogin) {
         store.removeAll();
      }
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.parkingNoteView.setTitle("Escribir una Nota");
      } else {
         this.parkingNoteView.setTitle("Write a note");
      }
      this.getParkingNavigationView().push(this.parkingNoteView);
      if (store.data.items.length != 0) {
         var dir = store.data.items[0].data.direction;
         this.getParkingNoteView().down('#direction').setValue(dir);
      }

   },

   onTapTakePhotoDataView: function () {
      if (!this.parkingImageView) {
         this.parkingImageView = Ext.create('MobileApp.view.Parking.ParkingImageView');
      }
      var store = Ext.getStore('ParkingPhotoSqlStore');
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         store.removeAll();
      }

      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.parkingImageView.setTitle("Imagen");
      } else {
         this.parkingImageView.setTitle("Image");
      }
      this.getParkingNavigationView().push(this.parkingImageView);

      var tempStore = Ext.getStore('ParkingTempPhotoStore');
      if (store.data.items.length != 0) {
         tempStore.data.items[0].data.photo = store.data.items[0].data.photo;

      } /* else
      {
         this.onTakePhoto();
      }*/

   },

   onTapDonePhotoView: function () {
      this.getParkingNavigationView().pop();
   },

   onTakePhoto: function () {
      var image = document.getElementById('parkingPhoto123');
      var me = this;
      var store = Ext.getStore('ParkingPhotoSqlStore');
      me.model = Ext.create('MobileApp.model.ParkingPhotoSqlModel');
      var rimg;

      function onSuccess(imageData) {
         image.onload = compress;
         image.src = "data:image/jpeg;base64," + imageData;
      }

      function onFail(message) {
         if (store.data.items.length == 0) {
            me.getParkingNavigationView().pop(me.parkingImageView);
         }
      }

      function compress() {
         var mimeType = "image/jpeg";
         var cvs = document.createElement('canvas');
         var actualHeight = image.height;
         var actualWidth = image.width;

         var maxHeight = 300;
         var maxWidth = 300;
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

         var ctx = cvs.getContext("2d").drawImage(image, 0, 0, actualWidth, actualHeight);
         var newImageData = cvs.toDataURL(mimeType, 50 / 100);

         rimg = new Image();
         rimg.src = newImageData;
         rimg.onload = afterCallBack;
      }


      function afterCallBack() {

         var proxyStoreString = store.getInitialConfig().storeId;
         var db = openDatabase("Sencha", "", "Sencha", 200000);
         db.transaction(function (e) {
            e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function () {
            }, function (tx, error) {
            });
         });
         store.removeAll();

         me.model.data.photo = image.src;
         store.add(me.model);
         store.sync();

         image.src = store.data.items[0].data.photo;
         var tempStore = Ext.getStore('ParkingTempPhotoStore');
         tempStore.data.items[0].data.photo = store.data.items[0].data.photo;
         /*  if (store.data.items[0].data.photo != undefined)
         {
            document.getElementById('photoText').innerHTML = "Foto ya está en uso.";
         } else
         {
            document.getElementById('photoText').innerHTML = "Tomar una Foto.";
         }*/

      }


      navigator.camera.getPicture(onSuccess, onFail, {
         quality: 50,
         correctOrientation: true,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.CAMERA
      });
   },

   onTapParkingContainer: function () {
      this.getApplication().getController('OffersController').setSliderIn();
   },

   onSwipeParking: function (event) {
      if (event.direction == "left") {
         var me = this,
             mainEl = me.getSlidelist().element;
         if (mainEl.hasCls('out')) {
            mainEl.removeCls('out').addCls('in');
         }
      }
   },

   onTapPinOnMapDataView: function () {
      if (!this.parkingMapView) {
         this.parkingMapView = Ext.create('MobileApp.view.Parking.ParkingMapView');
      }
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.parkingMapView.setTitle("Pin en el Mapa");
      } else {
         //console.log(document.getElementById("doneMap").innerHtml);
         this.parkingMapView.setTitle("Pin on the Map");
      }

      this.getParkingNavigationView().push(this.parkingMapView);
      this.setMapCenter(this.parkingMapView);

   },

   onTapParkingSlideButton: function () {
      this.getApplication().getController('MainController').toggleNav();
   },

   onPushParkingNav: function (view, activeView) {

      this.hideParkingSlideButton();
   },

   onPopParkingNav: function (view, items) {
      if (view.getActiveItem().xtype == "parkingcontainer") {
         this.showParkingSlideButton();
      }
   },

   hideParkingSlideButton: function () {
      var parkingSlideButton = this.getParkingSlideButton();
      if (parkingSlideButton.isHidden()) {
         return;
      }
      parkingSlideButton.hide();
   },

   showParkingSlideButton: function () {
      var parkingSlideButton = this.getParkingSlideButton();
      parkingSlideButton.show();
   },

   onTapDoneMap: function () {
      this.getParkingNavigationView().pop();
   },

   setMapCenter: function (view) {

      // var me = this;
      var lat;
      var longitude;
      var pos;
      var store = Ext.getStore('ParkingLatLongSqlStore');
      store.load({
         scope: this,
         callback: function (records, operation, success) {
            if (store.data.items.length != 0) {
               var map = this.getParkingMapView().down('#parkingMap').getMap();
               lat = store.data.items[0].data.lat;
               longitude = store.data.items[0].data.longi;
               pos = new google.maps.LatLng(lat, longitude);
               var marker = new google.maps.Marker({
                  position: pos,
                  map: map
               });

               if (map.marker) {
                  map.marker.setMap(null);
               }
               map.marker = marker;
               marker.setMap(map);
               view.down('#parkingMap').setMapCenter(pos);
               this.onTapLocateMe();
               //view.down('#saveLoc').disable();
            } else {
               /*set lat long of panama city*/
               this.onTapLocateMe();
               //pos = new google.maps.LatLng(30.158812900000000000, -85.660205799999970000);
               //view.down('#saveLoc').disable();

            }

         }
      });

   },

   onTapLocateMe: function () {
      var language = this.getApplication().getController('SettingsController').lang;
      Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Locating You' });
      var options = {
         enableHighAccuracy: true,
         timeout: 10000,
         maximumAge: Infinity
      };

      var me = this;
      var map = this.getParkingMapView().down('#parkingMap').getMap();

      function onSuccess(position) {
         var lat = position.coords.latitude;
         me.lat = lat;

         var longitude = position.coords.longitude;
         me.longi = longitude;

         var pos = new google.maps.LatLng(lat, longitude);
         var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: 'resources/icons/nw-icons/park_locate.png',
            id: 'locate'
         });

         if (map.marker) {
            if (map.marker.id == 'locate') {
               map.marker.setMap(null);
            }
         }

         map.marker = marker;

         marker.setMap(map);
         me.getParkingMapView().down('#parkingMap').setMapCenter(pos);
         //me.getParkingMapView().down('#saveLoc').enable(true);
         Ext.Viewport.setMasked(false);
      }

      function onError(error) {
         if (language == "fr") {
            alert("No se pudo obtener su ubicación. Por favor, inténtelo de nuevo.");
         } else {
            alert("Couldn't get your location. Please try again.");
         }

         Ext.Viewport.setMasked(false);
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   },

   onTapSaveLoc: function () {

      var store = Ext.getStore('ParkingLatLongSqlStore');

      this.model = Ext.create('MobileApp.model.ParkingLatLongSqlModel');


      var lat = this.lat;
      var longitude = this.longi;
      var proxyStoreString = store.getInitialConfig().storeId;
      Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
      var db = openDatabase("Sencha", "", "Sencha", 200000);
      db.transaction(function (e) {
         e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function () {
         }, function (tx, error) {
         });
      });
      store.removeAll();

      this.model.data.lat = lat;
      this.model.data.longi = longitude;
      store.add(this.model);
      store.sync({
         scope: this,
         success: function () {
            Ext.Viewport.setMasked(false);
            //this.getParkingMapView().down('#saveLoc').disable();
            this.getParkingNavigationView().pop();
         },
         failure: function () {
            Ext.Viewport.setMasked(false);
         }
      });


   }
});