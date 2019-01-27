Ext.define('BrandAdmin.store.MoviesShowTimesDataViewStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.MoviesShowTimesDataViewModel',
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetShowTimesByLocation',
               create: '../CreateMovieLocation',
               update: '../UpdateMovieLocation'
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
            read: 'POST',
            create: 'POST',
            update:'PUT'
         }
      })
});
