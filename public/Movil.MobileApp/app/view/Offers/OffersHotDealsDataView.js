/*Ext.define('Ux.plugin.ListPaging', {
   extend: 'Ext.Component',
   alias: 'plugin.listpaging',

   config: {
      /**
       * @cfg {Boolean} autoPaging
       * True to automatically load the next page when you scroll to the bottom of the list.
       #1#
      autoPaging: false,

      /**
       * @cfg {String} loadMoreText The text used as the label of the Load More button.
       #1#
      loadMoreText: 'Load More...',

      /**
       * @cfg {String} noMoreRecordsText The text used as the label of the Load More button when the Store's
       * {@link Ext.data.Store#totalCount totalCount} indicates that all of the records available on the server are
       * already loaded
       #1#
      noMoreRecordsText: 'No More Records',

      /**
       * @private
       * @cfg {String} loadTpl The template used to render the load more text
       #1#
      loadTpl: [
          '<div class="{cssPrefix}loading-spinner" style="font-size: 180%; margin: 10px auto;">',
               '<span class="{cssPrefix}loading-top"></span>',
               '<span class="{cssPrefix}loading-right"></span>',
               '<span class="{cssPrefix}loading-bottom"></span>',
               '<span class="{cssPrefix}loading-left"></span>',
          '</div>',
          '<div class="{cssPrefix}list-paging-msg">{message}</div>'
      ].join(''),

      /**
       * @cfg
       * @private
       #1#
      loadMoreCmp: {
         xtype: 'component',
         baseCls: Ext.baseCSSPrefix + 'list-paging'
      },

      /**
       * @private
       * @cfg {Boolean} loadMoreCmpAdded Indicates whether or not the load more component has been added to the List
       * yet.
       #1#
      loadMoreCmpAdded: false,

      /**
       * @private
       * @cfg {String} loadingCls The CSS class that is added to the {@link #loadMoreCmp} while the Store is loading
       #1#
      loadingCls: Ext.baseCSSPrefix + 'loading',

      /**
       * @private
       * @cfg {Ext.List} list Local reference to the List this plugin is bound to
       #1#
      list: null,

      /**
       * @private
       * @cfg {Ext.scroll.Scroller} scroller Local reference to the List's Scroller
       #1#
      scroller: null,

      /**
       * @private
       * @cfg {Boolean} loading True if the plugin has initiated a Store load that has not yet completed
       #1#
      loading: false
   },

   /**
    * @private
    * Sets up all of the references the plugin needs
    #1#
   init: function (list) {
      var scroller = list.getScrollable().getScroller(),
          store = list.getStore();
      console.log(store);
      this.setList(list);
      this.setScroller(scroller);
      this.bindStore(list.getStore());

      // We provide our own load mask so if the Store is autoLoading already disable the List's mask straight away,
      // otherwise if the Store loads later allow the mask to show once then remove it thereafter
      if (store) {
         this.disableDataViewMask(store);
      }

      // The List's Store could change at any time so make sure we are informed when that happens
      list.updateStore = Ext.Function.createInterceptor(list.updateStore, this.bindStore, this);

      if (this.getAutoPaging()) {
         scroller.on({
            scrollend: this.onScrollEnd,
            scope: this
         });
      }
   },

   /**
    * @private
    #1#
   bindStore: function (newStore, oldStore) {
      if (oldStore) {
         oldStore.on({
            addrecords: this.onStoreLoad,
            beforesync: this.onStoreBeforeLoad,
            scope: this
         });
      }

      if (newStore) {
         newStore.on({
            addrecords: this.onStoreLoad,
            beforesync: this.onStoreBeforeLoad,
            scope: this
         });

         //            this.disableDataViewMask(newStore);
      }
   },

   /**
    * @private
    * Removes the List/DataView's loading mask because we show our own in the plugin. The logic here disables the
    * loading mask immediately if the store is autoloading. If it's not autoloading, allow the mask to show the first
    * time the Store loads, then disable it and use the plugin's loading spinner.
    * @param {Ext.data.Store} store The store that is bound to the DataView
    #1#
   disableDataViewMask: function (store) {
      var list = this.getList();

      if (store.isAutoLoading()) {
         list.setLoadingText(null);
      } else {
         store.on({
            load: {
               single: true,
               fn: function () {
                  list.setLoadingText(null);
               }
            }
         });
      }
   },

   /**
    * @private
    #1#
   applyLoadTpl: function (config) {
      return (Ext.isObject(config) && config.isTemplate) ? config : new Ext.XTemplate(config);
   },

   /**
    * @private
    #1#
   applyLoadMoreCmp: function (config) {
      config = Ext.merge(config, {
         html: this.getLoadTpl().apply({
            cssPrefix: Ext.baseCSSPrefix,
            message: this.getLoadMoreText()
         }),
         listeners: {
            tap: {
               fn: this.loadNextPage,
               scope: this,
               element: 'element'
            }
         }
      });

      return Ext.factory(config, Ext.Component, this.getLoadMoreCmp());
   },

   /**
    * @private
    * If we're using autoPaging and detect that the user has scrolled to the bottom, kick off loading of the next page
    #1#
   onScrollEnd: function (scroller, x, y) {
      if (!this.getLoading() && y >= scroller.maxPosition.y) {
         this.loadNextPage();
      }
   },

   /**
    * @private
    * Makes sure we add/remove the loading CSS class while the Store is loading
    #1#
   updateLoading: function (isLoading) {
      var loadMoreCmp = this.getLoadMoreCmp(),
          loadMoreCls = this.getLoadingCls();

      if (isLoading) {
         loadMoreCmp.addCls(loadMoreCls);
      } else {
         loadMoreCmp.removeCls(loadMoreCls);
      }
   },

   /**
    * @private
    * If the Store is just about to load but it's currently empty, we hide the load more button because this is
    * usually an outcome of setting a new Store on the List so we don't want the load more button to flash while
    * the new Store loads
    #1#
   onStoreBeforeLoad: function (store) {
      if (store.getCount() === 0) {
         this.getLoadMoreCmp().hide();
      }
   },

   /**
    * @private
    #1#
   onStoreLoad: function (store) {
      var loadCmp = this.addLoadMoreCmp(),
          template = this.getLoadTpl(),
          message = this.storeFullyLoaded() ? this.getNoMoreRecordsText() : this.getLoadMoreText();
      console.log(message);
      this.getLoadMoreCmp().show();
      this.setLoading(false);

      //restores scroll position after a Store load
      if (this.scrollY) {
         this.getScroller().scrollTo(null, this.scrollY);
         delete this.scrollY;
      }

      //if we've reached the end of the data set, switch to the noMoreRecordsText
      loadCmp.setHtml(template.apply({
         cssPrefix: Ext.baseCSSPrefix,
         message: message
      }));
   },

   /**
    * @private
    * Because the attached List's inner list element is rendered after our init function is called,
    * we need to dynamically add the loadMoreCmp later. This does this once and caches the result.
    #1#
   addLoadMoreCmp: function () {
      var list = this.getList(),
          cmp = this.getLoadMoreCmp();

      if (!this.getLoadMoreCmpAdded()) {
         list.add(cmp);

         /**
          * @event loadmorecmpadded  Fired when the Load More component is added to the list. Fires on the List.
          * @param {Ext.plugin.ListPaging} this The list paging plugin
          * @param {Ext.List} list The list
          #1#
         list.fireEvent('loadmorecmpadded', this, list);
         this.setLoadMoreCmpAdded(true);
      }

      return cmp;
   },

   /**
    * @private
    * Returns true if the Store is detected as being fully loaded, or the server did not return a total count, which
    * means we're in 'infinite' mode
    * @return {Boolean}
    #1#
   storeFullyLoaded: function () {
      var store = this.getList().getStore(),
          total = store.getTotalCount();

      return total !== null ? store.getTotalCount() <= (store.currentPage * store.getPageSize()) : false;
   },

   /**
    * @private
    #1#
   loadNextPage: function () {
      var me = this;
      if (!me.storeFullyLoaded()) {
         me.setLoading(true);

         //keep a cache of the current scroll position as we'll need to reset it after the List is
         //updated with new data
         me.scrollY = me.getScroller().position.y;

         me.getList().getStore().nextPage({ addRecords: true });
      }
   }
});*/
var ppi = window.devicePixelRatio;
Ext.define('MobileApp.view.Offers.OffersHotDealsDataView', {
   extend: 'Ext.Container',
   xtype: 'offershotdealsdataview',
   title: 'Ofertas Populares',
   config: {
      layout: 'fit',
      items: [{
         xtype: 'list',
         id: 'offersHotDealsDataView',
         itemId: 'offersHotDealsDataView',
         scrollToTopOnRefresh: false,
         style: 'background-color: #ccc',
         locales: {
            emptyText: 'Offers.emptyText'
         },
         //emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/coffee1.png" alt="No Offer available currently" >',
         inline: { wrap: false },
         cls: 'offersDataview',
         itemTpl: new Ext.XTemplate(
            '<div class="main">' +
               //'<p class="offerTitle">{brandName}</p>' +
              // '<img class="profileImage" src={profileImage}>' +

            '<div class="profileImage" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/150x50/' + ppi + '/{brandId}-logo);' + 'background-size: 100% 100%;"> </div>' +
           // '<img class="img" src="./resources/images/test.jpeg">' +
            //'<div class="img" style="background-image: url(./resources/images/download.jpg);background-size: cover;"> </div>' +
               '<div class="img" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/150x112/' + ppi + '/{key}-crop);' + 'background-size: cover;"> </div>' +
              /* '<tpl if="listImg==\'data:,\'">' +
               '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
               '<tpl else>' +
               '<img class="img" src={listImg} >' +
               '</tpl>' +*/
               '<div class="offerTagLineBlurDiv">{tagLine}</div>' +
               '<div>{[this.getPercentage(values.validTo)]}</div>' +
               // '<p class="offerExpiry">Termina el {validTo}</p>' +
               '<div class="offerBottomBar">' +
               '<div style="float:left; width:40%;">' +
               '<img src="./resources/icons/nw-icons/comment.png"></img>' +
               '<p id="{key}-comment" class="offerComments">{commentCount}</p>' +
               '</div>' +
               
               '<div style="float:right; width:30%;">' +
               '<img src="./resources/icons/nw-icons/like_white.png">' +
               '<p id="{key}-like" class="offerLikes">{likeCount}</p>' +
               '</div>' +
               //'<div style="float:left; width:20%;">' +
               // '<img src="./resources/icons/nw-icons/share.png">' +
               //'</div>' +
               '</div>' +
               '</div>',
            {
               getPercentage: function(validTo)
               {
                  //console.log('asf');
                  var items = Ext.getStore('LoginSqlStore').data.items;
                  if (items.length != 0)
                  {
                     var lang = items[0].data.lang;
                     if (lang == 'en')
                     {
                        var dateEn = '<p class="offerExpiry">Expires on&nbsp' + validTo + '</p>';
                        return dateEn;
                     }
                     if (lang == 'fr')
                     {
                        var dateFr = '<p class="offerExpiry">Termina &nbsp' + validTo + '</p>';
                        return dateFr;
                     }

                  } else
                  {
                     return '<p class="offerExpiry">Termina &nbsp' + validTo + '</p>';
                  }
               }
            }
         ),

         plugins: [
            {
               xclass: 'MobileApp.util.DataViewPullRefresh',
             //  pullText: 'Deslice esta pantalla hacia abajo para refrescar las ofertas.',
               autoSnapBack: false,
               scrollerAutoRefresh: true,
               releaseText: '',
               loadingText: '',
               loadedText: '',
               itemId: 'pull',
               locales: {
                  pullText: 'pullRefresh.pullText'
               }
            }, {
               xclass: 'MobileApp.util.LoadMore',
               autoPaging: true
            }],
         store: 'OffersHotDealsDataViewSqlStore'
      }],
      listeners: {
         initialize: function(comp, eOpts)
         {
            comp.bodyElement.on(
               'painted',
               function(event, node, options, eOpts)
               {
                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('painted', event);
               },
               comp
            );

            comp.bodyElement.on(
               'swipe',
               function(event, node, options, eOpts)
               {
                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );
         }
      }
   }
});