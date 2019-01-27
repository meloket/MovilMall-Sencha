Ext.define('MobileApp.controller.SettingsController', {
   extend: 'Ext.app.Controller',

   config: {
      views: ['Settings.SettingsPanel',
         'Settings.SettingsNavigationView',
         'Settings.SettingsList',
         'Settings.SettingsProfileContainer',
         'Settings.SettingsProfileList',
         'Settings.SettingsEditProfileView',
         'Settings.SettingsProfilePointsList',
         'Settings.SettingsNotificationsList',
         'Settings.SettingsLanguageForm',
         'Settings.SettingsMovilMallView',
         'Settings.SettingsFavDataView',
         'Settings.SettingsFavProfileView',
         'Settings.SettingsOffersCommentView',
         'Settings.SettingsFollowUsContainer'
      ],
      stores: ['SettingsListStore',
         'SettingsProfileListStore',
         'SetProfileDataViewStore',
         'SettingsProfilePointsListStore',
         'CommentOverlayStore'],
      refs: {
         settingsNavigationView: 'settingsnavigationview',
         settingsSlideButton: '#settingsSlideButton',
         settingsList: 'settingslist',
         settingsProfileList: 'settingsprofilelist',
         settingsEditProfileView: 'settingseditprofileview',
         slidelist: 'slidelist',
         loginModel: 'loginmodel',
         loginNavView: 'loginNavView',
         changePassword: 'changepassword',
         settingsProfileContainer: 'settingsprofilecontainer',
         profileImage: '#profileImage',
         userProfilePic: '#userProfilePic',
         settingsLanguageForm: 'settingslanguageform',
         settingsMovilMallView: 'settingsmovilmallview',
         settingsFavDataView: '#settingsFavDataView',
         settingsFavProfileView: 'settingsfavprofileview',
         viewSettingOfferDetails: '#viewSettingOfferDetails',
         settingsViewAllCom: '#settingsViewAllCom',
         settingsOffersLink: '#settingsOffersLink',
         offersNewNavigationView: 'offersnewnavigationview',
         offersHotDealsDataView: 'offershotdealsdataview',
         settingsPanel: 'settingspanel',
         offersPanel: 'offerspanel',
         testBut: document.getElementById('settingsOffersLink'),
         settingsFllowusContainer: '#settingsFllowusContainer',
         SettingsFollowUsContainer: 'settingsfollowuscontainer'
      },

      control: {
         settingsSlideButton: {
            tap: 'onSettingsSlideButton'
         },
         settingsNavigationView: {
            push: 'onPushSettingsNav',
            pop: 'onPopSettingsNav'
         },
         settingsList: {
            itemtap: 'onTapSettingsList',
            swipe: 'onSwipeSettingList',
            tap: 'onTapSettList',
            painted: 'onPaintSettingsList'
         },
         settingsProfileList: {
            itemtap: 'onTapProfileList'
         },
         'settingseditprofileview #save': {
            tap: 'onSaveEditProfile'
         },
         'changepassword [action=changepass]': {
            tap: 'onSaveChangePass'
         },
         userProfilePic: {
            itemsingletap: 'imageChange'
         },
         'settingslanguageform #english': {
            check: 'onLanChange'
         },
         'settingslanguageform #spanish': {
            check: 'onLanChange'
         },
         settingsFavDataView: {
            itemsingletap: 'onSelectFavOffer'
         },
         'settingsfavprofileview #offerLikeFlatBut': {
            tap: 'onLikeOffer'
         },
         viewSettingOfferDetails: {
            tap: 'onTapSettingOfferDetail'
         },
         settingsViewAllCom: {
            tap: 'onSettingsViewComm'
         },
         'settingsfavprofileview #offersShareBut': {
            tap: 'onOffersShare'
         },
         'settingsfavprofileview #locatStoreButton': {
            tap: 'onTapLocateStore'
         },
         settingsFllowusContainer: {
            tap: 'onTapSocials'
         }
      }
   },

   init: function () {
      this.from;
      this.lang;
   },
   onPaintSettingsList: function () {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getSettingsNavigationView().getNavigationBar().setTitle("Configuración");
      } else {
         this.getSettingsNavigationView().getNavigationBar().setTitle("Configuration");
      }
   },

   imageChange: function () {
      var image = document.getElementById('profilePic');
       console.log(image);
      var values = this.getSettingsEditProfileView().down('formpanel').getValues();
      var rimg;

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

      navigator.notification.confirm(
         '', // message
         function (buttonIndex)  // callback to invoke with index of button pressed
         {
            onConfirm(buttonIndex);
         },
         'Foto de Perfil', // title
         //  'Choose Existing, Take a Picture'          // buttonLabels
         'Escoje una,Toma una foto'
      );

      function onConfirm(buttonIndex) {
         if (buttonIndex == 1) {
            navigator.camera.getPicture(onSuccess, onFail, {
               quality: 50,
               correctOrientation: true,
               destinationType: Camera.DestinationType.DATA_URL,
               sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            });
         }

         if (buttonIndex == 2) {
            navigator.camera.getPicture(onSuccess, onFail, {
               quality: 50,
               correctOrientation: true,
               destinationType: Camera.DestinationType.DATA_URL,
               sourceType: Camera.PictureSourceType.CAMERA
            });
         }
      }

      function onFail(message) {
         console.log(message);
      }


      function onSuccess(imageData) {
         image.onload = compress;
         image.src = "data:image/jpeg;base64," + imageData;
         //compress(image, afterCallBack);
      }

      function afterCallBack() {
         var store = Ext.getStore('LoginStore').data.items[0].data;
         var sqlStore = Ext.getStore('LoginSqlStore').data.items[0].data;
         var userId = store.key;

         var params = {
            userId: userId,
            name: values.name,
            dob: values.dob,
            email: values.email,
            cityId: values.cityId,
            stateId: values.stateId,
            photo: rimg.src
         };
         Ext.Ajax.request({
            url: MobileApp.util.Config.getBaseUrl() + '/User/UpdateUser',
            method: 'PUT',

            params: params,
            success: function (response) {
               var result = Ext.JSON.decode(response.responseText);
               document.getElementById("prflContainerPic").src = result.photo;
               document.getElementById("userImage").src = result.photo;
               store.photo = result.photo;
               sqlStore.photo = result.photo;
               sqlStore.load();

            }
         });
      }

   },

   onSaveEditProfile: function () {
      var values = this.getSettingsEditProfileView().down('formpanel').getValues();
      //var img = this.getSettingsEditProfileView().down('#profilePic');
      var store = Ext.getStore('LoginStore').data.items[0].data;
      var userId = store.key;
      var storeData = store;
      var image = document.getElementById('profilePic');
      //IF PROFILE POC NOT GIVEN THEN WE SEND NULL TO IMAGE PARAMETER
      var img;
      if (image == null) {
         img = null;
      } else {
         img = image.src;
      }
      if (storeData.name != values.name || storeData.dob != values.dob || storeData.cityId != values.cityId || storeData.stateId != values.stateId) {

         var params = {
            userId: userId,
            name: values.name,
            dob: values.dob,
            email: values.email,
            cityId: values.cityId,
            stateId: values.stateId,
            photo: img
         };


         Ext.Ajax.request({
            url: MobileApp.util.Config.getBaseUrl() + '/User/UpdateUser',
            method: 'PUT',
            scope: this,
            params: params,
            success: function (response) {
               // myMask.hide();

               var result = Ext.JSON.decode(response.responseText);
               if (result) {
                  //  var val = this.getSettingsEditProfileView().down('formpanel').setValues(result);
                  this.getSettingsNavigationView().pop(1);
                  var loginStore = Ext.getStore('LoginStore');
                  loginStore.data.items[0].data.name = result.name;

                  var cityName = this.getSettingsEditProfileView().down('#cityCombo').getRecord().data;
                  var stateCombo = this.getSettingsEditProfileView().down('#StateCombo').getRecord().data;

                  loginStore.data.items[0].data.stateName = stateCombo.name;
                  loginStore.data.items[0].data.cityName = cityName.name;
                  loginStore.data.items[0].data.stateId = stateCombo.key;
                  loginStore.data.items[0].data.cityId = cityName.key;

                  if (result.dob != null) {
                     var date = result.dob;
                     //  console.log(date);
                     //   var fullDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                     var fullDate = date.split("T")[0];
                     var dateR = fullDate.split("-")[2];
                     var monthR = fullDate.split("-")[1];
                     var yearR = fullDate.split("-")[0];
                     var newDate = dateR + '/' + monthR + '/' + yearR;
                     result.dob = newDate;
                     loginStore.data.items[0].data.dob = newDate;
                  }

                  this.getSettingsProfileContainer().down('#profileContainer').refresh();
               }


            }
         });
      } else {
         return;
      }

   },

   onTapSettList: function (touch) {
      if (touch.target.childNodes.length == 9) {
         this.getApplication().getController('OffersController').setSliderIn();
      }
   },

   onSwipeSettingList: function (event) {
      if (event.direction == "left") {
         var me = this,
             mainEl = me.getSlidelist().element;
         if (mainEl.hasCls('out')) {
            mainEl.removeCls('out').addCls('in');
         }
      }
   },

   onSettingsSlideButton: function () {
      this.getApplication().getController('MainController').toggleNav();

   },

   onPushSettingsNav: function () {
      this.hideSettingsSlideButton();
   },

   onPopSettingsNav: function (view, item) {
      if (view.getActiveItem().xtype == "settingslist") {
         this.showSettingsSlideButton();
      }
   },

   hideSettingsSlideButton: function () {
      var settingsSlideButton = this.getSettingsSlideButton();
      if (settingsSlideButton.isHidden()) {
         return;
      }
      settingsSlideButton.hide();
   },

   showSettingsSlideButton: function () {
      var settingsSlideButton = this.getSettingsSlideButton();
      settingsSlideButton.show();
   },

   onTapSettingsList: function (view, index) {
      var slider = this.getApplication().getController('OffersController').setSliderIn();
      if (slider != false) {
         if (index == 0) {
            this.onTapProfile();
         }

         /* if (index == 1)
         {
            this.onTapNotifications();
         }*/

         if (index == 1) {
            this.onTapEnglish();
         }

         if (index == 2) {
            this.onTapMovilMall();
         }
         if (index == 3) {
            this.onTapDownLoadOthers();
         }
         if (index == 6) {
            this.onTapLogout();
         }
         if (index == 4) {
            this.onTapShare();
         }
         if (index == 5) {
            this.onTapFollowUs();
         }
      }
   },
   
   onSkipLoginCheck: function () {

      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         var language = this.getApplication().getController('SettingsController').lang;

         if (language == "fr") {
            Ext.Msg.confirm('Confirmar', 'Para editar su perfil, primero tiene que crear uno. ¿Desea hacerlo ya?', function (btn) {
               if (btn == "yes") {
                  window.location.reload();
               } else {

                  return false;
               }
            });

         }
         else {
            Ext.Msg.confirm('Confirm', 'To edit your profile, you must first create one. Do you want to do now?', function (btn) {
               if (btn == "yes") {
                  window.location.reload();
               } else {
                  return false;
               }
            });

         }
      }
   },

   onTapProfile: function () {
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         this.onSkipLoginCheck();
      } else {
         if (!this.profileContainer) {
            this.profileContainer = Ext.create('MobileApp.view.Settings.SettingsProfileContainer');
         }
         var language = this.getApplication().getController('SettingsController').lang;

         if (language == "en") {
            this.profileContainer.setTitle("Profile");
         }


         this.getSettingsNavigationView().push(this.profileContainer);
      }
   },

   onTapNotifications: function () {
      if (!this.notifiList) {
         this.notifiList = Ext.create('MobileApp.view.Settings.SettingsNotificationsList');
      }

      this.getSettingsNavigationView().push(this.notifiList);
   },

   onTapEnglish: function () {
      if (!this.languageForm) {
         this.languageForm = Ext.create('MobileApp.view.Settings.SettingsLanguageForm');
      }
      var language = this.getApplication().getController('SettingsController').lang;

      if (language == "en") {
         this.languageForm.setTitle("Language");
      }


      this.getSettingsNavigationView().push(this.languageForm);
      if (this.lang == "en") {
         this.languageForm.down('#english').setChecked(true);
      }
      console.log(this.lang);
   },

   onTapDownLoadOthers: function () {
      var link = "www.dynamiczolutions.com/apps";
      window.open("http://" + link, '_system');
   },

   onTapProfileList: function (view, index) {


      if (index == 0) {
         this.onTapEditProfile();
      }

      if (index == 1) {
         this.onTapPoints();
      }
      if (index == 2) {
         this.onTapFavourites();
      }
      if (index == 3) {
         this.onTapChangePass();
      }

   },

   loadStore: function (store, params) {

      store.load({
         scope: this,
         params: params,

         callback: function (response, operation, success) {
            if (success != true) {
               //Ext.Viewport.setMasked(false);
               if (response) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401) {
                     error = 'Lo sentimos, usted no está autorizado a usar este módulo.';



                  }
                  Ext.example.msg('Message', error);
               }
            } else {
               this.getApplication().getController('OffersController').showDateFormat(response);

               var likeView = this.getSettingsFavDataView();
               if (likeView) {
                  likeView.refresh();
               }


            }
         }
      });
   },

   onTapFavourites: function () {

      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0) {
         if (!this.settingsFavDataView) {
            this.settingsFavDataView = Ext.create('MobileApp.view.Settings.SettingsFavDataView');
         }
         var lang = this.getApplication().getController('SettingsController').lang;
         if (lang == "fr") {
            this.settingsFavDataView.setTitle("Gustos");
         } else {
            this.settingsFavDataView.setTitle("Favorites");
         }


         this.getSettingsNavigationView().push(this.settingsFavDataView);
         var loginStore = Ext.getStore('LoginStore').data.items[0].data;
         var likedOffers = loginStore.offersLiked;
         var params =
            {
               offers: likedOffers
            };
         var likeStore = Ext.getStore('OffersLikesDataViewStore');
         this.from = 'likes';
         if (!this.OffersLikesDVSql || this.changeLikdedOffers) {
            this.loadStore(likeStore, params);
            this.changeLikdedOffers = false;
         }

         //CLICK EVENT OF BUTTON IN EMPTYTEXT WHICH REDIRECTS TO OFFERS NAVIGATION VIEW
         var me = this;
         document.getElementById('settingsOffersLink').onclick = function () {
            me.getApplication().getController('MainController').onInitMainTabContainer();
            me.getSettingsNavigationView().pop(2);

         };
      }
   },

   onSettingsViewComm: function () {

      if (!this.settingsCommentView) {
         this.settingsCommentView = Ext.create('MobileApp.view.Settings.SettingsOffersCommentView');
      }

      var navView = this.getSettingsFavProfileView().getParent();
      navView.push(this.settingsCommentView);
   },

   onOffersShare: function () {
      var record = this.getSettingsFavProfileView().getRecord();
      //  window.plugins.socialsharing.share("" + "Hi, download the application and looking MovilMall supply" + "" + record.data.tagLine + "" + "of" + "" + record.data.brandName, null, record.data.img, null);

      window.plugins.socialsharing.share("" + "Hola, descarga la aplicación MovilMall y busca la oferta" + "" + record.data.tagLine + "" + "de" + "" + record.data.brandName, null, record.data.img, null);

   },

   onTapLocateStore: function () {
      var parentRecord = this.getSettingsFavProfileView().getRecord();
      var location = parentRecord.data.locations;

      if (!this.locateStoresList) {
         this.locateStoresList = Ext.create('MobileApp.view.Offers.OffersLocateStoresList');
      }

      var store = Ext.getStore('OffersLocateStoresListStore');
      var params = {
         locations: location
      };
      this.from = 'locStore';
      this.getApplication().getController('OffersController').locateStoreLoad(store, params);
      var navView = this.getSettingsFavProfileView().getParent();
      navView.push(this.locateStoresList);

   },

   onSelectFavOffer: function (view, index, ctx, record) {
      var slider = this.getApplication().getController('OffersController').setSliderIn();
      if (slider != false) {
         if (!this.settingsFavProfileView) {
            this.settingsFavProfileView = Ext.create('MobileApp.view.Settings.SettingsFavProfileView');
         }
         this.settingsFavProfileView.setTitle(record.data.brandName);
         this.getSettingsNavigationView().push(this.settingsFavProfileView);
         this.setProfileView(record);
      }
   },

   onLikeOffer: function (button) {
      var parentRecord = this.getSettingsFavProfileView().getParent().getActiveItem().getRecord();
      var offerId = parentRecord.data.key;

      var likeValue = parentRecord.data.likeCount;
      // var offersLike = document.getElementById('offersLikeHTML');
      //offersLike.innerHTML = record.data.likeCount;
      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      var userId = loginStore.key;
      var offersLikedArray = loginStore.offersLiked;
      var alreadyLikedOrNot = offersLikedArray.indexOf(offerId);
      var toggled;


      if (alreadyLikedOrNot != -1)  //already liked
      {
         button.setIconCls('likeOfferIcon');
         toggled = false;
         parentRecord.data.likeCount = parseInt(likeValue) - 1;
         //   this.onLikeViewRefresh(parseInt(likeValue) - 1);
         loginStore.offersLiked.pop(offerId);

      } else {

         button.setIconCls('likeOfferIcon2');
         this.from = 'likes';
         toggled = true;
         parentRecord.data.likeCount = parseInt(likeValue) + 1;
         loginStore.offersLiked.push(offerId);
         //   this.onLikeViewRefresh(parseInt(likeValue) + 1);

      }

      Ext.Ajax.request({
         method: 'POST',
         url: MobileApp.util.Config.getBaseUrl() + '/UserOffer/LikeOffer',
         scope: this,
         params: {
            offerId: offerId,
            userId: userId,
            toggled: toggled
         },
         success: function (response) {
            var result = Ext.JSON.decode(response.responseText);
            if (result) {
               this.changeLikdedOffers = true;
            }
         },
         failure: function (response) {
            var error = 'Something went wrong';
            if (response.status == 401) {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.Msg.alert('', error);
            if (toggled == false) {
               button.setIconCls('likeOfferIcon');
               //button.setText('Como Oferta');
               parentRecord.data.likeCount = parseInt(likeValue) - 1;
               this.onLikeViewRefresh(parseInt(likeValue) - 1);
               loginStore.offersLiked.pop(offerId);
            } else {
               button.setIconCls('likeOfferIcon2');
               //button.setText('Aversión Oferta');
               parentRecord.data.likeCount = parseInt(likeValue) + 1;
               this.onLikeViewRefresh(parseInt(likeValue) + 1);
               loginStore.offersLiked.push(offerId);
            }
         }
      });
   },

   onTapSettingOfferDetail: function (element) {
      var parentRecord = this.getSettingsFavProfileView().getRecord();
      var finePrint = parentRecord.data.finePrint;
      if (!this.settingsOffersDetailsView) {
         this.settingsOffersDetailsView = Ext.create('MobileApp.view.Offers.OffersOffDetailsView');
      }
      var navView = this.getSettingsFavProfileView().getParent();
      navView.push(this.settingsOffersDetailsView);
      //this.offersDetailsView.down('#finePrintText').setHtml(finePrint);
      var finePrint1 = document.getElementById('offerdetailsfinePrint');
      finePrint1.innerHTML = finePrint;

   },

   setProfileView: function (record) {
      var img = record.data.img;
      var logo = record.data.profileImage;

      if (record.data.img == "data:,") {
         this.settingsFavProfileView.down('#profImg').setSrc("./resources/icons/nw-icons/bg.jpg");
      } else {
         this.settingsFavProfileView.down('#profImg').setSrc(img);
      }
      if (record.data.profileImage == "" || record.data.profileImage == null || record.data.profileImage == undefined) {
         this.settingsFavProfileView.down('#offerBrandLogo').hide();
      } else {
         this.settingsFavProfileView.down('#offerBrandLogo').show();
         this.settingsFavProfileView.down('#offerBrandLogo').setSrc(logo);
      }

      var validTo = document.getElementById('settingValidTo');
      validTo.innerHTML = 'Expira ' + record.data.validTo;

      var tagLine = document.getElementById('settingsOfferTagLine');
      tagLine.innerHTML = record.data.tagLine;

      var finePrint = document.getElementById('settingsOfferFinePrint');
      finePrint.innerHTML = record.data.finePrint;


      var moreDetails = document.getElementById('settingsOffDetBut');
      this.settingsFavProfileView.setRecord(record);
      this.settingsFavProfileView.setTitle(record.data.brandName);

      //for comments
      var commentsStore = Ext.getStore('OffersCommentDataViewStore');
      var params = {
         offerId: record.data.key
      };
      this.loadStore(commentsStore, params);


      //for likes
      var loginStore = Ext.getStore('LoginStore').data.items[0].data;

      var offersLikedArray = loginStore.offersLiked;
      var alreadyLikedOrNot = offersLikedArray.indexOf(record.data.key);
      if (!this.settingsFavProfileView) {
         this.settingsFavProfileView = Ext.create('MobileApp.view.Settings.SettingsFavProfileView');
      }
      //var likeImage = document.getElementById('offersLikeImage');
      var likeBut = this.getSettingsFavProfileView().down('#offerLikeFlatBut');
      if (alreadyLikedOrNot != -1)  //already liked
      {
         likeBut.setIconCls('likeOfferIcon2');
         //likeBut.setText('Aversión Oferta');
      } else {
         likeBut.setIconCls('likeOfferIcon');
         //likeBut.setText('Como Oferta');
      }
   },

   onTapChangePass: function () {
      if (!this.changepassword) {
         this.changepassword = Ext.create('MobileApp.view.ChangePassword');
      }
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.changepassword.setTitle("Cambiar la Contraseña");
      } else {
         this.changepassword.setTitle("Change Password");
      }

      this.getSettingsNavigationView().push(this.changepassword);
      this.getChangePassword().down('formpanel').reset();

   },

   onSaveChangePass: function () {
      var language = this.lang;
      var values = this.getChangePassword().down('formpanel').getValues();
      // console.log(values);

      if (!values.newPass) {
         if (language == "fr") {
            Ext.Msg.alert('', 'Por favor, Rellene nueva Contraseña.');
         } else {
            Ext.Msg.alert('', 'Please fill new password.');
         }
         return;
      }
      if (values.newPass != values.confirmPass) {
         if (language == "fr") {
            Ext.Msg.alert('', 'Por favor, Confirme su Contraseña.');
         } else {
            Ext.Msg.alert('', 'Please confirm your password.');
         }


         return;
      }
      Ext.Ajax.request({
         url: MobileApp.util.Config.getBaseUrl() + '/User/ChangePassword',
         method: 'POST',
         scope: this,
         params: {
            oldPass: values.oldPass,
            newPass: values.newPass
         },
         success: function (response) {
            // console.log(response);
            var result = Ext.JSON.decode(response.responseText);
            var valid = result.msg;

            if (valid == 'oldPwdIncorrect') {
               if (language == "fr") {
                  Ext.Msg.alert('', 'Contraseña anterior es incorrecta.');
                  return;
               } else {
                  Ext.Msg.alert('', 'Old password is incorrect.');
                  return;
               }
            }
            if (valid == 'pwdChanged') {
               if (language == "fr") {
                  Ext.Msg.alert('', 'Contraseña cambiada con éxito', function (btn) {
                     if (btn == 'ok') {
                        this.getSettingsNavigationView().pop(1);
                     }
                  }, this);
               } else {
                  Ext.Msg.alert('', 'Password successfully changed.', function (btn) {
                     if (btn == 'ok') {
                        this.getSettingsNavigationView().pop(1);
                     }
                  }, this);
               }
               
               var db = openDatabase("Sencha", "", "Sencha", 200000);
               db.transaction(function (e) {
                  e.executeSql('DELETE FROM LoginModel', [], function () {
                     window.location.reload();
                  }, function (tx, error) {
                  });
               });
            }
         }
      });


   },

   onTapEditProfile: function () {
      if (!this.editProfile) {
         this.editProfile = Ext.create('MobileApp.view.Settings.SettingsEditProfileView');
      }
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.editProfile.setTitle("Editar");
      } else {
         this.editProfile.setTitle("Edit");
      }

      this.getSettingsNavigationView().push(this.editProfile);
      var values = this.getSettingsEditProfileView().down('formpanel').getValues();
      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      if (loginStore.dob != null) {
         if (loginStore.dob.getTime == null) {
            loginStore.dob = loginStore.dob.split("/")[1] + "/" + loginStore.dob.split("/")[0] + "/" + loginStore.dob.split("/")[2];
            loginStore.dob = new Date(loginStore.dob);
         }
      }
      if (values.name != "") {
         loginStore.name = values.name;
      }
      if (values.dob != null) {
         loginStore.dob = values.dob;
      }
      /* if (values.stateId != "")
      {
         loginStore.stateId = values.stateId;
      }
      if (values.cityId != "")
      {
         loginStore.cityId = values.cityId;

      }*/
      this.getSettingsEditProfileView().down('formpanel').setValues(loginStore);
      /* var d = this.getSettingsEditProfileView().down('#ddd');
       var f = document.getElementById('profilePic');
       console.log(f);*/
      /*  var image = Ext.getCmp('profileImage');
   
      if (loginStore.photo != "data:image/jpeg;base64,")
      {
         image.setSrc(/*"data:image/jpeg;base64," + #1#loginStore.photo);
      } else
      {
         image.setSrc("resources/images/NoData.png");
      }*/

   },

   onTapPoints: function () {
      if (!this.pointsList) {
         this.pointsList = Ext.create('MobileApp.view.Settings.SettingsProfilePointsList');
      }
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getOffersNewNavigationView().getNavigationBar().setTitle("Puntos");
      } else {
         this.getOffersNewNavigationView().getNavigationBar().setTitle("Points");
      }
      this.getSettingsNavigationView().push(this.pointsList);
      var store = Ext.getStore('SettingsProfilePointsListStore');
      this.getApplication().getController('QRController').loadQRScannerStore(store);
   },

   onTapLogout: function () {
      Ext.Ajax.request({
         method: 'GET',
         url: MobileApp.util.Config.getBaseUrl() + '/logout',
         scope: this,
         headers: { 'Content-Type': 'application/json' },

         success: function (response) {
            var result = Ext.JSON.decode(response.responseText);
            //console.log(result);
            var valid = result.success;
            //console.log(valid);

            if (valid == 'false') {
               Ext.example.msg('Message', result.message);
            } else {
               var db = openDatabase("Sencha", "", "Sencha", 200000);
               db.transaction(function (e) {
                  e.executeSql('DELETE FROM LoginModel', [], function () {
                     window.location.reload();
                  }, function (tx, error) {
                  });
               });
            }
         }
      });
   },

   onTapMovilMall: function () {
      if (!this.settingsMovilMallView) {
         this.settingsMovilMallView = Ext.create('MobileApp.view.Settings.SettingsMovilMallView');
      }
      this.getSettingsNavigationView().push(this.settingsMovilMallView);
   },

   onLanChange: function (value) {
      this.lang = value.getValue();
      var val = value.getValue();
      this.setStore(val);
      Ux.locale.Manager.updateLocale(val);

      var loginSqlStore = Ext.getStore('LoginSqlStore');
      if (loginSqlStore.data.items != 0) {
         loginSqlStore.data.items[0].set('lang', this.lang);
         loginSqlStore.sync();
      }
   },

   setStore: function (value) {
      var settingsListStore = Ext.getStore('SettingsListStore');
      var slideListStore = Ext.getStore('SlideListStore');
      var placesListStore = Ext.getStore('PlacesListStore');
      var offersSearchListStore = Ext.getStore('OffersSearchListStore');
      var settingsProfileListStore = Ext.getStore('SettingsProfileListStore');
      var commentOverlayStore = Ext.getStore('CommentOverlayStore');
      var eventsListSqlStore = Ext.getStore('EventsListSqlStore');
      var myEventsListSqlStore = Ext.getStore('MyEventsListSqlStore');

      for (var i = 0; i < settingsListStore.data.items.length; i++) {
         settingsListStore.data.items[i].set('lang', value);
      }

      for (var i = 0; i < slideListStore.data.items.length; i++) {
         slideListStore.data.items[i].set('lang', value);
      }

      for (var i = 0; i < offersSearchListStore.data.items.length; i++) {
         offersSearchListStore.data.items[i].set('lang', value);
      }

      for (var i = 0; i < placesListStore.data.items.length; i++) {
         placesListStore.data.items[i].set('lang', value);
      }
      for (var i = 0; i < settingsProfileListStore.data.items.length; i++) {
         settingsProfileListStore.data.items[i].set('lang', value);
      }
      for (var i = 0; i < commentOverlayStore.data.items.length; i++) {
         commentOverlayStore.data.items[i].set('lang', value);

      }
      for (var i = 0; i < eventsListSqlStore.getCount() ; i++) {
         eventsListSqlStore.data.items[i].set('lang', value);
      }

      for (var i = 0; i < myEventsListSqlStore.getCount() ; i++) {
         myEventsListSqlStore.data.items[i].set('lang', value);
      }

   },

   onTapShare: function () {
      window.plugins.socialsharing.share("" + "Hola, descarga la aplicación MovilMall y empieza a ahorrar en todas tus tiendas. Descárgala ya link to app this may vary on android and iphone" + "" + "http://www.Movil-Mall.com");

   },

   onTapFollowUs: function () {
      if (!this.followUsContainer) {
         this.followUsContainer = Ext.create('MobileApp.view.Settings.SettingsFollowUsContainer');
      }
      var language = this.getApplication().getController('SettingsController').lang;

      if (language == "en") {
         this.getSettingsFollowUsContainer().setTitle("Follow Us");
      }

      this.getSettingsNavigationView().push(this.followUsContainer);
   },

   onTapSocials: function (touch) {
      if (touch.target.id == "settingsFb") {
         var url = "https://www.facebook.com/movilmallpty";
         window.open(url, '_system');
      }

      if (touch.target.id == "settingsGp") {
         var url = "https://plus.google.com/u/0/114211389249248915296/posts";
         window.open(url, '_system');
      }

      if (touch.target.id == "settingsTwi") {
         var url = "https://twitter.com/Movil_Mall";
         window.open(url, '_system');
      }

      if (touch.target.id == "settingsYt") {
         var url = "https://www.youtube.com/channel/UCaL9EYUS4yDoNWLuqfpodqg";
         window.open(url, '_system');
      }

      if (touch.target.id == "settingsPin") {
         var url = "http://www.pinterest.com/movilm/";
         window.open(url, '_system');
      }

      if (touch.target.id == "settingsIg") {
         var url = "http://instagram.com/movil_mall";
         window.open(url, '_system');
      }
      
      if (touch.target.id == "privacyLink") {
         var privacyLink = "movil-mall.com/privacidad.html";
         window.open("http://" + privacyLink, '_system');
      }
      if (touch.target.id == "terms&ServiceLink") {
         var termsServiceLink = "movil-mall.com/condiciones.html";
         window.open("http://" + termsServiceLink, '_system');
      }

   }
});