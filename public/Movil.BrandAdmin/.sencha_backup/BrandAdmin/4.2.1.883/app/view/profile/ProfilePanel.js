Ext.define('BrandAdmin.view.profile.ProfilePanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'profilepanel',
   layout: {
      type: 'border'
   },
   width: 850,
   border: true,

   items: [{
      xtype: 'profilebreadcrumb',
      region: 'north'
   }, {
      xtype: 'profilebreadcrumbpanel',
      region: 'center'
   }]
});