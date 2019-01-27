Ext.define('BrandAdmin.store.HomeDataViewStore', {
   extend: 'Ext.data.Store',
   model: 'BrandAdmin.model.HomeDataViewModel',
   autoLoad: true,
   data: [
      { img: 'Analytics-128', title: 'Profile', details: 'Enter and modify details such as Brand Name, Contact Info, Business type, Product Categories, Photographs etc.' }
     , { img: 'Analytics-128', title: 'Locations', details: 'Enter and modify location details such as address, map, open timings, phone numbers etc.' },
      { img: 'Analytics-128', title: 'Offers', details: 'Add new offers for this store with offer details and modify the existing ones according to need.' },
      { img: 'video', title: 'Movies', details: 'Add movie show timings as well as modify them for your brand.' },
      { img: 'Analytics-128', title: 'Events', details: 'Add new events and modify existing ones to build up your brand audience and expand your reach.' },
      { img: 'Analytics-128', title: 'Analytics', details: 'View statistical and analytic numbers about performance of this store and customer reach.' }

   ]

});