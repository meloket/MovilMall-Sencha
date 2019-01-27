Ext.define('SuperAdmin.store.CountriesStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.CountriesModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
     ({
        type: 'rest',
        api:
           {
              create:'../Country/CreateCountry',
              read: '../Country/GetCountries',
              update: '../Country/UpdateCountry',
              destroy: '../Country/DeleteCountry'
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
