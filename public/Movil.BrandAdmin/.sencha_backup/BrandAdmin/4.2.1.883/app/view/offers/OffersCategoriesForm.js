Ext.define('BrandAdmin.view.offers.OffersCategoriesForm', {
   extend: 'Ext.form.Panel',
   xtype: 'offerscategoriesform',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   items: [{
      xtype: 'fieldset',
      width:350,
      border: true,
      margin: '120 0 0 90',
      //defaultType: 'textfield',
      items: [{
         xtype: 'fieldcontainer',
         defaultType: 'checkboxfield',
         items: [
            {
               boxLabel: 'Sports',
               id: 'checkbox1'
            },
            {
               boxLabel: 'Sports Equipment',
               id: 'checkbox2'
            },
            {
               boxLabel: 'Sports Accessories',
               id: 'checkbox3'
            },
            {
               boxLabel: 'Footwear',
               id: 'checkbox4'
            },
            {
               boxLabel: 'Apparel',
               id: 'checkbox5'
            }]
      }]
      }],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
          {
             action: 'back',
             tooltip: 'Back',
             text: 'Back',
             margin: '5 5 0 0',
             cls: 'save-flat-btn',
             width: 70
          }, '->',
         {
            action: 'save',
            tooltip: 'Save',
            text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70
         }, '->', {
            action: 'next',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Next page',
            text: 'Next',
            width: 70
         }
      ]
   }]
});