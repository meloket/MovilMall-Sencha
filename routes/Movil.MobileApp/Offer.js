var OfferModel = require('../../models/OfferModel');
var GeoPoint = require('geopoint');
var request = require('request');
var offerCommentModel = require('../../models/OfferCommentModel');
var _ = require('underscore');
var WebPurify = require('webpurify');

var wp = new WebPurify({
   api_key: '83a369a4bf7cba214b7d154a229062a0'
});

exports.getNewOffers = function(req, res)
{
   var latitude = parseFloat(req.body.latitude);
   var longitude = parseFloat(req.body.longitude);

   ////TODO : Chage latlong values after implementing phonegap in senchatouch
   //var point = new GeoPoint(22.992722, 72.522314);

   var point = new GeoPoint(latitude, longitude);

   //For getting bbox values from given latlong
   var bbox = point.boundingCoordinates(40, 6371, true);
   bbox = bbox[0]._degLat + "," + bbox[0]._degLon + "," + bbox[1]._degLat + "," + bbox[1]._degLon;

   //Calls Spatial view of couchbase using request object
   request('http://katrina:8092/MovilMall/_design/BrandLocation/_spatial/ByGeoLocation?bbox=' + bbox, function(error, response, body)
   {
      if (!error && response.statusCode == 200)
      {
         var locations = JSON.parse(body);
         //Generate keys of locations array from response
         var keys = _.pluck(locations.rows, 'id');


         var q = {
            keys: keys
         };

         req.cb.view("Offer", "ByLocation", q).query(function(err, values)
         {
            var keys = _.pluck(values, 'id');

            req.cb.getMulti(keys, null, function(err, results)
            {

               // Add the id to the document before sending to template
               var offers = _.map(results, function(v, k)
               {
                  //v.value.id = k;
                  return v.value;
               });

               var brands = _.pluck(offers, 'brandId');
               req.cb.getMulti(brands, null, function(err, results1)
               {
                  var brandDoc = _.map(results1, function(v, k)
                  {
                     return v.value;
                  });
                  for (var i = 0; i < offers.length; i++)
                  {
                     var brand = brandDoc.filter(function(obj)
                     {
                        return obj.key == offers[i].brandId;
                     });
                     if (brand[0])
                     {
                        offers[i].brandName = brand[0].name;
                        offers[i].fb = brand[0].fb;
                        offers[i].twitter = brand[0].twitter;
                        offers[i].linkedIn = brand[0].linkedIn;
                        offers[i].google = brand[0].google;
                        offers[i].pinterest = brand[0].pinterest;
                        offers[i].youtube = brand[0].youtube;
                        offers[i].instagram = brand[0].instagram;
                        offers[i].profileImage = brand[0].profileImage;
                     }
                  }
                  res.send(offers);

               });
            });
         });
      }
   });
},
exports.getOffersByLocation = function(req, res)
{

   var locations = new Array();
   var loc = req.body.locations;
   if (loc instanceof Array == false)
   {
      locations.push(loc);
   } else
   {
      locations = loc;
   }

   var mallId = locations[0];
   console.log(mallId);
   var q = {
      key: mallId
   };

   req.cb.view("BrandLocation", "ByMall", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);

      //For couchbase views date isuue resolution.
      var today = new Date();
      var d = today.getDate();
      var mo = today.getMonth() + 1;
      var y = today.getFullYear();
      var locKeys = new Array();
      for (var j = 0; j < keys.length; j++)
      {
         locKeys.push([y, mo, d, keys[j]]);
      }
      if (!req.body.keys)     //old condition if (!req.body.key). Correct should be if (!req.body.keys)
      {
         //First time store load
         var q = {
            limit: 1,
            keys: locKeys
         };
      } else
      {
         //load more
         var q = {
            keys: locKeys,
            startkey_docid: req.body.keys,
            skip: 1,
            limit: 1
         };
      }
      console.log(q);
      req.cb.view("Offer", "ByLocation", q).query(function(err, values)
      {
         var keys = _.pluck(values, 'id');
         keys = _.uniq(keys, false);
         req.cb.getMulti(keys, null, function(err, results)
         {
            var offers = _.map(results, function(v, k)
            {
               return v.value;
            });
            var brands = _.pluck(offers, 'brandId');
            brands = _.uniq(brands, false);
            req.cb.getMulti(brands, null, function(err, results1)
            {
               var brandDoc = _.map(results1, function(v, k)
               {
                  return v.value;
               });
               for (var i = 0; i < offers.length; i++)
               {
                  var brand = brandDoc.filter(function(obj)
                  {
                     return obj.key == offers[i].brandId;
                  });
                  if (brand[0])
                  {
                     offers[i].brandName = brand[0].name;
                     offers[i].fb = brand[0].fb;
                     offers[i].twitter = brand[0].twitter;
                     offers[i].linkedIn = brand[0].linkedIn;
                     offers[i].google = brand[0].google;
                     offers[i].pinterest = brand[0].pinterest;
                     offers[i].youtube = brand[0].youtube;
                     offers[i].instagram = brand[0].instagram;
                     offers[i].profileImage = brand[0].profileImage;
                  }
               }
               res.send(offers);
            });
         });
      });
   });

},
exports.getOfferByName = function(req, res)
{
   //var keys = req.body.locations;

   //For couchbase views date isuue resolution.
   var today = new Date();
   var d = today.getDate();
   var mo = today.getMonth() + 1;
   var y = today.getFullYear();
   
   var q = {
      stale: false,
      startkey: [y, mo, d, req.body.name],
      endkey: [y, mo, d, req.body.name + "\u0FFF"]
      //startkey: req.body.name,                old
      //endkey: req.body.name + "\u0FFF"        old
   };
   console.log(q);
   req.cb.view("Offer", "ByHashTag", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {

         // Add the id to the document before sending to template
         var offers = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });
         var brands = _.pluck(offers, 'brandId');
         brands = _.uniq(brands, false);
         req.cb.getMulti(brands, null, function(err, results1)
         {
            // Add the id to the document before sending to template
            var brandDoc = _.map(results1, function(v, k)
            {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < offers.length; i++)
            {
               var brand = brandDoc.filter(function(obj)
               {
                  return obj.key == offers[i].brandId;
               });
               if (brand[0])
               {
                  offers[i].brandName = brand[0].name;
               }
            }
            res.send(offers);
         });
      });
   });
},
exports.getOfferByCategory = function(req, res)
{
   //For couchbase views date isuue resolution.
   var currentDate = new Date();
   var dt = currentDate.getDate();
   var mon = currentDate.getMonth() + 1;
   var yr = currentDate.getFullYear();

   if (!req.body.createdAt)
   {
      //First time store load
      var q = {
         descending: true,
         limit: 10,
         startkey: [yr, mon, dt, req.body.categoryId, {}],
         endkey: [yr, mon, dt, req.body.categoryId]
      };
   } else
   {
      //load more

      var dateArray = req.body.createdAt.split('T');
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

      var q = {
         descending: true,
         startkey: [yr, mon, dt, req.body.categoryId, date],
         endkey: [yr, mon, dt, req.body.categoryId],
         startkey_docid: req.body.key,
         skip: 1,
         limit: 10
      };
   }

   /*var q = {
      stale: false,
      key: req.body.categoryId
   };*/

   req.cb.view("Offer", "ByCategory", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      req.cb.getMulti(keys, null, function(err, results)
      {
         var offers = _.map(results, function(v, k)
         {
            return v.value;
         });
         var brands = _.pluck(offers, 'brandId');
         brands = _.uniq(brands, false);
         req.cb.getMulti(brands, null, function(err, results1)
         {
            var brandDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < offers.length; i++)
            {
               var brand = brandDoc.filter(function(obj)
               {
                  return obj.key == offers[i].brandId;
               });
               if (brand[0])
               {
                  offers[i].brandName = brand[0].name;
                  offers[i].fb = brand[0].fb;
                  offers[i].twitter = brand[0].twitter;
                  offers[i].linkedIn = brand[0].linkedIn;
                  offers[i].google = brand[0].google;
                  offers[i].pinterest = brand[0].pinterest;
                  offers[i].youtube = brand[0].youtube;
                  offers[i].instagram = brand[0].instagram;
                  offers[i].profileImage = brand[0].profileImage;
               }
            }
            res.send(offers);
         });
      });
   });
},
exports.getOfferByBusType = function(req, res)
{
   //var keys = req.body.locations;
   //For couchbase views date isuue resolution.
   var currentDate = new Date();
   var dt = currentDate.getDate();
   var mon = currentDate.getMonth() + 1;
   var yr = currentDate.getFullYear();
   if (!req.body.createdAt)
   {
      //First time store load
      var q = {
         descending: true,
         limit: 10,
         startkey: [yr, mon, dt, req.body.busTypeId, {}],
         endkey: [yr, mon, dt, req.body.busTypeId]
      };
   } else
   {
      //load more

      var dateArray = req.body.createdAt.split('T');
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

      var q = {
         descending: true,
         startkey: [yr, mon, dt, req.body.busTypeId, date],
         endkey: [yr, mon, dt, req.body.busTypeId],
         startkey_docid: req.body.key,
         skip: 1,
         limit: 10
      };
   }
   /*var q = {
      stale: false,
      key: req.body.busTypeId
   };*/

   req.cb.view("Offer", "ByBusType", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      req.cb.getMulti(keys, null, function(err, results)
      {

         // Add the id to the document before sending to template
         var offers = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });
         var brands = _.pluck(offers, 'brandId');
         brands = _.uniq(brands, false);
         req.cb.getMulti(brands, null, function(err, results1)
         {
            // Add the id to the document before sending to template
            var brandDoc = _.map(results1, function(v, k)
            {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < offers.length; i++)
            {
               var brand = brandDoc.filter(function(obj)
               {
                  return obj.key == offers[i].brandId;
               });
               if (brand[0])
               {
                  offers[i].brandName = brand[0].name;
               }
            }
            res.send(offers);
         });
      });
   });
},
exports.getUserLikedOffers = function(req, res)
{
   var keys = req.body.offers;

   req.cb.getMulti(keys, null, function(err, results)
   {

      // Add the id to the document before sending to template
      var offers = _.map(results, function(v, k)
      {
         return v.value;
      });
      var brands = _.pluck(offers, 'brandId');
      brands = _.uniq(brands, false);
      req.cb.getMulti(brands, null, function(err, results1)
      {
         // Add the id to the document before sending to template
         var brandDoc = _.map(results1, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });
         for (var i = 0; i < offers.length; i++)
         {
            var brand = brandDoc.filter(function(obj)
            {
               return obj.key == offers[i].brandId;
            });
            if (brand[0])
            {
               console.log(brand[0]);
               offers[i].brandName = brand[0].name;
               offers[i].profileImage = brand[0].profileImage;
            }
         }
         res.send(offers);
      });
   });

},
exports.postOfferComment = function(req, res)
{
   var data = req.body;
   var offerId = data.offerId;
   var userId = data.userId;
   var offerComment = new offerCommentModel();

   offerComment.userId = userId;
   offerComment.offerId = offerId;
   offerComment.createdAt = new Date();
   offerComment.value = data.value;
   offerComment.datetime = new Date();

   wp.check(offerComment.value, function(err, profanity)
   {
      if (profanity === true)
      {
         console.log('A bunch of sailors in here!');
         res.send('{"success":"profanity"}');
         return;
      }

      //For adding offer comment counter
      var options = {
         offset: 1,
         initial: 1
      };
      var count;

      req.cb.incr(offerId + '::Comments::Counter', options, function(err, result)
      {
         if (err)
         {
            throw err;
         }

         count = result.value;

         var key = offerId + "::Comment::" + count;
         offerComment.key = key;
         offerComment.type = "OfferComment";


         //Create a Offer Comment document
         req.cb.add(key, offerComment, function(err, result)
         {
            if (err)
            {
               throw err;
            }
            req.cb.get(offerId, function(err, result)
            {
               var doc = result.value;
               var commentCount = doc.commentCount;
               commentCount++;
               doc.commentCount = commentCount;

               req.cb.set(doc.key, doc, function(err, result)
               {
                  if (err)
                  {
                     console.log(err);
                  }

                  req.cb.get(userId, function(err, result)
                  {
                     var doc = result.value;
                     console.log(doc);
                     var userName = doc.name;
                     var photo = doc.photo;
                     offerComment.userName = userName;
                     offerComment.photo = photo;
                     res.send(offerComment);
                  });
               });
            });
         });
      });

   });
   //});
},
exports.deleteOfferComment = function(req, res)
{
   var data = req.body;
   var key = data.key;
   var offerId = data.offerId;

   req.cb.remove(key, data, function(err, result)
   {
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }

      req.cb.get(offerId, function(err, result)
      {
         var doc = result.value;
         var commentCount = doc.commentCount;
         commentCount--;
         doc.commentCount = commentCount;

         req.cb.set(doc.key, doc, function(err, result)
         {
            if (err)
            {
               console.log(err);
            }
            res.send('{"success":true}');
         });
      });
   });

},
exports.getCommentsByOffer = function (req, res) {
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.offerId
   };

   req.cb.view("OfferComment", "ByOffer", q).query(function (err, values) {
      // 'ByType' view's map function emits business Types as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var comments = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         var users = _.pluck(comments, 'userId');
         req.cb.getMulti(users, null, function (err, results1) {
            // Add the id to the document before sending to template
            var userDoc = _.map(results1, function (v, k) {
               //v.value.id = k;
               return v.value;
            });

            for (var i = 0; i < comments.length; i++) {
               var user = userDoc.filter(function (obj) {
                  return obj.key == comments[i].userId;
               });
               if (user[0]) {
                  comments[i].userName = user[0].name;
                  comments[i].photo = user[0].photo;
               }
            }
            res.send(comments);
         });
      });
   });

},
exports.getCouponCode = function(req, res)
{
   var data = req.body;
   var offerId = data.offerId;
   var locationId = data.locationId;
   var key = offerId + "::" + locationId + "::QRCode";
   req.cb.get(key, function(err, result)
   {
      var doc = result.value;
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(doc);
   });
}