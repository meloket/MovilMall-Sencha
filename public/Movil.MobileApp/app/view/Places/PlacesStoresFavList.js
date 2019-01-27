Ext.define('MobileApp.view.Places.PlacesStoresFavList', {
   extend: 'Ext.List',
   xtype: 'placesstoresfavlist',

   config: {
      title: 'Tiendas Favoritas',
      scrollToTopOnRefresh: false,
      cls: 'placesList',
      variableHeights: true,
      store: 'PlacesStoresFavListSqlStore',
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:0 auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Offer available currently" >',

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
             '<a  id="storeFavContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
                //'<p class="placeLocation">{contactNo} ' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
          //'<div style="background-image:url(resources/images/like2.png); width:28px; height:28px; float:right;"></div>',
       '<div id="{key}2" style="background-position: 0px 43%;" class="favPlace"></div>' +
            '</div>'
         //'<span>{location},{cityName}</span>'
      ].join('')
   }
});
