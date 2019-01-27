Ext.define('MobileApp.view.Places.PlacesStoresHotList', {
   extend: 'Ext.List',
   xtype: 'placesstoreshotlist',

   config: {
      title: 'Tiendas Populares',
      cls: 'placesList',
      scrollToTopOnRefresh: false,
      //variableHeights: true,
      store: 'PlacesStoresHotListSqlStore',
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:0 auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Offer available currently" >',

      plugins: [
         {
            xclass: 'MobileApp.util.ListPullRefresh',
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
            '<a  id="storeHotContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
             //'<p class="contactNo">{contactNo</p> ' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
         '<div id="{key}1" class="favPlace"></div>' +
         '</div>'
         //'<span>{location},{cityName}</span>'
      ].join('')
   }
});
