Ext.define('MobileApp.view.Parking.ParkingContainer', {
   extend: 'Ext.Container',
   xtype: 'parkingcontainer',
   requires: [
      'Ext.TitleBar'
   ],
   config: {
      fullscreen: true,
      layout: 'vbox',
      style: 'background-color:white;',
      //title: 'Parking Guide',
      //title: 'Guía de Parqueo',
      items: [{
            xtype: 'container',
            height: '22%',
            locales: {
               html: 'parking.main.html'
            }
           /* html: '<div class="parkingContainer">' +
               '<img class="parkingImage" src="./resources/icons/nw-icons/parking.png">' +
               '<p class="parkingFont">Guía de Parqueo</p>' +
               '<p class="parkingMethod">Escoja un Método</p>' +
               '</div>'*/
         },
         {
            xtype: 'container',
            height: '78%',
            id: 'viewBlocks',
            cls: 'parkingBlocks',
            locales: {
               html: 'parking.blocks.html'
            },
           /* html: '<div class="parkingLocator">' +
               '<img class="locatorImage" id="pinMapDataView" src="./resources/icons/Parking/parkingLocator.png">' +
               '<p class="locatorFont">Pin en el Mapa</p>' +
               '</div>' +
               
               '<div class="parkingLocator">' +
               '<img class="graberImage" id="takePhotoDataview" src="./resources/icons/Parking/parkingCamera.png">' +
               '<p class="locatorFont" id="photoText">Tomar una Foto</p>' +
               '</div>' +
               
               '<div class="parkingLocator">' +
               '<img class="locatorImage" src="./resources/icons/Parking/parkingMic.png">' +
               '<p class="locatorFont">Grabar</p>' +
               '</div>' +

               '<div class="parkingLocator">' +
               '<img class="graberImage" id="makeNoteDataView" src="./resources/icons/Parking/parkingPen.png">' +
               '<p class="locatorFont" id="noteText">Escribir una Nota</p>' +
               '</div>',*/
            listeners: {
               initialize: function(comp, eOpts)
               {
                  comp.element.on(
                     'tap',
                     function(event, node, options, eOpts)
                     {
                        /*send event as a argument to get direction of swipe*/
                        this.fireEvent('tap', event);
                     },
                     comp
                  );
               }
            }
         }],
      listeners: {
         initialize: function(comp, eOpts)
         {
           
            comp.bodyElement.on(
              'painted',
              function (event, node, options, eOpts) {

                 /*send event as a argument to get direction of swipe*/
                 this.fireEvent('painted', event);
              },
              comp
           );
         }
      }
   }
});