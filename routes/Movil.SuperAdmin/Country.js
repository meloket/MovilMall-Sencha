var countryModel = require('../../models/CountryModel');
var _ = require('underscore');

exports.getCountries = function (req, res) {
   var q = {
      stale: false
   };

   req.cb.view("Country", "ByType", q).query(function (err, values) {
      // 'ByType' view's map function emits Countries as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var countries = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(countries);
      });
   });
},

exports.createCountry = function (req, res) {
   var data = req.body;
   var country = new countryModel();
   country.name = data.name;
   country.type = "Country";
   country.createdAt = new Date();

   //For adding country counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr('Countries::Counter', options, function (err, result) {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = "Country::" + count;
      country.key = key;

      //Create a Country document
      req.cb.add(key, country, function (err, result) {
         if (err) {
            console.log(err);
            res.send('{"success":false}');
         }

         res.send(country);
      });
   });

},

exports.updateCountry = function (req, res) {
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

exports.deleteCountry = function (req, res) {
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