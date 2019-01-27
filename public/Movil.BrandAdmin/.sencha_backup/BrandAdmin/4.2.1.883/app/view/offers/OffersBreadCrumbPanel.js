Ext.define('BrandAdmin.view.offers.OffersBreadCrumbPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'offersbreadcrumbpanel',
   requires: [
      'Ext.tab.Panel',
      'Ext.layout.container.Border'
   ],
   width: 800,
   border: false,
   layout: {
      type: 'card'
   },
   items: [
      {
         xtype: 'offersinfoform'
      },
      {
         xtype: 'offersdescriptionform'
      },
      {
         xtype: 'offerscategoriespanel'
      },
      {
         xtype: 'offerslocgrid'
      }
   ]
});