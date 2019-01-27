Ext.define('MobileApp.store.EventDetailsStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'details'
      ],
      data: [
         { details: 'The goods at Sport Fest will not be on sale for customers.' },
          { details: 'The goods at Sport Fest will not be on sale for customers.' },
          { details: 'The goods at Sport Fest will not be on sale for customers.' },
          { details: 'The goods at Sport Fest will not be on sale for customers.' }
      ]
   }
});