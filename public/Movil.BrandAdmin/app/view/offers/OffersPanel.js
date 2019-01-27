Ext.define('BrandAdmin.view.offers.OffersPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'offerspanel',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'card'
   },
   width: 950,
   border: true,

   items: [{
      xtype: 'offersgrid'
   },
      {
         xtype: 'offersdetailspanel'
      }]
});