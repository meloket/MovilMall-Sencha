Ext.define('BrandAdmin.store.OffersStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.OffersModel',
   sorters: [{
      property: 'tagLine',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../GetOfferByBrand',
               update: '../UpdateOffer',
               create: '../CreateOffer',
               destroy: '../DeleteOffer'
            },
         reader:
            {
               type: 'json'
            },
         writer:
            {
               type: 'json'
            },
         actionMethods:
            {
               read: 'POST',
               create: 'POST',
               update: 'POST',
               destroy: 'DELETE'
            }
      })
});