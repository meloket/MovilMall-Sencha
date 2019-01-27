Ext.define('BrandAdmin.model.ProfileCategoriesModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'busTypeId', type: 'string' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
       { name: 'deletedAt', type: 'date' },
      { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
      {name:'groupCode', type:'int'}
   ]
});