Ext.define('MobileApp.controller.StoresController', {
   extend: 'Ext.app.Controller',

   config: {
      views: [
         'Places.PlacesStoresTabPanel',
         'Places.PlacesStoreViewOffersDataView',
         'Places.PlacesStoreProfileView',
         'Places.PlacesStoreOffersProfileView',
         'Places.PlacesStoresOffersAllCommentView',
         'Places.PlacesStoresOffersCommentOverlay',
         'Places.PlacesStoresQRCodeDataView'
      ],
      stores: ['PlacesStoresViewOffersStore',
         'PlacesStoresHotListSqlStore',
         'PlacesStoresFavListSqlStore',
         'PlacesStoresSearchCatListStore', 'StoresSearchByNameStore'],
      models: ['PlacesStoresSearchListModel',
         'PlacesStoresFavListModel',
         'PlacesStoresHotListModel'],
      refs: {
         placesStoresTabPanel: 'placesstorestabpanel',
         placesStoresNearByNavigationView: 'placesstoresnearbynavigationview',
         placesStoresHotNavigationView: 'placesstoreshotnavigationview',
         placesStoresSearchList: 'placesstoressearchlist',
         placesStoresSearchCatList: 'placesstoressearchcatlist',
         placesstoressearchnavigationview: 'placesstoressearchnavigationview',
         placesStoreProfileView: 'placesstoreprofileview',
         placesStoreOffersProfileView: 'placesstoreoffersprofileview',
         profFavImg: '#profFavImg',
         profCat: '#profCat',
         profWorkHours: '#profWorkHours',
         mallNameLabel: '#mallName',
         mallNameTitle: '#mallNameTitle',
         locWithMall: '#locWithMall',
         locLevel: '#locLevel',
         mallAddLabel: '#mallAddLabel',
         mallAdd: '#mallAdd',
         map: '#map',
         nameLab: '#nameLab',
         placesProfImg: '#placesProfImg',
         description: '#description',
         mapOverlay: 'mapoverlay',
         placesSlideBut: '#placesSlideButton',
         placesStoresHotSlideBut: '#placesStoresHotSlideBut',
         placesStoresFavSlideBut: '#placesStoresFavSlideBut',
         placesStoresSearchSlideBut: '#placesStoresSearchSlideBut',
         placesStoresNBSlideBut: '#placesStoresNBSlideBut',
         placesStoresFavNavigationView: 'placesstoresfavnavigationview',
         placesMainNavigationView: 'placesmainnavigationview',
         placesStoresSearchNavigationView: 'placesstoressearchnavigationview',
         placesStoresList: 'placesstoreslist',
         placesStoresHotList: 'placesstoreshotlist',
         placesStoresFavList: 'placesstoresfavlist',
         placesNavBar: '#placesNavBar',
         slidelist: 'slidelist',
         placesStoreViewOffersDataView: '#placesStoreViewOffersDataView',
         placesStoreViewOfferComment: '#placesStoreViewOfferComment',
         profileImage: '#profImg',      //offersprofileview ...for view offers button
         placesStoresOffesrViewDetails: '#placesStoresOffesrViewDetails1',
         //placesStoresOffersViewAllcmt: '#placesStoresOffersViewAllcmt',
         placesStoresOffersAllCommentView: 'placesstoresoffersallcommentview',
         placesStoresOffersViewAllCmt: '#placesStoresOffersViewAllCmt',
         placesStoresOffersCommentOverlay: 'placesstoresofferscommentoverlay',
         placesStoresOfferscommentDataView: '#placesStoresOfferscommentDataView',
         placesStoresOffersAllCommentOverlayView: '#placesStoresOffersAllCommentOverlayView'
      },

      control: {
         placesstorestabpanel: {
            activeitemchange: 'onChangeStoresTabActiveItem'
         },
         placesstoreslist: {
            itemtap: 'onTapPlacesStoresList'
         },
         placesStoresFavList: {
            itemtap: 'onTapPlacesStoresFavList',
            initialize: 'onScrollEndOfStoresFavList'
         },
         placesStoresSearchList: {
            itemtap: 'onTapPlacesStoresSearchList'
         },
         placesStoresSearchCatList: {
            itemtap: 'onTapPlacesStoresSearchCatList',
            initialize: 'onScrollEndOfStoresSearchCatList'
         },
         placesStoresHotList: {
            itemtap: 'onTapPlacesStoresHotList'
         },
         placesStoreViewOffersDataView: {
            itemsingletap: 'onSelectViewDealDataViewImage'
         },
         placesStoresNBSlideBut: {
            tap: 'onPlacesSlideButton'
         },
         placesStoresHotSlideBut: {
            tap: 'onPlacesSlideButton'
         },
         placesStoresFavSlideBut: {
            tap: 'onPlacesSlideButton'
         },
         placesStoresSearchSlideBut: {
            tap: 'onPlacesSlideButton'
         },
         placesStoresNearByNavigationView: {
            push: 'onStoresNearByNavPush',
            pop: 'onStoresNearByNavPop'
         },
         placesStoresHotNavigationView: {
            push: 'onStoresHotNavPush',
            pop: 'onStoresHotNavPop'
         },
         placesStoresFavNavigationView: {
            push: 'onStoresFavNavPush',
            pop: 'onStoresFavNavPop'
         },
         placesStoresSearchNavigationView: {
            push: 'onStoresSearchNavPush',
            pop: 'onStoresSearchNavPop'
         },
         'placesstoreprofileview #placesStoreViewDealBtn': {
            tap: 'onViewDeals'
         },
         'placesstoreoffersprofileview #storesOfferLike': {
            tap: 'onLikeOffer'
         },
         'placesstoreoffersprofileview #postComment': {
            tap: 'onPostComment'
         },
         'placesStoresOffesrViewDetails': {
            tap: 'onTapOfferDetail'
         },
         placesStoresOffersViewAllCmt: {
            tap: 'onViewAllCom'
         },
         'placesstoreprofileview #favFrmView': {
            tap: 'onFavFromProfView'
         },
         placesStoreViewOfferComment: {
            itemtap: 'onDeleteComment'
         },
         'placesstoreshotlist #pull': {
            latestfetched: 'onPlacesStoresHotListPull'
         },
         placesstoreshotlist: {
            initialize: 'onScrollEndOfStoresHotList'
         },
         'placesstoressearchcatlist #pull': {
            beforePullRefresh: 'onPlacesStoresSearchCatListPull',
            latestfetched: 'onPlacesStoresSearchCatListAfterPull'
         },
         'placesstoressearchlist #storesSearchField': {
            keyup: 'onSearchStores',
            clearicontap: 'OnClearText'
         },
         placesStoresOfferscommentDataView: {
            itemtaphold: 'onTapCommemt'
         },
         placesStoresOffersAllCommentOverlayView: {
            itemtaphold: 'onTapCommemt'
         },
         placesStoresOffersCommentOverlay: {
            itemtap: 'onTapOverlay'
         },
         'placesstoreoffersprofileview #storesOfferShare': {
            tap: 'onStoresOfferShare'
         },
         'placesstoreoffersprofileview #storesfaceBook': {
            tap: 'onTapfaceBook'
         },
         'placesstoreoffersprofileview #storesgoogle': {
            tap: 'onTapGoogle'
         },
         'placesstoreoffersprofileview #storeslinkedin': {
            tap: 'onTapLinkedIn'
         },
         'placesstoreoffersprofileview #storespinterest': {
            tap: 'onTapPinterest'
         },
         'placesstoreoffersprofileview #storestwitter': {
            tap: 'onTapTwitter'
         },
         'placesstoreoffersprofileview #storesyouTube': {
            tap: 'onTapYouTube'
         },
         'placesstoreoffersprofileview #coupenBut': {
            tap: 'onTapCoupen'
         }
      }
   },

   init: function()
   {
      this.locId;
      this.hotStoresSql;
      this.favStoresSql;
      this.favStoresChange;
      this.from;
      this.list;
      this.Record;

      Ext.getStore('PlacesStoresHotListStore').on({
         scope: this,
         load: this.onPlacesStoresHotListStore
      });

      Ext.getStore('PlacesStoresFavListStore').on({
         scope: this,
         load: this.onPlacesStoresHotListStore
      });

      Ext.getStore('PlacesStoresListStore').on({
         scope: this,
         load: this.onPlacesStoresNearByListStore
      });

   },
   /****************************************PullToRefresh/LoadMore methods*****************************************/
   onPlacesStoresHotListStore: function(store)
   {
      var proxyStore = store;
      var ext;
      var from = this.from;
      if (proxyStore.getInitialConfig().storeId == 'PlacesStoresHotListStore')
      {
         this.hotStoresSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table
         ext = 1;
      }

      if (proxyStore.getInitialConfig().storeId == 'PlacesStoresFavListStore')
      {
         this.favStoresSql = true; //to confirm that only first time store should load,after that data shoul comes from local sql table
         ext = 2;
      }

      var proxyStoreString = proxyStore.getInitialConfig().storeId;
      var sqlStore = Ext.getStore(proxyStoreString.replace('ListStore', 'ListSqlStore'));


      if (from != 'scroll')             //prevents store to clear if its called from scrollend.
      {
         var db = openDatabase("Sencha", "", "Sencha", 200000);
         db.transaction(function(e)
         {
            e.executeSql('DELETE FROM ' + proxyStoreString.replace('ListStore', 'ListModel'), [], function()
            {
            }, function(tx, error)
            {
            });
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

   onPlacesStoresNearByListStore: function(store)
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

   onPlacesStoresHotListPull: function()
   {
      this.from = "";
      var key = 'BusType::1';
      var proxyStore = Ext.getStore('PlacesStoresHotListStore');
      var ext = 1;
      var params = { busTypeId: key };
      this.loadListStore(proxyStore, params, ext);
   },

   onPlacesStoresSearchCatListPull: function()
   {
      var store = Ext.getStore('PlacesStoresSearchCatListStore');
      store.removeAll();
      if (this.getPlacesStoresSearchList().getSelection()[0])
      {
         var categoryId = this.getPlacesStoresSearchList().getSelection()[0].data.key;
         var params = store.getProxy().getExtraParams();
         params.categoryId = categoryId;
      }

   },

   onPlacesStoresSearchCatListAfterPull: function()
   {
      var store = Ext.getStore('PlacesStoresSearchCatListStore');
      var ext = 3;
      this.setFavBut(store, ext);
   },

   onScrollEndOfStoresHotList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfStoresFavList: function(list)
   {
      if (list)
      {
         list.getScrollable().getScroller().on({
            scope: this,
            scrollend: 'onScroll'
         });
      }
   },

   onScrollEndOfStoresSearchCatList: function(list)
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

               if (this.list.xtype == 'placesstoreshotlist')
               {
                  favCount = sqlStore.last().data.favCount;
                  busTypeId = 'BusType::1';
                  ext = 1;
                  params = { favCount: favCount, busTypeId: busTypeId, key: key };

               }


               if (this.list.xtype == 'placesstoresfavlist')
               {
                  favCount = sqlStore.last().data.favCount;
                  busTypeId = 'BusType::1';
                  ext = 2;
                  params = { favCount: favCount, busTypeId: busTypeId, key: key };

               }

               if (this.list.xtype == 'placesstoresfavlist')
               {
                  favCount = sqlStore.last().data.favCount;
                  busTypeId = 'BusType::1';
                  ext = 2;
                  params = { favCount: favCount, busTypeId: busTypeId, key: key };

               }

               this.loadListStore(proxyStore, params, ext);
            }
         } else
         {
            var categoryId;
            if (sqlStore.last())
            {
               key = sqlStore.last().data.key;

               if (this.list.xtype == 'placesstoressearchcatlist')
               {
                  categoryId = this.getPlacesStoresSearchList().getSelection()[0].data.key;
                  createdAt = sqlStore.last().data.createdAt;
                  ext = '3';
                  params = { createdAt: createdAt, key: key, categoryId: categoryId };
               }

               //vparams;


               this.loadListStore(sqlStore, params, ext, true);

            }

         }


      }

   },
   
   /****************************************Hide/show View*****************************************/
   onPlacesSlideButton: function()
   {
      this.getApplication().getController('MainController').toggleNav();
   },

   onStoresNearByNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoreslist")
      {
         this.getPlacesStoresTabPanel().getTabBar().show();
         this.getApplication().getController('PlacesController').showStoresNavBackButton();
      }
      var resTabBar = this.getPlacesStoresTabPanel().items.items[1].element.dom.className;
      this.getPlacesStoresTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onStoresNearByNavPush: function()
   {
      this.getApplication().getController('PlacesController').hideStoresNavBackButton();
   },

   onStoresHotNavPush: function()
   {
      this.getApplication().getController('PlacesController').hideStoresHotBackButton();
   },

   onStoresHotNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoreshotlist")
      {
         this.getPlacesStoresTabPanel().getTabBar().show();
         this.getApplication().getController('PlacesController').showStoresHotBackButton();

      }
      var resTabBar = this.getPlacesStoresTabPanel().items.items[1].element.dom.className;
      this.getPlacesStoresTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onStoresFavNavPush: function()
   {
      this.getApplication().getController('PlacesController').hideStoresFavBackButton();
   },

   onStoresFavNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoresfavlist")
      {
         this.getPlacesStoresTabPanel().getTabBar().show();
         this.getApplication().getController('PlacesController').showStoresFavBackButton();

      }
      var resTabBar = this.getPlacesStoresTabPanel().items.items[1].element.dom.className;
      this.getPlacesStoresTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onStoresSearchNavPush: function()
   {
      this.getApplication().getController('PlacesController').hideStoresSearchBackButton();
   },

   onStoresSearchNavPop: function(view, item)
   {
      if (view.getActiveItem().xtype == "placesstoressearchlist")
      {
         this.getPlacesStoresTabPanel().getTabBar().show();
         this.getApplication().getController('PlacesController').showStoresSearchBackButton();

      }
      var resTabBar = this.getPlacesStoresTabPanel().items.items[1].element.dom.className;
      this.getPlacesStoresTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },
   
   
   /******************************* TapEvents Of List*********************************/

   onChangeStoresTabActiveItem: function(view, active)
   {
      var activeView = active.xtype;
      var key = 'BusType::1';

      if (activeView == 'placesstoreshotnavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         this.onActiveItemHoltStoresList(key);
      }

      if (activeView == 'placesstoresnearbynavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         this.onTapStoresMenu();
      }
      if (activeView == 'placesstoresfavnavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         var favStore = Ext.getStore('PlacesStoresFavListStore');
         var loginStore = Ext.getStore('LoginStore').data.items[0].data;

         var params =
            {
               busTypeId: 'BusType::1',
               favLoc: loginStore.favLoc
            };
         var ext = '2';

         if (!this.favStoresSql)
         {
            this.from = 'fav';
            this.loadListStore(favStore, params, ext);
            //this.favStoresChange=false;
         }
         this.list = this.getPlacesStoresFavList();

      }
      if (activeView == 'placesstoressearchnavigationview')
      {
         active.pop(active.innerItems.length);
         active.setActiveItem(0);
         var placesStore = Ext.getStore('PlacesStoresSearchListStore');
         this.from = 'search';
         var params = { busTypeId: key };
         var ext = '3';
         this.loadListStore(placesStore, params, ext);
      }
   },

   onActiveItemHoltStoresList: function(key)
   {
      var store = Ext.getStore('PlacesStoresHotListStore');

      var ext = 1;
      var params = { busTypeId: key };
      this.list = this.getPlacesStoresHotList();
      if (!this.hotStoresSql || this.favStoresChange)
      {
         var scroll = this.list.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -130;
         scroll.scrollTo(null, -130, { duration: this.list.down('#pull').getSnappingAnimationDuration() });
         this.list.down('#pull').setState('loading');
         this.from = 'hot';
         this.favStoresChange = false;
         this.loadListStore(store, params, ext);
      } else
      {
         this.setFavBut(store, ext);
      }
   },

   onTapPlacesStoresHotList: function(view, index, ctx, record, touch)
   {
      this.getPlacesStoresTabPanel().getTabBar().hide();
      var locationId = record.data.key;
      if (touch.target.id == "storeHotContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         this.getPlacesStoresTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key + '1')
      {
         if (!this.storesProfileView)
         {
            this.storesProfileView = Ext.create('MobileApp.view.Places.PlacesStoreProfileView');
         }
         //this.setProfileView(record);
         this.setMapMarker(record);
         this.storesProfileView.setTitle(record.data.name);
         this.getPlacesStoresHotNavigationView().push(this.storesProfileView);
         this.setProfileView(record);

      } else
      {
         this.getPlacesStoresTabPanel().getTabBar().show();
         var ext = '1';
         this.setFavLocButton(record, locationId, ext);
      }
      var resTabBar = this.getPlacesStoresTabPanel().items.items[1].element.dom.className;
      this.getPlacesStoresTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onTapPlacesStoresFavList: function(view, index, ctx, record, touch)
   {
      this.getPlacesStoresTabPanel().getTabBar().hide();
      var locationId = record.data.key;
      if (touch.target.id == "storeFavContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         this.getPlacesStoresTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key + '2')
      {
         if (!this.storesProfileView)
         {
            this.storesProfileView = Ext.create('MobileApp.view.Places.PlacesStoreProfileView');
         }

         //this.setProfileView(record);
         this.setMapMarker(record);
         this.storesProfileView.setTitle(record.data.name);
         this.getPlacesStoresFavNavigationView().push(this.storesProfileView);
         this.setProfileView(record);
      } else
      {
         this.getPlacesStoresTabPanel().getTabBar().show();
         var ext = '2';
         this.setFavLocButton(record, locationId, ext);
      }
      var resTabBar = this.getPlacesStoresTabPanel().items.items[1].element.dom.className;
      this.getPlacesStoresTabPanel().items.items[1].element.dom.className = resTabBar.replace(/\bx-tabbar-dark\b/, '');
   },

   onTapPlacesStoresSearchCatList: function(view, index, ctx, record, touch)
   {
      this.getPlacesStoresTabPanel().getTabBar().hide();
      var locationId = record.data.key;
      if (touch.target.id == "storeSearchCatContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         this.getPlacesStoresTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key + '3')
      {
         this.locId = record.data.key;
         if (!this.storesProfileView)
         {
            this.storesProfileView = Ext.create('MobileApp.view.Places.PlacesStoreProfileView');
         }
         //this.setProfileView(record);
         this.setMapMarker(record);
         this.storesProfileView.setTitle(record.data.name);
         this.getPlacesStoresSearchNavigationView().push(this.storesProfileView);
         this.setProfileView(record);
      } else
      {
         var ext = '3';
         this.setFavLocButton(record, locationId, ext);
      }
   },

   onTapPlacesStoresSearchList: function(view, index, ctx, record)
   {
      this.getPlacesStoresTabPanel().getTabBar().hide();
      if (this.getPlacesStoresSearchList().down('#storesSearchField').getValue().length != 0)
      {
         if (!this.storesProfileView)
         {
            this.storesProfileView = Ext.create('MobileApp.view.Places.PlacesStoreProfileView');
         }
         //  this.getApplication().getController('PlacesController').setProfileView(record, this.storesProfileView);
         this.storesProfileView.setTitle(record.data.name);
         this.getPlacesStoresSearchNavigationView().push(this.storesProfileView);
         this.setProfileView(record);
      } else
      {
         if (!this.placesStoresSearchCatList)
         {
            this.placesStoresSearchCatList = Ext.create('MobileApp.view.Places.PlacesStoresSearchCatList');
         }
         this.placesStoresSearchCatList.setTitle(record.data.name);
         this.getPlacesStoresSearchNavigationView().push(this.placesStoresSearchCatList);
        
         var store = Ext.getStore('PlacesStoresSearchCatListStore');
         var params = { categoryId: record.data.key };
         var ext = '3';
         this.list = this.getPlacesStoresSearchCatList();
         this.getApplication().getController('PlacesController').list = this.getPlacesStoresSearchCatList();
         var scroll = this.list.getScrollable().getScroller();
         scroll.refresh();
         scroll.minPosition.y = -130;
         scroll.scrollTo(null, -130, { duration: this.list.down('#pull').getSnappingAnimationDuration() });
         this.list.down('#pull').setState('loading');
         this.getApplication().getController('PlacesController').loadPlacesMallsCatListStore(store, params, ext);


      }
   },

   onTapStoresMenu: function()
   {
      var key = 'BusType::1';
      var onSuccess = function(position)
      {
         var lat = position.coords.latitude;
         var longitude = position.coords.longitude;
         var para = {
            latitude: lat,
            longitude: longitude,
            busTypeId: key
         };

         var store = Ext.getStore('PlacesStoresListStore');
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
         /* alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');*/
         console.log(error);
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 10000, enableHighAccuracy: true });

   },

   loadStore: function(store, params)
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
               this.getApplication().getController('OffersController').showDateFormat(response);

               var storeView1 = this.getPlacesStoreViewOffersDataView();
               if (storeView1)
               {
                  storeView1.refresh();
               }
            }
         }
      });
   },

   loadListStore: function(store, params, ext, addRec)
   {
      if (!addRec)
      {
         addRec = false;
      }
      if (/*this.from != 'scroll' && this.from != ''*/this.from == 'fav' || this.from == 'search')
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
                        fav.style.backgroundPosition = "0px 43%";
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
            }
         }
      });
   },

   onSelectViewDealDataViewImage: function(view, index, ctx, record)
   {
      this.Record = record;
      if (!this.offersProfileView)
      {
         this.offersProfileView = Ext.create('MobileApp.view.Places.PlacesStoreOffersProfileView');
      }

      var navView = this.getPlacesStoreProfileView().getParent();
      this.offersProfileView.setTitle(record.data.brandName);
      navView.push(this.offersProfileView);

      this.setOfferProfileView(record);
   },

   onTapPlacesStoresList: function(view, index, ctx, record, touch)
   {
      this.getPlacesStoresTabPanel().getTabBar().hide();
      var locationId = record.data.key;
      if (touch.target.id == "storeNearByContactNo")
      {
         document.location = 'tel:' + record.data.contactNo;
         this.getPlacesStoresTabPanel().getTabBar().show();
      } else if (touch.target.id != record.data.key)
      {
         if (!this.storesProfileView)
         {
            this.storesProfileView = Ext.create('MobileApp.view.Places.PlacesStoreProfileView');
         }
         //  this.getApplication().getController('PlacesController').setProfileView(record, this.storesProfileView);
         this.storesProfileView.setTitle(record.data.name);
         this.getPlacesStoresNearByNavigationView().push(this.storesProfileView);
         this.setProfileView(record);

      } else
      {
         var ext = '';
         this.setFavLocButton(record, locationId, ext);
      }
   },

   onViewDeals: function()
   {
      var parentRecord = this.getPlacesStoreProfileView().getRecord();
      var locationId = parentRecord.data.key;
      var fake = '';
      var locations = [];
      locations.splice(0, 0, locationId, fake);

      var store = Ext.getStore('PlacesStoresViewOffersStore');
      var params = {
         locations: locations
      };
      this.loadStore(store, params);
      if (!this.locateStoresList)
      {
         this.locateStoresList = Ext.create('MobileApp.view.Places.PlacesStoreViewOffersDataView');
      }
      this.locateStoresList.setTitle('');
      this.locateStoresList.setTitle('Ofertas' /*+ parentRecord.data.name*/);
      var navView = this.getPlacesStoreProfileView().getParent();
      navView.push(this.locateStoresList);
   },
   
   /******************************Set values*************************************/
   setFavLocButton: function(record, locationId, ext)
   {

      this.favStoresChange = true;
      var toggled;
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
      var favSqlStore = Ext.getStore('PlacesStoresFavListSqlStore');
      var favSqlRec = Ext.create('MobileApp.model.PlacesStoresFavListModel');
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
         e.executeSql('DELETE FROM PlacesStoresFavListModel WHERE key="' + record.data.key + '"', [], function()
         {
         }, function(tx, error)
         {
         });
      });
      var favSqlStore = Ext.getStore('PlacesStoresFavListSqlStore');
      var index = favSqlStore.find('key', record.data.key);
      favSqlStore.removeAt(index);

   },

   setFavLocation: function(toggled, locationId)
   {
      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      var userId = loginStore.key;
      Ext.Ajax.request({
         url: MobileApp.util.Config.getBaseUrl() + '/UserLocation/SetFavLocation',
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
            // console.log(response);
            var result = Ext.JSON.decode(response.responseText);
            // console.log(result);
            if (result.msg == "Duplicate User")
            {
               Ext.Msg.alert('', 'Duplicate User');
               return;
            }

         }
      });
   },

   setProfileView: function(record)
   {

      var img = record.data.logo;

      //this.storesProfileView.down('#placesProfImg').setSrc(img);

      if (record.data.logo == "data:," || record.data.logo == null)
      {
         this.storesProfileView.down('#placesProfImg').setSrc("./resources/icons/nw-icons/bg.jpg");
      } else
      {
         this.storesProfileView.down('#placesProfImg').setSrc(img);
      }

      var favCount = document.getElementById('storefavCount');
      favCount.innerHTML = record.data.favCount;

      var name = document.getElementById('storeTitle');
      name.innerHTML = record.data.name;

      var description = document.getElementById('storeDescription');
      description.innerHTML = record.data.description;

      //this.storesProfileView.down('#profFavImg').setHtml(record.data.favCount);
      //this.storesProfileView.down('#nameLab').setHtml(record.data.name);
      // this.storesProfileView.down('#profCat').setHtml(record.data.categories);
      //this.storesProfileView.down('#description').setHtml(record.data.description);
      if (record.data.workingHoursFrom != null && record.data.workingHoursFrom != "")
      {
         var workingHoursFrom = document.getElementById('storeFromwh');
         workingHoursFrom.innerHTML = record.data.workingHoursFrom + " a " + record.data.workingHoursTo;

         /*      var workingHoursTo = document.getElementById('storeTowh');
         workingHoursTo.innerHTML = record.data.workingHoursTo;*/
         //this.storesProfileView.down('#profWorkHours').setHtml('Daily ' + record.data.workingHoursFrom + ' To ' + record.data.workingHoursTo);

      }
      //this.storesProfileView.down('#mallAdd').setHtml(record.data.address);

      if (record.data.insideMall)
      {
         var insideMall = document.getElementById('storeInsideMallAdress');
         insideMall.innerHTML = record.data.address;

         var locationWithinMall = document.getElementById('storeLocationWithinMall');
         locationWithinMall.innerHTML = record.data.locationWithinMall;
         //profileView.down('#mallName').show();
         //profileView.down('#locWithMall').show();
         //profileView.down('#mallAddLabel').setHtml('Mall Address:');
      } else
      {
         var insideMall1 = document.getElementById('storeInsideMallAdress');
         insideMall1.innerHTML = record.data.address;

         //profileView.down('#mallName').hide();
         //profileView.down('#locWithMall').hide();
         //profileView.down('#mallAddLabel').setHtml('Address:');
      }
      this.storesProfileView.setRecord(record);
      this.storesProfileView.setTitle(record.data.brandName);

      var isFav = Ext.getStore('LoginStore').data.items[0].data.favLoc.indexOf(record.data.key);
      if (isFav == -1)
      {
         this.storesProfileView.down('#favFrmView').setText('Favorito');
         this.storesProfileView.down('#favFrmView').setIconCls('favPlaceCodeIcon');
      } else
      {
         this.storesProfileView.down('#favFrmView').setText('Favorito');
         this.storesProfileView.down('#favFrmView').setIconCls('favPlaceCodeIcon2');
      }
   },

   setOfferProfileView: function(record)
   {
      var img = record.data.img;
      // this.getProfileImage().setSrc(img);
      // this.offersProfileView.down('#profImg').setSrc(img);
      if (record.data.img == "data:,")
      {
         this.offersProfileView.down('#profImg').setSrc("./resources/icons/nw-icons/bg.jpg");
      } else
      {
         this.offersProfileView.down('#profImg').setSrc(img);
      }
      var offerlogo = record.data.profileImage;
      if (record.data.profileImage == "" || record.data.profileImage == null || record.data.profileImage == undefined)
      {
         this.offersProfileView.down('#placesStoresOfferBrandLogo').hide();
      } else
      {
         this.offersProfileView.down('#placesStoresOfferBrandLogo').show();
         this.offersProfileView.down('#placesStoresOfferBrandLogo').setSrc(offerlogo);
      }
      //this.offersProfileView.down('#placesStoresOfferBrandLogo').setSrc(offerlogo);

      var validto = document.getElementById('placesStoresOffersvalidTo');
      validto.innerHTML = 'Expira ' + record.data.validTo;

      /*var likeCount = document.getElementById('placesStoresOffersLikeHTML');
      likeCount.innerHTML = record.data.likeCount;
      
      var cmtCount = document.getElementById('placesStoresoffersCommentHTML');
      cmtCount.innerHTML = record.data.commentCount;*/

      var tagline = document.getElementById('placesStoresOffersTagLine');
      tagline.innerHTML = record.data.tagLine;

      var finePrint = document.getElementById('placesStoreOffersFineprint');
      finePrint.innerHTML = record.data.finePrint;

      var moreDetails = document.getElementById('placesStoresOffesrViewDetails');
    /*  if (finePrint.innerHTML == "") {
         moreDetails.innerHTML = "";
      }*/
      /*this.offersProfileView.down('#offersLikeHTML').setHtml(record.data.likeCount);
      this.offersProfileView.down('#offersCommentHTML').setHtml(record.data.commentCount);
      this.offersProfileView.down('#tagLine').setHtml(record.data.tagLine);*/
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
         this.offersProfileView = Ext.create('MobileApp.view.Places.PlacesStoreOffersProfileView');
      }
      var likeBut = this.getPlacesStoreOffersProfileView().down('#storesOfferLike');

      if (alreadyLikedOrNot != -1)  //already liked
      {

         likeBut.setIconCls('likeOfferIcon2');
         //likeBut.setText('Aversión Oferta');

      } else
      {

         likeBut.setIconCls('likeOfferIcon');
         //likeBut.setText('Como Oferta');
      }
      this.onSetSocialIcons(record);

      //for setting text

      /*     var preHeading = this.offersProfileView.down('#connectWithHeading').getHtml();
      preHeading = preHeading.split(" ", 2).join().replace(",", " ");
      var newHeading = preHeading + " " + record.data.name;
      this.offersProfileView.down('#connectWithHeading').setHtml(newHeading);*/
   },

   onSetSocialIcons: function(record)
   {
      //For social icons(if link is not given than images changes to light)
      var fb = this.getPlacesStoreOffersProfileView().down('#storesfaceBook');
      var twitter = this.getPlacesStoreOffersProfileView().down('#storestwitter');
      var linkedIn = this.getPlacesStoreOffersProfileView().down('#storeslinkedin');
      var google = this.getPlacesStoreOffersProfileView().down('#storesgoogle');
      var pinterest = this.getPlacesStoreOffersProfileView().down('#storespinterest');
      var youtube = this.getPlacesStoreOffersProfileView().down('#storesyouTube');

      if (record.data.fb == "" || record.data.fb == null)
      {
         fb.setSrc("./resources/icons/social/socialRound/fb1.png");
      } else
      {
         fb.setSrc("./resources/icons/social/socialRound/fb.png");
      }
      if (record.data.twitter == "" || record.data.twitter == null)
      {
         twitter.setSrc("./resources/icons/social/socialRound/twitter1.png");
      } else
      {
         twitter.setSrc("./resources/icons/social/socialRound/twitter.png");
      }
      if (record.data.linkedIn == "" || record.data.linkedIn == null)
      {
         linkedIn.setSrc("./resources/icons/social/socialRound/linkedin1.png");
      } else
      {
         linkedIn.setSrc("./resources/icons/social/socialRound/linkedin.png");
      }
      if (record.data.google == "" || record.data.google == null)
      {
         google.setSrc("./resources/icons/social/socialRound/gplus1.png");
      } else
      {
         google.setSrc("./resources/icons/social/socialRound/gplus1.png");
      }
      if (record.data.pinterest == "" || record.data.pinterest == null)
      {
         pinterest.setSrc("./resources/icons/social/socialRound/pinterest1.png");
      } else
      {
         pinterest.setSrc("./resources/icons/social/socialRound/pinterest.png");
      }

      if (record.data.youtube == "" || record.data.youtube == null)
      {
         youtube.setSrc("./resources/icons/social/socialRound/youtube1.png");
      } else
      {
         youtube.setSrc("./resources/icons/social/socialRound/youtube.png");
      }
   },

   setMapMarker: function(record)
   {
      var map = this.getPlacesStoreProfileView().down('#map').getMap();
      var position = new google.maps.LatLng(record.data.mapLoc[0], record.data.mapLoc[1]);
      var marker = new google.maps.Marker({
         position: position,
         map: map
      });

      marker.setMap(map);
      if (map.marker)
      {
         map.marker.setMap(null);
      }
      map.marker = marker;
      this.getPlacesStoreProfileView().down('#map').setMapCenter(position);
   },
   
   /********************************Offer View Events***********************************/

   onPostComment: function()
   {
      var parentRecord = this.getPlacesStoreOffersProfileView().getRecord();
      var offerId = parentRecord.data.key;
      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      var userId = loginStore.key;
      var value = this.getPlacesStoreOffersProfileView().down('#commentsTextField').getValue();

      Ext.Ajax.request({
         method: 'POST',
         url: MobileApp.util.Config.getBaseUrl() + '/PostOfferComment',
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
               this.getPlacesStoreOffersProfileView().down('#placesStoresOfferscommentDataView1').getStore().add(result);
               var preCommentVal = parentRecord.data.commentCount;
               var newCommentVal = parseInt(preCommentVal) + 1;
               parentRecord.data.commentCount = newCommentVal;
               this.getPlacesStoreOffersProfileView().down('#commentsTextField').setValue('');
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
      //var view = document.getElementById('placesStoresOffersLikeImage');
      var parentRecord = this.getPlacesStoreOffersProfileView().getParent().getActiveItem().getRecord();
      var offerId = parentRecord.data.key;

      // var likeValue = this.offersProfileView.down('#offersLikeHTML').getHtml();
      var likeValue = parentRecord.data.likeCount;

      var loginStore = Ext.getStore('LoginStore').data.items[0].data;
      var userId = loginStore.key;
      var offersLikedArray = loginStore.offersLiked;
      var alreadyLikedOrNot = offersLikedArray.indexOf(offerId);
      var toggled;

      if (alreadyLikedOrNot != -1)  //already liked
      {
         button.setIconCls('likeOfferIcon');
         //button.setText('Como Oferta');
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
         url: MobileApp.util.Config.getBaseUrl() + '/UserOffer/LikeOffer',
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


      this.getPlacesStoreViewOffersDataView().refresh();
   },

   onTapOfferDetail: function(element)
   {
      if (element.target.id == "placesStoresOffesrViewDetails")
      {

         var parentRecord = this.getPlacesStoreOffersProfileView().getRecord();
         var finePrint = parentRecord.data.finePrint;
         if (!this.offersDetailsView)
         {
            this.offersDetailsView = Ext.create('MobileApp.view.Offers.OffersOffDetailsView');
         }
         var navView = this.getPlacesStoreOffersProfileView().getParent();
         navView.push(this.offersDetailsView);
         //  this.offersDetailsView.down('#finePrintText').setHtml(finePrint);
         var finePrint1 = document.getElementById('offerdetailsfinePrint');
         finePrint1.innerHTML = finePrint;
      }
      /*   var navView = this.getPlacesStoreOffersProfileView().getParent();
      navView.push(this.offersDetailsView);
      this.offersDetailsView.down('#finePrintText').setHtml(finePrint);*/
   },

   onViewAllCom: function()
   {
      if (!this.offersAllCommentView)
      {
         this.offersAllCommentView = Ext.create('MobileApp.view.Places.PlacesStoresOffersAllCommentView');
      }

      var navView = this.getPlacesStoreOffersProfileView().getParent();
      navView.push(this.offersAllCommentView);
   },

   onFavFromProfView: function(button)
   {
      var text = button.getText();
      // console.log(button.iconCls);
      if (button.getIconCls() == 'favPlaceCodeIcon2')//doing unfavourite..
      {
         button.setText('Favorito');
         button.setIconCls('favPlaceCodeIcon');
         document.getElementById('storefavCount').innerHTML = parseInt(document.getElementById('storefavCount').innerHTML) - 1;
      } else
      {
         button.setText('Favorito');
         button.setIconCls('favPlaceCodeIcon2');
         document.getElementById('storefavCount').innerHTML = parseInt(document.getElementById('storefavCount').innerHTML) + 1;
      }
      var record;
      var locId;
      var ext;
      var navView = this.getPlacesStoreProfileView().getParent();

      if (navView.xtype == 'placesstoresnearbynavigationview')
      {

         record = this.getPlacesStoresList().getSelection()[0];
         locId = this.getPlacesStoresList().getSelection()[0].data.key;
         ext = '';
         this.setFavLocButton(record, locId, ext);

      }


      if (navView.xtype == 'placesstoreshotnavigationview')
      {

         record = this.getPlacesStoresHotList().getSelection()[0];
         locId = this.getPlacesStoresHotList().getSelection()[0].data.key;
         ext = '1';
         this.setFavLocButton(record, locId, ext);

      }


      if (navView.xtype == 'placesstoresfavnavigationview')
      {

         record = this.getPlacesStoresFavList().getSelection()[0];
         locId = this.getPlacesStoresFavList().getSelection()[0].data.key;
         ext = '2';
         this.setFavLocButton(record, locId, ext);

      }


      if (navView.xtype == 'placesstoressearchnavigationview')
      {

         record = this.getPlacesStoresSearchCatList().getSelection()[0];
         locId = this.getPlacesStoresSearchCatList().getSelection()[0].data.key;
         ext = '3';
         this.setFavLocButton(record, locId, ext);

      }
   },
   
   /********************************************search*******************************************/
   onSearchStores: function(field)
   {
      if (field.getValue().length >= 2)
      {
         var params = {
            busTypeId: 'BusType::1',
            name: field.getValue()
         };
         var store = Ext.getStore('StoresSearchByNameStore');
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
            var searchStore = Ext.getStore('PlacesStoresSearchListStore');
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

      var placesStore = Ext.getStore('PlacesStoresSearchListStore');
      var key = 'BusType::1';
      var params = { busTypeId: key };
      var ext = '3';
      this.loadListStore(placesStore, params, ext);
      Ext.getStore('StoresSearchByNameStore').removeAll();
   },

   onTapOverlay: function(view, index, list, record)
   {
      //alert("qwde");
      if (index == 0)
      {
         this.onDeleteComment(view);
      }
      if (index == 1)
      {
         this.onCancelComment(view);
      }


   },

   onTapCommemt: function(view, idx, list, rec, e)
   {
      //alert("sda");
      this.offerId = rec.data.offerId;
      this.commentId = rec.data.key;
      var userName = rec.data.userName;
      var value = this.getUsername(userName);
      if (value)
      {
         var overlay = Ext.create('MobileApp.view.Places.PlacesStoresOffersCommentOverlay');
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

   onCancelComment: function(view)
   {
      view.hide();
   },

   onDeleteComment: function(view)
   {
      var parentRecord = this.getPlacesStoreOffersProfileView().getRecord();
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
               var cmntView = this.getPlacesStoreOffersProfileView().down('#placesStoresOfferscommentDataView1');
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

   onStoresOfferShare: function()
   {
      var record = this.getPlacesStoreOffersProfileView().getRecord();
      window.plugins.socialsharing.share("" + "Hola, descarga la aplicación MovilMall y busca la oferta" + "" + record.data.tagLine + "" + "de" + "" + record.data.brandName, null, record.data.img, null);
   },

   onTapfaceBook: function()
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
      } else
      {
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
      } else
      {
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
      } else
      {
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
      } else
      {
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
      } else
      {
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
      } else
      {
         return;
      }
   },

   onTapCoupen: function()
   {
      var locKey = '';
      var activeTab = this.getPlacesStoresTabPanel().getActiveItem();
      if (activeTab.xtype == 'placesstoreshotnavigationview')
      {
         locKey = this.getPlacesStoresHotList().getSelection()[0].data.key;
      }

      if (activeTab.xtype == 'placesstoresfavnavigationview')
      {
         locKey = this.getPlacesStoresFavList().getSelection()[0].data.key;
      }

      if (activeTab.xtype == 'placesstoresnearbynavigationview')
      {
         locKey = this.getPlacesStoresList().getSelection()[0].data.key;
      }

      if (activeTab.xtype == 'placesstoressearchnavigationview')
      {
         locKey = this.getPlacesRestSearchCatList().getSelection()[0].data.key;
      }
      var offersKey = this.getPlacesStoreViewOffersDataView().getSelection()[0].data.key;
      var code = this.getPlacesStoreViewOffersDataView().getSelection()[0].data.code;

      var splittedOfferId = offersKey.split('::');
      var qrCodePartOne = 'BO' + splittedOfferId[1] + splittedOfferId[3];

      var splittedLocId = locKey.split('::');
      var qrCodePartTwo = 'BL' + splittedLocId[1] + splittedLocId[3];

      var qrCode = qrCodePartOne + '-' + qrCodePartTwo + '-' + code;

      if (!this.PlacesStoresQRCodeDataView)
      {
         this.PlacesStoresQRCodeDataView = Ext.create('MobileApp.view.Places.PlacesStoresQRCodeDataView');
      }
      var div = document.createElement('div');
      div.id = 'storesQrCodeDiv';

      document.body.appendChild(div);
      this.onRenderesQRCoupenView(qrCode);
   },

   onRenderesQRCoupenView: function(qrCode)
   {
      var div = document.getElementById('storesQrCodeDiv');
      div.style.marginTop = '3em';
      div.style.marginLeft = '1.75em';
      var qrCode1 = new QRCode('storesQrCodeDiv');
      qrCode1.makeCode(qrCode);
      this.PlacesStoresQRCodeDataView.setHtml(document.getElementById('storesQrCodeDiv'));
      var navView = this.getPlacesStoreProfileView().getParent();
      navView.push(this.PlacesStoresQRCodeDataView);
   }
});