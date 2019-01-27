Ext.define('SuperAdmin.store.MoviesStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.MoviesModel',
   proxy:
       ({
          type: 'rest',
          api:
             {
                read: '../GetMovies',
                update: '../UpdateMovie',
                create: '../CreateMovie',
                destroy: '../DeleteMovie'
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
