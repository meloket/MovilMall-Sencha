Ext.define('MobileApp.store.SetProfileDataViewStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'name', 'email', 'dob', 'city', 'state','img'
      ],
      data: [
         { img: './resources/images/user.jpg', name: 'Karina Lopez', email: 'karina_lop@gmail.com', dob: '11/25/1991', city: 'Ahmedabad', state: 'Gujrat' }
      ]
   }
});