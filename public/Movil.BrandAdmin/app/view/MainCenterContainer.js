Ext.define('BrandAdmin.view.MainCenterContainer', {
   extend: 'Ext.panel.Panel',
   xtype: 'maincentercontainer',
   layout: {
      type: 'hbox',
      pack: 'center',
      align: 'stretch'
   },
   margins: '15% 0 10% 0',
   /*layout: 'fit',*/
   border: false,

   items: [{
      xtype: 'homepanel'
   }]

});