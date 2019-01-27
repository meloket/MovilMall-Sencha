Ext.define('SuperAdmin.model.CitiesModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'type', type: 'string' },
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'isDeleted', type: 'boolean', defaultValue: 'false' },
      { name: 'isDefault', type: 'boolean', defaultValue: 'false' },
      { name: 'stateId', type: 'string' },
       { name: 'countryId', type: 'string' },
      { name: 'createdAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'deletedAt', type: 'date' }],
   validations: [
      { type: 'presence', field: 'name' },
      { type: 'length', field: 'name', max: 50 },
      { type: 'presence', field: 'countryId' },
      { type: 'presence', field: 'stateId' }
   ]
});