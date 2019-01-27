Ext.define('MobileApp.view.Places.PlacesRestFavList', {
   extend: 'Ext.List',
   xtype: 'placesrestfavlist',

   config: {
      title: 'Restaurantes Favoritos',
      cls: 'placesList',
      variableHeights: true,
      scrollToTopOnRefresh: false,
      store: 'PlacesRestFavListSqlStore',
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Location available currently" >',

      itemTpl: new Ext.XTemplate(
         '<div class="placeBlock">' +
            '<div class="placeImage">' +
            '<tpl if="logo==\'data:,\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            ' <img src="{logo}"</img>' + '</tpl>' +
            '</div>' +
            '<div class="placeDetails">' +
            '<p class="placeTitle">{name}</p>' +
            // '<p class="placeLocation">{location} , {cityName}</p>' +
            '<a  id="placesResFavContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
            //'<div style="background-image:url(resources/images/like2.png); width:28px; height:28px; float:right;"></div>',
            '<div id="{key}2" style="background-position: 0px 43%;" class="favPlace"></div>' +
            //'<span>{location},{cityName}</span>'
        
            // '<div class="favPlace"><img src="resources/icons/nw-icons/favourite-dark.png"></img></div>' +
            '</div>'
     )
   }
});