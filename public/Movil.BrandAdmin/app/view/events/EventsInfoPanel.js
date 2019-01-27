Ext.define('BrandAdmin.view.events.EventsInfoPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'eventsinfopanel',
   cls: 'flatTabPanel',
   layout: {
      type: 'fit',
      align: 'stretch'
   },
   border:true,
   items: [{
         xtype: 'eventsinfoform'/*,
         region: 'west',
         flex: 1*/
      }/*, {
         xtype: 'eventsphotoform',
         region: 'center',
         flex: 1.5
      }*/],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         {
            action: 'save',
            tooltip: 'Save',
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.save',
               tooltip: 'save.tooltip'
            }/*,
            height:30*/
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.cancel',
               tooltip: 'back.tooltip'
            }/*,
            height: 30*/
         }
      ]
   }]
});