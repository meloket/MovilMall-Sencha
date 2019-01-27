Ext.define('MobileApp.model.CityComboModel', {
   extend: 'Ext.data.Model',
   config: {
   fields: [
      { name: 'name', type: 'string' },
      { name: 'key', type: 'string' }
   ]
   }
});