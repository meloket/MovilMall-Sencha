Ext.define('SuperAdmin.model.CountryComboModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      {name : 'isDefault', type: 'boolean'}
   ]
   
});