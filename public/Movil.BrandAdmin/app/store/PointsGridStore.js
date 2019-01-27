Ext.define('BrandAdmin.store.PointsGridStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.PointsGridModel',
   sorters: [{
      property: 'userName',
      direction: 'ASC'
   }],
   proxy:
      ({
         type: 'rest',
         api:
            {
               read: '../UserPoint/GetUserPointsByLocation',
               update: '../UserPoint/RedeemPoints'
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