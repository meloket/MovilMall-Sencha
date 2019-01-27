Ext.define('MobileApp.view.Parking.ParkingMapView', {
   extend: 'Ext.Container',
   xtype: 'parkingmapview',
   requires: [
      'Ext.TitleBar'
   ],
   config: {
      fullscreen: true,
      layout: 'fit',
      title: 'Pin en el Mapa',
      //title: 'Pin',
      items: [{
         xtype: 'map',
         mapOptions: {
            zoom: 18
           
         },
            itemId: 'parkingMap'
         }, {
            xtype: 'titlebar',
            docked: 'bottom',
            ui:'light',
            items: [
               {
                  cls: 'flat-button-parking',
                  align: 'left',
                  id: 'doneMap',
                  // html:'Done'
                  //html: 'Cancelar'
                  locales: {
                     html: 'parking.mapViewCancel.html'
                  }
               },
               {
                  cls: 'flat-button-parking',
                  margin: '0 0 0 2.3em',
                  itemId: 'locateMe',
                  hidden: true,
                  //html: 'Locate Me'
                  locales: {
                     html: 'parking.mapViewLocate.html'
                  }
               },
               {
                  cls: 'flat-button-parking',
                  align: 'right',
                  itemId: 'saveLoc',
                  //disabled: true,
                 // html: 'Guardar',
                  locales: {
                     html: 'parking.mapViewSave.html'
                  }
               }
            ]
         }]
   }
});