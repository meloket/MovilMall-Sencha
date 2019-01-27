Ext.define('BrandAdmin.model.MasterComboModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'stateId', type: 'string' },
      {name:'isDefault',type:'boolean'}
   ]
});