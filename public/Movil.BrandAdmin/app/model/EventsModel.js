Ext.define('BrandAdmin.model.EventsModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'type', type: 'string' },
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'date', type: 'date' },
      { name: 'time', type: 'string' },
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
      { name: 'attendeeCount', type: 'int' },
      { name: 'likeCount', type: 'int' },
      { name: 'commentCount', type: 'int' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'deletedAt', type: 'date' },
      { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
      { name: 'isBlocked', type: 'boolean', dafaultValue: false },
      { name: 'toEventsTime', type: 'string', useNull: true },
      { name: 'fromEventsTime', type: 'string', useNull: true }
   ],
   validations: [
        { type: 'presence', field: 'name' },
       { type: 'presence', field: 'date' },
       { type: 'presence', field: 'toEventsTime' },
       { type: 'presence', field: 'fromEventsTime' },
       { type: 'presence', field: 'location' }
   ]
});