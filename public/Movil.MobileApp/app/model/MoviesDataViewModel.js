Ext.define('MobileApp.model.MoviesDataViewModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'contactNo', type: 'string' },
         { name: 'MovieName', type: 'string' },
         { name: 'runTime', type: 'string' },
         { name: 'logo', type: 'auto' },
         { name: 'photo', type: 'auto' },
         { name: 'genre', type: 'string' },
         { name: 'releaseDate', type: ' date', format: 'd/m/Y' },
         { name: 'type', type: 'string' },
         { name: 'trailerLink', type: 'string' },
         { name: 'director', type: 'string' },
         { name: 'synopsis', type: 'string' },
         { name: 'location', type: 'string' },
         { name: 'cityName', type: 'string' },
         { name: 'rating', type: 'string' },
         { name: 'cast', type: 'string' },
         { name: 'timings', type: 'string' },
      ]
   }
});