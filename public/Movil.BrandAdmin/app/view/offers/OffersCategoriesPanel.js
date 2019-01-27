Ext.define('BrandAdmin.view.offers.OffersCategoriesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'offerscategoriespanel',
   autoScroll:true,
   border: false,
   items: [
      {
         xtype: 'offerscategoriesdataview'
      }
   ],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
          {
             action: 'back',
             //tooltip: 'Back',
             //text: 'Back',
             margin: '5 5 0 0',
             cls: 'save-flat-btn',
             locales: {
                text: 'buttons.back',
                tooltip: 'back.tooltip'
             }
          }, '->',
         {
            action: 'save',
            //tooltip: 'Save',
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.save',
               tooltip: 'save.tooltip'
            }
         }/*, '->', {
            action: 'next',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Next Page',
            //text: 'Next',
            width: 70,
            locales: {
               text: 'buttons.next'
            }
         }*/
      ]
   }]
});