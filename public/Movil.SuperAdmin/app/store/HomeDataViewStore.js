
Ext.define('SuperAdmin.store.HomeDataViewStore', {
   extend: 'Ext.data.Store',
   model: 'SuperAdmin.model.HomeDataViewModel',
   autoLoad: true,
   data: [
      { img: 'brand', title: 'Brand', details: 'Lists all brands created in the app and allows you to add,modify their info or delete them' }
     , { img: 'business-type', title: 'Business Types & Categories', details: 'Add,modify or delete business types and their categories for brands.' },
     // { img: 'movie', title: 'Movies', details: 'Add movie show timings as well as modify them for your brand.' },
      { img: 'analytics', title: 'Analytics', details: 'View statistical and analytical reports about the Mall App.' },
       { img: 'analytics', title: 'Users', details: 'All the registered users.' }

   ]
   
});