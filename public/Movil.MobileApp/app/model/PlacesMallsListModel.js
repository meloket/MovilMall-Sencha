Ext.define('MobileApp.model.PlacesMallsListModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'cityName', type: 'string' },
         { name: 'location', type: 'string' },
         { name: 'contactNo', type: 'string' },
         { name: 'logo', type: 'auto' },
         { name: 'workingHoursFrom', type: 'string' },
         { name: 'workingHoursTo', type: 'string' },
         { name: 'favCount', type: 'int' },
          { name: 'description', type: 'string' }
      ]
   }
});