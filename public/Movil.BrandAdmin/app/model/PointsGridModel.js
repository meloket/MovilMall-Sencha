Ext.define('BrandAdmin.model.PointsGridModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'type', type: 'string' },
       { name: 'userId', type: 'string' },
      { name: 'points', type: 'int' },
       { name: 'locationId', type: 'string' },
      { name: 'userName', type: 'string',persist:false },
       { name: 'scannedAt', type: 'date' },
      { name: 'updatedAt', type: 'date' },
      { name: 'createdAt', type: 'date' },
       { name: 'email', type: 'string', persist: false }
   ]
});

