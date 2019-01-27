Ext.define('BrandAdmin.view.movies.MoviesPhotoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'moviesphotoform',
   title: 'Movie Photo',
   layout: {
      type: 'vbox'
   },
   items: [{
      xtype: 'image',
      height: 100,
      itemId: 'movieImageBox',
      src: '#',
      border: 2,
      style: {
         borderColor: 'black',
         borderStyle: 'solid'
      },
      name: 'photo',
      width: 100,
      margin: '30 0 0 185'
   }
   ]

});