Ext.define('BrandAdmin.store.MoviesStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.MoviesModel',
   proxy:
        ({
           type: 'rest',
           api:
              {
                 read: '../GetMovies'/*,
                 update: '../UpdateMovie',
                 create: '../CreateMovie',
                 destroy: '../DeleteMovie'*/
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
});
