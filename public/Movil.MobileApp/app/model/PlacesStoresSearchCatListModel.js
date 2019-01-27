Ext.define('MobileApp.model.PlacesStoresSearchCatListModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'location', type: 'string' },
            { name: 'logo', type: 'auto' },
         { name: 'insideMall', type: 'boolean' },
         { name: 'description', type: 'string' },
         { name: 'address', type: 'string' },
         { name: 'cityId', type: 'string' },
         { name: 'stateId', type: 'string' },
         { name: 'postalCode', type: 'string' },
         { name: 'workingHoursFrom', type: 'string', useNull: true },
         { name: 'workingHoursTo', type: 'string', useNull: true },
         { name: 'cityName', type: 'string' },
         { name: 'stateName', type: 'string' },
         { name: 'locationWithinMall', type: 'string' },
         { name: 'mapLoc', type: 'auto' },
         { name: 'brandId', type: 'string' },
         { name: 'brandName', type: 'string' },
         { name: 'favCount', type: 'int' },
         { name: 'categories', type: 'string' },
         { name: 'busTypeId', type: 'string' },
         { name: 'mallId', type: 'string' },
         { name: 'updatedAt', type: 'string' },
         { name: 'createdAt', type: 'string' },
         { name: 'deletedAt', type: 'string' },
         { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
         { name: 'contactNo', type: 'string' }
      ]
   }
});