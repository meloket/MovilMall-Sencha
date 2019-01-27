Ext.define('MobileApp.view.Places.PlacesStoresSearchCatList', {
   extend: 'Ext.List',
   xtype: 'placesstoressearchcatlist',

   config: {
      title: 'Tiendas',
      loadingText:false,
      cls: 'placesList',
      variableHeights: true,
      store: 'PlacesStoresSearchCatListStore',
      scrollToTopOnRefresh: false,
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:0 auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Offer available currently" >',

      plugins: [
         {
            xclass: 'MobileApp.util.SearchCatPullRefresh',
            pullText: 'Deslice esta pantalla hacia abajo para refrescar las Tiendas.',
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
              /* '<tpl if="address==\'\'">' +
            '<p class="placeLocation">{location}</p>' +
              '<tpl else>' +
             '<p class="placeLocation">{address}</p>' +
               '</tpl>' +*/
             '<a  id="storeSearchCatContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
         // '<div style="background-image:url(resources/images/like2.png); width:28px; height:28px; float:right;"></div>',
       '<div id="{key}3" class="favPlace"></div>' +
            '</div>'
         //'<span>{location},{cityName}</span>'
      ].join('')
   }
});
