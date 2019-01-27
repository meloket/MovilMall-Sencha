Ext.define('BrandAdmin.store.MoviesStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.MoviesModel',
   proxy:
        ({
           type: 'rest',
           api:
              {
                 read: '/GetMoviesByBrand',
                 create: '../CreateMovie',
                 update: '../UpdateMovie',
                 destroy: '../DeleteMovie'
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
              update: 'PUT',
              destroy:'DELETE'
           }
        })
});
