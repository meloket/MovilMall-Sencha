Ext.define('MobileApp.view.Parking.ParkingAudioView', {
   extend: 'Ext.Container',
   xtype: 'parkingaudioview',
   config: {
      title: 'Grabar un Memo',
      layout: 'fit',
      items: [
         {
            xtype: 'parkingaudiolist'
         },
         {
            xtype: 'titlebar',
            docked: 'bottom',
            ui: 'light',
            items: [
               {
                  cls: 'flat-button-parking',
                  align: 'left',
                  itemId: 'new',
                  // html: 'Nuevo'
                  locales: {
                     html: 'parking.audioNuevo.html'
                  }
               }, {
                  xtype: 'label',
                  id: 'audio_position'
               }, {
                  cls: 'flat-button-parking',
                  align: 'right',
                  itemId: 'stopRecording',
                  hidden: true,
                  //html: 'stop Recording'
                  locales: {
                     html: 'parking.audioStopRec.html'
                  }
               },
               {
                  cls: 'flat-button-parking',
                  align: 'right',
                  itemId: 'stop',
                  //  html: 'Deténgase'
                  locales: {
                     html: 'parking.audioStop.html'
                  }
               }
            ]
         }]
   }
});