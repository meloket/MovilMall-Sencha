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
      {name:'location',type:'string'}
   ]
});