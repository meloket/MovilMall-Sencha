Ext.define('SuperAdmin.controller.AnalyticsController', {
   extend: 'Ext.app.Controller',

   views: ['analytics.AnalyticsPanel', 'analytics.AnalyticsTabPanel',
      'analytics.AnalyticsLocPanel',
      'analytics.AnalyticsLocGrid', 'analytics.AnalyticsOfferPanel', 'analytics.AnalyticsOffersGrid',
      'analytics.AnalyticsEventsPanel', 'analytics.AnalyticsEventsGrid',
      'analytics.AnalyticsFavEventPanel', 'analytics.AnalyticsFavOfferPanel',
      'analytics.AnalyticsOffersCommentsPanel', 'analytics.AnalyticsOffersCommentsDataView',
       'analytics.AnalyticsEventsCommentsPanel', 'analytics.AnalyticsEventsCommentsDataView',
      'analytics.AnalyticsFavLocGrid',
      'analytics.AnalyticsFavOfferGrid', 'analytics.AnalyticsFavEventGrid'],

   stores: ['AnalyticsEventsGridStore', 'AnalyticsOffersCommentsStore', 'AnalyticsLocGridStore', 'AnalyticsOffersGridStore',
      'AnalyticsFavLocGridStore', 'AnalyticsFavOfferGridStore', 'AnalyticsFavEventGridStore', 'AnalyticsEventsCommentsStore'],

   refs: [{
         ref: 'AnalyticsEventsGrid',
         selector: 'analyticseventsgrid'
      }, {
         ref: 'AnalyticsTabPanel',
         selector: 'analyticstabpanel'
      }, {
         ref: 'AnalyticsOffersGrid',
         selector: 'analyticsoffersgrid'
      }, {
         ref: 'AnalyticsLocGrid',
         selector: 'analyticslocgrid'
      }, {
         ref: 'AnalyticsOffersGrid',
         selector: 'analyticsoffersgrid'
      }, {
         ref: 'AnalyticsFavLocGrid',
         selector: 'analyticsfavlocgrid'
      }, {
         ref: 'AnalyticsFavEventGrid',
         selector: 'analyticsfaveventgrid'
      }, {
         ref: 'AnalyticsFavOfferGrid',
         selector: 'analyticsfavoffergrid'
      }],

   init: function()
   {
      this.control({
         'analyticstabpanel [itemId=analyticTabPanel]': {
            tabchange: this.onTabChange
         },
         'analyticseventsgrid': {
            select: this.onSelectEventsGrid
         },
         'analyticsoffersgrid': {
            select: this.onSelectOffersGrid
         },
         'analyticslocgrid': {
            select: this.onSelectLocGrid
         }
      });
   },

   onTabChange: function(tabPanel, newCard, oldCard, eOpts)
   {

      if (newCard.title == "Offers")
      {
         var eStore = this.getStore('AnalyticsOffersGridStore');
         var eGrid = this.getAnalyticsOffersGrid().getView();
         this.analyticsStoreLoad(eStore, eGrid);
      } else if (newCard.title == "Events")
      {
         var grid = this.getAnalyticsEventsGrid().getView();
         var store = this.getStore('AnalyticsEventsGridStore');
         this.analyticsStoreLoad(store, grid);
      }

   },

   onSelectLocGrid: function(grid, record, index)
   {
      if (record)
      {
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
      }

   },

   onSelectOffersGrid: function(grid, record, index)
   {
      if (record)
      {
         var params = {
            offerId: record.data.key
         };
         var favstore = this.getStore('AnalyticsFavOfferGridStore');
         var favGrid = this.getAnalyticsFavOfferGrid();
         this.onFavGridsStoreLoad(favstore, params);
         
         var commentsStore = this.getStore('AnalyticsOffersCommentsStore');
         this.onFavGridsStoreLoad(commentsStore, params);
      }

   },

   onSelectEventsGrid: function(grid, record, index)
   {
      if (record)
      {
         var params = {
            eventId: record.data.key
         };
         console.log(params);
         var favstore = this.getStore('AnalyticsFavEventGridStore');
         var favGrid = this.getAnalyticsFavEventGrid();
         this.onFavGridsStoreLoad(favstore, params);
         var commentsStore = this.getStore('AnalyticsEventsCommentsStore');
         this.onFavGridsStoreLoad(commentsStore, params);
      }

   },

   analyticsStoreLoad: function(store, grid)
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
               for (var i = 0; i < response.length; i++)
               {
                  if (response[i].data.datetime)
                  {
                     var d = response[i].data.datetime;
                     var date = d.split("T")[0];
                     var dateR = date.split("-")[2];
                     var monthR = date.split("-")[1];
                     var yearR = date.split("-")[0];

                     response[i].data.datetime = parseInt(dateR) + "/" + parseInt(monthR) + "/" + parseInt(yearR);
                  }
               }
               this.getAnalyticsEventsGrid().getView().refresh();
            }
         }
      });
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
   }
});