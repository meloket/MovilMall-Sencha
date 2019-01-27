﻿Ext.define('BrandAdmin.view.profile.ProfileCategoriesPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'profilecategoriespanel',
   autoScroll: true,
   border: false,
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
         '->', {
            action: 'save',
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
            tooltip: 'Next page',
            //text: 'Next',
            width: 70,
            locales: {
               text: 'buttons.next'
            }
         }*/
      ]
   }]
});