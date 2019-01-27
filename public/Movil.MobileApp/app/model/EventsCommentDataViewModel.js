Ext.define('MobileApp.model.EventsCommentDataViewModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'userId', type: 'string' },
         { name: 'value', type: 'string' },
         { name: 'eventId', type: 'string' },
         { name: 'datetime', type: 'string' },
         { name: 'createdAt', type: 'date' },
          { name: 'photo', type: 'auto' },
         { name: 'userName', type: 'string' }
      ]
   }
});