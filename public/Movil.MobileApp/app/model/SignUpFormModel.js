Ext.define('MobileApp.model.SignUpFormModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
          { name: 'id', type: 'int' },
         { name: 'name', type: 'string' },
            { name: 'email', type: 'string' },
         { name: 'pass', type: 'string' },
         { name: 'dob', type: 'date' },
         { name: 'cityId', type: 'id' },
         { name: 'stateId', type: 'id' },
          { name: 'cityName', type: 'string' },
         { name: 'stateName', type: 'string' }
         
      ],
      validations: [
    { type: 'presence', field: 'name' },
    { type: 'presence', field: 'email' },
      { type: 'presence', field: 'pass' }
      ]

   }
});