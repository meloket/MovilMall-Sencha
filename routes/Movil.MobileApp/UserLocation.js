var userModel = require('../../models/UserModel');
var GeoPoint = require('geopoint');
var request = require('request');
var _ = require('underscore');

exports.setFavLocation = function (req, res) {
   var data = req.body;
   var userId = data.userId;
   var locationId = data.locationId;

   //To decide whether user is marking location as fav. or removing from fav. If toggled=true => Favourite. else Not Favourite.
   var toggled = data.toggled;
   
   req.cb.get(locationId, function (err, result) {
      var doc = result.value;
      var favCount = doc.favCount;
      if (toggled == "false")
      {
         favCount--;
      } else {
         favCount++;
      }   
      doc.favCount = favCount;
      req.cb.set(doc.key, doc, function (err, result) {
         if (err) { console.log(err); }

         req.cb.get(userId, doc, function (err, result) {
            var userDoc = result.value;
            if (toggled == "false") {
               var index = userDoc.favLoc.indexOf(doc.key);
               if (index > -1) {
                  userDoc.favLoc.splice(index, 1);
               }
            } else {
               userDoc.favLoc.push(doc.key);
            }
               
            req.cb.set(userDoc.key, userDoc, function (err, result) {
               if (err) {
                  console.log(err);
               }
               res.send('{"success":true}');
            });
         });
      });
   });
},

exports.getUsersByLoc = function (req, res) {
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.locationId
   };

   req.cb.view("User", "ByLocation", q).query(function (err, values) {
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
         var states = _.pluck(user, 'stateId');
         req.cb.getMulti(states, null, function (err, results1) {
            // Add the id to the document before sending to template
            var stateDoc = _.map(results1, function (v, k) {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < user.length; i++) {
               var state = stateDoc.filter(function (obj) {
                  return obj.key == user[i].stateId;
               });
               if (state[0]) {
                  user[i].stateName = state[0].name;
               }
            }
         });
            var cities = _.pluck(user, 'cityId');

            req.cb.getMulti(cities, null, function (err, results2) {
               // Add the id to the document before sending to template
               var cityDoc = _.map(results2, function (v, k) {
                  //v.value.id = k;
                  return v.value;
               });
               for (var i = 0; i < user.length; i++) {
                  var city = cityDoc.filter(function (obj) {
                     return obj.key == user[i].cityId;
                  });
                  if (city[0]) {
                     user[i].cityName = city[0].name;
                  }
               }
               res.send(user);
            });
               
            });
         });
      //});
   //});

},

exports.getLocByName = function (req, res)
{
   var busTypeId = req.body.busTypeId;
   var q = {
      stale: false,
      startkey: req.body.name,
      endkey: req.body.name + "\u0FFF"
   };
   console.log(q);
   req.cb.view("BrandLocation", "ByName", q).query(function (err, values)
   {
      console.log(values);
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var location = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });
         
         //For differentiating search in stores and restaurants. 
         var stores = new Array();

         for (var i = 0; i < location.length; i++) {
            if (location[i].busTypeId == busTypeId) {
               stores.push(location[i]);
            }
         }
         var brands = _.pluck(stores, 'brandId');
         brands = _.uniq(brands, false);
         req.cb.getMulti(brands, null, function (err, results1) {
            // Add the id to the document before sending to template
            var brandDoc = _.map(results1, function (v, k) {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < stores.length; i++) {
               var brand = brandDoc.filter(function (obj) {
                  return obj.key == stores[i].brandId;
               });
               if (brand[0]) {
                  stores[i].logo = brand[0].logo;
                  stores[i].name = brand[0].name;
                  stores[i].description = brand[0].description;
               }
            }
         });
         
         var states = _.pluck(stores, 'stateId');
         req.cb.getMulti(states, null, function (err, results1) {
            // Add the id to the document before sending to template
            var stateDoc = _.map(results1, function (v, k) {
               //v.value.id = k;
               return v.value;
            });
            for (var j = 0; j < stores.length; j++) {
               var state = stateDoc.filter(function (obj) {
                  return obj.key == stores[j].stateId;
               });
               if (state[0]) {
                  stores[j].stateName = state[0].name;
               }
            }
         });
         var cities = _.pluck(stores, 'cityId');

         req.cb.getMulti(cities, null, function (err, results2) {
            // Add the id to the document before sending to template
            var cityDoc = _.map(results2, function (v, k) {
               //v.value.id = k;
               return v.value;
            });
            for (var k = 0; k < stores.length; k++) {
               var city = cityDoc.filter(function (obj) {
                  return obj.key == stores[k].cityId;
               });
               if (city[0]) {
                  stores[k].cityName = city[0].name;
               }
            }
            res.send(stores);
         });
      });
   });
},

