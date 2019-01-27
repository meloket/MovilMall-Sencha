Ext.define('MobileApp.view.Places.PlacesRestSearchCatList', {
   extend: 'Ext.List',
   xtype: 'placesrestsearchcatlist',

   config: {
      title: 'Restaurants',
      cls: 'placesList',
      loadingText:false,
      scrollToTopOnRefresh: false,
      variableHeights: true,
      store: 'PlacesRestSearchCatListStore',
      plugins: [
         {
            xclass: 'MobileApp.util.SearchCatPullRefresh',
            pullText: 'Deslice esta pantalla hacia abajo para refrescar las Lugares.',
            autoSnapBack: false,
            scrollerAutoRefresh: true,
            releaseText: '',
            loadingText: '',
            loadedText: '',
            itemId: 'pull'
         }
      ],
      itemTpl: [
         '<div class="placeBlock">' +
          '<div class="placeImage">' +
             '<tpl if="logo==\'data:,\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            '<img src="{logo}"</img>' + '</tpl>' +
               '</div>' +
           '<div class="placeDetails">' +
            '<p class="placeTitle">{name}</p>' +
             // '<p class="placeLocation">{location} , {cityName}</p>' +
             '<a  id="placesResSearchCatContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
          //'{brandName}',
          //'<div style="background-image:url(resources/images/like2.png); width:28px; height:28px; float:right;"></div>',
       // '<div class="favPlace"><img id="{key}3" src="resources/icons/nw-icons/favourite-dark.png"></img></div>' +
              '<div id="{key}3" class="favPlace"></div>' +
            '</div>'
          //'<span>{location},{cityName}</span>'
      ].join('')
   }
});
