var movieModel = require('../../models/MovieModel');
var MovieLocationModel = require('../../models/MovieLocationModel');
var _ = require('underscore');

exports.getLocationsByMovie = function(req, res)
{
   var q = {
      stale: false,
      key: req.body.movieId
   };

   req.cb.view("MovieLocation", "ByMovie", q).query(function(err, values)
   {
      // 'ByType' view's map function emits Brands as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var locations = _.pluck(values, 'value');

      var uniqLoc = _.uniq(locations, function(item, key, locations)
      {
         return item.locations;
      });

      req.cb.getMulti(uniqLoc, null, function(err, results)
      {

         // Add the id to the document before sending to template
         var locations = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });

         res.send(locations);
      });
   });
},

exports.getShowTimesByLocation = function(req, res)
{
   //To know whether API is called from Mobile/BrandAdmin. If it is called from Brand Admin, no date filter is to be applied.
   var fromMobile = req.body.fromMobile;

   if (fromMobile == 'true')
   {
      var q = {
         key: [req.body.movieId, req.body.locationId, req.body.date]
      };
   } else
   {
      var q = {
         startkey: [req.body.movieId, req.body.locationId],
         endkey: [req.body.movieId, req.body.locationId, {}]
      };
   }

   console.log(req.body.date);
   req.cb.view("MovieLocation", "ByLocation", q).query(function(err, values)
   {
      // 'ByType' view's map function emits Brands as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {

         // Add the id to the document before sending to template
         var showTimes = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });

         res.send(showTimes);
      });
   });
},

exports.createMovieLocation = function(req, res)
{
   var movieLoc = req.body;
   movieLoc.type = "MovieLocation";
   movieLoc.createdAt = new Date();

   var movieId = movieLoc.movieId;
   //var locId = movieLoc.locationId;

   //For adding movie location counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr(movieId + '::Locations::Counter', options, function(err, result)
   {
      if (err)
      {
         Console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = movieId + "::Location::" + count;
      movieLoc.key = key;
      //Create a movie location document
      req.cb.add(key, movieLoc, function(err, result)
      {
         if (err)
         {
            Console.log(err);
            res.send('{"success":false}');
         }
         res.send(movieLoc);
      });
   });

},

exports.updateMovieLocation = function(req, res)
{
   var movieLoc = req.body;
   movieLoc.updatedAt = new Date();
   var key = movieLoc.key;

   req.cb.set(key, movieLoc, function(err, result)
   {
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(movieLoc);
   });

},

exports.getMoviesByLocation = function(req, res)
{
   var today = new Date();
   var date = today.getDate();
   if (date < 10)
   {
      date = '0' + date;
   }
   var month = today.getMonth();
   month = month + 1;
   if (month < 10)
   {
      month = '0' + month;
   }
   var year = today.getFullYear();
   today = year + "-" + month + "-" + date + "T00:00:00";
   var q = {
      stale: false,
      key: req.body.locationId      
   };

   req.cb.view("Movie", "ByLocation", q).query(function(err, values)
   {

      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {

         var movieLoc = _.map(results, function(v, k)
         {
            return v.value;
         });
         var movies = _.pluck(movieLoc, 'movieId');
         movies = _.uniq(movies, false);
         req.cb.getMulti(movies, null, function(err, results1)
         {
            var movieDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < movieLoc.length; i++)
            {
               var movie = movieDoc.filter(function(obj)
               {
                  return obj.key == movieLoc[i].movieId;
               });
               if (movie[0])
               {
                  movieLoc[i].MovieName = movie[0].name;
               }
            }
            var array = new Array();
            for (var j = 0; j < movieDoc.length; j++)
            {
               var m = [movieDoc[j].key, req.body.locationId, today];
               array.push(m);
            }
            var q = {
               keys: array
            };
            req.cb.view("MovieLocation", "ByLocation", q).query(function(err, values)
            {
               for (var k = 0; k < movieDoc.length; k++)
               {
                  var time = values.filter(function(obj)
                  {
                     return obj.key[0] == movieDoc[k].key;
                  });
                  if (time[0])
                  {
                     movieDoc[k].timings = time[0].value;
                  } else
                  {
                     movieDoc[k].timings = null;
                  }
               }
               res.send(movieDoc);
            });
         });
      });
   });
}