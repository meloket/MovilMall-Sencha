Ext.define('MobileApp.view.Parking.ParkingNoteView', {
   extend: 'Ext.Container',
   xtype: 'parkingnoteview',
   config: {
      title: 'Escribir una Nota',
      layout: 'fit',
      cls:'parkingNote',
      items: [
         {                         
            xtype: 'textareafield',
            locales: {
               placeHolder: 'offers.profileview.searchPlaceHolder.placeHolder'
            },
           // placeHolder: 'Escribir una Nota',
          /*  label: 'Dirextions',
            name: 'direction',*/
            itemId: 'direction'
         },
        {
           xtype: 'titlebar',
           docked: 'bottom',
           ui:'light',
           items: [
               {
                  cls: 'flat-button-parking',
                  align: 'right',
                  itemId: 'saveNote',
                  //   html: 'Save'
                  //  html: 'Guardar'
                  locales: {
                     html: 'parking.mapViewSave.html'
                  }
               }
           ]
        }]
   }
});