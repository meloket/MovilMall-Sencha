Ext.define('MobileApp.store.EventsCommentDataViewStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.EventsCommentDataViewModel',

      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl()+'/UserEvent/GetCommentsByEvent'
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