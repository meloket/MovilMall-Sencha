Ext.define('BrandAdmin.view.offers.OffersPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'offerspanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },
   width: 800,
   border: false,

   items: [{
      xtype: 'offersgrid'
   },
      {
         xtype: 'offersdetailspanel'
      }]
});