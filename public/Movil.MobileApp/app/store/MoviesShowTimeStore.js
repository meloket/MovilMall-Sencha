Ext.define('MobileApp.store.MoviesShowTimeStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.MoviesShowTimeModel',
      //   autoLoad: true,
      proxy:
         ({
            type: 'rest',
            idProperty: 'id',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/GetShowTimesByLocation'
               },
            reader:
               {
                  type: 'json'
               },
            writer:
               {
                  type: 'json'
               },
            actionMethods: {
               read: 'POST'
            }
         })
   }
});