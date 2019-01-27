Ext.define('SuperAdmin.view.masters.StatesWindow', {
   extend: 'Ext.window.Window',
   alias: 'widget.stateswindow',
   title: '<b>State Detail</b>',
   closeAction: 'hide',
   cls: 'popupwin',
   titleAlign: 'center',
   width: 470,
   layout: 'fit',
   resizable: true,
   animateTarget: 'addState',
   modal: true,
   shadow: true,
   shadowOffset: 25,
   border: 1,
   //ui: 'black-window',
   //cls: 'flat-window',
   style: {
      'box-shadow': '0 0 25px rgba(0, 0, 0, 0.8)'
   },
   items: [{ xtype: 'statesform' }]
});