exports.getFavLocations = function (req, res) {
   var keys = req.body.favLoc;

   req.cb.getMulti(keys, null, function (err, results) {

      // Add the id to the document before sending to template
      var locations = _.map(results, function (v, k) {
         return v.value;
      });
      res.send(locations);
   });

},

exports.getFavLocationsByBusType = function (req, res) {
   var keys = req.body.favLoc;
   var busTypeId = req.body.busTypeId;
   console.log(busTypeId);
   req.cb.getMulti(keys, null, function (err, results) {

      var locations = _.map(results, function (v, k) {
         return v.value;
      });
      
      var favLocation = new Array();
     
      for (var i = 0; i < locations.length; i++)
      {
         if (locations[i].busTypeId == busTypeId)
         {
            favLocation.push(locations[i]);
         }
      }
     // res.send(favLocation);
      var states = _.pluck(favLocation, 'stateId');
      req.cb.getMulti(states, null, function (err, results1) {
         
         var stateDoc = _.map(results1, function (v, k) {
            
            return v.value;
         });
         for (var i = 0; i < favLocation.length; i++) {
            var state = stateDoc.filter(function (obj) {
               return obj.key == favLocation[i].stateId;
            });
            if (state[0]) {
               favLocation[i].stateName = state[0].name;
            }
         }
      });
         var cities = _.pluck(favLocation, 'cityId');

         req.cb.getMulti(cities, null, function (err, results2) {
            // Add the id to the document before sending to template
            var cityDoc = _.map(results2, function (v, k) {
               //v.value.id = k;
               return v.value;
            });
            for (var j = 0; j < favLocation.length; j++) {
               var city = cityDoc.filter(function (obj) {
                  return obj.key == favLocation[j].cityId;
               });
               if (city[0]) {
                  favLocation[j].cityName = city[0].name;
               }
            }
         });
            var brands = _.pluck(favLocation, 'brandId');
         
            req.cb.getMulti(brands, null, function (err, results1) {
               // Add the id to the document before sending to template
               var brandDoc = _.map(results1, function (v, k) {
                  //v.value.id = k;
                  return v.value;
               });
               for (var k = 0; k < favLocation.length; k++) {
                  var brand = brandDoc.filter(function (obj) {
                     return obj.key == favLocation[k].brandId;
                  });
                  if (brand[0]) {
                     favLocation[k].name = brand[0].name;
                     favLocation[k].description = brand[0].description;
                     favLocation[k].logo = brand[0].logo;
                     favLocation[k].contactNo = brand[0].contactNo;
                  }
               }
               res.send(favLocation);
            });
               

            });
         //});
      //});
   //});
},

exports.getLocByCategory = function (req, res) {
   if (!req.body.key)
   {
      //First time store load
      var q = {
         descending: true,
         limit: 15,
         startkey: [req.body.categoryId, {}],
         endkey: [req.body.categoryId]
      };
   }
   else {
      //load more
      var dateArray = req.body.createdAt.split('T');
      var year = dateArray[0].split('-');
      var time = dateArray[1].split(':');
      var sec = time[2].split('.');

      var today = new Date(year[0], year[1], year[2], time[0], time[1], sec[0]);

     // var today = new Date(req.body.createdAt);
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
         startkey: [req.body.categoryId, date],
         endkey: [req.body.categoryId],
         startkey_docid: req.body.key,
         skip: 1,
         limit: 15
      };
   }
   /*var q = {
      stale: false,
      key: req.body.categoryId
   };*/
   req.cb.view("BrandLocation", "ByCategory", q).query(function (err, values) {
      var keys = _.pluck(values, 'id');
      keys = _.uniq(keys, false);
      req.cb.getMulti(keys, null, function (err, results) {

         var loc = _.map(results, function (v, k) {
            return v.value;
         });
        // res.send(loc);
         var states = _.pluck(loc, 'stateId');
         states = _.uniq(states, false);
         req.cb.getMulti(states, null, function (err, results1) {
            // Add the id to the document before sending to template
            var stateDoc = _.map(results1, function (v, k) {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < loc.length; i++) {
               var state = stateDoc.filter(function (obj) {
                  return obj.key == loc[i].stateId;
               });
               if (state[0]) {
                  loc[i].stateName = state[0].name;
               }
            }
         });
            var cities = _.pluck(loc, 'cityId');
            cities = _.uniq(cities, false);
            req.cb.getMulti(cities, null, function (err, results2) {
               // Add the id to the document before sending to template
               var cityDoc = _.map(results2, function (v, k) {
                  //v.value.id = k;
                  return v.value;
               });
               for (var i = 0; i < loc.length; i++) {
                  var city = cityDoc.filter(function (obj) {
                     return obj.key == loc[i].cityId;
                  });
                  if (city[0]) {
                     loc[i].cityName = city[0].name;
                  }
               }
            });
            var brands = _.pluck(loc, 'brandId');
            brands = _.uniq(brands, false);
               req.cb.getMulti(brands, null, function (err, results1) {
                  // Add the id to the document before sending to template
                  var brandDoc = _.map(results1, function (v, k) {
                     //v.value.id = k;
                     return v.value;
                  });
                  for (var i = 0; i < loc.length; i++) {
                     var brand = brandDoc.filter(function (obj) {
                        return obj.key == loc[i].brandId;
                     });
                     if (brand[0]) {
                        loc[i].name = brand[0].name;
                        loc[i].description = brand[0].description;
                        loc[i].logo = brand[0].logo;
                        loc[i].contactNo = brand[0].contactNo;
                     }
                  }
                  res.send(loc);
               });
                  
               });
            });
         //});
      //});
   //});
},

