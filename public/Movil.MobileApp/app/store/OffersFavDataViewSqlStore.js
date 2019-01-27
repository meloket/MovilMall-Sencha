Ext.define('MobileApp.store.OffersFavDataViewSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      autoLoad:true,
      model: 'MobileApp.model.OffersFavDataViewModel',
      proxy:
         {
            type: 'sql'
         }
   }
});