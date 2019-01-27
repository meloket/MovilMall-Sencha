Ext.define('MobileApp.view.Places.PlacesEntertainmentList', {
   extend: 'Ext.List',
   xtype: 'placesentertainmentlist',

   config: {
      title: 'Entretenimiento cerca de ti',
      cls: 'placesList',
      variableHeights: true,
      store: 'PlacesEntertainmentListSqlStore',
     /* locales: {
         emptyText: 'Places.emptyText'
      },*/
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Location available currently" >',

      plugins: [
     {
        xclass: 'MobileApp.util.ListPullRefresh',
        pullText: 'Deslice esta pantalla hacia abajo para refrescar las Lugares.',
        autoSnapBack: false,
        scrollerAutoRefresh: true,
        releaseText: '',
        loadingText: '',
        loadedText: '',
        itemId: 'pull'
     }
      ],
      itemTpl: new Ext.XTemplate(
         '<div class="placeBlock">' +
            '<div class="placeImage">' +
            '<tpl if="logo==\'data:,\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            '<img src="{logo}"</img>' +'</tpl>' +
               '</div>' +
               '<div class="placeDetails">' +
               '<p class="placeTitle">{name}</p>' +
               //'<p class="placeLocation">{location} , {cityName}</p>' +
               '<a  id="placesEntertainmentContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
               '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
               '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
               '</div>' +
               //'<div style="background-image:url(resources/images/like2.png); width:28px; height:28px; float:right;"></div>',
               '<div id="{key}" class="favPlace"></div>' +
               //'<span>{location},{cityName}</span>'
               '</div>'
     )
   }
});
