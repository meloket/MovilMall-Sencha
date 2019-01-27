Ext.define('BrandAdmin.model.AnalyticsOffersGridModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'brandId', type: 'string' },
      { name: 'busTypeId', type: 'string' },
      { name: 'categories', type: 'auto' },
      { name: 'clickCount', type: 'string' },
      { name: 'code', type: 'string' },
      { name: 'commentCount', type: 'string' },
      { name: 'createdAt', type: 'string' },
      { name: 'finePrint', type: 'string' },
      { name: 'img', type: 'string' },
      { name: 'isActive', type: 'boolean' },
      { name: 'likeCount', type: 'string' },
      { name: 'locations', type: 'string' },
      { name: 'tagLine', type: 'string' },
      { name: 'likeCount', type: 'string' },
      { name: 'tags', type: 'string' },
      { name: 'updatedAt', type: 'string' },
      { name: 'validFrom', type: 'date' },
      { name: 'validTo', type: 'date' }
   ]
});