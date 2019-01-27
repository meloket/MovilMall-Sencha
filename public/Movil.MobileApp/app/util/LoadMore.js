Ext.define('MobileApp.util.LoadMore', {
   extend: 'Ext.plugin.ListPaging',
   
/*   applyLoadMoreCmp: function (config) {
      var list = this.getList();
      config = Ext.merge(config, {
         html: this.getLoadTpl().apply({
            cssPrefix: Ext.baseCSSPrefix,
            message: this.getLoadMoreText()
         }),
         
         scrollDock: 'bottom',
         listeners: {
            tap: {

               fn: this.loadNextPage,
               scope: this,
               element: 'element'
            }
         },
         id: 'loadMore'
      });

      return Ext.factory(config, Ext.Component, this.getLoadMoreCmp());
   },*/
   
   loadNextPage: function ()
   {
     
     var store = this.getList().getStore();
     //store = Ext.getStore(store.getStoreId().replace('Sql', ''));
     if (store.last())
     {
        if (store.getStoreId() == 'EventsListSqlStore')
        {
           this.setLoading(true);
           MobileApp.app.getController('EventsController').onScroll();

        } else if (store.getStoreId() == 'OffersMallDataViewStore')
        {
           this.setLoading(true);
           MobileApp.app.getController('OffersController').onScrollOfMallsDataView();
        }else
        {
           this.setLoading(true);
           MobileApp.app.getController('OffersController').onScroll();
        }
       
     }
    
   }
   
});