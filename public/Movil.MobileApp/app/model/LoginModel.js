Ext.define('MobileApp.model.LoginModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'brandId', type: 'string' },
         { name: 'brandName', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'canLogin', type: 'boolean' },
         { name: 'cityId', type: 'string' },
         { name: 'createdAt', type: 'date' },
         { name: 'updatedAt', type: 'date' },
         { name: 'dob', type: 'string'},
         { name: 'email', type: 'string' },
         { name: 'events', type: 'auto' },
         { name: 'eventsLiked', type: 'auto' },
         { name: 'favLoc', type: 'auto' },
         { name: 'offersLiked', type: 'auto' },
         { name: 'pass', type: 'string' },
         { name: 'photo', type: 'auto' },
         { name: 'role', type: 'string' },
         { name: 'stateId', type: 'string' },
         { name: 'cityName', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'stateName', type: 'string' },
         { name: 'lang', type: 'string' }
      ]
   }
});