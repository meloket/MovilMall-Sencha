Ext.define('MobileApp.model.PlacesListModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
          { name: 'key', type: 'string' },
         { name: 'name', type: 'string' },
          { name: 'type', type: 'string' }

      ]

   }
});