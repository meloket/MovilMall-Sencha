Ext.define('BrandAdmin.view.events.EventsPhotoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'eventsphotoform',
   title: 'Event Photo',
   layout: {
      type: 'vbox'
   },
   items: [{
      xtype: 'image',
      height: 100,
      itemId: 'eventImageBox',
      src: '#',
      border: 2,
      style: {
         borderColor: 'black',
         borderStyle: 'solid'
      },
      name: 'photo',
      width: 100,
      margin: '30 0 0 185'
   },
      {
         xtype: 'button',
         text: 'Upload',
         action: 'upload',
         margin: '20 0 0 208'
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