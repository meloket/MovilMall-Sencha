Ext.define('BrandAdmin.view.events.EventsInfoPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'eventsinfopanel',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   items: [{
      xtype: 'eventsinfoform',
      region: 'west',
      flex: 1
   }, {
      xtype: 'eventsphotoform',
      region: 'center',
      flex: 1.5
   }],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         {
            action: 'save',
            tooltip: 'Save',
            text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Back to Grid',
            text: 'Cancel',
            width: 70
         }
      ]
   }]
});