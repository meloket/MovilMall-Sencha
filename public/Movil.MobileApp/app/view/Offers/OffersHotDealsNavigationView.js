Ext.define('MobileApp.view.Offers.OffersHotDealsNavigationView', {
   extend: 'Ext.navigation.View',
   xtype: 'offershotdealsnavigationview',
   config: {
      fullscreen: true,
   
      height: '100%',
      autoDestroy: false,
      defaultBackButtonText: '',
      navigationBar: {
         ui: 'light',
         
         backButton: {
            iconCls: 'back',
            ui: 'plain'
         },
         items: [{
            align: 'left',
            id: 'hdSlideBut',
            iconCls: 'listNew',
            ui: 'plain'
         }
         ]
      },
      items: [
      {
       //  title: 'Ofertas Populares',
         itemId:'offHotDataView',
         xtype: 'offershotdealsdataview'
      }]

   }
});
