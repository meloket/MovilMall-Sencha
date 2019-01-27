/*
Ext.define('BrandAdmin.store.EventsStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.EventsModel',
   autoLoad: true,
   data: [
      { id: "1", eventname: "ADIDAS Sports festival", date: "", type: "Public" }
   ]

});
*/

Ext.define('BrandAdmin.store.EventsStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.EventsModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../Event/GetEventsByBrand',
               update: '../Event/UpdateEvent',
               create: '../Event/CreateEvent',
               destroy: '../Event/DeleteEvent'
            },
         reader:
            {
               type: 'json'
            },
         writer:
            {
               type: 'json'
            },
         actionMethods: {
            read: 'POST',
            destroy:'DELETE',
            update:'PUT'
         }
      })
});