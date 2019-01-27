Ext.define('MobileApp.store.OffersProdCatDataViewSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.OffersHotDealsDataViewModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});