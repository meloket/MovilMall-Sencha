Ext.define('BrandAdmin.store.ProfileCategoriesStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.ProfileCategoriesModel',
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

 