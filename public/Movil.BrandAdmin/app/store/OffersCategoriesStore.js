Ext.define('BrandAdmin.store.OffersCategoriesStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.OffersCategoriesModel',
   proxy:
     ({
        type: 'rest',
        api:
           {
              read: '../GetCategories'
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
           read:'POST'
        }
     })
});
