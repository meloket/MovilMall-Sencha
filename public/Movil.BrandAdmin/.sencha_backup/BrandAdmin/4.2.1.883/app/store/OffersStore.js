Ext.define('BrandAdmin.store.OffersStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.OffersModel',
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
         actionMethods: { read: 'POST' }
      })
});