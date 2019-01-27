Ext.define('MobileApp.store.OffersHotDealsDataViewSqlStore', {
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
