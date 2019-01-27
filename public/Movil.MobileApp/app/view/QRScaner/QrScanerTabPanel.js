Ext.define('MobileApp.view.QrScaner.QrScanerTabPanel', {
   extend: 'Ext.tab.Panel',
   xtype: 'qrscanertabpanel',

   config: {
      tabBarPosition: 'bottom',
      ui: 'light',
      title: 'QRScanner',
      cls: 'eventsTabPanel',
      items: [{
            xtype: 'qrscanview',
            title: 'QR Scanner'         
         }, {
            xtype: 'qrlocationspointlist'
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


         }
      }
   }
});