Ext.define('SuperAdmin.view.businessTypes.CategoriesWindow', {
   extend: 'Ext.window.Window',
   xtype: 'categorieswindow',
   title: 'Add new Category',
   cls: 'popupwin',
   closeAction: 'show',
   titleAlign: 'center',
   width: 400,
   layout: 'fit',
   resizable: true,
   animateTarget: 'addCategory',
   modal: true,
   shadow: true,
   shadowOffset: 25,
   border: 1,
  style: {
      'box-shadow': '0 0 25px rgba(0, 0, 0, 0.8)'
   },
  items: [{ xtype: 'categoriesform' }]
});