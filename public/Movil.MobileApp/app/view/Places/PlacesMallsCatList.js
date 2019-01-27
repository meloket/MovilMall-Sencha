Ext.define('MobileApp.view.Places.PlacesMallsCatList', {
   extend: 'Ext.List',
   xtype: 'placesmallscatlist',

   config: {
      title: 'Stores',
      cls: 'placesList',
      scrollToTopOnRefresh: false,
      variableHeights: true,
      store: 'PlacesMallsCatListStore',
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
            //'<p class="placeLocation">{location} , {cityName}</p>' +
           '<a  id="placesMallCatContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
          //'<div style="background-image:url(resources/images/like2.png); width:28px; height:28px; float:right;"></div>',
        '<div id="{key}" class="favPlace"></div>' +
            '</div>'
      //'<span>{location},{cityName}</span>'
      ].join('')
   }
});
