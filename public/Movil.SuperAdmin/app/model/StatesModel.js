Ext.define('SuperAdmin.model.StatesModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'type', type: 'string' },
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
       { name: 'deletedAt', type: 'date' },
     { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
      { name: 'isDefault', type: 'boolean', defaultValue: 'false' },
      { name: 'countryId', type: 'string' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' }],
   validations: [   
      { type: 'presence', field: 'name' },
      { type: 'length', field: 'name', max: 50 },
      { type: 'presence', field: 'countryId' }
   ]
});