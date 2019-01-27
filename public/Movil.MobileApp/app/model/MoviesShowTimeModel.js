Ext.define('MobileApp.model.MoviesShowTimeModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'name', type: 'string' },
         { name: 'key', type: 'string' },
         { name: 'showTimes', type: 'string' },
         { name: 'location',type:'string' }
      ]
   }
});