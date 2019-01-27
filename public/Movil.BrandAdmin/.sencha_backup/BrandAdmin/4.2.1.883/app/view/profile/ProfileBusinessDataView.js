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
      '<input type="checkbox" name="busType" class="{name}" id="{key}" >{name}',   
      '</form>',     
      '</tpl>',    
      '</div>',      
      '<div class="main-info-BusType">',  
     
      'Please select any one', '</br>', ' of the options from', '</br>', ' the following which', '</br>', ' indicates the type of', '</br>', ' business for this', '</br>', ' brand.',       
    
    '</div>'
   ),
   

   itemSelector: 'form.busMenu'
});