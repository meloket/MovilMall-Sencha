Ext.define('MobileApp.view.Settings.SettingsProfilePointsList', {
   extend: 'Ext.List',
   xtype: 'settingsprofilepointslist',

   config: {
      title: 'Puntos',
      cls: 'placesList',
      variableHeights: true,
      store: 'SettingsProfilePointsListStore',
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/emptyPoints.png" alt="No Offer available currently" >',
      /* itemTpl: [
          '<div class="headshot" style="background-image:url(resources/images/{img});"></div>',
          '{name}',
          '<br><div style="float:right">{number}</span>'
      ].join('')
   }*/
   itemTpl: [
        '<div class="placeBlock">' +
           // '<div class="placeImage"> <img src="{logo}"</img></div>',
           '<div class="placeImage">' +
             '<div class="img" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/150x112/' + ppi + '/{brandId}-profile);' + 'background-size: 100% 100%;height: 100%;width: 100%;"> </div>' +
              '</div>' +
            //'<div class="placeImage" style="background-image:url(resources/images/{img});"></div>',
          '<div class="pointsDetails">' +
             '<p class="placeTitle">{name}</p>' +
             //'<p class="placeLocation">{locName}</p>' +
             '<p class="pointsCount">{points}</p>' +
          '</div>' +
       '</div>'
   ].join('')
}
});
