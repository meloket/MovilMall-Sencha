var movieModel = require('../../models/MovieModel');
var _ = require('underscore');

exports.getMovies = function (req, res) {
   var q = {
      stale: false
   };

   req.cb.view("Movie", "ByType", q).query(function (err, values) {
      // 'ByType' view's map function emits Brands as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');
      //var a = new Array();
      //for (var i = 0; i < 1; i++)
      //{
      //   a.push(keys[i]);
      //}

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var movies = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(movies);
      });
   });
},

exports.createMovie = function (req, res) {
   var movie = req.body;
   var brandId = movie.brandId;
   movie.type = "Movie";
   movie.createdAt = new Date();

   //For adding movie counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr(brandId + '::Movies::Counter', options, function (err, result)
   {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = brandId + "::Movie::" + count;
      movie.key = key;
      //Create a movie document
      req.cb.add(key, movie, function(err, result)
      {
         if (err) {
            console.log(err);
            res.send('{"success":false}');
         }
         res.send(movie);
      });
   });
      
},

exports.updateMovie = function (req, res) {
   var movie = req.body;
   movie.updatedAt = new Date();
   var key = movie.key;

   req.cb.set(key, movie, function (err, result) {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(movie);
   });

},

exports.deleteMovie = function (req, res) {
   var data = req.body;
   data.deletedAt = new Date();
   data.isDeleted = true;
   var key = data.key;

   req.cb.set(key, data, function (err, result) {
      if (err) { console.log(err); }
      res.send(data);
   });

},

exports.getMovieShowTimes = function(req, res)
{
   var data = req.body;
   var movieId = data.movieId;
   var q = {
      stale: false,
      key: movieId
   };

   req.cb.view("MovieLocation", "ByMovie", q).query(function (err, values) {
     
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         var showTimes = _.map(results, function (v, k) {
            return v.value;
         });

         res.send(showTimes);
      });
   });
},

exports.getMoviesByBrand = function (req, res) {
   var q = {
      key: req.body.brandId
   };
   req.cb.view("Movie", "ByBrand", q).query(function (err, values) {
      var keys = _.pluck(values, 'id');
      req.cb.getMulti(keys, null, function (err1, results) {
         var movies = _.map(results, function (v, k) {
            return v.value;
         });
         res.send(movies);
      });
   });
}
