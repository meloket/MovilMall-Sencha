Ext.define('BrandAdmin.view.profile.ProfileCategoriesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'profilecategoriespanel',

   border: true,
   items: [
      {
         xtype: 'profilecategoriesdataview'
      }
   ],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
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