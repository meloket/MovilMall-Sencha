Ext.define('BrandAdmin.model.HomeDataViewModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'img', type: 'string' },
      { name: 'titleSp', type: 'string' },
      { name: 'titleEn', type: 'string' },
      { name: 'detailsSp', type: 'string' },
      { name: 'detailsEn', type: 'string' },
      {name:'lang',type:'string'}
   ]
});