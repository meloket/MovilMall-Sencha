Ext.define('MobileApp.store.MoviesSearchByNameStore', {
   extend: 'Ext.data.Store',

   config: {
      model: 'MobileApp.model.PlacesRestNearByListModel',
      //   autoLoad: true,
      proxy:
         ({
            type: 'rest',
            idProperty: 'id',
            api:
               {
                  //    read: '../GetOffers'
                  read: MobileApp.util.Config.getBaseUrl() + '/UserLocation/GetLocByName'
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