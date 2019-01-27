Ext.define('MobileApp.model.OffersCommentDataViewModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'userId', type: 'string' },
         { name: 'photo', type: 'auto' },
         { name: 'value', type: 'string' },
         { name: 'offerId', type: 'string' },
         { name: 'datetime', type: 'string' },
         { name: 'createdAt', type: 'date' },
         { name: 'userName', type: 'string' }
      ]
   }
});