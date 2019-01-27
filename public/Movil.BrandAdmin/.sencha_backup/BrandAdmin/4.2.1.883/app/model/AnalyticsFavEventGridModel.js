Ext.define('BrandAdmin.model.AnalyticsFavEventGridModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'canLogin', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'cityId', type: 'string' },
      { name: 'stateId', type: 'string' },
      { name: 'dob', type: 'string' },
      { name: 'events', type: 'auto' },
      { name: 'eventsLiked', type: 'auto' },
      { name: 'favLoc', type: 'auto' },
      { name: 'brandIdoffersLiked', type: 'auto' },
      { name: 'brandId', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'updatedAt', type: 'date' },
      { name: 'pass', type: 'int' },
      { name: 'photo', type: 'string' },
      { name: 'role', type: 'string' },
      { name: 'createdAt', type: 'date' }
   ]
});

