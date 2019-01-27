Ext.define('BrandAdmin.view.profile.ProfileCategoriesDataview', {
   
   extend: 'Ext.view.View',
   xtype: 'profilecategoriesdataview',
   store: 'ProfileCategoriesStore',

   tpl: Ext.create('Ext.XTemplate',

            '<div class="main-BusType">',
                              '<tpl for=".">',
                                '<form class="busCategoryMenu" name="busCategoryMenu">',
                                      '<input type="checkbox" name="busCategoryMenu" class="{name}" id="{key}">{name}',
                                '</form>',
                              '</tpl>',
                            '</div>',
      
      '<div class="main-info-BusType">',
      
      'Select one or more', '</br>', 'Product Categories', '</br>', 'you think is', '</br>',
       'appropriate for your','</br>','business',
                              
                            '</div>'


           ),

   itemSelector: 'form.busCategoryMenu'
});

