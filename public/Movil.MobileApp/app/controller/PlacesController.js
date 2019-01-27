Ext.define('MobileApp.controller.PlacesController', {
   extend: 'Ext.app.Controller',

   config: {
      views: ['Places.PlacesMainNavigationView',
         'Places.PlacesList',
         'Places.PlacesPanel',
         'Places.PlacesStoresList',
         'Places.PlacesStoresNearByNavigationView',
         'Places.PlacesProfileView',
         'Places.MapOverlay',
         'Places.PlacesStoresHotNavigationView',
         'Places.PlacesStoresHotList',
         'Places.PlacesStoresFavNavigationView',
         'Places.PlacesStoresFavList',
         'Places.PlacesStoresSearchNavigationView',
         'Places.PlacesStoresSearchList',
         'Places.PlacesStoresSearchCatList',
         'Places.PlacesRestTabPanel',
         'Places.PlacesRestNearByNavigationView',
         'Places.PlacesRestNearByList',
         'Places.PlacesRestHotNavigationView',
         'Places.PlacesRestHotList',
         'Places.PlacesRestFavNavigationView',
         'Places.PlacesRestFavList',
         'Places.PlacesRestSearchNavigationView',
         'Places.PlacesRestSearchList',
         'Places.PlacesRestSearchCatList',
         'Places.PlacesMallsList',
         'Places.PlacesMallsCatList',
         'Places.PlacesEntertainmentList',
         'Places.PlacesViewOffersDataView',
         'Places.PlacesOffersAllCommentView',
         'Places.PlacesOffersCommentOverlay',
         'Places.PlacesQRCodeDataView'
      ],
      stores: ['PlacesListStore',
         'PlacesStoresListStore',
         'AddressDataViewStore',
         'PlacesStoresHotListStore',
         'PlacesStoresFavListStore',
         'PlacesStoresSearchListStore',
         'PlacesStoresSearchCatListStore',
         'PlacesRestNearByListStore',
         'PlacesRestHotListStore',
         'PlacesRestFavListStore',
         'PlacesRestSearchListStore',
         'PlacesRestSearchCatListStore',
         'PlacesMallsListStore',
         'PlacesMallsCatListStore',
         'PlacesEntertainmentListStore',
         'PlacesRestNearByListSqlStore',
         'PlacesRestHotListSqlStore',
         'PlacesRestFavListSqlStore',
         'PlacesMallsListSqlStore',
         'PlacesEntertainmentListSqlStore',
         'PlacesSearchByNameStore'
      ],
      models: ['PlacesListModel',
         'PlacesRestNearByListModel',
         'PlacesEntertainmentListModel',
         'PlacesMallsListModel',
         'PlacesRestHotListModel',
         'PlacesRestFavListModel',
         'PlacesStoresSearchCatListModel'],
      refs: {
         map: '#map',
         nameLab: '#nameLab',
         placesProfImg: '#placesProfImg',
         placesProfileView: 'placesprofileview',
         mapOverlay: 'mapoverlay',
         placesSlideBut: '#placesSlideButton',
         placesStoresHotSlideBut: '#placesStoresHotSlideBut',
         placesStoresFavSlideBut: '#placesStoresFavSlideBut',
         placesStoresSearchSlideBut: '#placesStoresSearchSlideBut',
         placesStoresNBSlideBut: '#placesStoresNBSlideBut',
         placesRestNearByBackBut: '#placesRestNearByBackBut',
         placesRestHotBackBut: '#placesRestHotBackBut',
         placesRestFavBackBut: '#placesRestFavBackBut',
         placesRestSearchBackBut: '#placesRestSearchBackBut',
         placesStoresNearByNavigationView: 'placesstoresnearbynavigationview',
         placesStoresHotNavigationView: 'placesstoreshotnavigationview',
         placesStoresFavNavigationView: 'placesstoresfavnavigationview',
         placesMainNavigationView: 'placesmainnavigationview',
         placesOffersProfileView: 'placesoffersprofileview',
         placesStoresSearchNavigationView: 'placesstoressearchnavigationview',
         placesRestNearByNavigationView: 'placesrestnearbynavigationview',
         placesRestHotNavigationView: 'placesresthotnavigationview',
         placesRestFavNavigationView: 'placesrestfavnavigationview',
         placesRestSearchNavigationView: 'placesrestsearchnavigationview',
         placesStoresList: 'placesstoreslist',
         placesStoresHotList: 'placesstoreshotlist',
         placesStoresFavList: 'placesstoresfavlist',
         placesStoresSearchList: 'placesstoressearchlist',
         placesStoresSearchCatList: 'placesstoressearchcatlist',
         placesRestNearByList: 'placesrestnearbylist',
         placesRestHotList: 'placesresthotlist',
         placesRestFavList: 'placesrestfavlist',
         placesRestSearchList: 'placesrestsearchlist',
         placesRestSearchCatList: 'placesrestsearchcatlist',
         placesViewOffersDataView: '#placesViewOffersDataView',
         placesMallsList: 'placesmallslist',
         placesMallsCatList: 'placesmallscatlist',
         placesEntertainmentList: 'placesentertainmentlist',
         placesList: 'placeslist',
         placesNavBar: '#placesNavBar',
         slidelist: 'slidelist',
         profFavImg: '#profFavImg',
         profCat: '#profCat',
         profWorkHours: '#profWorkHours',
         mallNameLabel: '#mallName',
         mallNameTitle: '#mallNameTitle',
         locWithMall: '#locWithMall',
         locLevel: '#locLevel',
         mallAddLabel: '#mallAddLabel',
         mallAdd: '#mallAdd',
         description: '#description',
         placesRestTabPanel: 'placesresttabpanel',
         placesOfferViewDetails: '#placesOfferViewDetails',
         placesOffersAllCommentView: 'placesoffersallcommentView',
         placesOffersCommentOverlay: 'placesofferscommentoverlay',
         placesOffersViewComment: '#placesOffersViewComment',
         placesofferscommentOverlayofView: '#placesofferscommentOverlayofView',
         placesOfferslocateStoreBut: '#placesOfferslocateStoreBut'
      },

      control: {
         placesSlideBut: {
            tap: 'onPlacesSlideButton'
         },
         placesList: {
            itemtap: 'onTapPlacesList'
         },

         /*placesStoresList: {
            itemtap: 'onTapPlacesStoresList'
         },*/
         /*
         //following three functions are added in stores controller...
         */
         /*placesStoresFavList: {
            itemtap: 'onTapPlacesStoresFavList'
         },
         placesStoresSearchList: {
            itemtap: 'onTapPlacesStoresSearchList'
         },
        */
         placesRestNearByList: {
            itemtap: 'onTapPlacesRestNearByList'
         },
         placesRestHotList: {
            itemtap: 'onTapPlacesRestHotList'
         },
         placesRestFavList: {
            itemtap: 'onTapPlacesRestFavList',
            initialize: 'onScrollEndOfRestFavList'
         },
         'placesrestsearchlist #placesRestSearchField': {
            keyup: 'onSearchPlaces',
            clearicontap: 'OnClearText'
         },
         placesRestSearchList: {
            itemtap: 'onTapPlacesRestSearchList'
         },
         placesRestSearchCatList: {
            itemtap: 'onTapPlacesRestSearchCatList',
            initialize: 'onScrollEndOfPlacesRestSearchCatList'
         },
         placesMallsList: {
            itemtap: 'onTapPlacesMallsList',
            initialize: 'onScrollEndOfMallsList'
         },
         placesMallsCatList: {
            itemtap: 'onTapPlacesMallsCatList'
         },
         placesEntertainmentList: {
            itemtap: 'onTapPlacesEntertainmentList',
            initialize: 'onScrollEndOfEntList'
         },
         placesmainnavigationview: {
            push: 'onPlacesNavPush',
            pop: 'onPlacesNavsPop'
         },

         placesRestNearByBackBut: {
            tap: 'onStoresBack'
         },
         placesRestHotBackBut: {
            tap: 'onStoresBack'
         },
         placesRestFavBackBut: {
            tap: 'onStoresBack'
         },
         placesRestSearchBackBut: {
            tap: 'onStoresBack'
         },

         placesRestNearByNavigationView: {
            push: 'onRestNearByNavPush',
            pop: 'onRestNearByNavPop'
         },
         placesRestHotNavigationView: {
            push: 'onRestHotNavPush',
            pop: 'onRestHotNavPop'
         },
         placesRestFavNavigationView: {
            push: 'onRestFavNavPush',
            pop: 'onRestFavNavPop'
         },
         placesRestSearchNavigationView: {
            push: 'onRestSearchNavPush',
            pop: 'onRestSearchNavPop'
         },
         placeslist: {
            swipe: 'onSwipePlacesList',
            tap: 'onTapPlacesLis'
         },
         'placesprofileview #map': {
            tap: 'onMap'
         },/*,
            },
            painted: 'onRenderPlacesMap'*/
         map: {
            tap: 'onMap'
         },
         placesresttabpanel: {
            activeitemchange: 'onChangeRestTabActiveItem'
         },
         'placesprofileview #placeViewDealsBut': {
            tap: 'onPlacesProfViewViewOffers'
         },
         placesViewOffersDataView: {
            itemsingletap: 'onSelectViewDealDataViewImage'
         },
         'placesoffersprofileview #placesOfferLike': {
            tap: 'onLikeOffer'
         },
         'placesoffersprofileview #postComment': {
            tap: 'onPostComment'
         },
         'placesOfferViewDetails': {
            tap: 'onTapOfferDetail'
         },
         'placesoffersprofileview #placesOffersviewAllCom': {
            tap: 'onViewAllCom'
         },
         'placesprofileview #favFrmView': {
            tap: 'onFavFromProfView'
         },
         'placesresthotlist #pull': {
            latestfetched: 'onPlacesRestHotListPull'
         },
         'placesmallslist #pull': {
            latestfetched: 'onPlacesMallsListPull'
         },
         'placesentertainmentlist #pull': {
            latestfetched: 'onPlacesEntListPull'
         },
         placesresthotlist: {
            initialize: 'onScrollEndOfRestHotList'
         },
         'placesrestsearchcatlist #pull': {
            beforePullRefresh: 'onPlacesRestSearchCatListPull',
            latestfetched: 'onPlacesRestSearchCatListAfterPull'
         },
         placesOffersCommentOverlay: {
            itemtap: 'onTapOverlay'
         },
         placesOffersViewComment: {
            itemtaphold: 'onTapCommemt'
         },
         placesofferscommentOverlayofView: {
            itemtaphold: 'onTapCommemt'
         },
         'placesoffersprofileview #placesOffersShareBut': {
            tap: 'onShareOffer'
         },
         'placesoffersprofileview #placesfaceBook': {
            tap: 'onTapFacebook'
         },
         'placesoffersprofileview #placesgoogle': {
            tap: 'onTapGoogle'
         },
         'placesoffersprofileview #placeslinkedin': {
            tap: 'onTapLinkedIn'
         },
         'placesoffersprofileview #placespinterest': {
            tap: 'onTapPinterest'
         },
         'placesoffersprofileview #placestwitter': {
            tap: 'onTapTwitter'
         },
         'placesoffersprofileview #placesyoutube': {
            tap: 'onTapYouTube'
         },
         'placesoffersprofileview #coupenBut': {
            tap: 'onTapCoupen'
         }/*,
         'placesoffersprofileview': {
            painted: 'onRenderesQRCoupenView'
         }*/
      }
   },

   init: function()
   {
      this.locId;
      this.hotRestSql;
      this.favRestSql;
      this.favRestChange;
      this.mallSql;
      this.from;
      this.list;
      this.entSql;
      this.Record;

      Ext.getStore('PlacesRestHotListStore').on({
         scope: this,
         load: this.onPlacesRestHotListStore
      });

      Ext.getStore('PlacesRestFavListStore').on({
         scope: this,
         load: this.onPlacesRestHotListStore
      });

      Ext.getStore('PlacesMallsListStore').on({
         scope: this,
         load: this.onPlacesRestHotListStore
      });

      Ext.getStore('PlacesEntertainmentListStore').on({
         scope: this,
         load: this.onPlacesRestHotListStore
      });

      Ext.getStore('PlacesRestNearByListStore').on({
         scope: this,
         load: this.onPlacesRestNearByListStore
      });
      
   },

   onSearchPlaces: function(field)
   {
      if (field.getValue().length >= 2)
      {
         var params = {
            busTypeId: 'BusType::2',
            name: field.getValue()
         };
         var store = Ext.getStore('PlacesSearchByNameStore');
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
                  }
               }
            }
         });
         if (store.data.items.length > 0)
         {
            var searchStore = Ext.getStore('PlacesRestSearchListStore');
            searchStore.removeAll();
            for (var i = 0; i < store.data.items.length; i++)
            {
               searchStore.add(store.data.items[i]);
            }
         }
      } else if (field.getValue().length == 0)
      {
         this.OnClearText();
      }
   },

   OnClearText: function()
   {
      var key = this.getPlacesList().getSelection()[0].data.busTypeId;
      var search = Ext.getStore('PlacesRestSearchListStore');
      var params = { busTypeId: key };
      this.loadRestLocationsStore(search, params);
      Ext.getStore('PlacesSearchByNameStore').removeAll();
   },
   
   onPlacesRestHotListStore: function(store)
   {
      var ext;
      var from = this.from;
      var proxyStore = store;
      if (proxyStore.getInitialConfig().storeId == 'PlacesRestHotListStore')
      {
         this.hotRestSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table
         ext = 1;
      }

      if (proxyStore.getInitialConfig().storeId == 'PlacesRestFavListStore')
      {
         this.favRestSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table
         ext = 2;
      }

      if (proxyStore.getInitialConfig().storeId == 'PlacesMallsListStore')
      {
         this.mallSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table

      }

      if (proxyStore.getInitialConfig().storeId == 'PlacesEntertainmentListStore')
      {
         this.entSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table
         ext = '';
      }
      var proxyStoreString = proxyStore.getInitialConfig().storeId;
      var sqlStore = Ext.getStore(proxyStoreString.replace('Store', 'SqlStore'));

      if (from != 'scroll')             //prevents store to clear if its called from scrollend.
      {
         var db = openDatabase("Sencha", "", "Sencha", 200000);
         db.transaction(function (e) {
            e.executeSql('DELETE FROM ' + proxyStoreString.replace('Store', 'Model'), [], function () { }, function (tx, error) { });
         });
         sqlStore.removeAll();
      }

      proxyStore.each(function(item)
      {
         var exist = sqlStore.find('key', item.data.key);
         if (exist == -1)
         {
            sqlStore.add(item);
            this.setFavBut(sqlStore, ext);
         }


      }, this);
      if (from != 'scroll')              //prevents entry of record into local web sql table and do entry only first time load.
      {
         sqlStore.sync({
            scope: this,
            success: function()
            {
               this.setFavBut(sqlStore, ext);
            }
         });
      }      
      
   
   },

   onPlacesRestNearByListStore: function(store)
   {
      var ext = '';
      this.setFavBut(store, ext);
   },

   setFavBut: function(sqlStore, ext)
   {
      var fav;
      var loginStore = Ext.getStore('LoginStore');
      var locArray = loginStore.data.items[0].data.favLoc;
      for (var i = 0; i < locArray.length; i++)
      {
         for (var j = 0; j < sqlStore.data.items.length; j++)
         {
            if (locArray[i] == sqlStore.data.items[j].data.key)
            {
               fav = document.getElementById(sqlStore.data.items[j].data.key + ext);
               fav.style.backgroundPosition = '0px 43%';
            }
         }
      }
   },

   onPlacesRestHotListPull: function()
   {
      this.from = "";
      var key = this.getPlacesList().getSelection()[0].data.busTypeId;
      var proxyStore = Ext.getStore('PlacesRestHotListStore');
      var ext = 1;
      var params = { busTypeId: key };
      this.loadRestLocationsStore(proxyStore, params, ext);

   },

   onPlacesEntListPull: function()
   {
      this.from = "";
      var key = this.getPlacesList().getSelection()[0].data.busTypeId;
      var proxyStore = Ext.getStore('PlacesEntertainmentListStore');
      var ext = '';
      var params = { busTypeId: key };
      this.loadRestLocationsStore(proxyStore, params, ext);

   },

   onPlacesRestSearchCatListPull: function()
   {
      var store = Ext.getStore('PlacesRestSearchCatListStore');
      store.removeAll();
      if (this.getPlacesRestSearchList().getSelection()[0])
      {
         var categoryId = this.getPlacesRestSearchList().getSelection()[0].data.key;
         var params = store.getProxy().getExtraParams();
         params.categoryId = categoryId;
      }
   },

   onPlacesRestSearchCatListAfterPull: function()
   {
      var store = Ext.getStore('PlacesRestSearchCatListStore');
      var ext = 3;
      this.setFavBut(store, ext);
   },

   onPlacesMallsListPull: function()
   {
      this.from = "";
      var store = Ext.getStore('PlacesMallsListStore');
      store.removeAll();
      if (this.getPlacesList().getSelection()[0])
      {
         var key = this.getPlacesList().getSelection()[0].data.busTypeId;
         var params = { busTypeId: key };
         this.loadLocationsStore(store, params);
      }
   },

   onScrollEndOfRestHotList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfRestFavList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfPlacesRestSearchCatList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfMallsList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfEntList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScroll: function(scroller, x, y)
   {
      if (y >= scroller.maxPosition.y)
      {
         this.from = 'scroll';
         // var sqlStore = Ext.getStore('OffersHotDealsDataViewSqlStore');
         var sqlStore = this.list.getStore();
         if (sqlStore.getInitialConfig().storeId.indexOf('Sql') != -1)
         {
            var proxyStoreString = sqlStore.getInitialConfig().storeId;
            var proxyStore = Ext.getStore(proxyStoreString.replace('Sql', ''));
            var params;
            var key;
            var ext;
            var busTypeId;
            var favCount;

            if (sqlStore.last())
            {

               key = sqlStore.last().data.key;

               if (this.list.xtype == 'placesresthotlist')
               {
                  favCount = sqlStore.last().data.favCount;
                  busTypeId = this.getPlacesList().getSelection()[0].data.busTypeId;
                  ext = 1;
                  params = { favCount: favCount, busTypeId: busTypeId, key: key };

               }

               if (this.list.xtype == 'placesrestfavlist')
               {
                  favCount = sqlStore.last().data.favCount;
                  busTypeId = this.getPlacesList().getSelection()[0].data.busTypeId;
                  ext = 2;
                  params = { favCount: favCount, busTypeId: busTypeId, key: key };

               }

               if (this.list.xtype == 'placesmallslist')
               {
                  favCount = sqlStore.last().data.favCount;
                  busTypeId = this.getPlacesList().getSelection()[0].data.busTypeId;
                  params = { favCount: favCount, busTypeId: busTypeId, key: key };
                  this.loadLocationsStore(proxyStore, params);
                  return;
               }

               if (this.list.xtype == 'placesentertainmentlist')
               {
                  favCount = sqlStore.last().data.favCount;
                  busTypeId = this.getPlacesList().getSelection()[0].data.busTypeId;
                  ext = '';
                  params = { favCount: favCount, busTypeId: busTypeId, key: key };

               }

               this.loadRestLocationsStore(proxyStore, params, ext);
            }
         } else
         {
            var categoryId;
            if (sqlStore.last())
            {
               key = sqlStore.last().data.key;

               if (this.list.xtype == 'placesrestsearchcatlist')
               {
                  categoryId = this.getPlacesRestSearchList().getSelection()[0].data.key;
                  createdAt = sqlStore.last().data.createdAt;
                  ext = '3';
                  params = { createdAt: createdAt, key: key, categoryId: categoryId };
               }

               //vparams;


               this.loadRestLocationsStore(sqlStore, params, ext, true);

            }

         }


      }

   },

   onSwipePlacesList: function(event)
   {
      if (event.direction == "left")
      {
         var me = this,
             mainEl = me.getSlidelist().element;
         if (mainEl.hasCls('out'))
         {
            mainEl.removeCls('out').addCls('in');
         }
      }
   },

   onTapPlacesLis: function(touch)
   {
      if (touch.target.childNodes.length == 6)
      {
         this.setSliderIn();
      }
   },

   onMap: function()
   {
      if (!this.mapOverlay)
      {
         this.mapOverlay = Ext.create('MobileApp.view.Places.MapOverlay');
      }
      this.mapOverlay.show();
   },

   onStoresBack: function()
   {
      this.showStoresNavBar();
      this.getPlacesMainNavigationView().pop();
   },

   onRestNearByNavPush: function()
   {
      this.hideRestNearByBackButton();
     
   },

   onRestNearByNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesrestnearbylist")
      {
         this.getPlacesRestTabPanel().getTabBar().show();
         this.showRestNearByBackButton();

      }
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onRestHotNavPush: function()
   {
      this.hideRestHotBackButton();

   },

   onRestHotNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesresthotlist")
      {
         this.getPlacesRestTabPanel().getTabBar().show();
         this.showRestHotBackButton();

      }
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onRestFavNavPush: function()
   {
      this.hideRestFavBackButton();

   },

   onRestFavNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesrestfavlist")
      {
         this.getPlacesRestTabPanel().getTabBar().show();
         this.showRestFavBackButton();

      }
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onRestSearchNavPush: function()
   {
      this.hideRestSearchBackButton();

   },

   onRestSearchNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesrestsearchlist")
      {
         this.getPlacesRestTabPanel().getTabBar().show();
         this.showRestSearchBackButton();

      }
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onPlacesNavsPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placeslist")
      {
         this.showPlacesSlideButton();

      }
    //  console.log(view);
   },

   onPlacesNavPush: function(view, item)
   {
      if (item.xtype != 'placesmallslist' && item.xtype != 'placesmallscatlist' && item.xtype != 'placesprofileview'
         && item.xtype != 'placesentertainmentlist' /*&& item.xtype != 'moviesdataview'*/
         /*&& item.xtype != 'movieslist' && item.xtype != 'moviesnearbynavigationview'*/ && item.xtype != 'placesviewoffersdataview' && item.xtype != 'placesoffersprofileview' && item.xtype != 'offersoffdetailsview' && item.xtype != 'placesoffersallcommentview' && item.xtype != 'placesqrcodedataview')
      {
         this.hideStoresNavBar();
      } else
      {
         this.hidePlacesSlideButton();
      }
     // console.log(view);
   },

   onPlacesSlideButton: function()
   {
      this.getApplication().getController('MainController').toggleNav();

   },

   onTapPlacesList: function(view, index, list, record)
   {

      var slider = this.setSliderIn();
      if (slider != false)
      {
         if (record.data.busTypeId == 'BusType::5')
         {
            // this.onTapPlacesStores();
            this.getApplication().getController('MoviesController').onTapPlacesMovies(record.data.busTypeId);

         }

         if (record.data.busTypeId == 'BusType::2')
         {
            this.onTapPlacesRestaurants(record.data.busTypeId);
         }

         if (record.data.busTypeId == 'BusType::4')
         {
            this.onTapPlacesMalls(record.data.busTypeId);
         }

         if (record.data.busTypeId == 'BusType::3')
         {
            this.onTapPlacesEntertainments(record.data.busTypeId);
         }
      }

   },

   onTapPlacesMovies: function(key)
   {
      //if (!this.placesMoviesTabPanel)
      //{
      //   this.placesMoviesTabPanel = Ext.create('MobileApp.view.Movies.MoviesTabPanel');
      //}
      //this.getPlacesMainNavigationView().push(this.placesMoviesTabPanel);
      //var store = Ext.getStore('MoviesDataViewStore');
      //var params = { busTypeId: key };
      //this.loadLocationsStore(store, params);
   },

   onTapPlacesMalls: function(key)
   {
      if (!this.placesMallsList)
      {
         this.placesMallsList = Ext.create('MobileApp.view.Places.PlacesMallsList');
      }

      var store = Ext.getStore('PlacesMallsListStore');
      var params = { busTypeId: key };
      this.list = this.getPlacesMallsList();
      if (!this.mallSql)
      {
         var scroll = this.list.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -130;
         scroll.scrollTo(null, -130, { duration: this.list.down('#pull').getSnappingAnimationDuration() });
         this.list.down('#pull').setState('loading');
         this.from = 'mall';
         this.loadLocationsStore(store, params);
      }
      this.getPlacesMainNavigationView().push(this.placesMallsList);
   },

   onTapPlacesRestaurants: function(key)
   {
      if (!this.placesRestTabPanel) {
         this.placesRestTabPanel = Ext.create('MobileApp.view.Places.PlacesRestTabPanel');
      }

      this.getPlacesMainNavigationView().push(this.placesRestTabPanel);
      this.placesRestTabPanel.setActiveItem(0);
      var store = Ext.getStore('PlacesRestHotListStore');
      var ext = 1;
      var params = { busTypeId: key };
      this.list = this.getPlacesRestHotList();
      if (!this.hotRestSql || this.favRestChange) {
         var scroll = this.list.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -90;
         scroll.scrollTo(null, -90, { duration: this.list.down('#pull').getSnappingAnimationDuration() });
         this.list.down('#pull').setState('loading');
         this.from = 'hot';
         this.favRestChange = false;
         this.loadRestLocationsStore(store, params, ext);
      } else {
         this.setFavBut(store, ext);
      }
      

      /*there is a bug in sencha touch in which an extra .x-toolbar-dark  class get's added to tab panel items
     and hence due to this class dark orange color appears as per our theme instead of light orange even though 
     we have added ui:'light' config  property.
     Below is a temporary workaround implemented for removing .x-toolbar-dark class from dom of tab panel*/
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');

      


   },

   onTapPlacesEntertainments: function(key)
   {
      if (!this.placesEntertainmentList)
      {
         this.placesEntertainmentList = Ext.create('MobileApp.view.Places.PlacesEntertainmentList');
      }
      this.list = this.getPlacesEntertainmentList();
      var store = Ext.getStore('PlacesEntertainmentListStore');
      var ext = '';
      var params = { busTypeId: key };
      if (!this.entSql)
      {
         var scroll = this.list.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -130;
         scroll.scrollTo(null, -130, { duration: this.list.down('#pull').getSnappingAnimationDuration() });
         this.list.down('#pull').setState('loading');
         this.from = 'Ent';
         this.loadRestLocationsStore(store, params, ext);
      }
      this.getPlacesMainNavigationView().push(this.placesEntertainmentList);
   },

   onTapPlacesEntertainmentList: function(view, index, ctx, record, touch)
   {
      this.locId = record.data.key;
      var locationId = record.data.key;
      if (touch.target.id == "placesEntertainmentContactNo") {
         document.location = 'tel:' + record.data.contactNo;
         //this.getPlacesRestTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key)
      {
         if (!this.placesProfileView)
         {
            this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
         }


         this.setMapMarker(record);
         this.placesProfileView.setTitle(record.data.name);
         this.getPlacesMainNavigationView().push(this.placesProfileView);
         this.setProfileViewValues(record, this.placesProfileView);
      } else
      {
         var ext = '';
         this.setFavLocButton(record, locationId, ext);
      }
   },

   onTapPlacesStoresFavList: function(view, index, ctx, record)
   {
      if (!this.placesProfileView)
      {
         this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
      }
      var img = "resources/images/" + record.data.img;
      this.getPlacesProfImg().setSrc(img);
      this.getNameLab().setHtml('<font size="5px"><b>' + record.data.name + '</b></font>');
      this.placesProfileView.setTitle(record.data.name);
      this.getPlacesStoresFavNavigationView().push(this.placesProfileView);
   },

   onTapPlacesStoresSearchList: function(view, index, ctx, record)
   {
      if (!this.placesStoresSearchCatList)
      {
         this.placesStoresSearchCatList = Ext.create('MobileApp.view.Places.PlacesStoresSearchCatList');
      }
      this.placesStoresSearchCatList.setTitle(record.data.title);
      var store = Ext.getStore('PlacesStoresSearchCatListStore');
      var categoryId = record.data.key;

      store.load({
         scope: this,
         params: { categoryId: categoryId },
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
            }
         }
      });
      this.getPlacesStoresSearchNavigationView().push(this.placesStoresSearchCatList);

   },

   onTapPlacesRestNearByList: function(view, index, ctx, record, touch)
   {
      this.getPlacesRestTabPanel().getTabBar().hide();
      this.locId = record.data.key;
      var locationId = record.data.key;
      if (touch.target.id == "placesResNearByContactNo") {
         document.location = 'tel:' + record.data.contactNo;
         this.getPlacesRestTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key)
      {
         if (!this.placesProfileView)
         {
            this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
         }
         this.placesProfileView.setTitle(record.data.name);
         this.getPlacesRestNearByNavigationView().push(this.placesProfileView);
         this.setProfileViewValues(record, this.placesProfileView);
         this.setMapMarker(record);
      } else
      {
         this.getPlacesRestTabPanel().getTabBar().show();
         var ext = '';
         this.setFavLocButton(record, locationId, ext);
      }
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');

   },

   setFavLocButton: function(record, locationId, ext)
   {
      var toggled;
      this.favRestChange = true;
      var fav = document.getElementById(record.data.key + ext);
      if (fav.style.backgroundPosition == '-26px 43%' || fav.style.backgroundPosition == '')
      {
         fav.style.backgroundPosition = "0px 43%";
         toggled = true;

         //adding records to sql store
         this.setRecordToFavSqlStore(record);
         record.data.favCount = parseInt(record.data.favCount) + 1;
         this.setFavLocation(toggled, locationId);
      } else
      {
         fav.style.backgroundPosition = "-26px 43%";
         toggled = false;

         //remove records from sql store
         this.removeFromSqlStore(record);
         record.data.favCount = parseInt(record.data.favCount) - 1;
         this.setFavLocation(toggled, locationId);
      }

      //load offers fav store while changes in user favourite places
      this.getApplication().getController('OffersController').favOffersSql = false;
   },

   setRecordToFavSqlStore: function(record)
   {
      var favSqlStore = Ext.getStore('PlacesRestFavListSqlStore');
      var favSqlRec = Ext.create('MobileApp.model.PlacesRestFavListModel');
      //var ext = 2;
      favSqlRec.data.key = record.data.key;
      favSqlRec.data.name = record.data.name;
      favSqlRec.data.location = record.data.location;
      favSqlRec.data.cityName = record.data.cityName;
      favSqlRec.data.brandName = record.data.brandName;
      favSqlRec.data.logo = record.data.logo;
      favSqlRec.data.mapLoc = record.data.mapLoc;
      favSqlRec.data.favCount = record.data.favCount;
      favSqlRec.data.categories = record.data.categories;
      favSqlRec.data.workingHoursFrom = record.data.workingHoursFrom;
      favSqlRec.data.workingHoursTo = record.data.workingHoursTo;
      favSqlRec.data.insideMall = record.data.insideMall;
      favSqlRec.data.locationWithinMall = record.data.locationWithinMall;
      favSqlRec.data.description = record.data.description;
      favSqlRec.data.mallId = record.data.mallId;

      favSqlStore.add(favSqlRec);
      //this.setFavBut(favSqlStore, ext);
      favSqlStore.sync();
   },

   removeFromSqlStore: function(record)
   {
      var db = openDatabase("Sencha", "", "Sencha", 200000);
      db.transaction(function(e)
      {
         e.executeSql('DELETE FROM PlacesRestFavListModel WHERE key="' + record.data.key + '"', [], function()
         {
         }, function(tx, error)
         {
         });
      });
      var favSqlStore = Ext.getStore('PlacesRestFavListSqlStore');
      var index = favSqlStore.find('key', record.data.key);
      favSqlStore.removeAt(index);

   },

   onTapPlacesRestHotList: function(view, index, ctx, record, touch)
   {
      this.getPlacesRestTabPanel().getTabBar().hide();
      this.locId = record.data.key;
      var locationId = record.data.key;
      if (touch.target.id == "placesResHotContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         this.getPlacesRestTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key + '1')
         {
            if (!this.placesProfileView)
            {
               this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
            }

            this.setMapMarker(record);
            this.placesProfileView.setTitle(record.data.name);
            this.getPlacesRestHotNavigationView().push(this.placesProfileView);
            this.setProfileViewValues(record, this.placesProfileView);
         } else
         {
            this.getPlacesRestTabPanel().getTabBar().show();
            var ext = 1;
            this.setFavLocButton(record, locationId, ext);
         }
      
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onTapPlacesRestFavList: function(view, index, ctx, record, touch)
   {
      this.getPlacesRestTabPanel().getTabBar().hide();
      this.locId = record.data.key;
      var locationId = record.data.key;
      if (touch.target.id == "placesResFavContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         this.getPlacesRestTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key + '2')
         {
            if (!this.placesProfileView)
            {
               this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
            }

            this.setMapMarker(record);
            this.getPlacesRestFavNavigationView().push(this.placesProfileView);
            this.setProfileViewValues(record, this.placesProfileView);
         } else
         {
            this.getPlacesRestTabPanel().getTabBar().show();
            var ext = 2;
            this.setFavLocButton(record, locationId, ext);
         }
      
      var resTabBar = this.getPlacesRestTabPanel().items.items[1].element.dom.className;
      this.getPlacesRestTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onTapPlacesRestSearchList: function(view, index, ctx, record)
   {
      this.getPlacesRestTabPanel().getTabBar().hide();
      if (this.getPlacesRestSearchList().down('#placesRestSearchField').getValue().length != 0)
      {
         if (!this.placesProfileView)
         {
            this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
         }
         this.placesProfileView.setTitle(record.data.name);
         this.getPlacesRestSearchNavigationView().push(this.placesProfileView);
         this.setProfileViewValues(record, this.placesProfileView);
      } else
      {
         if (!this.placesRestSearchCatList)
         {
            this.placesRestSearchCatList = Ext.create('MobileApp.view.Places.PlacesRestSearchCatList');
         }
         
         this.placesRestSearchCatList.setTitle(record.data.name);

         var store = Ext.getStore('PlacesRestSearchCatListStore');
         var params = { categoryId: record.data.key };
         var ext = '3';
         this.list = this.getPlacesRestSearchCatList();
         var scroll = this.list.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -85;
         scroll.scrollTo(null, -85, { duration: this.list.down('#pull').getSnappingAnimationDuration() });
         this.list.down('#pull').setState('loading');
         this.getPlacesRestSearchNavigationView().push(this.placesRestSearchCatList);
         this.loadPlacesMallsCatListStore(store, params, ext);

      }
   },

   onTapPlacesRestSearchCatList: function(view, index, ctx, record, touch)
   {
      this.locId = record.data.key;
      var locationId = record.data.key;
      if (touch.target.id == "placesResSearchCatContactNo") {
         document.location = 'tel:' + record.data.contactNo;
         //this.getPlacesRestTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key + '3')
      {
         if (!this.placesProfileView)
         {
            this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
         }

         this.setMapMarker(record);
         this.placesProfileView.setTitle(record.data.name);
         this.getPlacesRestSearchNavigationView().push(this.placesProfileView);
         this.setProfileViewValues(record, this.placesProfileView);


      } else
      {
         var ext = '3';
         this.setFavLocButton(record, locationId, ext);
      }
   },

   onTapPlacesMallsList: function(view, index, ctx, record,touch)
   {
      if (touch.target.id == "placesMallContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         //this.getPlacesRestTabPanel().getTabBar().show();
      } else
      {
         if (!this.placesMallsCatList)
         {
            this.placesMallsCatList = Ext.create('MobileApp.view.Places.PlacesMallsCatList');
         }

         this.placesMallsCatList.setTitle(record.data.name);
         this.getPlacesMainNavigationView().push(this.placesMallsCatList);
         var store = Ext.getStore('PlacesMallsCatListStore');
         var params = { mallId: record.data.key };
         var ext = '';
         this.loadPlacesMallsCatListStore(store, params, ext);
      }
   },

   onTapPlacesMallsCatList: function(view, index, ctx, record, touch)
   {
      var locationId = record.data.key;
      this.locId = record.data.key;
      if (touch.target.id == "placesMallCatContactNo") {
         document.location = 'tel:' + record.data.contactNo;
         //  this.getPlacesRestTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key)
      {
         if (!this.placesProfileView)
         {
            this.placesProfileView = Ext.create('MobileApp.view.Places.PlacesProfileView');
         }

         this.setMapMarker(record);
         this.placesProfileView.setTitle(record.data.name);
         this.getPlacesMainNavigationView().push(this.placesProfileView);
         this.setProfileViewValues(record, this.placesProfileView);
      } else
      {
         var ext = '';
         this.setFavLocButton(record, locationId, ext);
      }
   },

   showPlacesSlideButton: function()
   {
      var placesSlideButton = this.getPlacesSlideBut();
      placesSlideButton.show();
   },

   hidePlacesSlideButton: function()
   {
      var placesSlideButton = this.getPlacesSlideBut();
      if (placesSlideButton.isHidden())
      {
         return;
      }
      placesSlideButton.hide();
   },

   hideRestNearByBackButton: function()
   {
      var restNearByBackBut = this.getPlacesRestNearByBackBut();
      if (restNearByBackBut.isHidden())
      {
         return;
      }
      restNearByBackBut.hide();
   },

   showRestNearByBackButton: function()
   {
      this.getPlacesRestNearByBackBut().show();
   },

   hideRestHotBackButton: function()
   {
      var restHotBackBut = this.getPlacesRestHotBackBut();
      if (restHotBackBut.isHidden())
      {
         return;
      }
      restHotBackBut.hide();
   },

   showRestHotBackButton: function()
   {
      this.getPlacesRestHotBackBut().show();
   },

   hideRestFavBackButton: function()
   {
      var restFavBackBut = this.getPlacesRestFavBackBut();
      if (restFavBackBut.isHidden())
      {
         return;
      }
      restFavBackBut.hide();
   },

   showRestFavBackButton: function()
   {
      this.getPlacesRestFavBackBut().show();
   },

   hideRestSearchBackButton: function()
   {
      var restSearchBackBut = this.getPlacesRestSearchBackBut();
      if (restSearchBackBut.isHidden())
      {
         return;
      }
      restSearchBackBut.hide();
   },

   showRestSearchBackButton: function()
   {
      this.getPlacesRestSearchBackBut().show();
   },

   setSliderIn: function()
   {
      var me = this,
          mainEl = me.getSlidelist().element;
      if (mainEl.hasCls('out'))
      {
         mainEl.removeCls('out').addCls('in');
         return false;
      }
   },

   setFavLocation: function(toggled, locationId)
   {
      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      var userId = loginStore.key;
      Ext.Ajax.request({
         url: '../UserLocation/SetFavLocation',
         method: 'POST',
         scope: this,
         params: { userId: userId, toggled: toggled, locationId: locationId },
         success: function(response)
         {
            // myMask.hide();
            if (toggled)
            {
               Ext.getStore('LoginStore').data.items[0].data.favLoc.push(locationId);
            }
            if (!toggled)
            {
               var index = Ext.getStore('LoginStore').data.items[0].data.favLoc.indexOf(locationId);
               Ext.getStore('LoginStore').data.items[0].data.favLoc.splice(index, 1);
            }


         }
      });
   },

   loadLocationsStore: function(store, params)
   {
      /* if (this.from != 'scroll' && this.from != '') {
         Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
      }*/
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               Ext.Viewport.setMasked(false);
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
              // Ext.Viewport.setMasked(false);
               if (this.from == 'mall' || this.from == '') {
                  var scroll = this.list.getScrollable().getScroller();
                  scroll.minPosition.y = 0;
                  this.list.down('#pull').setState('loaded');
                  this.list.down('#pull').setState('release');
               }
            }
         }
      });
   },

   loadPlacesMallsCatListStore: function(store, params, ext)
   {
      //  Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               // Ext.Viewport.setMasked(false);
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
               //   Ext.Viewport.setMasked(false);
               var fav;
               var loginStore = Ext.getStore('LoginStore');
               var locArray = loginStore.data.items[0].data.favLoc;
               for (var i = 0; i < locArray.length; i++)
               {
                  for (var j = 0; j < store.data.items.length; j++)
                  {
                     if (locArray[i] == store.data.items[j].data.key)
                     {
                        fav = document.getElementById(store.data.items[j].data.key + ext);
                        fav.style.backgroundPosition = "0px 43%";
                     }
                  }
               }

               if (this.list.xtype == 'placesrestsearchcatlist')
               {
                  var scroll = this.list.getScrollable().getScroller();
                  scroll.minPosition.y = 0;
                  scroll.refresh();
                  this.list.down('#pull').setState('loaded');
                  this.list.down('#pull').setState('release');

               }
               
               if (this.list.xtype == 'placesstoressearchcatlist') {
                  var scroll = this.list.getScrollable().getScroller();
                  scroll.minPosition.y = 0;
                  this.list.down('#pull').setState('loaded');
                  this.list.down('#pull').setState('release');

               }
            }
         }
      });
   },

   loadRestLocationsStore: function(store, params, ext, addRec)
   {
      if (!addRec)
      {
         addRec = false;
      }
      if (this.from == 'fav' || this.from == 'search')
      {
         Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
      }
      store.load({
         scope: this,
         params: params,
         addRecords: addRec,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               Ext.Viewport.setMasked(false);
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
               Ext.Viewport.setMasked(false);
               var fav;
               var loginStore = Ext.getStore('LoginStore');
               var locArray = loginStore.data.items[0].data.favLoc;
               for (var i = 0; i < locArray.length; i++)
               {
                  for (var j = 0; j < store.data.items.length; j++)
                  {
                     if (locArray[i] == store.data.items[j].data.key)
                     {
                        fav = document.getElementById(store.data.items[j].data.key + ext);
                        fav.style.backgroundPosition = '0px 43%';
                     }
                  }


               }

               if (this.from == 'hot' || this.from == '')
               {
                  var scroll = this.list.getScrollable().getScroller();
                  scroll.minPosition.y = 0;
                  this.list.down('#pull').setState('loaded');
                  this.list.down('#pull').setState('release');
               }
               
               if (this.from == 'Ent') {
                  var scroll = this.list.getScrollable().getScroller();
                  scroll.minPosition.y = 0;
                  this.list.down('#pull').setState('loaded');
                  this.list.down('#pull').setState('release');
               }
               
               
            }
         }
      });
   },

   onChangeRestTabActiveItem: function(view, active)
   {
      var activeView = active.xtype;
      var key = this.getPlacesList().getSelection()[0].data.busTypeId;
      var loginStore = Ext.getStore('LoginStore');
      var locArray = loginStore.data.items[0].data.favLoc;
      if (activeView == 'placesresthotnavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         var store = Ext.getStore('PlacesRestHotListStore');
         var ext = 1;
         var params = { busTypeId: key };
         this.list = this.getPlacesRestHotList();
         if (!this.hotRestSql || this.favRestChange)
         {
            var scroll = this.list.getScrollable().getScroller();
            scroll.refresh();
            scroll.minPosition.y = -90;
            scroll.scrollTo(null, -90, { duration: this.list.down('#pull').getSnappingAnimationDuration() });
            this.list.down('#pull').setState('loading');
            this.from = 'hot';
            this.favRestChange = false;
            this.loadRestLocationsStore(store, params, ext);
         } else
         {
            this.setFavBut(store, ext);
         }


      }

      if (activeView == 'placesrestnearbynavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         var store = Ext.getStore('PlacesRestNearByListStore');

         //var ext = '';
         //var params = { busTypeId: key };
         //this.loadRestLocationsStore(store, params, ext);
         var onSuccess = function(position)
         {
            var lat = position.coords.latitude;
            var longitude = position.coords.longitude;
            var para = {
               latitude: lat,
               longitude: longitude,
               busTypeId: key
            };
            store.load({
               scope: this,
               params: para,
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
                  }
               }
            });
         };

         var onError = function(error)
         {
            console.log(error);
         };

         navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 10000, enableHighAccuracy: true });
      }

      if (activeView == 'placesrestfavnavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         var store = Ext.getStore('PlacesRestFavListStore');

         var ext = 2;
         // var favLoc = loginStore.data.items[0].data.favLoc;
         var params = { busTypeId: key, favLoc: locArray };
         if (!this.favRestSql)
         {
            this.from = 'fav';
            this.loadRestLocationsStore(store, params, ext);


         }

         this.list = this.getPlacesRestFavList();

      }


      if (activeView == 'placesrestsearchnavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         var store = Ext.getStore('PlacesRestSearchListStore');

         var ext = '';
        this.from = 'search';
         // var favLoc = loginStore.data.items[0].data.favLoc;
         var params = { busTypeId: key };
         this.loadRestLocationsStore(store, params, ext);
      }
   },

   setProfileViewValues: function (record, profileView)
   {
      //alert("sfc");

      var img = record.data.logo;
     // profileView.down('#placesProfImg').setSrc(img);

      if (record.data.logo == "data:," || record.data.logo == null) {
         profileView.down('#placesProfImg').setSrc("./resources/icons/nw-icons/bg.jpg");
      } else {
         profileView.down('#placesProfImg').setSrc(img);
      }
      
      var name = document.getElementById('placeTitle');
      name.innerHTML = record.data.name;

      var favCount = document.getElementById('favCount');
      favCount.innerHTML = record.data.favCount;

      if (record.data.description != "" && record.data.description != null)
      {
         var description = document.getElementById('placeDescription');
         description.innerHTML = record.data.description;
      }


      if ((record.data.workingHoursFrom != "" && record.data.workingHoursFrom != null) && (record.data.workingHoursTo != "" && record.data.workingHoursTo != null))
      {
         var fromwh = document.getElementById('fromwh');
         fromwh.innerHTML = record.data.workingHoursFrom + ' a ' + record.data.workingHoursTo;
         /*  var towh = document.getElementById('towh');
            towh.innerHTML = record.data.workingHoursTo;*/
         var a = document.getElementById('placesWh');

         //profileView.down('#profWorkHours').setHtml('Daily ' + record.data.workingHoursFrom + ' To ' + record.data.workingHoursTo);
      }
      if (record.data.insideMall)
      {
         if (record.data.address != "" && record.data.address != null)
         {
            var insideMall = document.getElementById('insideMallAdress');
            insideMall.innerHTML = record.data.address;

            var locationWithinMall = document.getElementById('locationWithinMall');
            console.log(record);
            console.log(record.data.locationWithinMall);
            locationWithinMall.innerHTML = record.data.locationWithinMall;
            //profileView.down('#mallName').show();
            //profileView.down('#locWithMall').show();
            //profileView.down('#mallAddLabel').setHtml('Mall Address:');

         } else
         {
            var insideMall1 = document.getElementById('insideMallAdress');
            insideMall1.innerHTML = record.data.address;

            //profileView.down('#mallName').hide();
            //profileView.down('#locWithMall').hide();
            //profileView.down('#mallAddLabel').setHtml('Address:');
         }
      }
      //this.profileView.setRecord(record);
      //this.profileView.setTitle(record.data.name);
      var isFav = Ext.getStore('LoginStore').data.items[0].data.favLoc.indexOf(record.data.key);
      if (isFav == -1)
      {
         profileView.down('#favFrmView').setText('Favorito');
         profileView.down('#favFrmView').setIconCls('favPlaceCodeIcon');
         // favCount.innerHTML = record.data.favCount;
      } else
      {
         profileView.down('#favFrmView').setText('Favorito');
         profileView.down('#favFrmView').setIconCls('favPlaceCodeIcon2');
         //favCount.innerHTML = parseInt(record.data.favCount)+1;
      }


   },

   onPlacesProfViewViewOffers: function()
   {
      // var parentRecord = this.getPlacesProfileView().getRecord();
      var locationId = this.locId;
      var fake = '';
      var locations = [];
      locations.splice(0, 0, locationId, fake);

      var store = Ext.getStore('PlacesStoresViewOffersStore');
      var params = {
         locations: locations
      };
      this.loadViewOffersStore(store, params);

      if (!this.viewOffersList)
      {
         this.viewOffersList = Ext.create('MobileApp.view.Places.PlacesViewOffersDataView');
      }

      var navView = this.getPlacesProfileView().getParent();
      navView.push(this.viewOffersList);

   },

   onSelectViewDealDataViewImage: function(view, index, ctx, record)
   {
      this.Record = record;
      if (!this.offersProfileView)
      {
         this.offersProfileView = Ext.create('MobileApp.view.Places.PlacesOffersProfileView');
      }

      var navView = this.getPlacesProfileView().getParent();
      this.offersProfileView.setTitle(record.data.brandName);
      navView.push(this.offersProfileView);
      this.setOfferProfileView(record);
   },

   loadStore: function(store, params)
   {
      /*  var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
      myMask.show();*/
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               //myMask.hide();
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
            } /*else
            {
               myMask.hide();
            }*/
         }
      });

   },

   setMapMarker: function(record)
   {
      var map = this.getPlacesProfileView().down('#map').getMap();
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
      this.getPlacesProfileView().down('#map').setMapCenter(position);
   },
   /********************************Offer View Events***********************************/

   loadViewOffersStore: function(store, params)
   {
      /* var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "Loading..." });
      myMask.show();*/
      store.load({
         scope: this,
         params: params,
         callback: function(response, operation, success)
         {
            if (success != true)
            {
               //myMask.hide();
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
               //myMask.hide();
               this.getApplication().getController('OffersController').showDateFormat(response);

               var hotDealView = this.getPlacesViewOffersDataView();
               if (hotDealView)
               {
                  hotDealView.refresh();
               }
            }
         }
      });
   },   
  
   onPostComment: function()
   {
      var parentRecord = this.getPlacesOffersProfileView().getRecord();
      var offerId = parentRecord.data.key;
      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      var userId = loginStore.key;
      var value = this.getPlacesOffersProfileView().down('#commentsTextField').getValue();

      Ext.Ajax.request({
         method: 'POST',
         url: '../PostOfferComment',
         scope: this,
         params: {
            offerId: offerId,
            userId: userId,
            value: value
         },
         success: function(response)
         {
            var result = Ext.JSON.decode(response.responseText);
            if (result)
            {
               this.getPlacesOffersProfileView().down('#placesOffferscommentDataView').getStore().add(result);
               var preCommentVal = parentRecord.data.commentCount;
               var newCommentVal = parseInt(preCommentVal) + 1;
               parentRecord.data.commentCount = newCommentVal;
               this.getPlacesOffersProfileView().down('#commentsTextField').setValue('');
               this.onLikeViewRefresh();
            }
         },
         failure: function(response)
         {
            var error = 'Something went wrong';
            if (response.status == 401)
            {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.Msg.alert('', error);
         }
      });
   },

   onLikeOffer: function(button)
   {
      var parentRecord = this.getPlacesOffersProfileView().getParent().getActiveItem().getRecord();
      var offerId = parentRecord.data.key;

      //var likeValue = this.offersProfileView.down('#offersLikeHTML').getHtml();
      var likeValue = parentRecord.data.likeCount;

      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      var userId = loginStore.key;
      var offersLikedArray = loginStore.offersLiked;
      var alreadyLikedOrNot = offersLikedArray.indexOf(offerId);
      var toggled;
      // var likeImage = document.getElementById('placesOfferLikeImage');
      if (alreadyLikedOrNot != -1)  //already liked
      {
         button.setIconCls('likeOfferIcon');
         //button.setText('Como Oferta');
         //view.setSrc("./resources/images/like.png");
         toggled = false;
         parentRecord.data.likeCount = parseInt(likeValue) - 1;
         this.onLikeViewRefresh();
         loginStore.offersLiked.pop(offerId);
      } else         
      {
         button.setIconCls('likeOfferIcon2');
         //button.setText('Aversión Oferta');
         parentRecord.data.likeCount = parseInt(likeValue) + 1;
         toggled = true;
         loginStore.offersLiked.push(offerId);
         this.onLikeViewRefresh();
      }

      Ext.Ajax.request({
         method: 'POST',
         url: '../UserOffer/LikeOffer',
         scope: this,
         params: {
            offerId: offerId,
            userId: userId,
            toggled: toggled
         },
         success: function(response)
         {
            var result = Ext.JSON.decode(response.responseText);
            if (result)
            {
               //Ext.getStore('LoginStore').load();
               this.changeLikdedOffers = true;
            }
         },
         failure: function(response)
         {
            var error = 'Something went wrong';
            if (response.status == 401)
            {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.Msg.alert('', error);
            if (toggled == false)
            {
               button.setIconCls('likeOfferIcon');
               //button.setText('Como Oferta');
               parentRecord.data.likeCount = parseInt(likeValue) - 1;
               this.onLikeViewRefresh();
               loginStore.offersLiked.pop(offerId);
            } else
            {
               button.setIconCls('likeOfferIcon2');
               //button.setText('Aversión Oferta');
               parentRecord.data.likeCount = parseInt(likeValue) + 1;
               this.onLikeViewRefresh();
               loginStore.offersLiked.push(offerId);
            }
         }
      });
   },

   onLikeViewRefresh: function()
   {

      this.getPlacesViewOffersDataView().refresh();
   },

   onTapOfferDetail: function(element)
   {
      if (element.target.id == "placesofferDetails")
      {
         var parentRecord = this.getPlacesOffersProfileView().getRecord();
         var finePrint = parentRecord.data.finePrint;
         if (!this.offersDetailsView)
         {
            this.offersDetailsView = Ext.create('MobileApp.view.Offers.OffersOffDetailsView');
         }
         var navView = this.getPlacesOffersProfileView().getParent();
         navView.push(this.offersDetailsView);
         //this.offersDetailsView.down('#finePrintText').setHtml(finePrint);
         var finePrint1 = document.getElementById('offerdetailsfinePrint');
         finePrint1.innerHTML = finePrint;
      }
   },

   onViewAllCom: function()
   {
      if (!this.placesOffersAllCommentView)
      {
         this.placesOffersAllCommentView = Ext.create('MobileApp.view.Places.PlacesOffersAllCommentView');
      }

      var navView = this.getPlacesOffersProfileView().getParent();
     navView.push(this.placesOffersAllCommentView);
     this.getPlacesNavBar().show();
   },

   setOfferProfileView: function(record)
   {
      var img = record.data.img;
      // this.getProfileImage().setSrc(img);
    //  this.offersProfileView.down('#profImg').setSrc(img);

      if (record.data.img == "data:,") {
         this.offersProfileView.down('#profImg').setSrc("./resources/icons/nw-icons/bg.jpg");
      } else {
         this.offersProfileView.down('#profImg').setSrc(img);
      }
      var offerlogo = record.data.profileImage;
      if (record.data.profileImage == "" || record.data.profileImage == null || record.data.profileImage== undefined) {
         this.offersProfileView.down('#placesOfferBrandLogo').hide();
      } else
      {
         this.offersProfileView.down('#placesOfferBrandLogo').show();
         this.offersProfileView.down('#placesOfferBrandLogo').setSrc(offerlogo);
      }
      //this.offersProfileView.down('#placesOfferBrandLogo').setSrc(offerlogo);

      var validto = document.getElementById('placesOffersValidTo');
      validto.innerHTML = 'Expira ' + record.data.validTo;

      /*var likecount = document.getElementById('placesOffersLikeHTML');
      likecount.innerHTML = record.data.likeCount;
      
      var commentCount = document.getElementById('placeOffersCommentHTML');
      commentCount.innerHTML = record.data.commentCount;*/

      var tagline = document.getElementById('placesOffersTagLine');
      tagline.innerHTML = record.data.tagLine;

      var finePrint = document.getElementById('placesOffersFineprint');
      finePrint.innerHTML = record.data.finePrint;


      var moreDetails = document.getElementById('placesofferDetails');
   /*   if (finePrint.innerHTML == "") {
         moreDetails.innerHTML = "";
      }*/
      //this.offersProfileView.down('#offersLikeHTML').setHtml(record.data.likeCount);
      //this.offersProfileView.down('#offersCommentHTML').setHtml(record.data.commentCount);
      //this.offersProfileView.down('#tagLine').setHtml(record.data.tagLine);
      this.offersProfileView.setRecord(record);
      this.offersProfileView.setTitle(record.data.brandName);

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
      if (!this.offersProfileView)
      {
         this.offersProfileView = Ext.create('MobileApp.view.Places.PlacesOffersProfileView');
      }
      //var likeImage = this.offersProfileView.down('#offersLikeHTML');
      var likeBut = this.getPlacesOffersProfileView().down('#placesOfferLike');
      if (alreadyLikedOrNot != -1)  //already liked
      {
         likeBut.setIconCls('likeOfferIcon2');
         //likeBut.setText('Aversión Oferta');

      } else
      {
         likeBut.setIconCls('likeOfferIcon');
         // likeBut.setText('Como Oferta');
      }
      this.onSetSocialIcons(record);

      //for setting text

      /* var preHeading = this.offersProfileView.down('#connectWithHeading').getHtml();
      preHeading = preHeading.split(" ", 2).join().replace(",", " ");
      var newHeading = preHeading + " " + record.data.brandName;
      this.offersProfileView.down('#connectWithHeading').setHtml(newHeading);*/
   },

   onSetSocialIcons: function(record)
   {
      var fb = this.getPlacesOffersProfileView().down('#placesfaceBook');
      var twitter = this.getPlacesOffersProfileView().down('#placestwitter');
      var linkedIn = this.getPlacesOffersProfileView().down('#placeslinkedin');
      var google = this.getPlacesOffersProfileView().down('#placesgoogle');
      var pinterest = this.getPlacesOffersProfileView().down('#placespinterest');
      var youtube = this.getPlacesOffersProfileView().down('#placesyoutube');
      //For social icons(if link is not given than images changes to light)
      if (record.data.fb == null || record.data.fb == "")
      {
         fb.setSrc("./resources/icons/social/socialRound/fb1.png");
      } else
      {
         fb.setSrc("./resources/icons/social/socialRound/fb.png");
      }
      if (record.data.twitter == null || record.data.twitter == "")
      {
         twitter.setSrc("./resources/icons/social/socialRound/twitter1.png");
      } else
      {
         twitter.setSrc("./resources/icons/social/socialRound/twitter.png");
      }
      if (record.data.linkedIn == null || record.data.linkedIn == "")
      {
         linkedIn.setSrc("./resources/icons/social/socialRound/linkedin1.png");
      } else
      {
         linkedIn.setSrc("./resources/icons/social/socialRound/linkedin.png");
      }
      if (record.data.google == null || record.data.google == "")
      {
         google.setSrc("./resources/icons/social/socialRound/gplus1.png");
      } else
      {
         google.setSrc("./resources/icons/social/socialRound/gplus.png");
      }
      if (record.data.pinterest == null || record.data.pinterest == "")
      {
         pinterest.setSrc("./resources/icons/social/socialRound/pinterest1.png");
      } else
      {
         pinterest.setSrc("./resources/icons/social/socialRound/pinterest.png");
      }

      if (record.data.youtube == null || record.data.youtube == "")
      {
         youtube.setSrc("./resources/icons/social/socialRound/youtube1.png");
      } else
      {
         youtube.setSrc("./resources/icons/social/socialRound/youtube.png");
      }
   },
   /*******************************used in storescontroller***********************************/
   hideStoresNavBar: function()
   {
      this.getPlacesNavBar().hide();
   },

   showStoresNavBar: function()
   {

      this.getPlacesNavBar().show();
   },

   hideStoresNavBackButton: function()
   {
      var storesBackBut = this.getPlacesStoresNBSlideBut();
      if (storesBackBut.isHidden())
      {
         return;
      }
      storesBackBut.hide();
   },

   showStoresNavBackButton: function()
   {
      this.getPlacesStoresNBSlideBut().show();

   },

   hideStoresHotBackButton: function()
   {
      var storesHotBackBut = this.getPlacesStoresHotSlideBut();
      if (storesHotBackBut.isHidden())
      {
         return;
      }
      storesHotBackBut.hide();
   },

   showStoresHotBackButton: function()
   {
      this.getPlacesStoresHotSlideBut().show();
   },

   hideStoresFavBackButton: function()
   {
      var storesFavBackBut = this.getPlacesStoresFavSlideBut();
      if (storesFavBackBut.isHidden())
      {
         return;
      }
      storesFavBackBut.hide();
   },

   showStoresFavBackButton: function()
   {
      this.getPlacesStoresFavSlideBut().show();
   },

   hideStoresSearchBackButton: function()
   {
      var storesSearchBackBut = this.getPlacesStoresSearchSlideBut();
      if (storesSearchBackBut.isHidden())
      {
         return;
      }
      storesSearchBackBut.hide();
   },

   showStoresSearchBackButton: function()
   {
      this.getPlacesStoresSearchSlideBut().show();
   },
   //shifted to storescontroller
   onStoresNearByNavPush: function()
   {
      this.hideStoresNavBackButton();

   },

   onStoresNearByNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoreslist")
      {
         this.showStoresNavBackButton();

      }

   },

   onStoresHotNavPush: function()
   {
      this.hideStoresHotBackButton();
   },

   onStoresHotNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoreshotlist")
      {
         this.showStoresHotBackButton();

      }
   },

   onStoresFavNavPush: function()
   {
      this.hideStoresFavBackButton();
   },

   onStoresFavNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoresfavlist")
      {
         this.showStoresFavBackButton();

      }
   },

   onStoresSearchNavPush: function()
   {
      this.hideStoresSearchBackButton();
   },

   onStoresSearchNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoressearchlist")
      {
         this.showStoresSearchBackButton();

      }
   },

   onFavFromProfView: function(button)
   {
      var text = button.getText();
      if (button.getIconCls() == 'favPlaceCodeIcon2')//doing unfavourite..
      {
         button.setText('Favorito');
         button.setIconCls('favPlaceCodeIcon');
         document.getElementById('favCount').innerHTML = parseInt(document.getElementById('favCount').innerHTML) - 1;
      } else
      {
         button.setText('Favorito');
         button.setIconCls('favPlaceCodeIcon2');
         document.getElementById('favCount').innerHTML = parseInt(document.getElementById('favCount').innerHTML) + 1;
      }
      var record;
      var locId;
      var ext;
      var navView = this.getPlacesProfileView().getParent();
      if (navView.xtype == 'placesmainnavigationview')
      {
         if (navView.getPreviousItem().xtype == 'placesmallscatlist')
         {
            record = this.getPlacesMallsCatList().getSelection()[0];
            locId = this.getPlacesMallsCatList().getSelection()[0].data.key;
            ext = '';
            this.setFavLocButton(record, locId, ext);
         }

         if (navView.getPreviousItem().xtype == 'placesentertainmentlist')
         {
            record = this.getPlacesEntertainmentList().getSelection()[0];
            locId = this.getPlacesEntertainmentList().getSelection()[0].data.key;
            ext = '';
            this.setFavLocButton(record, locId, ext);
         }
      }

      if (navView.xtype == 'placesrestnearbynavigationview')
      {

         record = this.getPlacesRestNearByList().getSelection()[0];
         locId = this.getPlacesRestNearByList().getSelection()[0].data.key;
         ext = '';
         this.setFavLocButton(record, locId, ext);

      }


      if (navView.xtype == 'placesresthotnavigationview')
      {

         record = this.getPlacesRestHotList().getSelection()[0];
         locId = this.getPlacesRestHotList().getSelection()[0].data.key;
         ext = '1';
         this.setFavLocButton(record, locId, ext);

      }


      if (navView.xtype == 'placesrestfavnavigationview')
      {

         record = this.getPlacesRestFavList().getSelection()[0];
         locId = this.getPlacesRestFavList().getSelection()[0].data.key;
         ext = '2';
         this.setFavLocButton(record, locId, ext);

      }


      if (navView.xtype == 'placesrestsearchnavigationview')
      {

         record = this.getPlacesRestSearchCatList().getSelection()[0];
         locId = this.getPlacesRestSearchCatList().getSelection()[0].data.key;
         ext = '3';
         this.setFavLocButton(record, locId, ext);

      }
   },

   onTapCommemt: function(view, idx, list, rec, e)
   {
      this.offerId = rec.data.offerId;
      this.commentId = rec.data.key;
      var userName = rec.data.userName;
      var value = this.getUsername(userName);
      if (value)
      {
         var overlay = Ext.create('MobileApp.view.Places.PlacesOffersCommentOverlay');
         overlay.show();
      }
   },

   getUsername: function(userName)
   {
      var store = Ext.getStore('LoginStore');
      var uname = store.data.items[0].data.name;
      if (uname == userName)
      {
         return true;
      } else
      {
         return false;
      }
   },

   onTapOverlay: function(view, index, list, record)
   {
      if (index == 0)
      {
         this.onDeleteComment(view);
      }
      if (index == 1)
      {
         this.onCancelComment(view);
      }


   },

   onCancelComment: function(view)
   {
      view.hide();
   },

   onDeleteComment: function(view)
   {
      var parentRecord = this.getPlacesOffersProfileView().getRecord();
      var offerId = this.offerId;
      var commentId = this.commentId;

      Ext.Ajax.request({
         method: 'DELETE',
         url: MobileApp.util.Config.getBaseUrl() + '/DeleteOfferComment',
         scope: this,
         params: {
            key: commentId,
            offerId: offerId
         },
         success: function(response)
         {
            if (response)
            {
               view.hide();
               var cmntView = this.getPlacesOffersProfileView().down('#placesOffferscommentDataView');
               var cmnt = cmntView.getStore().findRecord("key", commentId);
               cmntView.getStore().remove(cmnt);
               cmntView.refresh();
               var preCommentVal = parentRecord.data.commentCount;
               var newCommentVal = parseInt(preCommentVal) - 1;
               parentRecord.data.commentCount = newCommentVal;
               this.onLikeViewRefresh();
            }
         },
         failure: function(response)
         {
            var error = 'Something went wrong';
            if (response.status == 401)
            {
               error = 'Sorry, You are not authorized to access this module.';
            }
            Ext.Msg.alert('', error);
         }
      });
      /* var view1 = this.getOffersAllCommentView().down('#commentOverlay');
         view1.refresh();*/

   },

   onShareOffer: function()
   {
      var record = this.getPlacesOffersProfileView().getRecord();
      window.plugins.socialsharing.share("" + "Hola, descarga la aplicación MovilMall y busca la oferta" + "" + record.data.tagLine + "" + "de" + "" + record.data.brandName, null, record.data.img, null);
   },

   onTapFacebook: function()
   {
      var url = this.Record.data.fb;
      if (url != "" && url != null)
      {
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

   onTapTwitter: function()
   {
      var url = this.Record.data.twitter;
      if (url != "" && url != null)
      {
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

   onTapLinkedIn: function()
   {
      var url = this.Record.data.linkedIn;

      if (url != "" && url != null)
      {
         var string = this.Record.data.linkedIn.substring(0, 4);
         if (string != "http") {
            window.open("http://" + url, '_system');

         } else {
            window.open(url, '_system');

         }
      } else {
         return;
      }


   },

   onTapGoogle: function()
   {
      var url = this.Record.data.google;

      if (url != "" && url != null)
      {
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

   onTapYouTube: function()
   {
      var url = this.Record.data.youtube;

      if (url != "" && url != null)
      {
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

   onTapPinterest: function()
   {
      var url = this.Record.data.pinterest;

      if (url != "" && url != null)
      {
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

   onOffersShare: function()
   {
      var record = this.getOffersProfileView().getRecord();
      window.plugins.socialsharing.share("" + "Hola, descarga la aplicación MovilMall y busca la oferta" + "" + record.data.tagLine + "" + "de" + "" + record.data.brandName, null, record.data.img, null);
   },
   
   onTapCoupen:function()
   {
      var locKey = '';
      if (this.getPlacesRestTabPanel())
      {
         var activeTab = this.getPlacesRestTabPanel().getActiveItem();
         if (activeTab.xtype == 'placesresthotnavigationview') {
            locKey = this.getPlacesRestHotList().getSelection()[0].data.key;
         }

         if (activeTab.xtype == 'placesrestfavnavigationview') {
            locKey = this.getPlacesRestFavList().getSelection()[0].data.key;
         }

         if (activeTab.xtype == 'placesrestnearbynavigationview') {
            locKey = this.getPlacesRestNearByList().getSelection()[0].data.key;
         }

         if (activeTab.xtype == 'placesrestsearchnavigationview') {
            locKey = this.getPlacesRestSearchCatList().getSelection()[0].data.key;
         }
      } else if (this.getPlacesProfileView().getParent().xtype == 'placesmainnavigationview')
      {
         if (this.getPlacesEntertainmentList())
         {
            locKey = this.getPlacesEntertainmentList().getSelection()[0].data.key;
         }
         
         if (this.getPlacesMallsCatList())
         {
            locKey = this.getPlacesMallsCatList().getSelection()[0].data.key;
         }
      }
     
      var offersKey = this.getPlacesViewOffersDataView().getSelection()[0].data.key;
      var code = this.getPlacesViewOffersDataView().getSelection()[0].data.code;

      var splittedOfferId = offersKey.split('::');
      var qrCodePartOne = 'BO' + splittedOfferId[1] + splittedOfferId[3];
      
      var splittedLocId = locKey.split('::');
      var qrCodePartTwo = 'BL' + splittedLocId[1] + splittedLocId[3];

      var qrCode = qrCodePartOne + '-' + qrCodePartTwo + '-' + code;
     // console.log(qrCode);

      if (!this.PlacesQRCodeDataView) {
         this.PlacesQRCodeDataView = Ext.create('MobileApp.view.Places.PlacesQRCodeDataView');
      }
      var div = document.createElement('div');
      div.id = 'qrCodeDiv';
      
      document.body.appendChild(div);
      this.onRenderesQRCoupenView(qrCode);

   },

   onRenderesQRCoupenView: function(qrCode)
   {
      var div = document.getElementById('qrCodeDiv');
      div.style.marginTop = '3em';
      div.style.marginLeft = '1.75em';
      var qrCode1 = new QRCode('qrCodeDiv');
      qrCode1.makeCode(qrCode);
      this.PlacesQRCodeDataView.setHtml(document.getElementById('qrCodeDiv'));
      var navView = this.getPlacesProfileView().getParent();
      navView.push(this.PlacesQRCodeDataView);     
   }
});