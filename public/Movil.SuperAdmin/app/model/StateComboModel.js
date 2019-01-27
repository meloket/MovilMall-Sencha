Ext.define('SuperAdmin.model.StateComboModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'countryId', type: 'string' },
      { name: 'isDefault', type: 'boolean' }
   ]
});