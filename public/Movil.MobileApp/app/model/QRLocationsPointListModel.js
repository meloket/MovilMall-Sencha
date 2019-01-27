Ext.define('MobileApp.model.QRLocationsPointListModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
         { name: 'points', type: 'int' },
         { name: 'name', type: 'string' },
          { name: 'locName', type: 'string' },
         { name: 'logo', type: 'auto' },
         { name: 'brandId', type: 'string' }
        
      ]
   }
});