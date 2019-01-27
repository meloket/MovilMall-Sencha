Ext.define('BrandAdmin.model.OffersModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'tagLine', type: 'string' },
      { name: 'isActive', type: 'boolean', dafaultValue: false },
      { name: 'isBlocked', type: 'boolean', dafaultValue: false },
      { name: 'isDeleted', type: 'boolean' },
      { name: 'img', type: 'auto' },
      { name: 'code', type: 'string' },
      { name: 'validFrom', type: 'date', useNull: true },
      { name: 'validTo', type: 'date', useNull: true },
      { name: 'finePrint', type: 'string' },
      { name: 'hashTags', type: 'auto' },
      { name: 'tags', type: 'string',defaultValue:null },
      { name: 'categories', type: 'auto' },
      { name: 'locations', type: 'auto' },
      { name: 'brandId', type: 'string' },
      { name: 'likeCount', type: 'int' },
      { name: 'clickCount', type: 'int' },
      { name: 'busTypeId', type: 'string' },
      { name: 'commentCount', type: 'int' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'deletedAt', type: 'date' },
      { name: 'listImg',type:'auto'}
   ],
   validations: [
      { type: 'presence', field: 'tagLine' },
      { type: 'presence', field: 'code' },
      { type: 'presence', field: 'validFrom' },
      { type: 'presence', field: 'validTo' },
      { type: 'length', field: 'tagLine', max: 28 }
   ]
});