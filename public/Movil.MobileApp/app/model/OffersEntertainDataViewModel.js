//SAME MODEL IS USED IN OFFERSLIKESDATAVIEWSTORE,OffersEntertainDataViewStore,OffersRestDataViewStore,OffersMallDataViewStore,
//OffersProdCatDataViewStore,
//AS OFFERS PROPERTIES ARE SAME...

Ext.define('MobileApp.model.OffersEntertainDataViewModel', {
   extend: 'Ext.data.Model',
   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'type', type: 'string' },
         { name: 'tagLine', type: 'string' },
         { name: 'isActive', type: 'boolean' },
         { name: 'isDeleted', type: 'boolean' },
         { name: 'img', type: 'auto' },
         { name: 'listImg', type: 'auto' },
         { name: 'code', type: 'string' },
         { name: 'fb', type: 'string' },
         { name: 'twitter', type: 'string' },
         { name: 'linkedIn', type: 'string' },
         { name: 'google', type: 'string' },
         { name: 'pinterest', type: 'string' },
         { name: 'youtube', type: 'string' },
         { name: 'instagram', type: 'string' },
         { name: 'validFrom', type: 'string' },
         { name: 'validTo', type: 'string' },
         { name: 'finePrint', type: 'string' },
         { name: 'tags', type: 'string' },
         { name: 'categories', type: 'auto' },
         { name: 'locations', type: 'auto' },
         { name: 'brandId', type: 'string' },
         { name: 'likeCount', type: 'int' },
         { name: 'clickCount', type: 'int' },
         { name: 'busTypeId', type: 'string' },
         { name: 'commentCount', type: 'int' },
         { name: 'createdAt', type: 'string' },
         { name: 'updatedAt', type: 'date' },
         { name: 'deletedAt', type: 'date' },
         { name: 'brandName', type: 'string' },
         { name: 'profileImage', type: 'auto' }
      ]
   }
});