exports.getNearByLocations = function (req, res)
{
   var latitude = req.body.latitude;
   var longitude = req.body.longitude;
   var busTypeId = req.body.busTypeId;
   var point = new GeoPoint(parseFloat(latitude), parseFloat(longitude));
 
   //TODO : Chage latlong values after implementing phonegap in senchatouch
  // var point = new GeoPoint(22.992722, 72.522314);
  // var busTypeId = "BusType::2";
 
   // var point = new GeoPoint(parseFloat(latitude), parseFloat(longitude));

   //For getting bbox values from given latlong
   var bbox = point.boundingCoordinates(40, 6371, true);
   bbox = bbox[0]._degLat + "," + bbox[0]._degLon + "," + bbox[1]._degLat + "," + bbox[1]._degLon;
   
   //Calls Spatial view of couchbase using request object
   request('http://katrina:8092/MovilMall/_design/BrandLocation/_spatial/ByGeoLocation?bbox=' + bbox, function(error, response, body)
   {
      if (!error && response.statusCode == 200)
      {
         var locations = JSON.parse(body);
         var keys = _.pluck(locations.rows, 'id');
         
         req.cb.getMulti(keys, null, function (err, results) {
            var loc = _.map(results, function (v, k) {
               return v.value;
            });
            var nearByLoc = new Array();

            for (var i = 0; i < loc.length; i++) {
               if (loc[i].busTypeId == busTypeId) {
                  nearByLoc.push(loc[i]);
               }
            }
            var brands = _.pluck(nearByLoc, 'brandId');
            brands = _.uniq(brands, false);
            req.cb.getMulti(brands, null, function (err, results1) {
               // Add the id to the document before sending to template
               var brandDoc = _.map(results1, function (v, k) {
                  //v.value.id = k;
                  return v.value;
               });
               for (var i = 0; i < nearByLoc.length; i++) {
                  var brand = brandDoc.filter(function (obj) {
                     return obj.key == nearByLoc[i].brandId;
                  });
                  if (brand[0]) {
                     nearByLoc[i].logo = brand[0].logo;
                     nearByLoc[i].name = brand[0].name;
                     nearByLoc[i].description = brand[0].description;
                     nearByLoc[i].contactNo = brand[0].contactNo;
                  }
               }
            //});
            var states = _.pluck(nearByLoc, 'stateId');
            req.cb.getMulti(states, null, function (err, results1) {
               // Add the id to the document before sending to template
               var stateDoc = _.map(results1, function (v, k) {
                  //v.value.id = k;
                  return v.value;
               });
               for (var i = 0; i < nearByLoc.length; i++) {
                  var state = stateDoc.filter(function (obj) {
                     return obj.key == nearByLoc[i].stateId;
                  });
                  if (state[0]) {
                     nearByLoc[i].stateName = state[0].name;
                  }
               }
            //});
            var cities = _.pluck(nearByLoc, 'cityId');

            req.cb.getMulti(cities, null, function (err, results2) {
               // Add the id to the document before sending to template
               var cityDoc = _.map(results2, function (v, k) {
                  //v.value.id = k;
                  return v.value;
               });
               for (var i = 0; i < nearByLoc.length; i++) {
                  var city = cityDoc.filter(function (obj) {
                     return obj.key == nearByLoc[i].cityId;
                  });
                  if (city[0]) {
                     nearByLoc[i].cityName = city[0].name;
                  }
               }
               res.send(nearByLoc);
            });
            });
            });
         });
         
      }
   });

}
//}