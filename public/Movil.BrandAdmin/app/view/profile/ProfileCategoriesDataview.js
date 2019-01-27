Ext.define('BrandAdmin.view.profile.ProfileCategoriesDataview', {
   extend: 'Ext.view.View',
   xtype: 'profilecategoriesdataview',
   store: 'ProfileCategoriesStore',
   //height:600,
   tpl: Ext.create('Ext.XTemplate',
      
      '<div class="main-CatGrp1" id="cat1">',
       '<b>', '<u>', 'Grupo 1', '</u>', '</b>',
      '<tpl for=".">',
      '<tpl if="busTypeId == \'BusType::1\'">',
      '<tpl if="groupCode == 1">',
      '<form class="busCategoryMenu" name="busCategoryMenu">',
      '<input name="busCategoryMenu" class="{name}" id="{key}" type="checkbox">{name}',
      '</form>',
      '</tpl>',
      '</tpl>',
      '</tpl>',
      '</div>',
      
      
      '<div class="main-CatGrp2" id="cat2">',
      '<b>','<u>', 'Grupo 2','</u>', '</b>',
      '<tpl for=".">',
      '<tpl if="busTypeId == \'BusType::1\'">',
      '<tpl if="groupCode == 2">',
      '<form class="busCategoryMenu" name="busCategoryMenu">',
     '<input name="busCategoryMenu" class="{name}" id="{key}" type="checkbox">{name}',
      '</form>',
      '</tpl>',
      '</tpl>',
      '</tpl>',
      '</div>',
      

      '<div class="main-CatGrp3" id="cat3">',
       '<b>', '<u>', 'Grupo 3', '</u>', '</b>',
      '<tpl for=".">',
      '<tpl if="busTypeId == \'BusType::1\'">',
      '<tpl if="groupCode == 3">',
      '<form class="busCategoryMenu" name="busCategoryMenu">',
      '<input name="busCategoryMenu" class="{name}" id="{key}" type="checkbox">{name}',
      '</form>',
      '</tpl>',
      '</tpl>',
      '</tpl>',
      '</div>',
      

      '<div class="main-CatGrp4" id="cat4">',
      '<b>', '<u>', 'Grupo 4', '</u>', '</b>',
      '<tpl for=".">',
      '<tpl if="busTypeId == \'BusType::1\'">',
      '<tpl if="groupCode == 4">',
      '<form class="busCategoryMenu" name="busCategoryMenu">',
      '<input name="busCategoryMenu" class="{name}" id="{key}" type="checkbox">{name}',
      '</form>',
      '</tpl>',
      '</tpl>',
      '</tpl>',
      '</div>',
      

      '<div class="main-BusType" id="othercat">',
      '<tpl for=".">',
      '<tpl if="busTypeId !== \'BusType::1\'">',
      '<form class="busCategoryMenu" name="busCategoryMenu">',
      '<input name="busCategoryMenu" class="{name}" id="{key}" type="checkbox">{name}',
      '</form>',
      '</tpl>',
      '</tpl>',
      '</div>'
     
      /* '<div class="main-info-BusType">',
      
      'Select one or more', '</br>', 'Product Categories', '</br>', 'you think is', '</br>',
       'appropriate for your','</br>','business',
                              
                            '</div>'
*/

   ),

   itemSelector: 'form.busCategoryMenu',
   listeners: {
      'viewready': {
         fn: function(view, eOpts)
         {
            var store = this.getStore();
          //  console.log(store);
            if (store.data.items.length > 0)
            {
               var value = store.data.items[0].data.busTypeId;


               for (var i = 0; i < store.data.length; i++)
               {
                  if (value !== "BusType::1")
                  {
                     document.getElementById('cat1').style.display = 'none';
                     document.getElementById('cat2').style.display = 'none';
                     document.getElementById('cat3').style.display = 'none';
                     document.getElementById('cat4').style.display = 'none';
                  } else
                  {
                     document.getElementById('othercat').style.display = 'none';
                  }
               }
            } else
            {
               document.getElementById('cat1').style.display = 'none';
               document.getElementById('cat2').style.display = 'none';
               document.getElementById('cat3').style.display = 'none';
               document.getElementById('cat4').style.display = 'none';
            }
         }
      }
   }
});