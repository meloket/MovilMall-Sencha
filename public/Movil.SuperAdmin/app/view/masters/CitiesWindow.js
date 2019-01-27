Ext.define('SuperAdmin.view.masters.CitiesWindow', {
   extend: 'Ext.window.Window',
   alias: 'widget.citieswindow',
   title: '<b>City Detail</b>',
   closeAction: 'hide',
   titleAlign: 'center',
   cls: 'popupwin',
   width: 470,
   layout: 'fit',
   resizable: true,
   animateTarget: 'addCity',
   modal: true,
   shadow: true,
   shadowOffset: 25,
   border: 1,
   //cls: 'flat-window',
   //ui: 'black-window',
   style: {
      'box-shadow': '0 0 25px rgba(0, 0, 0, 0.8)'
   },
   items: [{ xtype: 'citiesform' }]
});