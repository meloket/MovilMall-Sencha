Ext.define('MobileApp.controller.OffersController', {
   extend: 'Ext.app.Controller',

   config: {
      views: [
         'Offers.OffersNewDataView',
         'Offers.OffersNewNavigationView',
         'Offers.OffersPanel',
         'Offers.OffersProfileView',
         'Offers.OffersAllCommentView',
         'Offers.OffersHotDealsDataView',
         'Offers.OffersHotDealsNavigationView',
         'Offers.OffersFavNavigationView',
         'Offers.OffersFavDataView',
         'Offers.OffersSearchNavigationView',
         'Offers.OffersSearchList',
         'Offers.OffersDealNearByDataView',
         'Offers.OffersProdCatList',
         'Offers.OffersProdCatDataView',
         'Offers.OffersMallsList',
         'Offers.OffersMallDataView',
         'Offers.OffersRestList',
         'Offers.OffersRestDataView',
         'Offers.OffersEntertainDataView',
         'Offers.OffersLikesDataView',
         'Offers.OffersOffDetailsView',
         'Offers.OffersLocateStoresList',
         'Offers.OffersAllCommentView',
         'CommentOverlayView',
         'Offers.OffersCouponDataView',
         'Offers.OffersLocationList'
      ],
      models: [
         'OffersHotDealsDataViewModel',
         'OffersCommentDataViewModel',
         'OffersLocateStoresListModel',
         'OffersRestListModel',
         'OffersProdCatListModel',
         'OffersSearchByNameModel',
         'OffersFavDataViewModel',
         'OffersEntertainDataViewModel',
         'OffersLikesDataViewModel',
         'OffersMallsListModel'
      ],
      stores: [
         'OffersNewDataViewStore',
         'OffersCommentDataViewStore',
         'OffersHotDealsDataViewStore',
         'OffersHotDealsDataViewSqlStore',
         'OffersFavDataViewStore',
         'OffersSearchListStore',
         'OffersDealNearByDataViewStore',
         'OffersProdCatListStore',
         'OffersProdCatDataViewStore',
         'OffersMallsListStore',
         'OffersMallDataViewStore',
         'OffersRestListStore',
         'OffersRestDataViewStore',
         'OffersEntertainDataViewStore',
         'OffersLikesDataViewStore',
         'SlideListStore',
         'OffersOffDetailsViewStore',
         'OffersLocateStoresListStore',
         'OffersProfileViewStore',
         'OffersSearchByNameStore',
         'OffersFavDataViewSqlStore',
         'OffersProdCatDataViewSqlStore',
         'OffersMallsListSqlStore',
         'OffersEntertainDataViewSqlStore',
         'OffersLikesDataViewSqlStore'
      ],
      refs: {
         placesProfileView: 'placesprofileview',
         nameLab: '#nameLab',
         placesProfImg: '#placesProfImg',
         newSlideButton: '#newSlideBut',
         hdSlideButton: '#hdSlideBut',
         favSlideButton: '#favSlideBut',
         searchSlideButton: '#searchSlideBut',
         offDetButton: '#offDetBut',
         locateStoreButton: '#locateStoreBut',
         offersNewDataView: '#offersNewDataView',
         offersProfileView: 'offersprofileview',
         offersHotDealsDataView: '#offersHotDealsDataView',
         offersFavDataView: '#offersFavDataView',
         offersDealNearByDataView: '#offersDealNearByDataView',
         offersProdCatDataView: '#offersProdCatDataView',
         offersMallDataView: '#offersMallDataView',
         offersRestDataView: '#offersRestDataView',
         offersEntertainDataView: '#offersEntertainDataView',
         offersLikesDataView: '#offersLikesDataView',
         offersNewNavigationView: 'offersnewnavigationview',
         offersHotDealsNavigationView: 'offershotdealsnavigationview',
         offersSearchNavigationView: 'offerssearchnavigationview',
         offersFavNavigationView: 'offersfavnavigationview',
         upload: '#upload',
         viewAllCom: '#fViewAllCom',
         offersSearchList: 'offerssearchlist',
         offersProdCatList: 'offersprodcatlist',
         offersMallsList: 'offersmallslist',
         offersLocationList: 'offerslocationlist',
         offersRestList: 'offersrestlist',
         profileImage: '#profImg',
         offersProfileViewStore: 'OffersProfileViewStore',
         offersLocateStoresList: 'offerslocatestoreslist',
         slidelist: 'slidelist',
         hotOfferView: '#hotOfferView',
         offersCommentDataView: '#offersCommentDataView',
         commentOverlayView: 'commentoverlayview',
         offersAllCommentDataview: 'offersallcommentview',
         commentOverlay: '#commentOverlay',
         offerComment: '#offerComment',
         viewOfferDetails: '#viewOfferDetails',
         offersPanel: '#offersPanel',

         offersHotContainer: 'offershotdealsdataview',
         offersFavContainer: 'offersfavdataview',
         offersLikeContainer: 'offerslikesdataview',
         offersNearByContainer: 'offersdealnearbydataview',
         offersNewContainer: 'offersnewdataview',
         offerProdCatList: 'offersprodcatlist',
         offerSearchList: 'offerssearchlist'
      },

      control: {
         newSlideButton: {
            tap: 'toggleNav'
         },
         hdSlideButton: {
            tap: 'toggleNav'
         },

         favSlideButton: {
            tap: 'toggleNav'
         },

         searchSlideButton: {
            tap: 'toggleNav'
         },

         viewOfferDetails: {
            tap: 'onTapOfferDetail'
         },

         locateStoreButton: {
            tap: 'onTapLocateStore'
         },

         main: {
            tap: 'onMainTap'
         },

         mainContainer: {
            initialize: 'onInitMainTabContainer'
         },
         offersNewDataView: {
            itemsingletap: 'onSelectNewDataViewImage'
         },
         offersnewdataview: {
            swipe: 'onSwipeNewDataView'
         },
         offershotdealsdataview: {
            swipe: 'onSwipeNewDataView'
         },
         offersfavdataview: {
            swipe: 'onSwipeNewDataView'
         },
         offerssearchlist: {
            swipe: 'onSwipeNewDataView'
         },
         offersHotDealsDataView: {
            itemsingletap: 'onSelectHotDealsDataViewImage'
            /*,
            initialize: 'onScrollEndOfOffersHotDataView'*/
         },
         offersFavDataView: {
            itemsingletap: 'onSelectFavDataViewImage'
         },
         offersDealNearByDataView: {
            itemsingletap: 'onSelectDealNearByDataViewImage'
         },
         offersProdCatDataView: {
            itemsingletap: 'onSelectProdCatDataViewImage'
            /*,
            initialize: 'onScrollEndOfOffersProdCatDataView'*/
         },
         offersMallDataView: {
            itemsingletap: 'onSelectMallDataViewImage'
            /*,
            initialize: 'onScrollEndOfOffersMallsDataView'*/
         },
         offersRestDataView: {
            itemsingletap: 'onSelectRestDataViewImage'
            /*,
            initialize: 'onScrollEndOfOffersRestDataView'*/
         },
         /*  offersEntertainDataView: {
            itemsingletap: 'onSelectEntertainDataViewImage',
            initialize: 'onScrollEndOfOffersEntDataView'
         },*/
         offersLikesDataView: {
            itemsingletap: 'onSelectLikesDataViewImage'
         },
         offersNewNavigationView: {
            push: 'onOffersNewNavPush',
            pop: 'onOffersNewNavPop'
         },
         offersHotDealsNavigationView: {
            push: 'onOffersHotDealsNavPush',
            pop: 'onOffersHotDealsNavPop'
         },
         offersFavNavigationView: {
            push: 'onOffersFavNavPush',
            pop: 'onOffersFavNavPop'
         },

         offersSearchNavigationView: {
            push: 'onOffersSearchNavPush',
            pop: 'onOffersSearchNavPop'
         },
         viewAllCom: {
            tap: 'onViewAllCom'
         },
         offersSearchList: {
            itemtap: 'onTapSearchList'
         },
         offersProdCatList: {
            itemtap: 'onTapProductList'
         },
         offersMallsList: {
            itemtap: 'onTapMallList'
         },
         offerslocationlist: {
            itemtap: 'onTapOffersLocationList'
         },
         offersRestList: {
            itemtap: 'onTapRestList'
         },
         /* offersLocateStoresList: {
            itemtap: 'onTapLocateStoresList'
         },*/
         offerspanel: {
            activeitemchange: 'onTabChange'
         },
         'offersprofileview #offerLikeFlatBut': {
            tap: 'onLikeOffer'
         },
         'offerspanel #postComment': {
            tap: 'onPostComment'
         },
         'offerspanel #commentsTextField': {
            keyup: 'onKeyUpCommentField',
            clearicontap: 'onClearCommentField'
         },
         'offerssearchlist #searchField': {
            keyup: 'onSearchOffer',
            clearicontap: 'OnClearText'
         },
         'offersprofileview #offersfaceBook': {
            tap: 'onTapFacebook'
         },
         'offersprofileview #offerstwitter': {
            tap: 'onTapTwitter'
         },
         'offersprofileview #offerspinterest': {
            tap: 'onTapPinterest'
         },
         'offersprofileview #offerslinkedin': {
            tap: 'onTapLinkedIn'
         },
         'offersprofileview #offersyouTube': {
            tap: 'onTapYouTube'
         },
         'offersprofileview #couponCodeBtn': {
            tap: 'onCoupanCode'
         },
         'offersprofileview #offersgoogle': {
            tap: 'onTapGoogle'
         },
         /*,
         'offerssearchlist #searchField': {
            keyup:'onSearchOffer'
         }*/
         offersCommentDataView: {
            itemtaphold: 'onTapCommemt'
         },
         'offershotdealsdataview #pull': {
            latestfetched: 'onOffersHotDataViewPull'
         },
         'offersentertaindataview #pull': {
            latestfetched: 'onOffersEntDataViewPull'
         },
         commentOverlay: {
            itemtaphold: 'onTapCommemt'
         },
         'offersprodcatdataview #pull': {
            beforePullRefresh: 'onOffersProdCatDataViewPull'
            /*,
            latestfetched: 'onAfterPullProdCatList'*/
         },
         'offersrestdataview #pull': {
            beforePullRefresh: 'onOffersRestDataViewPull',
            latestfetched: 'onAfterPull'
         },

         'offersmalldataview #pull': {
            beforePullRefresh: 'onOffersMallsDataViewPull'
            /*,
            latestfetched: 'onAfterPull'*/
         },

         offersAllCommentDataview: {
            itemtaphold: 'onTapCommemt'
         },
         commentOverlayView: {
            itemtap: 'onTapOverlay'
         },
         'offersmallslist #pull': {
            latestfetched: 'onOffersMallsListPull'
         },
         /* offersmallslist: {
            initialize: 'onScrollEndOfOffersMallsList'
         },*/
         'offersprofileview #offersShareBut': {
            tap: 'onOffersShare'
         },
         OffersNewDataView: {
            initialize: 'test'
         },

         offersHotContainer: {
            painted: 'onPaintHotDealsView'
         },
         offersFavContainer: {
            painted: 'onPainFavView'
         },
         offersNewContainer: {
            painted: 'onPaintNewView'
         },
         offersLikeContainer: {
            painted: 'onPaintLikeView'
         },
         offersNearByContainer: {
            painted: 'onPaintNearByView'
         },
         offerProdCatList: {
            painted: 'onPaintProdCat'
         },
         offerSearchList: {
            painted: 'onPaintSearchList'
         }
      }
   },

   init: function() {
      this.hotOffersSql;
      this.Record;
      this.from;
      this.offerId;
      this.commentId;
      this.dataView;
      this.favOffersSql;
      this.prodCatOffersSql;
      this.OffersMallsListSql;
      this.OffersEntListSql;
      this.OffersLikesDVSql;
      this.changeLikdedOffers;


      Ext.getStore('OffersHotDealsDataViewStore').on({
         scope: this,
         load: this.onLoadOffersHotDataViewStore
      });


      Ext.getStore('OffersFavDataViewStore').on({
         scope: this,
         load: this.onLoadOffersHotDataViewStore
      });

      Ext.getStore('OffersEntertainDataViewStore').on({
         scope: this,
         load: this.onLoadOffersHotDataViewStore
      });


      Ext.getStore('OffersMallsListStore').on({
         scope: this,
         load: this.onLoadOffersHotDataViewStore
      });

      Ext.getStore('OffersLikesDataViewStore').on({
         scope: this,
         load: this.onLoadOffersHotDataViewStore
      });

      Ext.getStore('OffersNewDataViewStore').on({
         scope: this,
         load: this.onLoadOffersNewDataViewStore
      });


      Ext.getStore('OffersProdCatDataViewStore').on({
         scope: this,
         load: this.onLoadOffersNewDataViewStore
      });

      Ext.getStore('OffersProdCatDataViewStore').on({
         scope: this,
         addrecords: this.onAddRecToProdCatList
      });


      /*Ext.getStore('OffersProdCatDataViewStore').on({
         scope: this,
         refresh: this.onProdCatBeforeLoad
      });*/

      Ext.getStore('OffersDealNearByDataViewStore').on({
         scope: this,
         load: this.onLoadOffersNewDataViewStore
      });

      Ext.getStore('OffersMallDataViewStore').on({
         scope: this,
         load: this.onLoadOffersNewDataViewStore
      });


      Ext.getStore('OffersMallDataViewStore').on({
         scope: this,
         addrecords: this.onAddRecToProdCatList
      });



   },

   test: function(v) {
      v.setLocale('fr');
   },

   onLoadOffersNewDataViewStore: function(store, res) {
      /* var list = this.getOffersProdCatDataView();
      if (list)
      {
         list.suspendEvents();
      }*/

      this.showDateFormat(res);
   },

   onProdCatBeforeLoad: function(store, res) {
      this.showDateFormat(res);
   },

   onCoupanCode: function() {
      if (!this.offersLocationList) {
         this.offersLocationList = Ext.create('MobileApp.view.Offers.OffersLocationList');
      }
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.offersLocationList.setTitle("Selecciona la tienda");
      } else {
         this.offersLocationList.setTitle("Locate Store");
      }

      var parentRecord = this.getOffersProfileView().getRecord();
      var location = parentRecord.data.locations;

      var navView = this.getOffersProfileView().getParent();
      var store = Ext.getStore('OffersLocateStoresListStore');
      var params = {
         locations: location
      };
      this.from = 'locStore';
      //this.locateStoreLoad(store, params);
      store.load({
         scope: this,
         params: params,

         callback: function(response, operation, success) {
            if (success != true) {
               Ext.Viewport.setMasked(false);
               if (response) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401) {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);
               }
            }
         }
      });

      navView.push(this.offersLocationList);

   },

   onTapOffersLocationList: function(thiss, value, view, record, touch) {
      if (touch.target.id == "offersLocationContactNo") {
         console.log("df");
         document.location = 'tel:' + record.data.contactNo;
         // this.getPlacesRestTabPanel().getTabBar().show();
      } else {
         var locKey = record.data.key;
         var offer = this.getOffersProfileView().getRecord().data;
         console.log(offer);
         var code = offer.code;
         var offersKey = offer.key;
         if (!this.OffersCouponDataView) {
            this.OffersCouponDataView = Ext.create('MobileApp.view.Offers.OffersCouponDataView');
         }

         var lang = this.getApplication().getController('SettingsController').lang;
         if (lang == "fr") {
            this.OffersCouponDataView.setTitle("Código de descuento");
         } else {
            this.OffersCouponDataView.setTitle("Coupon code");
         }


         var splittedOfferId = offersKey.split('::');
         var qrCodePartOne = 'BO' + splittedOfferId[1] + splittedOfferId[3];

         var splittedLocId = locKey.split('::');
         var qrCodePartTwo = 'BL' + splittedLocId[1] + splittedLocId[3];

         var qrCode = qrCodePartOne + '-' + qrCodePartTwo + '-' + code;

         var div = document.createElement('div');
         div.id = 'offersCouponDiv';

         document.body.appendChild(div);
         this.onRenderesQRCoupenView(qrCode);
      }
   },

   onRenderesQRCoupenView: function(qrCode) {
      var div = document.getElementById('offersCouponDiv');
      div.style.marginTop = '3em';
      div.style.marginLeft = '1.75em';
      var qrCode1 = new QRCode('offersCouponDiv');
      qrCode1.makeCode(qrCode);
      console.log(this.OffersCouponDataView);
      this.OffersCouponDataView.setHtml(document.getElementById('offersCouponDiv'));
      var navView = this.getOffersProfileView().getParent();
      navView.push(this.OffersCouponDataView);
   },

   onAddRecToProdCatList: function(store, res) {
      // var res = Ext.getStore('OffersProdCatDataViewStore').getData();
      this.showDateFormat(res);
   },

   onAfterPull: function(view) //dataview not having sql store,while pull,store doesnt load,so on latestfatch event,its necessry to snapback of scroller.
   {
      view.snapBack(true);
   },

   onLoadOffersHotDataViewStore: function(store, res) {
      this.showDateFormat(res);
      var proxyStore = store;
      if (proxyStore.getInitialConfig().storeId == 'OffersHotDealsDataViewStore') {
         this.hotOffersSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }

      if (proxyStore.getInitialConfig().storeId == 'OffersFavDataViewStore') {
         this.favOffersSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }


      if (proxyStore.getInitialConfig().storeId == 'OffersMallsListStore') {
         this.OffersMallsListSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }


      if (proxyStore.getInitialConfig().storeId == 'OffersEntertainDataViewStore') {
         this.OffersEntListSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }

      if (proxyStore.getInitialConfig().storeId == 'OffersMallsListStore') {
         this.OffersEntListSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }


      if (proxyStore.getInitialConfig().storeId == 'OffersLikesDataViewStore') {
         this.OffersLikesDVSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }

      var proxyStoreString = proxyStore.getInitialConfig().storeId;
      var sqlStore = Ext.getStore(proxyStoreString.replace('Store', 'SqlStore'));


      if (this.from != 'scroll' && this.from != 'comm') //prevents store to clear if its called from scrollend.
      {
         //sqlStore.getProxy().clear();
         var db = openDatabase("Sencha", "", "Sencha", 200000);
         db.transaction(function(e) {
            e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function() {}, function(tx, error) {});
         });
         sqlStore.removeAll();
      }
      /* if (this.from == 'scroll')
      {
         if (this.getOffersHotDealsDataView())
         {
            this.getOffersHotDealsDataView().suspendEvents();
         }
      }*/

      proxyStore.each(function(item) {
         var exist = sqlStore.find('key', item.data.key);
         if (exist == -1) {
            sqlStore.add(item);

         }

      });



      if (this.from != 'scroll' && this.from != 'comm') //prevents entry of record into local web sql table and do entry only first time load.
      {
         sqlStore.sync();
      }


      // this.getOffersHotDealsDataView().add({ xtype: 'component', baseCls: Ext.baseCSSPrefix + 'list-paging',scrollDock: 'bottom'});

   },

   onOffersHotDataViewPull: function() {
      this.from = "";
      var proxyStore = Ext.getStore('OffersHotDealsDataViewStore');
      this.loadStore(proxyStore);
   },

   onOffersProdCatDataViewPull: function() {
      var store = Ext.getStore('OffersProdCatDataViewStore');
      store.removeAll();
      if (this.getOffersProdCatList().getSelection()[0]) {
         var categoryId = this.getOffersProdCatList().getSelection()[0].data.key;
         var params = store.getProxy().getExtraParams();
         params.categoryId = categoryId;
      }

   },

   onOffersMallsDataViewPull: function() {
      var store = Ext.getStore('OffersMallDataViewStore');
      store.removeAll();
      if (this.getOffersMallsList().getSelection()[0]) {
         //  var categoryId = this.getOffersProdCatList().getSelection()[0].data.key;
         var locationId = this.getOffersMallsList().getSelection()[0].data.key;
         // var fake = '';
         //   var locations = [];
         //  locations.splice(0, 0, locationId, fake);
         //var key = this.getOffersMallsList().getSelection()[0].data.key;
         var params = store.getProxy().getExtraParams();
         params.locations = locationId;
      }
   },

   onOffersRestDataViewPull: function() {
      var store = Ext.getStore('OffersRestDataViewStore');
      store.removeAll();
      if (this.getOffersRestList().getSelection()[0]) {
         var categoryId = this.getOffersRestList().getSelection()[0].data.key;
         var params = store.getProxy().getExtraParams();
         params.categoryId = categoryId;
      }
   },

   onOffersMallsListPull: function() {
      this.from = "";
      var proxyStore = Ext.getStore('OffersMallsListStore');
      busTypeId = 'BusType::4';
      params = {
         busTypeId: busTypeId
      };
      this.loadStore(proxyStore, params);
   },

   onOffersEntDataViewPull: function() {
      this.from = "";
      var params = {
         busTypeId: 'BusType::3'
      };
      var proxyStore = Ext.getStore('OffersEntertainDataViewStore');
      this.loadStore(proxyStore, params);
   },

   onScrollEndOfOffersRestDataView: function(dataView) {
      if (dataView) {
         dataView.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfOffersHotDataView: function(dataView) {
      //this.dataView=dataView;
      if (dataView) {
         dataView.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfOffersFavDataView: function(dataView) {
      // this.dataView = dataView;
      if (dataView) {
         dataView.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfOffersProdCatDataView: function(dataView) {
      if (dataView) {
         dataView.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfOffersMallsDataView: function(dataView) {
      if (dataView) {
         dataView.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScrollOfMallsDataView'
         });
      }
   },

   onScrollEndOfOffersMallsList: function(dataView) {
      if (dataView) {
         dataView.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfOffersEntDataView: function(dataView) {
      if (dataView) {
         dataView.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScroll: function(scroller, x, y) {
      /*if (y >= scroller.maxPosition.y)
      {*/
      this.from = 'scroll';
      // var sqlStore = Ext.getStore('OffersHotDealsDataViewSqlStore');
      var sqlStore = this.dataView.getStore();
      if (sqlStore.getInitialConfig().storeId.indexOf('Sql') != -1) {
         var proxyStoreString = sqlStore.getInitialConfig().storeId;
         var proxyStore = Ext.getStore(proxyStoreString.replace('Sql', ''));
         var likeCount;
         var createdAt;
         var params;
         var key;
         var favCount;
         var busTypeId;

         if (sqlStore.last()) {

            key = sqlStore.last().data.key;

            if (this.dataView.getId() == 'offersHotDealsDataView') {
               likeCount = sqlStore.last().data.likeCount;
               params = {
                  likeCount: likeCount,
                  key: key
               };
            }

            if (this.dataView.getId() == 'offersFavDataView') {
               params = {
                  key: key
               };
            }

            if (this.dataView.getId() == 'offersMallsList') {

               busTypeId = 'BusType::4';
               favCount = sqlStore.last().data.favCount;
               params = {
                  favCount: favCount,
                  key: key,
                  busTypeId: busTypeId
               };
            }

            if (this.dataView.getId() == 'offersEntertainDataView') {

               busTypeId = 'BusType::3';
               createdAt = sqlStore.last().data.createdAt;
               params = {
                  createdAt: createdAt,
                  key: key,
                  busTypeId: busTypeId
               };
            }

            this.loadStore(proxyStore, params);
         }
      } else {
         var categoryId;
         if (sqlStore.last()) {
            key = sqlStore.last().data.key;

            if (this.dataView.getId() == 'offersProdCatDataView') {
               categoryId = this.getOffersProdCatList().getSelection()[0].data.key;
               createdAt = sqlStore.last().data.createdAt;
               params = {
                  createdAt: createdAt,
                  key: key,
                  categoryId: categoryId
               };
            }

            if (this.dataView.getId() == 'offersRestDataView') {
               categoryId = this.getOffersRestList().getSelection()[0].data.key;
               createdAt = sqlStore.last().data.createdAt;
               params = {
                  createdAt: createdAt,
                  key: key,
                  categoryId: categoryId
               };
            }
            //vparams;


            this.loadStore(sqlStore, params, true);
         }

      }


      //}
   },

   onScrollOfMallsDataView: function() {
      var store = Ext.getStore('OffersMallDataViewStore');

      if (store.last()) {
         var locationId = this.getOffersMallsList().getSelection()[0].data.key;
         //   var fake = '';
         //   var locations = [];
         //   locations.splice(0, 0, locationId, fake);
         key = store.last().data.key;
         //vparams;
         params = {
            locations: locationId,
            keys: key
         };

         this.loadStore(store, params, true);
      }
   },

   onTapOverlay: function(view, index, list, record) {
      if (index == 0) {
         this.onDeleteComment(view);
      }
      if (index == 1) {
         this.onCancelComment(view);
      }


   },

   onTapCommemt: function(view, idx, list, rec, e) {
      this.offerId = rec.data.offerId;
      this.commentId = rec.data.key;
      var userName = rec.data.userName;
      var value = this.getUsername(userName);
      if (value) {
         var overlay = Ext.create('MobileApp.view.CommentOverlayView');
         overlay.show();
      }
   },

   getUsername: function(userName) {
      var store = Ext.getStore('LoginStore').data.items;
      if (store.length != 0) {
         var uname = store[0].data.name;
         if (uname == userName) {
            return true;
         } else {
            return false;
         }
      }
   },

   onCancelComment: function(view) {
      view.hide();
   },

   onDeleteComment: function(view) {
      var offerId = this.offerId;
      var commentId = this.commentId;
      var parentRecord = this.getOffersProfileView().getRecord();
      Ext.Ajax.request({
         method: 'DELETE',
         url: MobileApp.util.Config.getBaseUrl() + '/DeleteOfferComment',
         scope: this,
         params: {
            key: commentId,
            offerId: offerId
         },
         success: function(response) {
            if (response) {
               view.hide();
               var cmntView = this.getOffersProfileView().down('#commentDataView');
               var cmnt = cmntView.getStore().findRecord("key", commentId);
               cmntView.getStore().remove(cmnt);
               cmntView.refresh();
               var preCommentVal = parentRecord.data.commentCount;
               var newCommentVal = parseInt(preCommentVal) - 1;
               parentRecord.data.commentCount = newCommentVal;
               this.onCommentViewRefresh(newCommentVal);
            }
         },
         failure: function(response) {
            var error = 'Something went wrong';
            if (response.status == 401) {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.Msg.alert('', error);
         }
      });

   },

   onSearchOffer: function(field) {
      if (field.getValue().length >= 1) {
         var params = {
            name: field.getValue()
         };
         var store = Ext.getStore('OffersSearchByNameStore');
         store.load({
            scope: this,
            params: params,
            callback: function(response, operation, success) {
               if (success != true) {
                  if (response) {
                     var data = response.operations[0].request.proxy.reader.jsonData.message;
                     Ext.example.msg('Message', data);
                  } else {
                     var errorCode = operation.error.status;
                     var error = 'Something went wrong';
                     if (errorCode == 401) {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                     Ext.example.msg('Message', error);
                  }
               } else {

                  this.showDateFormat(response);
               }
            }
         });
         if (store.data.items.length > 0) {
            var searchStore = Ext.getStore('OffersSearchListStore');
            searchStore.removeAll();
            for (var i = 0; i < store.data.items.length; i++) {
               searchStore.add(store.data.items[i]);
            }
         }
      } else if (field.getValue().length == 0) {
         this.OnClearText();
      }
   },

   OnClearText: function() {
      var search = Ext.getStore('OffersSearchListStore');
      var store = Ext.getStore('OffersSearchByNameStore');
      search.removeAll();
      store.removeAll();
      search.add(search.config.data);
      this.getOffersSearchList().refresh();
   },

   onPostComment: function() {
      var parentRecord = this.getOffersProfileView().getRecord();
      var offerId = parentRecord.data.key;
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         this.onSkipLoginCheck();
         this.getOffersProfileView().down('#commentsTextField').setValue('');
      }
      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0) {
         var loginStore = logStore[0].data;
         var userId = loginStore.key;
         var value = this.getOffersProfileView().down('#commentsTextField').getValue();

         Ext.Ajax.request({
            method: 'POST',
            url: MobileApp.util.Config.getBaseUrl() + '/PostOfferComment',
            scope: this,
            params: {
               offerId: offerId,
               userId: userId,
               value: value
            },
            success: function(response) {
               var result = Ext.JSON.decode(response.responseText);
               if (result.success == 'profanity') {
                  return;
               }
               if (result) {

                  this.getOffersProfileView().down('#commentDataView').getStore().add(result);

                  // this.offersProfileView.down('#offersCommentHTML').setHtml('<div class="commCount" id="offersCommentHTML">' + parentRecord.data.commentCount + '</div>');

                  var preCommentVal = parentRecord.data.commentCount;
                  var newCommentVal = parseInt(preCommentVal) + 1;
                  parentRecord.data.commentCount = newCommentVal;
                  // this.offersProfileView.down('#offersCommentHTML').setHtml('<div class="commCount" id="offersCommentHTML">' + newCommentVal + '</div>');
                  this.getOffersProfileView().down('#commentsTextField').setValue('');
                  this.getOffersProfileView().down('#postComment').setDisabled(true);
                  //f.refresh();
                  this.onCommentViewRefresh(newCommentVal);
               }
            },
            failure: function(response) {
               var error = 'Something went wrong';
               if (response.status == 401) {
                  error = 'Sorry, You are not authorized to access this module.';
               }
               Ext.Msg.alert('', error);
            }
         });
      }

   },

   onLikeOffer: function(button) {

      var parentRecord = this.getOffersProfileView().getParent().getActiveItem().getRecord();
      var offerId = parentRecord.data.key;

      var likeValue = parentRecord.data.likeCount;
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         this.onSkipLoginCheck();
      }

      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0) {
         var loginStore = logStore[0].data;
         var userId = loginStore.key;
         var offersLikedArray = loginStore.offersLiked;
         var alreadyLikedOrNot = offersLikedArray.indexOf(offerId);
         var toggled;


         if (alreadyLikedOrNot != -1) //already liked
         {
            button.setIconCls('likeOfferIcon');
            toggled = false;
            parentRecord.data.likeCount = parseInt(likeValue) - 1;
            this.onLikeViewRefresh(parseInt(likeValue) - 1);
            loginStore.offersLiked.pop(offerId);

         } else {

            button.setIconCls('likeOfferIcon2');
            //button.setText('Aversión Oferta'); 
            this.from = 'likes';
            // document.getElementById('offersLikeHTML').innerHTML = parseInt(likeValue) + 1;
            toggled = true;
            parentRecord.data.likeCount = parseInt(likeValue) + 1;
            loginStore.offersLiked.push(offerId);

            this.onLikeViewRefresh(parseInt(likeValue) + 1);

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
            success: function(response) {
               var result = Ext.JSON.decode(response.responseText);
               if (result) {
                  /*  if (toggled == false) {
                       loginStore.offersLiked.pop(offerId);
                    } else {
                       loginStore.offersLiked.push(offerId);
                    }*/
                  this.changeLikdedOffers = true;
                  this.favOffersSql = false;
               }
            },
            failure: function(response) {
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
      }
   },

   //for changing dataview like count immediately 
   onLikeViewRefresh: function(value) {
      var key;
      if (this.getOffersProfileView().getParent().xtype == "offersnewnavigationview") {
         //this.getOffersHotDealsDataView().getSelection()[0].data.likeCount = "";
         key = this.getOffersNewDataView().getSelection()[0].data.key;
         this.getOffersNewDataView().getSelection()[0].data.likeCount = value;
         document.getElementById(key + '-like').innerHTML = value;

      }
      if (this.getOffersProfileView().getParent().xtype == "offershotdealsnavigationview") {
         key = this.getOffersHotDealsDataView().getSelection()[0].data.key;
         this.getOffersHotDealsDataView().getSelection()[0].data.likeCount = "";
         this.getOffersHotDealsDataView().getSelection()[0].data.likeCount = value;
         document.getElementById(key + '-like').innerHTML = value;

      }
      if (this.getOffersProfileView().getParent().xtype == "offersfavnavigationview") {
         key = this.getOffersFavDataView().getSelection()[0].data.key;
         this.getOffersFavDataView().getSelection()[0].data.likeCount = value;
         document.getElementById(key + '-like').innerHTML = value;
         // document.getElementById('offersLikeC').innerHTML = value;
         //this.getOffersFavDataView().refresh();
      }
      if (this.getOffersProfileView().getParent().xtype == "offerssearchnavigationview") {

         if (this.getOffersSearchList().getSelection()[0].data.seqNo == 1) {
            key = this.getOffersDealNearByDataView().getSelection()[0].data.key;
            this.getOffersDealNearByDataView().getSelection()[0].data.likeCount = value;
            document.getElementById(key + '-like').innerHTML = value;
            //this.getOffersDealNearByDataView().refresh();
         }
         if (this.getOffersSearchList().getSelection()[0].data.seqNo == 2) {
            key = this.getOffersProdCatDataView().getSelection()[0].data.key;
            this.getOffersProdCatDataView().getSelection()[0].data.likeCount = value;
            document.getElementById(key + '-like').innerHTML = value;
            //  this.getOffersProdCatDataView().refresh();
         }
         if (this.getOffersSearchList().getSelection()[0].data.seqNo == 3) {
            key = this.getOffersMallDataView().getSelection()[0].data.key;
            this.getOffersMallDataView().getSelection()[0].data.likeCount = value;
            document.getElementById(key + '-like').innerHTML = value;
            // this.getOffersMallDataView().refresh();
         }

         if (this.getOffersSearchList().getSelection()[0].data.seqNo == 4) {
            key = this.getOffersRestDataView().getSelection()[0].data.key;
            this.getOffersRestDataView().getSelection()[0].data.likeCount = value;
            document.getElementById(key + '-like').innerHTML = value;
            //this.getOffersRestDataView().refresh();
         }
         if (this.getOffersSearchList().getSelection()[0].data.seqNo == 5) {
            key = this.getOffersEntertainDataView().getSelection()[0].data.key;
            this.getOffersEntertainDataView().getSelection()[0].data.likeCount = value;
            document.getElementById(key + '-like').innerHTML = value;
            //this.getOffersEntertainDataView().refresh();
         }
         if (this.getOffersSearchList().getSelection()[0].data.seqNo == 6) {
            key = this.getOffersLikesDataView().getSelection()[0].data.key;
            this.getOffersLikesDataView().getSelection()[0].data.likeCount = value;
            document.getElementById(key + '-like').innerHTML = value;
            //this.getOffersLikesDataView().refresh();
         }


      }

   },

   //for changing dataview comment count immediately 
   onCommentViewRefresh: function(value) {
      var key;
      if (this.getOffersProfileView().getParent().xtype == "offersnewnavigationview") {
         key = this.getOffersNewDataView().getSelection()[0].data.key;
         this.getOffersNewDataView().getSelection()[0].data.commentCount = value;
         document.getElementById(key + '-comment').innerHTML = value;
         //this.getOffersNewDataView().refresh();
      }
      if (this.getOffersProfileView().getParent().xtype == "offershotdealsnavigationview") {
         key = this.getOffersHotDealsDataView().getSelection()[0].data.key;
         this.getOffersHotDealsDataView().getSelection()[0].data.commentCount = value;
         document.getElementById(key + '-comment').innerHTML = value;
         //this.getOffersHotDealsDataView().refresh();
      }
      if (this.getOffersProfileView().getParent().xtype == "offersfavnavigationview") {
         key = this.getOffersFavDataView().getSelection()[0].data.key;
         this.getOffersFavDataView().getSelection()[0].data.commentCount = value;
         document.getElementById(key + '-comment').innerHTML = value;
         //this.getOffersFavDataView().refresh();
      }
      if (this.getOffersProfileView().getParent().xtype == "offerssearchnavigationview") {

         if (this.getOffersProfileView().getParent().xtype == "offerssearchnavigationview") {
            if (this.getOffersSearchList().getSelection()[0].data.seqNo == 1) {
               key = this.getOffersDealNearByDataView().getSelection()[0].data.key;
               this.getOffersDealNearByDataView().getSelection()[0].data.commentCount = value;
               document.getElementById(key + '-comment').innerHTML = value;
               // this.getOffersDealNearByDataView().refresh();
            }
            if (this.getOffersSearchList().getSelection()[0].data.seqNo == 2) {
               key = this.getOffersProdCatDataView().getSelection()[0].data.key;
               this.getOffersProdCatDataView().getSelection()[0].data.commentCount = value;
               document.getElementById(key + '-comment').innerHTML = value;
               // this.getOffersProdCatDataView().refresh();
            }
            if (this.getOffersSearchList().getSelection()[0].data.seqNo == 3) {
               key = this.getOffersMallDataView().getSelection()[0].data.key;
               this.getOffersMallDataView().getSelection()[0].data.commentCount = value;
               document.getElementById(key + '-comment').innerHTML = value;
               //this.getOffersMallDataView().refresh();
            }

            if (this.getOffersSearchList().getSelection()[0].data.seqNo == 4) {
               key = this.getOffersRestDataView().getSelection()[0].data.key;
               this.getOffersRestDataView().getSelection()[0].data.commentCount = value;
               document.getElementById(key + '-comment').innerHTML = value;
            }
            if (this.getOffersSearchList().getSelection()[0].data.seqNo == 5) {
               key = this.getOffersEntertainDataView().getSelection()[0].data.key;
               this.getOffersEntertainDataView().getSelection()[0].data.commentCount = value;
               document.getElementById(key + '-comment').innerHTML = value;
            }
            if (this.getOffersSearchList().getSelection()[0].data.seqNo == 6) {
               key = this.getOffersLikesDataView().getSelection()[0].data.key;
               this.getOffersLikesDataView().getSelection()[0].data.commentCount = value;
               document.getElementById(key + '-comment').innerHTML = value;
            }

         }
      }

   },

   onTabChange: function(thids, value, oldValue, eOpts) {
      var me = this;
      var activeView = value.xtype;
      if (activeView == "offershotdealsnavigationview") {
         value.pop(value.innerItems.length);
         value.setActiveItem(0);
         var store = Ext.getStore('OffersHotDealsDataViewStore');
         this.dataView = this.getOffersHotDealsDataView();
         this.from = 'hot';
         if (!this.hotOffersSql) //check if store loading first time or not,should call only first time
         {
            //offersHotSqlStore.load();
            var scroll = this.dataView.getScrollable().getScroller();
            scroll.minPosition.y = -85;
            scroll.scrollTo(null, -85, {
               duration: this.dataView.down('#pull').getSnappingAnimationDuration()
            });
            scroll.refresh();
            this.dataView.down('#pull').setState('loading');
            this.loadStore(store);

         }

      } else if (activeView == "offersfavnavigationview") {
         value.pop(value.innerItems.length);

         this.dataView = this.getOffersFavDataView();
         value.setActiveItem(0);
         var loginStore = Ext.getStore('LoginStore').data.items[0].data;
         //    var favLoc = loginStore.favLoc;
         var favLoc = loginStore.offersLiked;
         var favStore = Ext.getStore('OffersFavDataViewStore');
         this.from = 'fav';
         var params = {
            //   locations: favLoc
            offers: favLoc
         };
         //console.log(params);
         if (!this.favOffersSql) //check if store loading first time or not,should call only first time
         {
            this.loadStore(favStore, params);
            this.favOffersSql = true;

         }
      } else if (activeView == "offersnewnavigationview") {
         navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            timeout: 10000,
            enableHighAccuracy: true
         });

      } else {
         value.pop(value.innerItems.length);
         value.setActiveItem(0);
      }

      function onSuccess(position) {
         // alert("d");
         var lat = position.coords.latitude;
         var longitude = position.coords.longitude;
         //   alert(lat);
         //  alert(longitude);
         var para = {
            latitude: lat,
            longitude: longitude
         };
         //  console.log(para);
         var newStore = Ext.getStore('OffersNewDataViewStore');
         newStore.load({
            scope: this,
            params: para,
            callback: function(response, operation, success) {
               //  console.log(response);
               if (success != true) {
                  if (response) {
                     var data = response.operations[0].request.proxy.reader.jsonData.message;
                     Ext.example.msg('Message', data);
                  } else {
                     var errorCode = operation.error.status;
                     var error = 'Something went wrong';
                     if (errorCode == 401) {
                        error = 'Sorry, You are not authorized to access this module.';
                     }
                     Ext.example.msg('Message', error);
                  }
               } else {
                  /*me.showDateFormat(response);
                  me.getOffersNewDataView().refresh();*/
               }
            }
         });
      }

      function onError(error) {
         console.log(error);
      }
   },

   loadStore: function(store, params, addRec) {
      if (!addRec) {
         addRec = false;
      }
      if ( /*this.from != 'scroll' && this.from != ''*/ this.from == 'fav' || this.from == 'likes' || this.from == 'prod' || this.from == 'rest') {
         Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Cargando...'
         });
      }
      store.load({
         scope: this,
         params: params,
         addRecords: addRec,
         callback: function(response, operation, success) {
            if (success != true) {
               Ext.Viewport.setMasked(false);
               if (response) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401) {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);
               }
            } else {
               Ext.Viewport.setMasked(false);
               //this.showDateFormat(response);
               var scroll;

               var hotDealView = this.getOffersHotDealsDataView();
               if (hotDealView) {
                  //
                  //hotDealView.resumeEvents();
                  if (this.from == 'hot' || this.from == '') {
                     //hotDealView.refresh();
                     scroll = hotDealView.getScrollable().getScroller();
                     hotDealView.down('#pull').setState('loaded');
                     hotDealView.down('#pull').setState('release');
                     scroll.minPosition.y = 0;
                     scroll.refresh();
                     //hotDealView.down('#pull').snapBack(true);

                  }

                  /*   if (this.from == '')
                  {
                     scroll = hotDealView.getScrollable().getScroller();
                     hotDealView.down('#pull').setState('loaded');
                     hotDealView.down('#pull').setState('release');
                     scroll.minPosition.y = 0;
                     scroll.refresh();

                  }*/

               }

               var resView = this.getOffersRestDataView();
               if (resView) {

                  if (this.from == 'restCat') {
                     resView.refresh();
                     scroll = this.getOffersRestDataView().getScrollable().getScroller();
                     resView.down('#pull').setState('loaded');
                     scroll.minPosition.y = 0;
                     resView.down('#pull').setState('release');

                  }
               }

               var enView = this.getOffersEntertainDataView();
               if (enView) {

                  if (this.from == 'ent' || this.from == '') {
                     enView.refresh();
                     enView.down('#pull').setState('loaded');
                     enView.down('#pull').snapBack(true);
                  }
               }

               var catView = this.getOffersProdCatDataView();
               if (catView) {
                  // catView.resumeEvent();
                  if (this.from == 'prodCat') {
                     catView.refresh();
                     scroll = catView.getScrollable().getScroller();
                     // catView.down('#pull').setState('loaded');
                     scroll.minPosition.y = 0;
                     scroll.refresh();
                     catView.down('#pull').setState('release');

                  }


               }

               var mallView = this.getOffersMallDataView();
               if (mallView) {

                  if (this.from == 'mallsList') {
                     mallView.refresh();
                     scroll = this.getOffersMallDataView().getScrollable().getScroller();
                     //mallView.down('#pull').setState('loaded');
                     scroll.minPosition.y = 0;
                     scroll.refresh();
                     mallView.down('#pull').setState('release');
                  }
               }

               var mallList = this.getOffersMallsList();
               if (mallList) {

                  if (this.from == 'malls' || this.from == '') {
                     mallList.refresh();
                     var scroll = mallList.getScrollable().getScroller();
                     scroll.minPosition.y = 0;
                     mallList.down('#pull').setState('loaded');
                     mallList.down('#pull').setState('release');
                  }
               }

               var favView = this.getOffersFavDataView();
               if (favView) {
                  Ext.Viewport.setMasked(false);
                  favView.refresh();
               }

               var likeView = this.getOffersLikesDataView();
               if (likeView) {
                  Ext.Viewport.setMasked(false);
                  likeView.refresh();
               }

               var prodCatList = this.getOffersProdCatList();
               if (prodCatList) {
                  Ext.Viewport.setMasked(false);

               }

               var restCatList = this.getOffersRestList();
               if (restCatList) {
                  Ext.Viewport.setMasked(false);

               }

            }
         }
      });
   },

   showDateFormat: function(response) {
      for (var i = 0; i < response.length; i++) {
         if (response[i].data.validTo != null) {
            var date = response[i].data.validTo;
            var dateDay = new Date(date);
            var day = dateDay.getMonth() + 1;

            //var weekday = new Array(7);
            var months = new Array(12);
            var language = this.getApplication().getController('SettingsController').lang;

            if (language == "fr") {
               months[1] = "Enero";
               months[2] = "Febrero";
               months[3] = "Marzo";
               months[4] = "Abril";
               months[5] = "Mayo";
               months[6] = "Junio";
               months[7] = "Julio";
               months[8] = "Agosto";
               months[9] = "Septiembre";
               months[10] = "Octubre";
               months[11] = "Noviembre";
               months[12] = "Diciembre";

            }
            if (language == "en") {
               months[1] = "January";
               months[2] = "February";
               months[3] = "March";
               months[4] = "April";
               months[5] = "May";
               months[6] = "June";
               months[7] = "July";
               months[8] = "August";
               months[9] = "September";
               months[10] = "October";
               months[11] = "November";
               months[12] = "December";
            }
            var n = months[day];

            var currentDate = new Date();
            var fullDate = date.split("T")[0];
            var dateR = fullDate.split("-")[2];
            var monthR = fullDate.split("-")[1];


            if (currentDate.getMonth() + 1 == monthR) {
               var first = currentDate.getDate() - currentDate.getDay();
               var last = first + 6;
               var firstday = new Date(dateDay.setDate(first));
               var lastday = new Date(dateDay.setDate(last));
               /* if (firstday.getDate() <= parseInt(dateR) && lastday.getDate() >= parseInt(dateR))
               {
                  response[i].data.validTo = n;
               } else
               {*/
               response[i].data.validTo = n + " " + new Date(date).getDate();
               // }
            } else {
               response[i].data.validTo = n + " " + new Date(date).getDate();
            }

         }

      }
   },

   onSwipeNewDataView: function(event) {

      if (event.direction == "left") {
         var me = this,
            mainEl = me.getSlidelist().element;
         if (mainEl.hasCls('out')) {
            mainEl.removeCls('out').addCls('in');
         }
      }
   },

   setSliderIn: function() {
      var me = this,
         mainEl = me.getSlidelist().element;
      if (mainEl.hasCls('out')) {
         mainEl.removeCls('out').addCls('in');
         return false;
      }
   },

   toggleNav: function() {
      this.getApplication().getController('MainController').toggleNav();
   },

   onOffersNewNavPop: function(view, item) {
      if (view.getActiveItem().xtype == "offersnewdataview") {
         this.showNewSlideButton();
      }

   },

   onOffersNewNavPush: function(view, item) {
      this.hideNewSlideButton();
   },

   onOffersHotDealsNavPush: function() {
      this.hideHotDealsSlideButton();
   },

   onOffersHotDealsNavPop: function(view, item) {
      if (view.getActiveItem().xtype == "offershotdealsdataview") {
         this.showHotDealsSlideButton();
      }

   },

   onOffersFavNavPush: function() {
      this.hideFavSlideButton();
   },

   onOffersFavNavPop: function(view, item) {
      if (view.getActiveItem().xtype == "offersfavdataview") {
         this.showFavSlideButton();
      }

   },

   onOffersSearchNavPush: function() {
      this.hideSearchSlideButton();
   },

   onOffersSearchNavPop: function(view, item) {
      if (view.getActiveItem().xtype == "offerssearchlist") {
         this.showSearchSlideButton();
      }

   },

   onViewAllCom: function() {
      if (!this.offersAllCommentView) {
         this.offersAllCommentView = Ext.create('MobileApp.view.Offers.OffersAllCommentView');
      }

      var navView = this.getOffersProfileView().getParent();
      console.log(navView);
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.offersAllCommentView.setTitle("Comentarios");
      } else {
         this.offersAllCommentView.setTitle("Comments");
      }

      navView.push(this.offersAllCommentView);
   },

   onSelectNewDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      var slider = this.setSliderIn();
      if (slider != false) {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }
         this.offersProfileView.setTitle(record.data.brandName);
         this.getOffersNewNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      }

   },

   onSelectHotDealsDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      var slider = this.setSliderIn();
      if (slider != false) {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }
         this.offersProfileView.setTitle(record.data.brandName);
         this.getOffersHotDealsNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      }
   },

   onSelectFavDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      if (!this.offersProfileView) {
         this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
      }
      this.offersProfileView.setTitle(record.data.brandName);
      this.getOffersFavNavigationView().push(this.offersProfileView);
      this.setProfileView(record);
   },


   //USED FROM HOTDEALS OFFERS,FAV OFFERS
   setProfileView: function(record) {
      this.offersProfileView.down('#profImg').setSrc('');
      this.offersProfileView.down('#profImgOne').show();
      this.offersProfileView.down('#profImg').hide();

      this.offersProfileView.down('#offerBrandLogo').setSrc('');
      this.offersProfileView.down('#offerBrandLogoOne').show();
      this.offersProfileView.down('#offerBrandLogo').hide();

      this.offersProfileView.getScrollable().getScroller().scrollTo(0, -1, true);
      //  var img = record.data.img;
      var logo = record.data.profileImage;
      //   this.offersProfileView.down('#profImg').setSrc(img);
      //this.offersProfileView.down('#offerBrandLogo').setSrc(logo);

      /*if (record.data.img == "data:,")
      {
         this.offersProfileView.down('#profImg').setSrc("./resources/icons/nw-icons/bg.jpg");
      } else
      {
         this.offersProfileView.down('#profImg').setSrc(img);
      }*/
      var ppi = window.devicePixelRatio;
      var key = record.data.key;
      var brandId = record.data.brandId;
      this.offersProfileView.down('#profImg').setSrc(MobileApp.util.Config.getImgUrl() + '/image/300x225/' + ppi + '/' + key);
      /*if (record.data.profileImage == "" || record.data.profileImage == null || record.data.profileImage == undefined)
      {
         this.offersProfileView.down('#offerBrandLogo').hide();
      } else
      {*/
      // this.offersProfileView.down('#offerBrandLogo').show();
      this.offersProfileView.down('#offerBrandLogo').setSrc(MobileApp.util.Config.getImgUrl() + '/image/150x50/' + ppi + '/' + brandId + '-logo');
      // }
      //this.offersProfileView.down('#validTo').setHtml(record.data.validTo);
      var language = this.getApplication().getController('SettingsController').lang;
      var validTo = document.getElementById('validTo');
      if (language == "en") {
         validTo.innerHTML = 'Expires on ' + record.data.validTo;
      }
      if (language == "fr") {
         validTo.innerHTML = 'Expira ' + record.data.validTo;
      }

      /*var offersComment = document.getElementById('offersCommentHTML');
      offersComment.innerHTML = record.data.commentCount;*/

      /*var offersLike = document.getElementById('offersLikeHTML');
      offersLike.innerHTML = record.data.likeCount;*/


      //this.offersProfileView.down('#offersLikeHTML').setHtml(record.data.likeCount);

      var tagLine = document.getElementById('tagLine');
      tagLine.innerHTML = record.data.tagLine;

      var finePrint = document.getElementById('finePrint');
      finePrint.innerHTML = record.data.finePrint;

      this.offersProfileView.setRecord(record);
      this.offersProfileView.setTitle(record.data.brandName);

      //for comments
      var commentsStore = Ext.getStore('OffersCommentDataViewStore');
      var params = {
         offerId: record.data.key
      };
      this.from = 'comm';
      this.loadStore(commentsStore, params);


      //for likes
      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0) {
         var loginStore = logStore[0].data;

         var offersLikedArray = loginStore.offersLiked;
         var alreadyLikedOrNot = offersLikedArray.indexOf(record.data.key);
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }
         //var likeImage = document.getElementById('offersLikeImage');
         var likeBut = this.getOffersProfileView().down('#offerLikeFlatBut');
         if (alreadyLikedOrNot != -1) //already liked
         {
            likeBut.setIconCls('likeOfferIcon2');
            //likeBut.setText('Aversión Oferta');
         } else {
            likeBut.setIconCls('likeOfferIcon');
            //likeBut.setText('Como Oferta');
         }
      }
      this.onSetSocialIcons(record);

      var commBut = this.getOffersProfileView().down('#postComment');
      var commField = this.getOffersProfileView().down('#commentsTextField');

      commBut.setDisabled(true);
      commField.setValue('');
      //for setting text

      /* var preHeading = this.offersProfileView.down('#connectWithHeading').getHtml();
       preHeading = preHeading.split(" ", 2).join().replace(",", " ");
       var newHeading = preHeading + " " + record.data.brandName;
       this.offersProfileView.down('#connectWithHeading').setHtml(newHeading);*/
   },

   onSetSocialIcons: function(record) {
      //For social icons(if link is not given than images changes to light)
      var fb = this.getOffersProfileView().down('#offersfaceBook');
      var twitter = this.getOffersProfileView().down('#offerstwitter');
      var linkedIn = this.getOffersProfileView().down('#offerslinkedin');
      var google = this.getOffersProfileView().down('#offersgoogle');
      var pinterest = this.getOffersProfileView().down('#offerspinterest');
      var youtube = this.getOffersProfileView().down('#offersyouTube');
      if (record.data.fb == "" || record.data.fb == null) {
         fb.setSrc("./resources/icons/social/socialRound/fb1.png");
      } else {
         fb.setSrc("./resources/icons/social/socialRound/fb.png");
      }

      if (record.data.twitter == "" || record.data.twitter == null) {
         twitter.setSrc("./resources/icons/social/socialRound/twitter1.png");
      } else {
         twitter.setSrc("./resources/icons/social/socialRound/twitter.png");
      }
      if (record.data.instagram == "" || record.data.instagram == null) {
         linkedIn.setSrc("./resources/icons/social/socialRound/instagram1.png");
      } else {
         linkedIn.setSrc("./resources/icons/social/socialRound/instagram.png");
      }
      if (record.data.google == "" || record.data.google == null) {
         google.setSrc("./resources/icons/social/socialRound/gplus1.png");
      } else {
         google.setSrc("./resources/icons/social/socialRound/gplus.png");
      }
      if (record.data.pinterest == "" || record.data.pinterest == null) {
         pinterest.setSrc("./resources/icons/social/socialRound/pinterest1.png");
      } else {
         pinterest.setSrc("./resources/icons/social/socialRound/pinterest.png");
      }

      if (record.data.youtube == "" || record.data.youtube == null) {
         youtube.setSrc("./resources/icons/social/socialRound/youtube1.png");
      } else {
         youtube.setSrc("./resources/icons/social/socialRound/youtube.png");
      }


   },

   onSelectDealNearByDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      if (!this.offersProfileView) {
         this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
      }
      this.offersProfileView.setTitle(record.data.brandName);
      this.getOffersSearchNavigationView().push(this.offersProfileView);
      this.setProfileView(record);
   },

   onSelectProdCatDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      if (!this.offersProfileView) {
         this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
      }
      this.offersProfileView.setTitle(record.data.brandName);
      this.getOffersSearchNavigationView().push(this.offersProfileView);
      this.setProfileView(record);

   },

   onSelectMallDataViewImage: function(view, index, ctx, record) {
      this.Record = record;

      if (!this.offersProfileView) {
         this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
      }
      this.offersProfileView.setTitle(record.data.brandName);
      this.getOffersSearchNavigationView().push(this.offersProfileView);
      this.setProfileView(record);

   },

   onSelectRestDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      if (!this.offersProfileView) {
         this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
      }
      this.offersProfileView.setTitle(record.data.brandName);
      this.getOffersSearchNavigationView().push(this.offersProfileView);
      this.setProfileView(record);

   },

   onSelectEntertainDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      if (!this.offersProfileView) {
         this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
      }
      this.offersProfileView.setTitle(record.data.brandName);
      this.getOffersSearchNavigationView().push(this.offersProfileView);
      this.setProfileView(record);

   },

   onSelectLikesDataViewImage: function(view, index, ctx, record) {
      this.Record = record;
      if (!this.offersProfileView) {
         this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
      }
      this.offersProfileView.setTitle(record.data.brandName);
      this.getOffersSearchNavigationView().push(this.offersProfileView);
      this.setProfileView(record);

   },

   hideNewSlideButton: function() {
      var slideNewButton = this.getNewSlideButton();
      if (slideNewButton.isHidden()) {
         return;
      }
      slideNewButton.hide();
   },

   showNewSlideButton: function() {
      var slideNewButton = this.getNewSlideButton();
      slideNewButton.show();
   },

   hideHotDealsSlideButton: function() {
      var hdSlideButton = this.getHdSlideButton();
      if (hdSlideButton.isHidden()) {
         return;
      }
      hdSlideButton.hide();
   },

   showHotDealsSlideButton: function() {
      var hdSlideButton = this.getHdSlideButton();
      hdSlideButton.show();
   },

   hideFavSlideButton: function() {
      var favSlideButton = this.getFavSlideButton();
      if (favSlideButton.isHidden()) {
         return;
      }
      favSlideButton.hide();
   },

   showFavSlideButton: function() {
      var favSlideButton = this.getFavSlideButton();
      favSlideButton.show();
   },

   hideSearchSlideButton: function() {
      var searchSlideButton = this.getSearchSlideButton();
      if (searchSlideButton.isHidden()) {
         return;
      }
      searchSlideButton.hide();
   },

   showSearchSlideButton: function() {
      var searchSlideButton = this.getSearchSlideButton();
      searchSlideButton.show();
   },

   onTapSearchList: function(view, index, ctx, record) {

      var slider = this.setSliderIn();

      if (slider != false) {
         if (index == 0) {
            this.onTapDealNearBy(record);
         }

         if (index == 1) {
            this.onTapProductCategories(record);
         }

         if (index == 2) {
            this.onTapMalls(record);
         }

         if (index == 3) {
            this.onTapNewEntertainment(record);
         }

         if (index == 4) {
            this.onTapService(record);
         }

         if (index == 5) {
            this.onTapLikes(record);
         }
      }
   },

   onTapDealNearBy: function(record) {
      var me = this;
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }
         this.offersProfileView.setTitle(record.data.brandName);
         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var onSuccess = function(position) {
            var lat = position.coords.latitude;
            var longitude = position.coords.longitude;
            var para = {
               latitude: lat,
               longitude: longitude
            };
            var newStore = Ext.getStore('OffersDealNearByDataViewStore');
            newStore.load({
               scope: this,
               params: para,
               callback: function(response, operation, success) {
                  if (success != true) {
                     if (response) {
                        var data = response.operations[0].request.proxy.reader.jsonData.message;
                        Ext.example.msg('Message', data);
                     } else {
                        var errorCode = operation.error.status;
                        var error = 'Something went wrong';
                        if (errorCode == 401) {
                           error = 'Sorry, You are not authorized to access this module.';
                        }
                        Ext.example.msg('Message', error);
                     }
                  } else {
                     me.showDateFormat(response);
                     me.getOffersDealNearByDataView().refresh();
                  }
               }
            });
         };


         var onError = function(error) {
            /*alert('code: ' + error.code + '\n' +
               'message: ' + error.message + '\n');*/
            console.log(error);
         };
         navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            timeout: 10000,
            enableHighAccuracy: true
         });
         if (!this.dealNearByDataView) {
            this.dealNearByDataView = Ext.create('MobileApp.view.Offers.OffersDealNearByDataView');
         }
         this.getOffersSearchNavigationView().push(this.dealNearByDataView);
      }
   },

   onTapProductCategories: function(record) {
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }

         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var language = this.getApplication().getController('SettingsController').lang;
         var key = 'BusType::1';
         var store = Ext.getStore('OffersProdCatListStore');
         this.from = 'prod';
         var params = {
            busTypeId: key
         };
         this.loadStore(store, params);
         if (!this.prodCatList) {
            this.prodCatList = Ext.create('MobileApp.view.Offers.OffersProdCatList');
         }

         if (language == 'fr') {
            this.prodCatList.setTitle('Tiendas');
         } else {
            this.prodCatList.setTitle('Stores');
         }
         this.getOffersSearchNavigationView().push(this.prodCatList);
      }
   },

   onTapProductList: function(thiss, value, index, record) {
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }

         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var store = Ext.getStore('OffersProdCatDataViewStore');
         var categoryId = record.data.key;
         var params = {
            categoryId: categoryId
         };
         this.from = 'prodCat';
         if (!this.prodCatDataView) {
            this.prodCatDataView = Ext.create('MobileApp.view.Offers.OffersProdCatDataView');
         }
         this.prodCatDataView.setTitle(record.data.name);
         var scroll = this.getOffersProdCatDataView().getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -85;
         scroll.scrollTo(null, -85, {
            duration: this.prodCatDataView.down('#pull').getSnappingAnimationDuration()
         });
         this.getOffersProdCatDataView().down('#pull').setState('loading');
         this.getOffersSearchNavigationView().push(this.prodCatDataView);
         this.loadStore(store, params);


         this.dataView = this.getOffersProdCatDataView();
      }
   },

   onTapMalls: function(record) {
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }

         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var store = Ext.getStore('OffersMallsListStore');
         this.from = 'malls';
         //TODO:mall BUSTYPE IS STATIC HERE...
         var params = {
            busTypeId: 'BusType::4'
         };
         if (!this.mallsList) {
            this.mallsList = Ext.create('MobileApp.view.Offers.OffersMallsList');
         }
         if (!this.OffersMallsListSql) {
            var scroll = this.getOffersMallsList().getScrollable().getScroller();
            scroll.refresh();
            scroll.minPosition.y = -130;
            scroll.scrollTo(null, -130, {
               duration: this.getOffersMallsList().down('#pull').getSnappingAnimationDuration()
            });
            this.getOffersMallsList().down('#pull').setState('loading');
            this.loadStore(store, params);
         }


         this.getOffersSearchNavigationView().push(this.mallsList);
         this.dataView = this.getOffersMallsList();
      }
   },

   onTapMallList: function(thiss, value, view, record, touch) {
      if (touch.target.id == "offersSearchMallContactNo") {
         document.location = 'tel:' + record.data.contactNo;
         // this.getPlacesRestTabPanel().getTabBar().show();
      } else {
         if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
         {
            if (!this.offersProfileView) {
               this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
            }

            this.getOffersSearchNavigationView().push(this.offersProfileView);
            this.setProfileView(record);
         } else {
            var locationId = record.data.key;
            var fake = '';
            var locations = [];
            locations.splice(0, 0, locationId, fake);
            this.from = 'mallsList';
            var store = Ext.getStore('OffersMallDataViewStore');
            var params = {
               locations: locations
            };
            if (!this.mallDataView) {
               this.mallDataView = Ext.create('MobileApp.view.Offers.OffersMallDataView');
            }
            this.mallDataView.setTitle(record.data.name);
            var scroll = this.getOffersMallDataView().getScrollable().getScroller();
            scroll.refresh();
            scroll.minPosition.y = -130;
            scroll.scrollTo(null, -130, {
               duration: this.getOffersMallDataView().down('#pull').getSnappingAnimationDuration()
            });
            this.getOffersMallDataView().down('#pull').setState('loading');
            this.getOffersSearchNavigationView().push(this.mallDataView);
            this.loadStore(store, params);
            //this.dataView =
         }
      }
   },

   onTapRestaurants: function(record) {
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }

         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var store = Ext.getStore('OffersRestListStore');
         //TODO:RESTAURANT BUSTYPE IS STATIC HERE...

         var params = {
            busTypeId: 'BusType::2'
         };
         if (!this.restaurantsList) {
            this.restaurantsList = Ext.create('MobileApp.view.Offers.OffersRestList');
         }
         this.from = 'rest';
         this.loadStore(store, params);
         this.getOffersSearchNavigationView().push(this.restaurantsList);
      }
   },

   onTapRestList: function(thiss, value, view, record) {
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }

         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var categoryId = record.data.key;
         var store = Ext.getStore('OffersRestDataViewStore');
         var params = {
            categoryId: categoryId
         };
         this.from = 'restCat';

         if (!this.restaurantsDataView) {
            this.restaurantsDataView = Ext.create('MobileApp.view.Offers.OffersRestDataView');
         }
         this.getOffersSearchNavigationView().push(this.restaurantsDataView);
         var scroll = this.getOffersRestDataView().getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -130;
         scroll.scrollTo(null, -130, {
            duration: this.getOffersRestDataView().down('#pull').getSnappingAnimationDuration()
         });
         this.getOffersRestDataView().down('#pull').setState('loading');
         this.loadStore(store, params);

         this.restaurantsDataView.setTitle(record.data.name);

         this.dataView = this.getOffersRestDataView();
      }
   },

   onTapLocateStoresList: function(view, index, ctx, record) {

      if (!this.placesProfileView) {
         this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
      }
      var img = "resources/images/" + record.data.img;
      this.getPlacesProfImg().setSrc(img);
      this.getNameLab().setHtml('<font size="5px"><b>' + record.data.name + '</b></font>');
      this.placesProfileView.down('#profCat').setHtml(record.data.categories);
      this.placesProfileView.down('#profFavImg').setHtml(record.data.favCount);
      this.placesProfileView.down('#profWorkHours').setHtml("From " + record.data.workingHoursFrom + " To " + record.data.workingHoursTo);
      this.placesProfileView.setTitle(record.data.name);

      this.placesProfileView.down('#mallAdd').setHtml(record.data.address);

      if (record.data.insideMall) {
         this.placesProfileView.down('#mallNameTitle').setHtml(record.data.location);
         this.placesProfileView.down('#mallAddLabel').setHtml("Mall Address:");
         this.placesProfileView.down('#locLevel').setHtml(record.data.locationWithinMall);
      } else {
         this.placesProfileView.down('#mallName').hide();
         this.placesProfileView.down('#mallAddLabel').setHtml("Address:");
         this.placesProfileView.down('#locWithMall').hide();
      }


      var navView = this.getOffersProfileView().getParent();
      navView.push(this.placesProfileView);
   },

   onTapEntertainment: function() {
      if (!this.entertainmentDataView) {
         this.entertainmentDataView = Ext.create('MobileApp.view.Offers.OffersEntertainDataView');
      }

      //TODO:ENTERTAINMENT BUSTYPE IS STATIC HERE...
      var params = {
         busTypeId: 'BusType::3'
      };
      var entertainmentStore = Ext.getStore('OffersEntertainDataViewStore');
      if (!this.OffersEntListSql) {
         var scroll = this.getOffersEntertainDataView().getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -130;
         scroll.scrollTo(null, -130, {
            duration: this.getOffersEntertainDataView().down('#pull').getSnappingAnimationDuration()
         });
         this.getOffersEntertainDataView().down('#pull').setState('loading');
         this.from = 'ent';
         this.loadStore(entertainmentStore, params);
      }

      this.getOffersSearchNavigationView().push(this.entertainmentDataView);
      this.dataView = this.getOffersEntertainDataView();
   },

   onSkipLoginCheck: function() {

      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         var language = this.getApplication().getController('SettingsController').lang;

         if (language == "fr") {
            Ext.Msg.confirm('Confirmar', 'Para darle Me Gusta a un oferta, primero tiene que crear un pefil. ¿Desea hacerlo ya?', function(btn) {
               if (btn == "yes") {
                  window.location.reload();
               } else {
                  return false;
               }
            });

            /*Ext.Msg.show({
               title: 'Para darle Me Gusta a una oferta, primero tiene que crear un pefil.Para darle Me Gusta a una oferta, primero tiene que crear un pefil.Para darle Me Gusta a una oferta, primero tiene que crear un pefil.Para darle Me Gusta a una oferta, primero tiene que crear un pefil.',
               defaultTextHeight: 10,
               multiline: true,
               msg: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
              
               buttons: [{
                  itemId: 'ok',
                  text: 'Si',
                  handler: function () {
                     window.location.reload();
                  }
               }, {
                  itemId: 'cancel',
                  text: 'No',
                  handler: function ()
                  {
                     this.hide();
                     return false;
                  }
               }],
               icon: Ext.Msg.QUESTION
            });*/


         } else {
            Ext.Msg.minWidth = 1000;
            Ext.Msg.confirm('Confirm', 'To like a bid you must first create a profile. Do you want to do it now?', function(btn) {
               if (btn == "yes") {
                  window.location.reload();
               } else {
                  return false;
               }
            });

         }
      }
   },

   onTapLikes: function() {
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin) {
         this.onSkipLoginCheck();
      }
      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0) {
         var loginStore = logStore[0].data;
         if (!this.likesDataView) {
            this.likesDataView = Ext.create('MobileApp.view.Offers.OffersLikesDataView');
         }
         var likedOffers = loginStore.offersLiked;
         var params = {
            offers: likedOffers
         };
         this.from = 'likes';
         var likeStore = Ext.getStore('OffersLikesDataViewStore');
         //  console.log(likedOffers);
         if (!this.OffersLikesDVSql || this.changeLikdedOffers) {
            this.loadStore(likeStore, params);
            this.changeLikdedOffers = false;
         }

         this.getOffersSearchNavigationView().push(this.likesDataView);
      }

   },

   onTapOfferDetail: function(element) {
      if (element.target.id == "offDetBut") {
         var parentRecord = this.getOffersProfileView().getRecord();
         var finePrint = parentRecord.data.finePrint;
         if (!this.offersDetailsView) {
            this.offersDetailsView = Ext.create('MobileApp.view.Offers.OffersOffDetailsView');
         }
         var navView = this.getOffersProfileView().getParent();
         var lang = this.getApplication().getController('SettingsController').lang;
         if (lang == "fr") {
            this.offersDetailsView.setTitle("Descripción");
         } else {
            this.offersDetailsView.setTitle("Description");
         }
         navView.push(this.offersDetailsView);
         //this.offersDetailsView.down('#finePrintText').setHtml(finePrint);
         var finePrint1 = document.getElementById('offerdetailsfinePrint');
         finePrint1.innerHTML = finePrint;
      }
   },

   onTapLocateStore: function() {
      var parentRecord = this.getOffersProfileView().getRecord();
      var location = parentRecord.data.locations;

      if (!this.locateStoresList) {
         this.locateStoresList = Ext.create('MobileApp.view.Offers.OffersLocateStoresList');
      }

      var store = Ext.getStore('OffersLocateStoresListStore');
      var params = {
         locations: location
      };
      this.from = 'locStore';
      this.locateStoreLoad(store, params);
      var navView = this.getOffersProfileView().getParent();
      navView.push(this.locateStoresList);

   },

   locateStoreLoad: function(store, params) {
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success) {
            if (success != true) {
               //Ext.Viewport.setMasked(false);
               if (response) {
                  var data = response.operations[0].request.proxy.reader.jsonData.message;
                  Ext.example.msg('Message', data);
               } else {
                  var errorCode = operation.error.status;
                  var error = 'Something went wrong';
                  if (errorCode == 401) {
                     error = 'Sorry, You are not authorized to access this module.';
                  }
                  Ext.example.msg('Message', error);
               }
            } else {
               // console.log(response);
               var items = store.data.items;
               for (var i = 0; i < items.length; i++) {
                  var record = items[i];
                  this.setMapMarker(record);
               }
            }
         }
      });
   },

   setMapMarker: function(record) {
      // console.log(record);
      var map = this.getOffersLocateStoresList().down('#map').getMap();
      var position = new google.maps.LatLng(record.data.mapLoc[0], record.data.mapLoc[1]);
      var marker = new google.maps.Marker({
         position: position,
         map: map
      });

      marker.setMap(map);
      if (map.marker) {
         map.marker.setMap(null);
      }
      map.marker = marker;
      this.getOffersLocateStoresList().down('#map').setMapCenter(position);
   },

   onTapFacebook: function() {
      var url = this.Record.data.fb;
      if (url != "" && url != null) {
         var string = this.Record.data.fb.substring(0, 4);
         if (string != "http") {
            window.open("http://" + url, '_system');

         } else {
            window.open(url, '_system');

         }
      } else {
         return;
      }

   },

   onTapTwitter: function() {
      var url = this.Record.data.twitter;

      if (url != "" && url != null) {
         var string = this.Record.data.twitter.substring(0, 4);
         if (string != "http") {
            window.open("http://" + url, '_system');

         } else {
            window.open(url, '_system');

         }
      } else {
         return;
      }

   },

   onTapLinkedIn: function() {
      var url = this.Record.data.instagram;

      if (url != "" && url != null) {
         var string = this.Record.data.instagram.substring(0, 4);
         if (string != "http") {
            window.open("http://" + url, '_system');

         } else {
            window.open(url, '_system');

         }
      } else {
         return;
      }

   },

   onTapGoogle: function() {
      var url = this.Record.data.google;
      if (url != "" && url != null) {
         var string = this.Record.data.google.substring(0, 4);
         if (string != "http") {
            window.open("http://" + url, '_system');

         } else {
            window.open(url, '_system');

         }
      } else {
         return;
      }

   },

   onTapYouTube: function() {
      var url = this.Record.data.youtube;
      if (url != "" && url != null) {
         var string = this.Record.data.youtube.substring(0, 4);
         if (string != "http") {
            window.open("http://" + url, '_system');

         } else {
            window.open(url, '_system');

         }
      } else {
         return;
      }
   },

   onTapPinterest: function() {
      var url = this.Record.data.pinterest;
      if (url != "" && url != null) {
         var string = this.Record.data.pinterest.substring(0, 4);
         if (string != "http") {
            window.open("http://" + url, '_system');

         } else {
            window.open(url, '_system');

         }
      } else {
         return;
      }
   },

   onOffersShare: function() {
      var language = this.getApplication().getController('SettingsController').lang;
      var record = this.getOffersProfileView().getRecord();
      var msg = '';
      if (language == 'fr') {
         msg = "" + "Hola, descarga MovilMall en tu celular y aprovecha la oferta de " + record.data.tagLine + ". Visitita www.movil-mall.com para más detalles.";
      } else {
         msg = "" + "Hey, get MovilMall for your cell phone and check " + record.data.tagLine + ". Visit www.movil-mall.com for more details.";
      }
      window.plugins.socialsharing.share(msg, null, record.data.img, null);

   },

   onTapNewEntertainment: function(record) {
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }

         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var language = this.getApplication().getController('SettingsController').lang;
         var key = 'BusType::6';
         var store = Ext.getStore('OffersProdCatListStore');
         this.from = 'ent';
         var params = {
            busTypeId: key
         };
         this.loadStore(store, params);
         if (!this.prodCatList) {
            this.prodCatList = Ext.create('MobileApp.view.Offers.OffersProdCatList');
         }
         if (language == 'fr') {
            this.getOffersProdCatList().setTitle('Entretenimiento');
         } else {
            this.getOffersProdCatList().setTitle('Entertainment');
         }

         this.getOffersSearchNavigationView().push(this.prodCatList);
      }
   },

   onTapService: function(record) {
      if (this.getOffersSearchList().down('#searchField').getValue().length != 0) //for search
      {
         if (!this.offersProfileView) {
            this.offersProfileView = Ext.create('MobileApp.view.Offers.OffersProfileView');
         }

         this.getOffersSearchNavigationView().push(this.offersProfileView);
         this.setProfileView(record);
      } else {
         var language = this.getApplication().getController('SettingsController').lang;
         var key = 'BusType::7';
         var store = Ext.getStore('OffersProdCatListStore');
         this.from = 'ser';
         var params = {
            busTypeId: key
         };
         this.loadStore(store, params);
         if (!this.prodCatList) {
            this.prodCatList = Ext.create('MobileApp.view.Offers.OffersProdCatList');
         }
         if (language == 'fr') {
            this.prodCatList.setTitle('Servicio');
         } else {
            this.prodCatList.setTitle('Service');
         }
         this.getOffersSearchNavigationView().push(this.prodCatList);

      }
   },

   onKeyUpCommentField: function() {
      var textField = this.getOffersProfileView().down('#commentsTextField');
      var button = this.getOffersProfileView().down('#postComment');
      var value = textField.getValue();
      if (value != '') {
         button.setDisabled(false);
      } else {
         button.setDisabled(true);
      }


   },

   onClearCommentField: function() {
      var button = this.getOffersProfileView().down('#postComment');
      button.setDisabled(true);
   },


   /**********container painted events********************************************************/
   onPaintHotDealsView: function() {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getOffersHotDealsNavigationView().getNavigationBar().setTitle("Ofertas Populares");
      } else {
         this.getOffersHotDealsNavigationView().getNavigationBar().setTitle("Popular Offers");
      }

   },

   onPainFavView: function() {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getOffersFavNavigationView().getNavigationBar().setTitle("Ofertas Favoritas");
      } else {
         this.getOffersFavNavigationView().getNavigationBar().setTitle("Favorite Offers");
      }

   },

   onPaintNewView: function() {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getOffersNewNavigationView().getNavigationBar().setTitle("Nuevas Ofertas");
      } else {
         this.getOffersNewNavigationView().getNavigationBar().setTitle("Offers near you");
      }

   },

   onPaintLikeView: function() {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Gustos");
      } else {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Favourites");
      }
   },
   onPaintNearByView: function() {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Ofertas cerca de tí");
      } else {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Nearby Offers");
      }
   },
   onPaintProdCat: function() {
      /* var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr")
      {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Tiendas");
      } else
      {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Stores");
      }*/
   },
   onPaintSearchList: function() {
      var lang = this.getApplication().getController('SettingsController').lang;
      if (lang == "fr") {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Buscar Ofertas");
      } else {
         this.getOffersSearchNavigationView().getNavigationBar().setTitle("Search Offers");
      }
   }
});