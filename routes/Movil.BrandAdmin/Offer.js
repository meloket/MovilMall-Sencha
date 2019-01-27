var OfferModel = require('../../models/OfferModel');
var OfferLocationModel = require('../../models/OfferLocationModel');
var _ = require('underscore');


exports.getOfferByBrand = function(req, res)
{
   var q = {
      stale: false,
      key: req.body.brandId
   };

   req.cb.view("Offer", "ByBrand", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      /* var a = new Array();
      for (var i = 0; i < 2; i++) {
         a.push(keys[i]);
      }*/
      req.cb.getMulti(keys, null, function(err, results)
      {

         // Add the id to the document before sending to template
         var offers = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });

         res.send(offers);
      });
   });

},
exports.createOffer = function(req, res)
{
   var data = req.body;
   var offer = new OfferModel();
   offer.createdAt = new Date();
   offer.type = "Offer";
   offer.brandId = data.brandId;
   offer.tagLine = data.tagLine;
   offer.isActive = false;
   offer.isBlocked = false;
   offer.img = data.img ? data.img : null;
   offer.listImg = data.listImg ? data.listImg : null;
   offer.code = data.code ? data.code : null;
   offer.validFrom = data.validFrom ? data.validFrom : null;
   offer.validTo = data.validTo ? data.validTo : null;


   var brandId = req.body.brandId;

   //For adding offer counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr(brandId + '::Offers::Counter', options, function(err, result)
   {
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = brandId + "::Offer::" + count;
      offer.key = key;

      //Create a Offer document
      req.cb.add(key, offer, function(err, result)
      {
         if (err)
         {
            console.log(err);
            res.send('{"success":false}');
         }

         res.send(offer);
      });
   });

},
exports.updateOffer = function(req, res)
{
   var offer = req.body;
   offer.updatedAt = new Date();
   var array = new Array();
   var tags = offer.tags;
   tags = tags.replace(/ +/g, "");
   console.log(tags);
   
   var splittedTags = tags.split('#');
   for (var i = 0; i < splittedTags.length; i++)
   {
      array.push(splittedTags[i]);
   }
   array.shift();
   offer.hashTags = array;


   var key = offer.key;

   req.cb.set(key, offer, function(err, result)
   {
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(offer);
   });

},
exports.getUsersByOffer = function(req, res)
{
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.offerId
   };

   req.cb.view("User", "ByOffer", q).query(function(err, values)
   {
      // 'ByType' view's map function emits business Types as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {

         // Add the id to the document before sending to template
         var user = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });

         res.send(user);
      });
   });

},
exports.getOffers = function(req, res)
{

   var data = req.query;
   
   //For couchbase views date isuue resolution.
   var today = new Date();
   var d = today.getDate();
   var mo = today.getMonth() + 1;
   var y = today.getFullYear();
   if (!data.likeCount)
   {
      //First time store load
      var q = {
         descending: true,
         startkey: [y, mo, d, {}],
         endkey: [y, mo, d],
         limit: 10
      };
   } else
   {
      //load more
      var q = {
         descending: true,
         startkey: [y, mo, d, parseInt(data.likeCount)],
         endkey: [y, mo, d],
         //startkey: parseInt(data.likeCount),  //old startkey
         startkey_docid: data.key,
         skip: 1,
         limit: 10
      };
   }
   console.log(q);
   req.cb.view("Offer", "ByType", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      req.cb.getMulti(keys, null, function(err, results)
      {
         var offers = _.map(results, function(v, k)
         {
            return v.value;
         });
         //res.send(offers);
         /*    var brands = _.pluck(offers, 'brandId');

         brands = _.uniq(brands, false);
         console.log(brands);
         req.cb.getMulti(brands, null, function(err, results1)
         {
            var brandDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            //console.log(brandDoc);
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
                  offers[i].instagram = brand[0].instagram;
                  offers[i].youtube = brand[0].youtube;
                  offers[i].profileImage = brand[0].profileImage;
               }
            }
*/
         res.send(offers);
         // });
      });
   });
},
exports.deleteOffer = function(req, res)
{
   var data = req.body;
   data.deletedAt = new Date();
   data.isDeleted = true;
   var key = data.key;

   req.cb.set(key, data, function(err, result)
   {
      if (err)
      {
         console.log(err);
      }
      res.send(data);
   });

},
exports.updateOfferLocation = function(req, res)
{
   var data = req.body;
   var offerId = data.key;

   var splittedOfferId = offerId.split("::");
   var codePartOne = "BO" + splittedOfferId[1] + splittedOfferId[3];

   var couponCode = data.code;

   var loc = data.locations;
   if (loc)
   {
      var locations = new Array();
      if (loc instanceof Array == false)
      {
         locations.push(loc);
      } else
      {
         locations = loc;
      }
      for (var i = 0; i < locations.length; i++)
      {
         var splittedLocationId = locations[i].split("::");
         var codePartTwo = "BL" + splittedLocationId[1] + splittedLocationId[3];
         var qrCode = codePartOne + "-" + codePartTwo + "-" + couponCode;

         var offerLocation = new OfferLocationModel();
         offerLocation.offerId = offerId;
         offerLocation.locationId = locations[i];
         offerLocation.type = "QRCode";
         offerLocation.createdAt = new Date();
         offerLocation.qrCode = qrCode;

         var key = offerId + "::" + locations[i] + "::QRCode";
         offerLocation.key = key;
         req.cb.set(key, offerLocation, function(err3, result3)
         {
            if (err3)
            {
               console.log(err3);
            }
         });
      }
      res.send('{"success":true}');
   } else
   {
      res.send('{"success":true}');
   }

},
exports.getAllOffers = function(req, res)
{
   req.cb.view("Offer", "ByType").query(function(err, values)
   {

      var keys = _.pluck(values, 'id');
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
               }
            }
            res.send(offers);
         });
      });
   });
}