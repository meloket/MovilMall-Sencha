Ext.define('BrandAdmin.model.MoviesShowTimesDataViewModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'movieId', type: 'string' },
      { name: 'locationId', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'brandId', type: 'string' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'date', type: 'date' },
      { name: 'showTimes', type: 'string' },
      { name: 'location', type: 'string' },
       { name: 'deletedAt', type: 'date' },
       { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
      { name: 'isShowing', type: 'boolean', defaultValue: 'true' }
   ],
   validations: [
     { type: 'presence', field: 'date' },
     { type: 'presence', field: 'showTimes' }
   ]
});