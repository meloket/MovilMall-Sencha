Ext.define('MobileApp.view.Offers.OffersOffDetailsView', {
   extend: 'Ext.Container',
   xtype: 'offersoffdetailsview',

   config: {
      layout: 'fit',
      title: 'Descripción',
      scrollable:true,
      style:'background-color:white',
      items: [/*{
         xtype: 'dataview',
         store: 'OffersHotDealsDataViewStore',
         itemTpl: '<div class="comments">' +
            '{finePrint}' +
           '</div>'

      },*/ {
         xtype: 'label',
        // style: 'background-color: #ccc',
        //cls: 'offersFinePrintCls',
         store: 'OffersHotDealsDataViewStore',
         itemId:'finePrintText',
         // html: 'Obtenga Ofertas exclusivas de esta temporada'
         html:'<div class="offerDetails">' +
                  '<p class="offerDetailsFinePrint" id="offerdetailsfinePrint"></p>' +
               '</div>'
      }]

   }
});
