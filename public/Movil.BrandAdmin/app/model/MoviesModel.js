Ext.define('BrandAdmin.model.MoviesModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'releaseDate', type: 'date' },
      { name: 'runTime', type: 'string' },
      { name: 'genre', type: 'string' },
      { name: 'trailerLink', type: 'string' },
      { name: 'director', type: 'string' },
      { name: 'synopsis', type: 'string' },
      { name: 'rating', type: 'string' },
      { name: 'cast', type: 'string' },
      { name: 'deletedAt', type: 'date' },
      { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'photo', type: 'auto' },
      { name: 'brandId', type: 'string' }
   ],
   validations: [
      { type: 'presence', field: 'name' },
      { type: 'presence', field: 'releaseDate' },
      { type: 'presence', field: 'runTime' },
      { type: 'presence', field: 'genre' },
      { type: 'presence', field: 'rating' },
      { type: 'presence', field: 'director' },
      { type: 'presence', field: 'cast' },
      { type: 'presence', field: 'synopsis' },
      { type: 'length', field: 'synopsis', min: 100 }
   ]
});