Ext.define('MobileApp.model.OffersRestListModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
          { name: 'key', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'location', type: 'string' },
         { name: 'cityName', type: 'string' },
         { name: 'logo', type: 'auto' },
         { name: 'favCount', type: 'int' },
         { name: 'categories', type: 'string' },
         { name: 'workingHoursFrom', type: 'int' },
         { name: 'workingHoursTo', type: 'int' }
      ]

   }
});