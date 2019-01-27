Ext.define('SuperAdmin.model.MoviesShowTimeModel', {
   extend: 'Ext.data.Model',
   fields: [
     { name: 'key', type: 'string' },
      { name: 'date', type: 'date' },
      { name: 'name', type: 'string' },
      { name: 'showTimes', type: 'string' },
      { name: 'brandId', type: 'string' },
      { name: 'updatedAt', type: 'date' },
      { name: 'createdAt', type: 'date' },
      { name: 'locationId', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'movieId', type: 'string' },
      { name: 'type', type: 'string' }
   ]
});
