Ext.define('BrandAdmin.view.movies.MoviesPhotoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'moviesphotoform',
   locales: {
      title: 'form.moviesphoto.title'
   },
   border: true,
   layout: {
      type: 'vbox',
      align:'center'
   },
   items: [
      {
         xtype: 'dataview',
         trackOver: true,
         itemId: 'movieImageBox',
         margin: '30 0 10 0',
         tpl: Ext.create('Ext.XTemplate',
            '<div class="moviePhoto">',
            '<tpl for=".">',
            '<div>',
            '<img id="movieImageBox" style="height:150px;width:200px;" src={photo}>' +
               '</div>',
            '</div>',
            '</tpl>' +
               '</div>'),

         itemSelector: 'div.main',
         store: {
            fields: ['photo'],
            data: [
               { photo: 'resources/images/NtAvailMovie.png', type: 'auto' }
            ]
         }
      },
      {
         xtype: 'button',
         cls: 'upload-button-flat',
         locales: {
            text: 'buttons.upload'
         },
         id:'moviesUpload',
         action: 'upload'
      },
      {
         xtype: 'label',
         locales: {
            text: 'form.profilephotoinfo.logo.html'
         },
         cls: 'main-info-BusType',
         //html: '<font size="2px"><b>Note :</b></br>-Agregue una foto para su oferta. 250 kb max.</br>- Dimensiones no minímas de 600x450</font>',
         margin: '20 0 0 7'
         /* style: {
            position: "absolute",
            marginTop: "200px"
         }*/
      }
   ]
});