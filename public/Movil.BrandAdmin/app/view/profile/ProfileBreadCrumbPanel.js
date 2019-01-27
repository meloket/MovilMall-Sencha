Ext.define('BrandAdmin.view.profile.ProfileBreadCrumbPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'profilebreadcrumbpanel',
   requires: [
      'Ext.tab.Panel',
      'Ext.layout.container.Border'
   ],
   //width: 800,
   border: false,
   layout: {
      type: 'card'
   },
   items: [
      {
         xtype: 'profileidentityform'//0
      },
      {
         xtype: 'profilebusinesspanel'//1
      }, {
         xtype: 'profilecategoriespanel'//2
      },
      {
         xtype: 'profilephotographform'//3
      },
      {
         xtype: 'profilesocialform'//4
      }
   ]
});