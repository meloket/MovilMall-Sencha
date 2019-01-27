Ext.define('BrandAdmin.view.profile.ProfileBusinessDataView', {
   // extend: 'Ext.form.Panel',
   extend: 'Ext.view.View',
   xtype: 'profilebusinessdataview',
   store: 'ProfileBusinessStore',

   tpl: Ext.create('Ext.XTemplate',      
      '<div class="main-BusType">',
      '<tpl for=".">',
      '<form class="busMenu" name="menu">',
      //DONT CHANGE THE SEQUENCE OF BELOW INPUT TAG,ACCORDING IT CODE IS WRITTEN IN PROFILE CONTROLLER -FUNCTION-"onProfileBusinessDataView"
      '<input name="busType" class="{name}" id="{key}" type="checkbox">{name}',
      '</form>',     
      '</tpl>',    
      '</div>'    
     /* '<div class="main-info-BusType">',
     
      //'Please select any one', '</br>', ' of the options from', '</br>', ' the following which', '</br>', ' indicates the type of', '</br>', ' business for this', '</br>', ' brand.',       
    
    '</div>'*/
   ),
   

   itemSelector: 'form.busMenu'/*,
   listeners: {
      'itemclick': {
         fn: function(view, eOpts)
         {
             var max = document.menu.length; //GETTING ALL ITEMS
      var count = 0;

      for (var i = 0; i < max; i++)
      {
         if (document.menu[i].busType.checked)
         {
            count++;
            //serNoChecked = i;
            var busTypeId = document.menu[i].busType.id;
            document.menu[i].busType.checked = false;

         } else
         {
            document.menu[i].busType.checked = true;
         }
    
   
      }
         }
      }
   }*/
});