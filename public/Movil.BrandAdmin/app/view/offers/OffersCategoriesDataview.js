Ext.define('BrandAdmin.view.offers.OffersCategoriesDataview', {
      extend: 'Ext.view.View',
      xtype: 'offerscategoriesdataview',
   
      store: 'OffersCategoriesStore',

      tpl: Ext.create('Ext.XTemplate',      
         '<div class="main-BusType">',
         '<tpl for=".">',
       
         '<form class="busMenu" name="offersMenu">',
         //DONT CHANGE THE SEQUENCE OF BELOW INPUT TAG,ACCORDING IT CODE IS WRITTEN IN PROFILE CONTROLLER -FUNCTION-"onProfileBusinessDataView"
         '<input name="offersMenu" class="{name}" id="{key}" type="checkbox">{name}',
         '</form>',     
         '</tpl>', 
         '</div>'    
        /* '<div class="main-info-BusType">',  
     
         'Please select any one', '</br>', ' of the options from', '</br>', ' the following which', '</br>', ' indicates the type of', '</br>', ' business for this', '</br>', ' brand.',       
    
       '</div>'*/
      ),
   
   itemSelector: 'form.busMenu',
   listeners: {
      'viewready': {
         fn: function(view, eOpts)
         {
            var store = this.getStore();
            if (store.data.items.length == 0)
            {
               this.getEl().dom.style.display = "none";
            }
         }
      }
   }
   });