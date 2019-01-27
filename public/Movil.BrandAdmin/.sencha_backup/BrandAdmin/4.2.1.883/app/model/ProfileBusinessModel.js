Ext.define('BrandAdmin.model.ProfileBusinessModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'name', type: 'string' },
      {name:'email',type:'string'},
      { name: 'logo', type: 'auto' },
      { name: 'contactPerson', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'website', type: 'string' },
      { name: 'contactNo', type: 'string' },
      { name: 'isVerified', type: 'boolean' },
      { name: 'isBlocked', type: 'boolean' },
      { name: 'profileImage', type: 'auto' },
      { name: 'userId', type: 'string' },
      { name: 'busTypeId', type: 'string' },
      { name: 'busCategories', type: 'auto' },
      { name: 'fb', type: 'string' },
      { name: 'twitter', type: 'string' },
      { name: 'linkedIn', type: 'string' },
      { name: 'google', type: 'string' },
      { name: 'pinterest', type: 'string' },
      { name: 'instagram', type: 'string' },
      { name: 'youtube', type: 'string' },
       { name: 'deletedAt', type: 'date' },
      { name: 'isDeleted', type: 'boolean', defaultValue: 'false' }
   ]
});