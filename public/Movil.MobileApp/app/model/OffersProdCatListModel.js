
Ext.define('MobileApp.model.OffersProdCatListModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'groupCode', type: 'boolean' },
         { name: 'isDeleted', type: 'boolean' },
         { name: 'busTypeId', type: 'string' },
         { name: 'createdAt', type: 'date' },
         { name: 'updatedAt', type: 'date' },
         { name: 'deletedAt', type: 'date' }
      ]
   }
});

