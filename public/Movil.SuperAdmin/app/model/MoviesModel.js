Ext.define('SuperAdmin.model.MoviesModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'releaseDate', type: 'date' },
      { name: 'runTime', type: 'string' },
      { name: 'namegenre', type: 'string' },
      { name: 'trailerLink', type: 'string' },
      { name: 'director', type: 'string' },
      { name: 'synopsis', type: 'string' },
      { name: 'rating', type: 'string' },
      { name: 'cast', type: 'string' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'deletedAt', type: 'date' },
      { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
      { name: 'photo', type: 'auto' }
   ]
});