Ext.define('MobileApp.view.Parking.ParkingAudioList', {
   extend: 'Ext.List',
   xtype: 'parkingaudiolist',

   config: {
      store: 'ParkingAudioSqlStore',
      itemTpl: [
         '<div class="audio">'+
            '<p class="audioTitle">{recording}</p>' +
              '<img id="audioCross" class="crossImage" src="resources/icons/cross.png"></img>' +
            '</div>'
      ].join('')
   }
});
