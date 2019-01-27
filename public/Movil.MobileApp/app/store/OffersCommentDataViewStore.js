Ext.define('MobileApp.store.OffersCommentDataViewStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.OffersCommentDataViewModel',

      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl() + '/GetCommentsByOffer'
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
   }
});