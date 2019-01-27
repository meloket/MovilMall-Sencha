Ext.define('MobileApp.view.Places.PlacesStoresList', {
   extend: 'Ext.List',
   xtype: 'placesstoreslist',

   config: {
      title: 'Tiendas Cerca de ti',
      cls: 'placesList',
      variableHeights: true,
     /* items: [{
         xtype: 'image',
         src: './resources/icons/workInProgress.jpg',
         style: { 'background-size': '100%' }
         //flex: 4

      }]*/
      store: 'PlacesStoresListStore',
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
             '<a  id="storeNearByContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
                //'<p class="placeLocation">{contactNo} ' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
        '<div id="{key}" class="favPlace"></div>' +
            '</div>'
          //'<span>{location},{cityName}</span>'
      ].join('')
   }
});
