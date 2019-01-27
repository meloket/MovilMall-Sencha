Ext.define('MobileApp.store.CityComboStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.CityComboModel',
      sorters: [{
         property: 'name',
         direction: 'ASC'
      }],
      autoLoad:true,
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl()+'/City/getCities'
               },
            reader:
               {
                  type: 'json'
               },
            writer:
               {
                  type: 'json'
               }
         })
   }
});