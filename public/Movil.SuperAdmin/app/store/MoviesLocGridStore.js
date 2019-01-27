Ext.define('SuperAdmin.store.MoviesLocGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.MoviesLocGridModel',
   proxy:
       ({
          type: 'rest',
          api:
             {
                read: '../GetLocationsByMovie'
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
});
