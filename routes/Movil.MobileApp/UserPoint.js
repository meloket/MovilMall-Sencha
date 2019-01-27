var userModel = require('../../models/UserModel');
var UserPointModel = require('../../models/UserPointModel');
var _ = require('underscore');

exports.setUserPoints = function(req, res)
{
   var data = req.body;
   var qrCode = data.qrCode;
   //var qrCode = "B20-L1-1-R784";
   var splittedCode = qrCode.split("-");

   //var qrCodeType = splittedCode[2];
   /*if (qrCodeType == "1")
   {
      qrCodeType = "qrCodeOne";
   }
   if (qrCodeType == "5")
   {
      qrCodeType = "qrCodeTwo";
   }*/
   var keyPartOne = splittedCode[0].replace(/^B+/i, 'Brand::');
   var keyPartTwo = splittedCode[1].replace(/^L+/i, 'BrandLocation::');
   var locationId = keyPartOne + "::" + keyPartTwo;
   req.cb.get(locationId, function(err, result)
   {
      if (err)
      {
         console.log(err);
      }
      var userId = data.userId;
      //  var userId = "User::25";
      //var userId = req.user.key;
      /*var q = {
         userId: userId,
         locationId: locationId
      };*/

      var userPointKey = userId + "::" + locationId + "::UserPoint";
      console.log(userPointKey);

      //req.cb.view("UserPoint", "ByLocation", q).query(function(err2, values)
      //{
      //var keys = _.pluck(values, 'id');
      req.cb.get(userPointKey, function(err1, result1)
      {
         var doc = result1.value;
         if (err1)
         {
            console.log(err1);
         }
         if (doc === undefined)
         {
            var userPoint = new UserPointModel();
            userPoint.userId = userId;
            userPoint.locationId = locationId;
            userPoint.type = "UserPoint";
            userPoint.createdAt = new Date();
            userPoint.scannedAt = new Date();
            userPoint.updatedAt = "";
            userPoint.redeemedAt = "";
            userPoint.points = 1;
            /*if (qrCodeType == "qrCodeOne")
            {
               userPoint.points = 1;
            }
            if (qrCodeType == "qrCodeTwo")
            {
               userPoint.points = 5;
            }*/
            var key = userId + "::" + locationId + "::UserPoint";
            userPoint.key = key;
            req.cb.add(key, userPoint, function(err3, result3)
            {
               if (err3)
               {
                  console.log(err3);
               }
               res.send('{"success":"Gracias por visitarnos.Te haz ganado 1 punto en nuestra tienda.Regresa pronto"}');
            });
         } else
         {
            var originalDate = new Date();
            var today = new Date();
            //today = new Date(today.getTime() + (24 * 60 * 60 * 1000));
            var date = today.getDate();
            var month = today.getMonth();
            month = month + 1;
            if (month < 10)
            {
               month = '0' + month;
            }
            var year = today.getFullYear();
            today = year + "-" + month + "-" + date;
            var userPointDoc = result1.value;
            var scannedAt = userPointDoc.scannedAt;
            var splittedDate = scannedAt.split("T");
            scannedAt = splittedDate[0];
            if (today != scannedAt)
            {
               userPointDoc.scannedAt = originalDate;
               userPointDoc.updatedAt = originalDate;
               userPointDoc.points++;
               /*if (qrCodeType == "qrCodeOne")
               {
                  userPointDoc.points++;
               }
               if (qrCodeType == "qrCodeTwo")
               {
                  userPointDoc.points = userPointDoc.points + 5;
               }*/
               req.cb.set(userPointDoc.key, userPointDoc, function(err4, result4)
               {
                  if (err4)
                  {
                     res.send('{"success":false}');
                  } else
                  {
                     res.send('{"success":"Gracias por visitarnos.Te haz ganado 1 punto en nuestra tienda.Regresa pronto"}');
                  }
               });
            }
            if (today == scannedAt)
            {
               res.send('{"success":"Lo sentimos, sólo puedes recibir 1 punto por día. Regresa mañana."}');
               //res.send('{"Message":"You cannot scan more than once a day"}');
            }
         }
      });
      //});
   });
},

exports.getUserPoints = function(req, res)
{
   var data = req.body;
   var userId = data.userId;

   var q = {
      key: userId
   };

   req.cb.view("UserPoint", "ByUser", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      req.cb.getMulti(keys, null, function(err, results)
      {
         var userPoints = _.map(results, function(v, k)
         {
            return v.value;
         });

         var locations = _.pluck(userPoints, 'locationId');
         locations = _.uniq(locations, false);
         req.cb.getMulti(locations, null, function(err, results1)
         {
            var locDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            var brands = _.pluck(locDoc, 'brandId');
            brands = _.uniq(brands, false);
            req.cb.getMulti(brands, null, function(err, results1)
            {
               var brandDoc = _.map(results1, function(v, k)
               {
                  return v.value;
               });
               for (var j = 0; j < locDoc.length; j++)
               {
                  var brand = brandDoc.filter(function(obj)
                  {
                     return obj.key == locDoc[j].brandId;
                  });
                  if (brand[0])
                  {
                     userPoints[j].logo = brand[0].logo;
                     userPoints[j].name = brand[0].name;
                  }
               }
               for (var i = 0; i < userPoints.length; i++)
               {
                  var loc = locDoc.filter(function(obj)
                  {
                     return obj.key == userPoints[i].locationId;
                  });
                  if (loc[0])
                  {
                     userPoints[i].locName = loc[0].location;
                  }
               }
               res.send(userPoints);
            });
         });
      });
   });
},

exports.getUserPointsByLocation = function(req, res)
{
   var data = req.body;
   var locationId = data.locationId;

   var q = {
      key: locationId
   };

   req.cb.view("UserPoint", "ByLocation", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      req.cb.getMulti(keys, null, function(err, results)
      {
         var userPoints = _.map(results, function(v, k)
         {
            return v.value;
         });
         var users = _.pluck(userPoints, 'userId');
         users = _.uniq(users, false);
         req.cb.getMulti(users, null, function (err, results1)
         {
            var userDoc = _.map(results1, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < userPoints.length; i++)
            {
               var user = userDoc.filter(function (obj)
               {
                  return obj.key == userPoints[i].userId;
               });
               if (user[0])
               {
                  userPoints[i].userName = user[0].name;
                  userPoints[i].email = user[0].email;
               }
            }
            res.send(userPoints);
         });
      });
   });
},

exports.redeemPoints = function (req, res) {
   var data = req.body;
   data.updatedAt = new Date();
   data.redeemedAt = new Date();
   var key = data.key;

   req.cb.set(key, data, function (err, result) {
      if (err) { console.log(err); }
      res.send(data);
   });

}