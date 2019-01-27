Ext.define('SuperAdmin.store.UsersGridStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.LoginModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
       ({
          type: 'rest',
          api:
             {
                read: '../User/getAllUsers'
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
