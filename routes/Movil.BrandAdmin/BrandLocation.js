var BrandLocModel = require('../../models/BrandLocationModel');
var _ = require('underscore');


exports.getBrandLocByBrandId = function(req, res)
{
   var q = {
      key: req.body.brandId,
      stale: false
   };

   req.cb.view("BrandLocation", "ByBrand", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      req.cb.getMulti(keys, null, function(err, results)
      {
         var locations = _.map(results, function(v, k)
         {
            return v.value;
         });

         var states = _.pluck(locations, 'stateId');
         states = _.uniq(states, false);
         req.cb.getMulti(states, null, function(err, results1)
         {
            var stateDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < locations.length; i++)
            {
               var state = stateDoc.filter(function(obj)
               {
                  return obj.key == locations[i].stateId;
               });
               if (state[0])
               {
                  locations[i].stateName = state[0].name;
               }
            }
         });
         var cities = _.pluck(locations, 'cityId');
         cities = _.uniq(cities, false);
         req.cb.getMulti(cities, null, function(err, results2)
         {
            var cityDoc = _.map(results2, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < locations.length; i++)
            {
               var city = cityDoc.filter(function(obj)
               {
                  return obj.key == locations[i].cityId;
               });
               if (city[0])
               {
                  locations[i].cityName = city[0].name;
               }
            }
            res.send(locations);
         });

      });
   });
   //});
   //});
},

exports.getBrandLocByBusType = function(req, res)
{
   if (!req.body.favCount)
   {
      //First time store load
      var q = {
         descending: true,
         limit: 15,
         startkey: [req.body.busTypeId, {}],
         endkey: [req.body.busTypeId]
      };
   } else
   {
      //load more
      var q = {
         descending: true,
         startkey: [req.body.busTypeId, parseInt(req.body.favCount)],
         endkey: [req.body.busTypeId],
         startkey_docid: req.body.key,
         skip: 1,
         limit: 15
      };
   }
   req.cb.view("BrandLocation", "ByBusType", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      req.cb.getMulti(keys, null, function(err, results)
      {
         var loc = _.map(results, function(v, k)
         {
            return v.value;
         });
         var brands = _.pluck(loc, 'brandId');
         brands = _.uniq(brands, false);
         req.cb.getMulti(brands, null, function(err, results1)
         {
            var brandDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < loc.length; i++)
            {
               var brand = brandDoc.filter(function(obj)
               {
                  return obj.key == loc[i].brandId;
               });
               if (brand[0])
               {
                  loc[i].logo = brand[0].logo;
                  loc[i].name = brand[0].name;
                  loc[i].description = brand[0].description;
                  loc[i].contactNo = brand[0].contactNo;
               }
            }
            var states = _.pluck(loc, 'stateId');
            states = _.uniq(states, false);
            req.cb.getMulti(states, null, function(err, results1)
            {
               var stateDoc = _.map(results1, function(v, k)
               {
                  return v.value;
               });
               for (var j = 0; j < loc.length; j++)
               {
                  var state = stateDoc.filter(function(obj)
                  {
                     return obj.key == loc[j].stateId;
                  });
                  if (state[0])
                  {
                     loc[j].stateName = state[0].name;
                  }
               }
               var cities = _.pluck(loc, 'cityId');
               cities = _.uniq(cities, false);
               req.cb.getMulti(cities, null, function(err, results2)
               {
                  var cityDoc = _.map(results2, function(v, k)
                  {
                     return v.value;
                  });
                  for (var k = 0; k < loc.length; k++)
                  {
                     var city = cityDoc.filter(function(obj)
                     {
                        return obj.key == loc[k].cityId;
                     });
                     if (city[0])
                     {
                        loc[k].cityName = city[0].name;
                     }
                  }
                  res.send(loc);
               });
            });
         });
      });
   });

},

exports.getLocationsByOffer = function(req, res)
{
   var keys = req.body.locations;

   req.cb.getMulti(keys, null, function(err, results)
   {

      // Add the id to the document before sending to template
      var loc = _.map(results, function(v, k)
      {
         //v.value.id = k;
         return v.value;
      });
      var brands = _.pluck(loc, 'brandId');
      brands = _.uniq(brands, false);
      req.cb.getMulti(brands, null, function(err, results1)
      {
         // Add the id to the document before sending to template
         var brandDoc = _.map(results1, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });
         for (var i = 0; i < loc.length; i++)
         {
            var brand = brandDoc.filter(function(obj)
            {
               return obj.key == loc[i].brandId;
            });
            if (brand[0])
            {
               loc[i].img = brand[0].logo;
               loc[i].contactNo = brand[0].contactNo;
            }
         }
         res.send(loc);
      });
   });

},

