Ext.define('MobileApp.view.Movies.MoviesDataView', {
   extend: 'Ext.Container',
   xtype: 'moviesdataview',

   config: {
      layout: 'fit',
      title: 'Cine',
      items: [{
         xtype: 'dataview',
         id: 'moviesDataView',
         scrollable: true,
         cls: 'moviesListDataView',
         emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Location available currently" >',

         style: { "background-color": 'white' },
         /*itemTpl: 
            '<div class="main">' +
              '<div class="movieImage">' +
                  '<img src="{photo}"></img>' +
               '</div>' +
               '<img class="moviePointerImage" src="resources/images/moviePointer.png"></img>'+
               '<div class="movieDetails">' +
                  '<p class="movieTitle">{name}</p>' +
                  //using the same css class below for genre and duration because all use same font size and are flaoted left
                  '<p class="movieDuration">{runTime}</p><p class="movieDuration">&nbsp;Minutes&nbsp;&nbsp;|&nbsp;&nbsp;</p>' +
                  '<p class="movieDuration">{genre}</p>'+
               '</div>'+
            '</div>',*/
         itemTpl: new Ext.XTemplate('<div class="main">' +            
            '<div class="movieImage">' +
            '<tpl if="photo==\'data:,\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            '<img src="{photo}"></img>' +
            '</tpl>' +
            '</div>' +
            '<div class="movieDetails">' +
            '<p class="movieTitle">{name}</p>' +
            '<p class="movieRating">{rating}&nbsp;|&nbsp;</p><p class="movieDuration">{runTime}&nbsp;MIN</p>' +
            '<div class="synop"><p class="movieSynopsis">{synopsis}</p></div>' +
            '</div>' +
            '<div class="movieListShowTimes">' +
              '<tpl if="timings==null">' +
             '<p style=" float:left;margin:0.4em 0.2em 0.3em 0.2em; color:#fff; font-size:0.6em; line-height:1em;">' +
            'Horarios de nadie hoy en día están disponibles.' + '</p>' +
             
             '<tpl else>' +
            '{[this.getShowtimes(values.timings)]}' +
            '</tpl>' +
            '<p class="moviesListShowtimesEllipsis" id="moviesListShowtimesEllipsis"></p>' +
            '</div>'+
            '</div>',
            {
               getShowtimes: function (showTimes) {
                  var array = showTimes.split(",");
                  console.log(showTimes);
                  var htmlString = "";
                  for (var i = 0; i < array.length; i++)
                  {
                      htmlString += '<p style=" float:left;margin:0.4em 0.2em 0.3em 0.2em; color:#fff; font-size:0.6em; line-height:1em;">' + array[i] + '</p>';
                  }
                  return htmlString;
               }
            }),

         store: 'MoviesDataViewStore'
      }],

      listeners: {
         initialize: function(comp, eOpts)
         {
            comp.bodyElement.on(
               'swipe',
               function(event, node, options, eOpts)
               {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );


         }
      }
   }
});