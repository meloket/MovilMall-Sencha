var brandModel = require('../../models/BrandModel');
var userModel = require('../../models/UserModel');
var nodemailer = require("nodemailer");
var _ = require('underscore');

exports.getCategoryByBrand = function(req, res)
{
   var keys = req.body.categories;

   req.cb.getMulti(keys, null, function(err, results)
   {

      // Add the id to the document before sending to template
      var categories = _.map(results, function(v, k)
      {
         //v.value.id = k;
         return v.value;
      });

      res.send(categories);
   });
},
exports.getBrands = function(req, res)
{
   var q = {
      stale: false
   };

   req.cb.view("Brand", "ByType", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {
         var brands = _.map(results, function(v, k)
         {
            return v.value;
         });
         //FOR THE PROBLEM OF GETMULTI, IT WONT SHOW BRANDS OF NULL VALUES
         brands = brands.filter(function(n)
         {
            return n != undefined;
         });
         res.send(brands);
      });
   });
},
exports.getBrandProfile = function(req, res)
{
   var brandId = req.user.brandId;
   req.cb.get(brandId, function(err, result)
   {
      var doc = result.value;
      console.log(doc.website);
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }
      res.send(doc);
   });

},
exports.createBrand = function(req, res)
{
   var postBrand = req.body;
   var brand = new brandModel();
   var user = new userModel();
   brand.name = postBrand.name;
   brand.type = "Brand";
   brand.email = postBrand.email.toLowerCase();
   brand.isVerified = false;
   brand.contactPerson = postBrand.contactPerson;
   brand.contactNo = postBrand.contactNo;
   brand.website = postBrand.website;
   brand.createdAt = new Date();

   if (!brand.email || !brand.name)
   {
      res.send('{"success":"false","message":"Fields marked with * cannot be empty."}');
      return;
   }
   //For adding brand counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   //Check for duplicate user
   req.cb.get(postBrand.email.toLowerCase(), function(err, result)
   {
      var doc = result.value;
      console.log(doc);
      //User Not Found
      if (doc === undefined)
      {
         // Increment a page counter.
         req.cb.incr('Brands::Counter', options, function(err, result)
         {
            if (err)
            {
               throw err;
            }

            count = result.value;

            var key = "Brand::" + count;
            brand.key = key;
            brand.createdAt = new Date();
            brand.type = "Brand";

            req.cb.incr('Users::Counter', options, function(err, result)
            {
               if (err)
               {
                  throw err;
               }

               var ucount = result.value;
               brand.userId = "User::" + ucount;
               //Create a brand document
               req.cb.add(key, brand, function(err, result)
               {
                  if (err)
                  {
                     throw err;
                  }

                  //Create a user document
                  /*req.cb.incr('Users::Counter', options, function(err, result)
               {
                  if (err)
                  {
                     throw err;
                  }

                  count = result.value;*/

                  key = "User::" + ucount;
                  user.key = key;
                  user.createdAt = new Date();
                  user.type = "User";
                  user.email = postBrand.email.toLowerCase();
                  user.pass = postBrand.pass;
                  user.role = "BrandAdmin";
                  user.canLogin = true;
                  user.brandId = brand.key;
                  user.name = postBrand.contactPerson;

                  var sendMailTo = user.email;
                  var password = user.pass;
                  var brandName = brand.name;
                  if (!user.pass)
                  {
                     res.send('{"success":"false","message":"Fields marked with * cannot be empty."}');
                     return;
                  }
                  //Create a user document
                  req.cb.add(key, user, function(err, result)
                  {
                     if (err)
                     {
                        throw err;
                     }


                     var userlookup = {
                        value: key
                     };
                     //Create a user-email document
                     req.cb.add(user.email, userlookup, function(err, result)
                     {
                        if (err)
                        {
                           throw err;
                        }
                        var smtpTransport = nodemailer.createTransport("SMTP", {
                           host: "box580.bluehost.com", // hostname
                           secureConnection: true, // use SSL
                           port: 465, // port for secure SMTP
                           auth: {
                              user: "info@movil-mall.com",
                              pass: "Alex1508@"
                              //pass: "@Panama.com150811"
                           }
                        });

                        // setup e-mail data with unicode symbols
                        var mailOptions = {
                           from: "info@movil-mall.com", // sender address
                           to: "chiraghindocha1507@gmail.com", // list of receivers
                           //to: "info@movil-mall.com", // list of receivers
                           subject: "Movil Mall - " + brandName + " ha sido registrada exitosamente.", // Subject line
                           html: '<div style="width:100%; height:300px; position: relative;">' +
                              '<div style="height:50px; background-color:#292d30">' +
                              '<p style="font-family:Verdana, Geneva, sans-serif; color:#ffffff; padding-top: 14px; font-size: 18px; font-weight: normal; padding-left: 15px;" >Movil Mall</p>' +
                              '</div>' +
                              '<div style="padding:10px;">' +
                              '<p style="font-family:Verdana, Geneva, sans-serif; color:black"><span style="background-color:#FDF7D5">' + brandName + '</span> ha sido registrada exitosamente.</p>' +
                              '<p>Puede acceder a su perfil en <a href="http://www.movil-mall.com/">http://www.movil-mall.com/</a> con la siguiente información :</p>' +
                              '<p>Usuario - <span style="background-color:#FDF7D5">' + sendMailTo + '</span></p>' +
                              '<p>Contraseña - <span style="background-color:#FDF7D5">' + password + '</span></p>' +
                              '</div>' +
                              '<p style="font-size:12px; bottom:0px; position: relative; padding:5px;">Este es un email automático. Por favor no use este correo para escribirnos. Si necesita ayuda, envíenos un email a info@movil-mall.com.</p>' +
                              '</div>'
                        };

                        // send mail with defined transport object
                        smtpTransport.sendMail(mailOptions, function(error, response)
                        {
                           if (error)
                           {
                              console.log(error);
                           } else
                           {
                              console.log("Message sent: " + response.message);
                           }

                           // if you don't want to use this transport object anymore, uncomment following line
                           //smtpTransport.close(); // shut down the connection pool, no more messages
                        });
                        res.send('{"success":true}');
                     });
                  });
               });
            });
         });
      } else
      {
         res.send('{"success":"false"}');
      }
   });

},
exports.approveBrand = function(req, res)
{
   var postBrand = req.body;

   req.cb.get(postBrand.brandId, function(err, result)
   {
      var doc = result.value;
      doc.isVerified = true;
      var brandName = doc.name;

      req.cb.set(doc.key, doc, function(err, result)
      {
         if (err)
         {
            console.log(err);
            res.send('{"success":false}');
         }

         req.cb.get(postBrand.userId, doc, function(err, result)
         {
            var userDoc = result.value;
            userDoc.canLogin = true;
            var sendMailTo = userDoc.email;
            var password = userDoc.pass;

            req.cb.set(userDoc.key, userDoc, function(err, result)
            {
               if (err)
               {
                  console.log(err);
                  res.send('{"success":false}');
               }

               // create reusable transport method (opens pool of SMTP connections)
               /*var smtpTransport = nodemailer.createTransport("SMTP", {
                  service: "Gmail",
                  auth: {
                     user: "team.avesta@gmail.com",
                     pass: "Avestatech1"
                  }
               });*/

               var smtpTransport = nodemailer.createTransport("SMTP", {
                  host: "box580.bluehost.com", // hostname
                  secureConnection: true, // use SSL
                  port: 465, // port for secure SMTP
                  auth: {
                     user: "info@movil-mall.com",
                     pass: "@Panama.com150811"
                  }
               });

               // setup e-mail data with unicode symbols
               var mailOptions = {
                  from: "info@movil-mall.com", // sender address
                  to: sendMailTo, // list of receivers
                  subject: "Movil Mall - " + brandName + " ha sido registrada exitosamente.", // Subject line
                  html: '<div style="width:100%; height:300px; position: relative;">' +
                     '<div style="height:50px; background-color:#292d30">' +
                     '<p style="font-family:Verdana, Geneva, sans-serif; color:#ffffff; padding-top: 14px; font-size: 18px; font-weight: normal; padding-left: 15px;" >Movil Mall</p>' +
                     '</div>' +
                     '<div style="padding:10px;">' +
                     '<p style="font-family:Verdana, Geneva, sans-serif; color:black"><span style="background-color:#FDF7D5">' + brandName + '</span> ha sido registrada exitosamente.</p>' +
                     '<p>Puede acceder a su perfil en <a href="http://www.movil-mall.com/">http://www.movil-mall.com/</a> con la siguiente información :</p>' +
                     '<p>Usuario - <span style="background-color:#FDF7D5">' + sendMailTo + '</span></p>' +
                     '<p>Contraseña - <span style="background-color:#FDF7D5">' + password + '</span></p>' +
                     '</div>' +
                     '<p style="font-size:12px; bottom:0px; position: relative; padding:5px;">Este es un email automático. Por favor no use este correo para escribirnos. Si necesita ayuda, envíenos un email a info@movil-mall.com.</p>' +
                     '</div>'
               };

               // send mail with defined transport object
               smtpTransport.sendMail(mailOptions, function(error, response)
               {
                  if (error)
                  {
                     console.log(error);
                  } else
                  {
                     console.log("Message sent: " + response.message);
                  }

                  // if you don't want to use this transport object anymore, uncomment following line
                  //smtpTransport.close(); // shut down the connection pool, no more messages
               });
               res.send('{"success":true}');
            });
         });
      });
   });

},
exports.blockBrand = function(req, res)
{
   var postBrand = req.body;

   //To decide whether admin is blocking brand or unblocking. If toggled=true => blocking. else Unblocking.
   var toggled = postBrand.toggled;
   //toggled = parseInt(toggled);

   req.cb.get(postBrand.brandId, function(err, result)
   {
      var doc = result.value;
      if (toggled == "false")
      {
         doc.isBlocked = false;

         //To set isBlocked for all offers of the brand that is blocked.
         var q = {
            stale: false,
            key: postBrand.brandId
         };

         req.cb.view("Offer", "ByBrand", q).query(function(err, values)
         {
            var keys = _.pluck(values, 'id');
            req.cb.getMulti(keys, null, function(err, results)
            {
               var offers = _.map(results, function(v, k)
               {
                  return v.value;
               });
               var docs = {};
               for (var l = 0; l < offers.length; l++)
               {
                  offers[l].isBlocked = false;
                  docs[offers[l].key] = { value: offers[l] };
               }
               req.cb.setMulti(docs, {}, function(err, result)
               {
                  if (err)
                  {
                     console.log(err);
                  }
               });
            });
         });

         //To set isBlocked for all events of the brand that is blocked.
         var q = {
            stale: false,
            key: postBrand.brandId
         };

         req.cb.view("Event", "ByBrand", q).query(function(err, values)
         {
            var keys = _.pluck(values, 'id');
            req.cb.getMulti(keys, null, function(err, results)
            {
               var events = _.map(results, function(v, k)
               {
                  return v.value;
               });
               var docs = {};
               for (var l = 0; l < events.length; l++)
               {
                  events[l].isBlocked = false;
                  docs[events[l].key] = { value: events[l] };
               }
               req.cb.setMulti(docs, {}, function(err, result)
               {
                  if (err)
                  {
                     console.log(err);
                  }
               });
            });
         });
      } else
      {
         doc.isBlocked = true;
         var q = {
            stale: false,
            key: postBrand.brandId
         };

         req.cb.view("Offer", "ByBrand", q).query(function(err, values)
         {
            var keys = _.pluck(values, 'id');
            req.cb.getMulti(keys, null, function(err, results)
            {
               var offers = _.map(results, function(v, k)
               {
                  return v.value;
               });
               var docs = {};
               for (var l = 0; l < offers.length; l++)
               {
                  offers[l].isBlocked = true;
                  docs[offers[l].key] = { value: offers[l] };
               }
               req.cb.setMulti(docs, {}, function(err, result)
               {
                  if (err)
                  {
                     console.log(err);
                  }
               });
            });
         });

         //To set isBlocked for all events of the brand that is blocked.
         var q = {
            stale: false,
            key: postBrand.brandId
         };

         req.cb.view("Event", "ByBrand", q).query(function(err, values)
         {
            var keys = _.pluck(values, 'id');
            req.cb.getMulti(keys, null, function(err, results)
            {
               var events = _.map(results, function(v, k)
               {
                  return v.value;
               });
               var docs = {};
               for (var l = 0; l < events.length; l++)
               {
                  events[l].isBlocked = true;
                  docs[events[l].key] = { value: events[l] };
               }
               req.cb.setMulti(docs, {}, function(err, result)
               {
                  if (err)
                  {
                     console.log(err);
                  }
               });
            });
         });
      }

      req.cb.set(doc.key, doc, function(err, result)
      {
         if (err)
         {
            console.log(err);
            res.send('{"success":false}');
         }

         req.cb.get(postBrand.userId, doc, function(err, result)
         {
            var userDoc = result.value;
            if (toggled == "false")
            {
               userDoc.canLogin = true;
            } else
            {
               userDoc.canLogin = false;
            }

            req.cb.set(userDoc.key, userDoc, function(err, result)
            {
               if (err)
               {
                  console.log(err);
                  res.send('{"success":false}');
               }
               res.send('{"success":true}');
            });
         });
      });
   });

},
exports.deleteBrand = function(req, res)
{
   var data = req.body;
   data.deletedAt = new Date();
   data.isDeleted = true;
   var userId = data.userId;
   var key = data.key;

   req.cb.set(key, data, function(err, result)
   {
      if (err)
      {
         console.log(err);
      }

      if (userId)
      {
         req.cb.get(userId, function(err1, result1)
         {
            var userDoc = result1.value;
            userDoc.canLogin = false;

            req.cb.set(userId, userDoc, function(err2, result2)
            {
               if (err2)
               {
                  console.log(err2);
               }
            });
         });
      }
      res.send(data);
   });

},
exports.updateBrand = function(req, res)
{
   var postBrand = req.body;
   var userId = postBrand.userId;
   var modified = postBrand.modified;
   var brandId = postBrand.key;

   if (modified == 'true')
   {
      var categories = postBrand.busCategories;

      var q = {
         stale: false,
         key: brandId
      };

      req.cb.view("BrandLocation", "ByBrand", q).query(function(err, values)
      {
         var keys = _.pluck(values, 'id');

         req.cb.getMulti(keys, null, function(err, results)
         {
            var locations = _.map(results, function(v, k)
            {
               return v.value;
            });
            for (var i = 0; i < locations.length; i++)
            {
               locations[i].categories = categories;
               req.cb.set(locations[i].key, locations[i], function(err1, results1)
               {
                  if (err1)
                  {
                     throw err1;
                  }
               });
            }
         });
      });
   }
   req.cb.get(userId, function(err, result)
   {
      var doc = result.value;
      doc.name = postBrand.contactPerson;

      req.cb.set(doc.key, doc, function(err, result)
      {
         if (err)
         {
            console.log(err);
            res.send('{"success":false}');
         }

         req.cb.get(postBrand.key, doc, function(err, result)
         {
            postBrand.updatedAt = new Date();
            var key = postBrand.key;

            req.cb.set(key, postBrand, function(err, result)
            {
               if (err)
               {
                  console.log(err);
                  res.send('{"success":false}');
               }
               res.send('{"success":true}');
            });
         });
      });
   });

},
exports.getNonAppBrands = function(req, res)
{
   var q = {
      stale: false
   };

   req.cb.view("Brand", "ByStatus", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {
         var brands = _.map(results, function(v, k)
         {
            return v.value;
         });
         //FOR THE PROBLEM OF GETMULTI, IT WONT SHOW BRANDS OF NULL VALUES
         brands = brands.filter(function(n)
         {
            return n != undefined;
         });
         res.send(brands);
      });
   });
}