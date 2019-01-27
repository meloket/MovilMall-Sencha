Ext.define('SuperAdmin.store.AnalyticsOffersCommentsStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.AnalyticsOffersCommentsModel',
   proxy:
     ({
        type: 'rest',
        api:
           {
              read: '../GetCommentsByOffer'
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
});
