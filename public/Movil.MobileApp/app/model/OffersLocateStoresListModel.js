Ext.define('MobileApp.model.OffersLocateStoresListModel', {
   extend: 'Ext.data.Model',
   config: {
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
         { name: 'workingHoursFrom', type: 'string', useNull: true },
         { name: 'workingHoursTo', type: 'string', useNull: true },
         { name: 'cityName', type: 'string' },
         { name: 'img', type: 'auto' },
         { name: 'stateName', type: 'string' },
         { name: 'locationWithinMall', type: 'string' },
         { name: 'mapLoc', type: 'auto' },
         { name: 'brandId', type: 'string' },
         { name: 'favCount', type: 'int' },
         { name: 'categories', type: 'string' },
         { name: 'busTypeId', type: 'string' },
         { name: 'mallId', type: 'string' },
         { name: 'updatedAt', type: 'date' },
         { name: 'createdAt', type: 'date' },
         { name: 'deletedAt', type: 'date' },
         { name: 'contactNo', type: 'string' },
         { name: 'isDeleted', type: 'boolean', defaultValue: 'false' }
      ]
   }
});