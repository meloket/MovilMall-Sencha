Ext.define('MobileApp.view.Places.PlacesRestTabPanel', {
   extend: 'Ext.tab.Panel',
   xtype: 'placesresttabpanel',

   config: {
      tabBarPosition: 'bottom',
      width: '100%',
      cls: 'offersTab',
      ui: 'light',
        //id: 'offersPanel',
      items: [{
         xtype: 'placesresthotnavigationview',
         iconCls: 'hot'
      }, {
         iconCls: 'near',
         xtype: 'placesrestnearbynavigationview'
         //  xtype: 'offersnewnavigationview'
      }, 
         {
            iconCls: 'favourite',
            xtype: 'placesrestfavnavigationview'
         }, {
            iconCls: 'searchd',
            xtype: 'placesrestsearchnavigationview'
         }]
   }
});