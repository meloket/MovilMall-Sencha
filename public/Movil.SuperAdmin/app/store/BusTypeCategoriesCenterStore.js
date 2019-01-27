Ext.define('SuperAdmin.store.BusTypeCategoriesCenterStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.BusTypeCategoriesCenterModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetCategoryByBusTypeId',
               create: '../CreateCategory',
               update: '../UpdateCategory',
               destroy: '../DeleteCategory'
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
            destroy: 'DELETE'
         }
      })
});