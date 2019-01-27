Ext.define('MobileApp.store.OffersLikesDataViewSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
      'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.OffersLikesDataViewModel',
      autoLoad: true,
      proxy:
         {
            type: 'sql'
         }
   }
});