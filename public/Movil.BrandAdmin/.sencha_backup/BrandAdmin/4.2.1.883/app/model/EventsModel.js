Ext.define('BrandAdmin.model.EventsModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'type', type: 'string' },
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'datetime', type: 'date' },
      { name: 'location', type: 'string' },
      { name: 'details', type: 'string' },
      { name: 'brandId', type: 'string' },
      { name: 'photo', type: 'auto' },
      { name: 'fb', type: 'string' },
      { name: 'twitter', type: 'string' },
      { name: 'linkedIn', type: 'string' },
      { name: 'google', type: 'string' },
      { name: 'pinterest', type: 'string' },
      { name: 'instagram', type: 'string' },
      { name: 'youtube', type: 'string' },
      { name: 'isDeleted', type: 'boolean' },
      { name: 'attendeeCount', type: 'int' },
      { name: 'likeCount', type: 'int' },
      { name: 'commentCount', type: 'int' },
       { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'deletedAt', type: 'date' }
   ]
});