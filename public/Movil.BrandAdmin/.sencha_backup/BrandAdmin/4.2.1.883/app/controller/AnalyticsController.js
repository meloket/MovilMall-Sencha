Ext.define('BrandAdmin.controller.AnalyticsController', {
   extend: 'Ext.app.Controller',

   views: ['analytics.AnalyticsPanel', 'analytics.AnalyticsTabPanel', 'analytics.AnalyticsEventsPanel',
      'analytics.AnalyticsLocPanel', 'analytics.AnalyticsOfferPanel', 'analytics.AnalyticsLocGrid',
      'analytics.AnalyticsFavLocGrid', 'analytics.AnalyticsOffersGrid', 'analytics.AnalyticsFavOfferPanel',
      'analytics.AnalyticsFavOfferGrid', 'analytics.AnalyticsOfferCommentsPanel', 'analytics.AnalyticsOfferCommentsDataView',
      'analytics.AnalyticsEventsCommentsPanel', 'analytics.AnalyticsEventsCommentsDataView',
      'analytics.AnalyticsEventsGrid', 'analytics.AnalyticsFavEventPanel', 'analytics.AnalyticsFavEventGrid'
   ],
   stores: ['AnalyticsFavLocGridStore', 'AnalyticsLocGridStore', 'AnalyticsEventsGridStore',
      'AnalyticsOffersGridStore', 'AnalyticsFavOfferGridStore', 'AnalyticsFavEventGridStore',
   'AnalyticsEventsCommentsStore'],
   
   refs: [{
         ref: 'AnalyticsLocGrid',
         selector: 'analyticslocgrid'
      },
      {
         ref: 'AnalyticsTabPanel',
         selector: 'analyticstabpanel'
      },
      {
         ref: 'AnalyticsEventsGrid',
         selector: 'analyticseventsgrid'
      },
      {
         ref: 'AnalyticsOffersGrid',
         selector: 'analyticsoffersgrid'
      },
      {
         ref: 'AnalyticsFavLocGrid',
         selector: 'analyticsfavlocgrid'
      },
      {
         ref: 'AnalyticsFavEventGrid',
         selector: 'analyticsfaveventgrid'
      },
      {
         ref: 'AnalyticsFavOfferGrid',
         selector: 'analyticsfavoffergrid'
      }],

   init: function()
   {
      this.control({
         'analyticslocgrid': {
            select: this.onSelectLocGrid
         },
         'analyticstabpanel [itemId=analyticTabPanel]': {
            tabchange: this.onTabChange
         },
         'analyticsoffersgrid': {
            select: this.onSelectOffersGrid
         },
         'analyticseventsgrid': {
            select: this.onSelectEventsGrid
         }
      });
   },

   onTabChange: function(tabPanel, newCard, oldCard, eOpts)
   {
      var brandId = this.getStore('LoginStore').data.items[0].data.brandId;
      var params = {
         brandId: brandId
      };

      if (newCard.title == "Events")
      {
         var eGrid = this.getAnalyticsEventsGrid().getView();
         var eStore = this.getStore('AnalyticsEventsGridStore');
         this.analyticsStoreLoad(eStore, eGrid,params);
      } else if (newCard.title == "Offers")
      {
         var oStore = this.getStore('AnalyticsOffersGridStore');
         var oGrid = this.getAnalyticsOffersGrid().getView();
         this.analyticsStoreLoad(oStore, oGrid,params);
      }

   },

   onSelectEventsGrid: function(grid, record, index)
   {
      var params = {
         eventId: record.data.key
      };
      console.log(params);
      var favstore = this.getStore('AnalyticsFavEventGridStore');
      var favGrid = this.getAnalyticsFavEventGrid();
      this.onFavGridsStoreLoad(favstore, params);
      var commentsStore = this.getStore('AnalyticsEventsCommentsStore');
      this.onOfferCommentsStore(commentsStore, params);
   },

   onSelectOffersGrid: function(grid, record, index)
   {
      var params = {
         offerId: record.data.key
      };
      var favstore = this.getStore('AnalyticsFavOfferGridStore');
      var favGrid = this.getAnalyticsFavOfferGrid();
      this.onFavGridsStoreLoad(favstore, params);
   },

   onSelectLocGrid: function(grid, record, index)
   {
      //var store1 = this.getAnalyticsLocGridStoreStore();
      //store1.load();
      var params = {
         locationId: record.data.key
      };
      var favstore = this.getStore('AnalyticsFavLocGridStore');
      var favGrid = this.getAnalyticsFavLocGrid().getView();

      this.onFavGridsStoreLoad(favstore, params);
      console.log(favstore);
      if (favstore.data.items.length != 0)
      {
         favGrid.select(0);
      }
   },

   onFavGridsStoreLoad: function(store, params)
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
            }
         }
      });
   },

   analyticsStoreLoad: function(store, grid,params)
   {
      store.load({
         scope: this,
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
               var count = grid.all.getCount();
               if (count > 0)
               {
                  grid.select(0);

               }
            }
         }
      });
   }
});