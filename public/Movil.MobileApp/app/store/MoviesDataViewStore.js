Ext.define('MobileApp.store.MoviesDataViewStore', {
   extend: 'Ext.data.Store',

   config: {     
      model: 'MobileApp.model.MoviesDataViewModel',
      proxy:
         ({
            type: 'rest',
            idProperty: 'id',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/GetMoviesByLocation'
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
               create: 'POST',
               read: 'POST',
               update: 'PUT',
               destroy: 'DELETE'
            }
         })
   }
});