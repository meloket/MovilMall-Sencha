var stateModel = require('../../models/StateModel');
var _ = require('underscore');

exports.getStates = function (req, res) {
   var q = {
      stale: false
   };

   req.cb.view("State", "ByType", q).query(function (err, values) {
      // 'ByType' view's map function emits States as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var states = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(states);
      });
   });
},

exports.createState = function (req, res) {
   var data = req.body;
   var state = new stateModel();
   state.name = data.name;
   state.type = "State";
   state.countryId = data.countryId;
   state.createdAt = new Date();

   //For adding state counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr('States::Counter', options, function (err, result) {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = "State::" + count;
      state.key = key;

      //Create a State document
      req.cb.add(key, state, function (err, result) {
         if (err) {
            console.log(err);
            res.send('{"success":false}');
         }

         res.send(state);
      });
   });

},

exports.updateState = function (req, res) {
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

exports.deleteState = function (req, res) {
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