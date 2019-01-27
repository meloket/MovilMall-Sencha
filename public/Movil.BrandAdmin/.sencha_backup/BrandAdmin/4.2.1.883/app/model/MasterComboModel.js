Ext.define('BrandAdmin.model.MasterComboModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'name', type: 'string' },
      {name:'stateId',type:'string'}
   ]
});