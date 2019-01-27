Ext.define('MobileApp.store.OffersEntertainDataViewSqlStore', {
   extend: 'Ext.data.Store',
   requires: [
       'Ext.data.proxy.Sql'
   ],

   config: {
      model: 'MobileApp.model.OffersEntertainDataViewModel',
      proxy:
      {
         type: 'sql'

      }


   }
});
