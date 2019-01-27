Ext.define('SuperAdmin.view.movies.MoviesPhotoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'moviesphotoform',
   title: 'Movie Photo',
   border: true,
   layout: {
      type: 'vbox'
   },
   items: [
      {
         xtype: 'dataview',
         trackOver: true,
         itemId:'photoDataView',
         tpl: Ext.create('Ext.XTemplate',
            '<div class="moviePhoto">',
                 '<tpl for=".">',
                   
               '<div>',

               '<img id="mmovieImageBox" style="height:200px;width:150px;" src={photo}>' +
                  
                  '</div>',
              '</div>',
               '</tpl>'),
            
         
         itemSelector: 'div.main',
         store: {            
            fields: ['img'],
            data: [
               { img: 'resources/images/NtavailablePhoto.png' }
            ]
         }
      },
      {
         xtype: 'button',
         text: 'Upload',
         action: 'upload',
         margin: '10 0 0 215'
      },
      {
         xtype: 'label',
         html: '<font size="2px"><b>Note :</b></br>- Max image size allowed is 3kb</br>- Also the image dimensions should not be greater than 200 * 200 pixels</font>',
         margin: '20 0 0 7'   
         /* style: {
            position: "absolute",
            marginTop: "200px"
         }*/
      }
   ]   
});