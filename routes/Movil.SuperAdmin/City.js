var cityModel = require('../../models/CityModel');
var _ = require('underscore');

exports.getCities = function (req, res) {
   var q = {
      stale: false
   };

   req.cb.view("City", "ByType", q).query(function (err, values) {
      // 'ByType' view's map function emits Cities as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var cities = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(cities);
      });
   });
},

exports.createCity = function (req, res) {
   var data = req.body;
   var city = new cityModel();
   city.name = data.name;
   city.type = "City";
   city.stateId = data.stateId;
   city.countryId = data.countryId;
   city.createdAt = new Date();

   //For adding city counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr('Cities::Counter', options, function (err, result) {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = "City::" + count;
      city.key = key;

      //Create a City document
      req.cb.add(key, city, function (err, result) {
         if (err) {
            console.log(err);
            res.send('{"success":false}');
         }

         res.send(city);
      });
   });

},

exports.updateCity = function (req, res) {
   var data = req.body;
   data.updatedAt = new Date();
   var key = data.key;

   req.cb.set(key, data, function (err, result) {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(data);
   });

},

exports.deleteCity = function (req, res) {
   var data = req.body;
   data.deletedAt = new Date();
   data.isDeleted = true;
   var key = data.key;

   req.cb.set(key, data, function (err, result) {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(data);
   });

}