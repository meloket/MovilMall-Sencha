Ext.define('MobileApp.model.StateComboModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'name', type: 'string' },
         { name: 'key', type: 'string' }
      ]
   }
});