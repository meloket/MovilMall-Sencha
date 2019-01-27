Ext.define('MobileApp.view.Parking.ParkingImageView', {
   extend: 'Ext.Container',
   xtype: 'parkingimageview',
   config: {
      title: 'imagen',
      layout: 'fit',
      items: [
        {
           xtype: 'dataview',
          // height: '15em',
           scrollable: false,
           id: 'parkingPhotoDataView',
          store: 'ParkingTempPhotoStore',
          itemTpl: new Ext.XTemplate(
                         '<div>' +
                             '<img id="parkingPhoto123" height="100%" width="100%" src={photo}></img>' +
                             '</div>'

                       )
        },
        {
           xtype: 'titlebar',
           docked: 'bottom',
           ui: 'light',
           items: [
              {
                 cls: 'flat-button-parking',
                 align: 'left',
                 itemId: 'done',
                 locales: {
                    html: 'parking.done.html'
                 }
                // html: 'Done'
              },
               {
                  cls: 'flat-button-parking',
                  align: 'right',
                  itemId: 'changePhoto',
                  locales: {
                     html: 'parking.photo.html'
                  }
                 // html: 'Photo'
               }
           ]
        }]
   }
}); 