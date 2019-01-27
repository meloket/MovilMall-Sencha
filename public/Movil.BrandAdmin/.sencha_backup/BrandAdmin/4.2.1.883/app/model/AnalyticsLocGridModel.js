Ext.define('BrandAdmin.model.AnalyticsLocGridModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'insideMall', type: 'boolean' },
      { name: 'address', type: 'string' },
      { name: 'cityId', type: 'string' },
      { name: 'stateId', type: 'string' },
      { name: 'postalCode', type: 'string' },
      { name: 'workingHours', type: 'string' },
      { name: 'locationWithinMall', type: 'string' },
      { name: 'mapLoc', type: 'array' },
      { name: 'brandId', type: 'string' },
      { name: 'favCount', type: 'int' },
      { name: 'categories', type: 'string' },
      { name: 'busTypeId', type: 'string' },
      { name: 'mallId', type: 'string' },
      { name: 'updatedAt', type: 'date' },
      { name: 'createdAt', type: 'date' }
   ]
});