exports.createBrandLoc = function(req, res)
{
   var loc = req.body;
   loc.createdAt = new Date();
   loc.type = "BrandLocation";

   var brandId = req.body.brandId;

   //For adding user counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr(brandId + '::BrandLocations::Counter', options, function(err, result)
   {
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }

      count = result.value;

      var key = brandId + "::BrandLocation::" + count;
      loc.key = key;

      var splittedKey = key.split("::");
      console.log(splittedKey);
      var qrCodePartOne = splittedKey[0].replace(/^Brand+/i, 'B');
      var qrCodePartTwo = splittedKey[1];
      var qrCodePartThree = splittedKey[2].replace(/^BrandLocation+/i, 'L');
      var qrCodePartFour = splittedKey[3];
      var text = '';
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var q = 0; q < 4; q++)
      {
         text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      var qrCode = qrCodePartOne + qrCodePartTwo + "-" + qrCodePartThree + qrCodePartFour + "-" + text;
      loc.qrCodeOne = qrCode;
      //Create a category document
      req.cb.add(key, loc, function(err, result)
      {
         if (err)
         {
            console.log(err);
            res.send('{"success":false}');
         }

         res.send(loc);
      });
   });

},

exports.updateBrandLoc = function(req, res)
{
   var loc = req.body;
   loc.updatedAt = new Date();
   var key = loc.key;

   req.cb.set(key, loc, function(err, result)
   {
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(loc);
   });

},

exports.getBrandLocations = function(req, res)
{
   var q = {
      stale: false
   };

   req.cb.view("BrandLocation", "ByType", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      req.cb.getMulti(keys, null, function(err, results)
      {
         var locations = _.map(results, function(v, k)
         {
            return v.value;
         });
         console.log(values);
         var brands = _.pluck(locations, 'brandId');
         brands = _.uniq(brands, false);
         
         console.log(brands);
         req.cb.getMulti(brands, null, function(err, results1)
         {
            var brandDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < locations.length; i++)
            {
               var brand = brandDoc.filter(function(obj)
               {
                  return obj.key == locations[i].brandId;
               });
               if (brand[0])
               {
                  locations[i].brandName = brand[0].name;
               }
            }
            var states = _.pluck(locations, 'stateId');
            states = _.uniq(states, false);
            req.cb.getMulti(states, null, function(err, results1)
            {
               var stateDoc = _.map(results1, function(v, k)
               {
                  return v.value;
               });
               for (var i = 0; i < locations.length; i++)
               {
                  var state = stateDoc.filter(function(obj)
                  {
                     return obj.key == locations[i].stateId;
                  });
                  if (state[0])
                  {
                     locations[i].stateName = state[0].name;
                  }
               }
               var cities = _.pluck(locations, 'cityId');
               cities = _.uniq(cities, false);
               req.cb.getMulti(cities, null, function(err, results2)
               {
                  var cityDoc = _.map(results2, function(v, k)
                  {
                     return v.value;
                  });
                  for (var i = 0; i < locations.length; i++)
                  {
                     var city = cityDoc.filter(function(obj)
                     {
                        return obj.key == locations[i].cityId;
                     });
                     if (city[0])
                     {
                        locations[i].cityName = city[0].name;
                     }
                  }
                  res.send(locations);
               });
            });
         });
      });
   });
},

exports.deleteBrandLoc = function(req, res)
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

exports.getBrandLocByMallId = function(req, res)
{
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.mallId
   };

   req.cb.view("BrandLocation", "ByMall", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {
         var locations = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });

         var brands = _.pluck(locations, 'brandId');

         req.cb.getMulti(brands, null, function(err, results1)
         {
            // Add the id to the document before sending to template
            var brandDoc = _.map(results1, function(v, k)
            {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < locations.length; i++)
            {
               var brand = brandDoc.filter(function(obj)
               {
                  return obj.key == locations[i].brandId;
               });
               if (brand[0])
               {
                  locations[i].name = brand[0].name;
                  locations[i].description = brand[0].description;
                  locations[i].logo = brand[0].logo;
                  locations[i].contactNo = brand[0].contactNo;
               }
            }
            //});
            var states = _.pluck(locations, 'stateId');

            req.cb.getMulti(states, null, function(err, results1)
            {
               // Add the id to the document before sending to template
               var stateDoc = _.map(results1, function(v, k)
               {
                  //v.value.id = k;
                  return v.value;
               });
               for (var j = 0; j < locations.length; j++)
               {
                  var state = stateDoc.filter(function(obj)
                  {
                     return obj.key == locations[j].stateId;
                  });
                  if (state[0])
                  {
                     locations[j].stateName = state[0].name;
                  }
               }
               //});
               var cities = _.pluck(locations, 'cityId');

               req.cb.getMulti(cities, null, function(err, results2)
               {
                  // Add the id to the document before sending to template
                  var cityDoc = _.map(results2, function(v, k)
                  {
                     //v.value.id = k;
                     return v.value;
                  });
                  for (var k = 0; k < locations.length; k++)
                  {
                     var city = cityDoc.filter(function(obj)
                     {
                        return obj.key == locations[k].cityId;
                     });
                     if (city[0])
                     {
                        locations[k].cityName = city[0].name;
                     }
                  }
                  res.send(locations);
               });

            });
         });
      });
   });
   //});

}