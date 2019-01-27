Ext.define('MobileApp.view.Movies.MoviesList', {
   extend: 'Ext.List',
   xtype: 'movieslist',
   config: {
      title: 'Cines',
      cls: 'placesList',
      variableHeights: true,
      onItemDisclosure: true,
      store: 'MoviesListStore',
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Location available currently" >',
      itemTpl: [
         '<div class="placeBlock">' +
           '<div class="placeImage">' +
             '<tpl if="logo==\'\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            '<img src="{logo}"</img>' + '</tpl>' +
               '</div>' +
         '<div class="placeDetails">' +
            '<p class="placeTitle">{name}</p>' +
             '<a  id="moviesContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p class="placeLocation">{location} , {cityName}</p>' +
            '</div>'+ '</div>'

      ].join('')
 ,
      listeners: {
         initialize: function (comp, eOpts) {
            comp.bodyElement.on(
               'swipe',
               function (event, node, options, eOpts) {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );

            comp.bodyElement.on(
               'tap',
               function (event, node, options, eOpts) {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('tap', event);
               },
               comp
            );
         }

      }
   }
});
