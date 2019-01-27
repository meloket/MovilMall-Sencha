Ext.define('MobileApp.view.MainContainer', {
   extend: 'Ext.Container',
   xtype: 'maincontainer',
   requires: [
      'Ext.TitleBar'
   ],
   config: {
      fullscreen: true,
      layout: 'hbox',
      items: [{
         xtype: 'slidelist',
         width: '80%'
      }],
      listeners: {
         initialize: function(comp, eOpts)
         {
            comp.element.on(
               'tap',
               function(event, node, options, eOpts)
               {
                  this.fireEvent('tap');
               },
               comp
            );
         }
      }
   }
});