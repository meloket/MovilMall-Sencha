Ext.define('SuperAdmin.store.StatesStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.StatesModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
     ({
        type: 'rest',
        api:
           {
              create: '../State/CreateState',
              read: '../State/GetStates',
              update: '../State/UpdateState',
              destroy: '../State/DeleteState'
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
