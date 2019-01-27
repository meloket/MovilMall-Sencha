Ext.define('MobileApp.model.PlacesEntertainmentListModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'location', type: 'string' },
         { name: 'cityName', type: 'string' },
         { name: 'logo', type: 'auto' },
         { name: 'mapLoc', type: 'auto' },
         { name: 'favCount', type: 'int' },
         { name: 'categories', type: 'string' },
         { name: 'address', type: 'string' },
         { name: 'workingHoursFrom', type: 'string' },
         { name: 'workingHoursTo', type: 'string' },
         { name: 'insideMall', type: 'bool' },
         { name: 'description', type: 'string' },
          { name: 'contactNo', type: 'string' },
          {name:'locationWithinMall',type:'string'}

      ]

   }
});