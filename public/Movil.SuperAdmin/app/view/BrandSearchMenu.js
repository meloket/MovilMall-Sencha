Ext.setGlyphFontFamily('Pictos');
Ext.define('SuperAdmin.view.BrandSearchMenu', {
   extend: 'Ext.menu.Menu',
   xtype: 'brandsearchmenu',
   plain: true,
   border: false,
   shadow: 'drop',
   cls: 'at-menu-large',
   shadowoffset: 20,
   items: [{
         margin: '0 18 5 18',
         xtype: 'button',
         text: 'Pending',
         action: 'pending',
         cls: 'menu-search-button'
   }, {
      margin: '0 18 5 18',
      xtype: 'button',
      text: 'Approved',
      action: 'approved',
      cls: 'menu-search-button'
   }, {
      margin: '0 18 5 18',
      xtype: 'button',
      text: 'All',
      action: 'all',
      cls: 'menu-search-button'
   }
   ]
});