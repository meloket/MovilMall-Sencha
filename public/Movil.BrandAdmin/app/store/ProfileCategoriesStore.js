Ext.define('BrandAdmin.store.ProfileCategoriesStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.ProfileCategoriesModel',
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   proxy:
     ({
        type: 'rest',
        api:
           {
              read: '../GetCategoryByBusTypeId'
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
           read: 'POST'
        }
     })
});

 