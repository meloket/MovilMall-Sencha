Ext.define('MobileApp.store.PlacesListStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'nameSp','busTypeId','lang','nameEn'
      ],
      data: [
         //{ name: 'Stores' },
         { nameSp: 'Cine', busTypeId: 'BusType::5', nameEn: 'Movie', lang: 'fr' },
         { nameSp: 'Restaurantes', busTypeId: 'BusType::2', nameEn: 'Restaurants', lang: 'fr' },
         { nameSp: 'Malls', busTypeId: 'BusType::4', nameEn: 'Malls', lang: 'fr' },
         { nameSp: 'Entretenimiento', busTypeId: 'BusType::3', nameEn: 'Entertainment', lang: 'fr' }
      ]
      
    /*  model: 'MobileApp.model.PlacesListModel',
      autoLoad: true,
      proxy:
      ({
         type: 'rest',
         idProperty: 'id',
         api:
            {
               read: '../GetBusinessTypes'
            },
         reader:
            {
               type: 'json'
            },
         writer:
            {
               type: 'json'

            }
      })
*/
   }
});