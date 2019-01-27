var eventModel = require('../../models/EventModel');
var _ = require('underscore');
//var moment = require("moment");

exports.getEvents = function (req, res) {
   //For couchbase views date isuue resolution.
   var currentDate = new Date();
   var dt = currentDate.getDate();
   var mon = currentDate.getMonth() + 1;
   var yr = currentDate.getFullYear();

   if (!req.query.key) {
      //First time store load
      var q = {
         descending: true,
         limit: 15,
         startkey: [yr, mon, dt, "Event", {}],
         endkey: [yr, mon, dt, "Event"]
      };
      console.log(q);
   }
   else {
      //load more
      var dateArray = req.query.createdAt.split('T');
      var year = dateArray[0].split('-');
      var time = dateArray[1].split(':');
      var sec = time[2].split('.');

      var today = new Date(year[0], year[1], year[2], time[0], time[1], sec[0]);
     
      var d = today.getDate();
      var mo = today.getMonth();
      var y = today.getFullYear();
      var h = today.getHours();
      var mi = today.getMinutes();
      var s = today.getSeconds();
      var date = [y, mo, d, h, mi, s];

      console.log(date);
      var q = {
         descending: true,
         startkey: [yr, mon, dt, "Event", date],
         endkey: [yr, mon, dt, "Event"],
         startkey_docid: req.query.key,
         skip: 1,
         limit: 15
      };
   }

   req.cb.view("Event", "ByType", q).query(function (err, values) {
      // 'ByType' view's map function emits Events as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      /*var a = new Array();
      for (var i = 0; i < 1; i++)
      {
         a.push(keys[i]);
      }*/
      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var events = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(events);
      });
   });
},

exports.getEventsByBrand = function (req, res) {
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.brandId
   };

   req.cb.view("Event", "ByBrand", q).query(function (err, values) {
      // 'ByType' view's map function emits business Types as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var event = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(event);
      });
   });

},

exports.createEvent = function (req, res) {
   var data = req.body;
   data.type = "Event";
   data.createdAt = new Date();
   var brandId = data.brandId;
   //For adding event counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr(brandId + '::Events::Counter', options, function (err, result) {
      if (err) {
         console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = brandId + "::Event::" + count;
      data.key = key;

      //Create a event document
      req.cb.add(key, data, function (err, result) {
         if (err) {
            console.log(err);
            res.send('{"success":false}');
         }

         res.send(data);
      });
   });
},

exports.updateEvent = function (req, res) {
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

exports.getUsersByEvent = function (req, res) {
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.eventId
   };

   req.cb.view("User", "ByEvent", q).query(function (err, values) {
      // 'ByType' view's map function emits business Types as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var user = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(user);
      });
   });

},

exports.deleteEvent = function (req, res) {
   var data = req.body;
   data.deletedAt = new Date();
   data.isDeleted = true;
   var key = data.key;

   req.cb.set(key, data, function (err, result) {
      if (err) { console.log(err); }
      res.send(data);
   });

},

exports.getAllEvents = function (req, res) {
   req.cb.view("Event", "ByType").query(function (err, values) {
      // 'ByType' view's map function emits Events as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      /*var a = new Array();
      for (var i = 0; i < 1; i++)
      {
         a.push(keys[i]);
      }*/
      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var events = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });
         var brands = _.pluck(events, 'brandId');
         brands = _.uniq(brands, false);
         req.cb.getMulti(brands, null, function (err, results1) {
            // Add the id to the document before sending to template
            var brandDoc = _.map(results1, function (v, k) {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < events.length; i++) {
               var brand = brandDoc.filter(function (obj) {
                  return obj.key == events[i].brandId;
               });
               if (brand[0]) {
                  events[i].brandName = brand[0].name;
               }
            }
         res.send(events);
         });
      });
   });
}