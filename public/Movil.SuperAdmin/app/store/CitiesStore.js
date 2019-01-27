Ext.define('SuperAdmin.store.CitiesStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.CitiesModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
     ({
        type: 'rest',
        api:
           {
              create: '../City/CreateCity',
              read: '../City/GetCities',
              update: '../City/UpdateCity',
              destroy: '../City/DeleteCity'
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
