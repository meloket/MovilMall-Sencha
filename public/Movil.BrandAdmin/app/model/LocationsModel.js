Ext.define('BrandAdmin.model.LocationsModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'insideMall', type: 'string'},
      { name: 'address', type: 'string' },
      { name: 'cityId', type: 'string' },
      { name: 'stateId', type: 'string' },
      { name: 'postalCode', type: 'string' },
      { name: 'workingHoursFrom', type: 'string', useNull:true},
      { name: 'workingHoursTo', type: 'string', useNull:true },
       { name: 'cityName', type: 'string' },
      { name: 'stateName', type: 'string' },
      { name: 'locationWithinMall', type: 'string' },
      { name: 'mapLoc', type: 'auto' },
      { name: 'brandId', type: 'string' },
      { name: 'qrCodeTwo', type: 'string' },
      { name: 'qrCodeOne', type: 'string' },
      { name: 'favCount', type: 'int' },
      { name: 'categories', type: 'auto' },
      { name: 'busTypeId', type: 'string' },
      { name: 'mallId', type: 'string' },
      { name: 'updatedAt', type: 'date' },
      { name: 'createdAt', type: 'date' },
      { name: 'deletedAt', type: 'date' },
      { name: 'isDeleted', type: 'boolean', defaultValue: 'false' }
   ],
   validations: [
      { type: 'presence', field: 'location' },
     { type: 'presence', field: 'address' },
     { type: 'presence', field: 'workingHoursFrom' },
     { type: 'presence', field: 'workingHoursTo' }
   ]

});

