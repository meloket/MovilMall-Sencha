Ext.define('MobileApp.view.Places.PlacesStoresTabPanel', {
   extend: 'Ext.tab.Panel',
   xtype: 'placesstorestabpanel',

   config: {
      tabBarPosition: 'bottom',
      width: '100%',
      cls: 'offersTab',
      ui: 'light',
      items: [{
         xtype: 'placesstoreshotnavigationview',
         iconCls: 'hot'
      }, {
            iconCls: 'near',
            xtype: 'placesstoresnearbynavigationview'
            //  xtype: 'offersnewnavigationview'
         },
         {
            iconCls: 'favourite',
            xtype: 'placesstoresfavnavigationview'
         }, {
            iconCls: 'searchd',
            xtype: 'placesstoressearchnavigationview'
         }]
   }
});