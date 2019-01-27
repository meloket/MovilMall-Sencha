Ext.define('MobileApp.model.PlacesStoresSearchListModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'busTypeId', type: 'string' },
         { name: 'createdAt', type: 'date' },
         { name: 'updatedAt', type: 'date' },
         { name: 'deletedAt', type: 'date' },
         { name: 'isDeleted', type: 'boolean' },
         { name: 'groupCode', type: 'string' }
      ]
   }
});