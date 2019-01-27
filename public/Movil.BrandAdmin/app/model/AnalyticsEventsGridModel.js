Ext.define('BrandAdmin.model.AnalyticsEventsGridModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'datetime', type: 'string' },
        { name: 'date', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'details', type: 'string' },
      { name: 'brandId', type: 'string' },
      { name: 'photo', type: 'auto' },
      { name: 'attendeeCount', type: 'int' },
      { name: 'likeCount', type: 'int' },
      { name: 'logo', type: 'auto' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'fb', type: 'string' },
      { name: 'twitter', type: 'string' },
      { name: 'linkedIn', type: 'string' },
      { name: 'google', type: 'string' },
      { name: 'pinterest', type: 'string' },
      { name: 'instagram', type: 'string' },
      { name: 'youtube', type: 'string' }
   ]
});