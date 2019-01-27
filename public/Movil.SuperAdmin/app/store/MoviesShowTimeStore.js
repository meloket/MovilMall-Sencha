Ext.define('SuperAdmin.store.MoviesShowTimeStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.MoviesShowTimeModel',
   proxy:
       ({
          type: 'rest',
          api:
             {
                read: '../GetShowTimesByLocation'
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
