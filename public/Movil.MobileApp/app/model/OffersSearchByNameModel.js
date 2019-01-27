Ext.define('MobileApp.model.OffersSearchByNameModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'name', type: 'string' }
      ]
   }
});