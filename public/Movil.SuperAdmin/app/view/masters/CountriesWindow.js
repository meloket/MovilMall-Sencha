Ext.define('SuperAdmin.view.masters.CountriesWindow', {
   extend: 'Ext.window.Window',
   alias: 'widget.countrieswindow',
   title: '<b>Country Detail</b>',
   closeAction: 'show',
   titleAlign: 'center',
   cls: 'popupwin',
   width: 470,
   layout: 'fit',
   resizable: true,
   animateTarget: 'addCountry',
   modal: true,
   shadow: true,
   shadowOffset: 25,
   border: 1,
   //ui: 'black-window',
   //cls: 'flat-window',
   style: {
      'box-shadow': '0 0 25px rgba(0, 0, 0, 0.8)'
     
   },
   items: [{ xtype: 'countriesform' }]
});