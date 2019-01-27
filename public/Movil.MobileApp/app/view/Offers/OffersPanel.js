Ext.define('MobileApp.view.Offers.OffersPanel', {
   extend: 'Ext.tab.Panel',
   xtype: 'offerspanel',

   config: {
      tabBarPosition: 'bottom',
      width: '100%',
      cls: 'offersTab',
      id: 'offersPanel',
      ui: 'light',
      
      items: [{
         xtype: 'offershotdealsnavigationview',
         iconCls: 'hot'
      }, {
            iconCls: 'near',
            xtype: 'offersnewnavigationview'
         }, 
         {
            iconCls: 'favourite',
            itemId:'favNav',
            xtype: 'offersfavnavigationview'
         }, {
            iconCls: 'searchd',
            xtype: 'offerssearchnavigationview'
         }]
   }
});