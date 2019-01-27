var userModel = require('../../models/UserModel');
var nodemailer = require("nodemailer");
var _ = require('underscore');

exports.createUser = function(req, res)
{
   var postUser = req.body;
   var user = new userModel();
   user.email = postUser.email.toLowerCase();
   user.name = postUser.name.toLowerCase();
   user.pass = postUser.pass.toLowerCase();
   user.dob = postUser.dob;
   user.canLogin = false;
   user.cityId = postUser.cityId;
   user.stateId = postUser.stateId;
   user.type = "User";
   user.role = "User";

   //For adding user counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   //Check for duplicate user
   req.cb.get(user.email, function(err, result)
   {
      var doc = result.value;
      //User Not Found
      if (doc === undefined)
      {
         // Increment a page counter.
         req.cb.incr('Users::Counter', options, function(err, result)
         {
            if (err)
            {
               throw err;
            }

            count = result.value;

            var key = "User::" + count;
            user.key = key;
            user.createdAt = new Date();
            user.type = "User";
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
                  /*var smtpTransport = nodemailer.createTransport("SMTP", {
                     auth: {
                        user: "chiraghindocha1507@gmail.com",
                        pass: "chiragcharmeebunty"
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
                     //from: "chiraghindocha1507@gmail.com",
                     from: "info@movil-mall.com", // sender address
                     //to: "chiraghindocha1507@gmail.com", // list of receivers
                     to: user.email, // list of receivers
                     subject: "Movil Mall - Email Verification", // Subject line
                     html: '<div style="width:100%; height:300px; position: relative;">' +
                              '<div style="height:50px; background-color:#292d30">' +
                                 '<p style="font-family:Verdana, Geneva, sans-serif; color:#ffffff; padding-top: 14px; font-size: 18px; font-weight: normal; padding-left: 15px;" >Movil Mall</p>' +
                              '</div>' +
                                 '<div style="padding:10px;">' +
                                    '<p style="font-family:Verdana, Geneva, sans-serif; color:black"><span style="background-color:#FDF7D5"> Estimado ' + user.name + ',</span> </p>' +
                                    '<span>Por favor, haga click en el enlace de abajo para confirmar su registro.</span><br/>' +
                                    '<p><a href=http://localhost:3000/User/SetCanLogin?user=' + user.key + '>http://www.movil-mall.com/User/SetCanLogin</a></p>' +
                                    '<span>A sus ordenes siempre,</span><br/>' +
                                    '<span>El equipo de Movil-Mall</span><br/>' +
                                    '<span>www.movil-mall.com</span><br/>' +
                                 '</div>' +
                              '<p style="font-size:12px; bottom:0px; position: relative; padding:5px;">Este es un email automático. Por favor no use este correo para escribirnos. Si necesita ayuda, envíenos un email a info@movil-mall.com.</p>' +
                           '</div>'
                  };
                  // send mail with defined transport object
                  smtpTransport.sendMail(mailOptions, function (error, response) {
                     if (error) {
                        console.log(error);
                     } else {
                        console.log("Message sent: " + response.message);
                     }

                     // if you don't want to use this transport object anymore, uncomment following line
                     //smtpTransport.close(); // shut down the connection pool, no more messages
                  });
                  res.send(user);
               });
            });
         });
      } else
      {
         res.send('{msg:"Duplicate User"}');
      }
   });

},

exports.updateUser = function(req, res)
{
   var data = req.body;
   var userId = req.body.userId;
   req.cb.get(userId, function (err, result)
   {
      var userDoc = result.value;
      userDoc.name = data.name;
      userDoc.dob = data.dob;
      userDoc.cityId = data.cityId;
      userDoc.stateId = data.stateId;
      userDoc.updatedAt = new Date();
      userDoc.photo = data.photo;
   //var user = req.body;
   //user.updatedAt = new Date();
   //var key = user.key;
   //user.name = user.values.name;

      req.cb.set(userId, userDoc, function (err, result)
   {
      if (err)
      {
         console.log(err);
      }
      res.send(userDoc);
   });
   });
},

exports.getUser = function(req, res)
{
   var userId = req.user.key;
   var brandId = req.user.brandId;

   req.cb.get(userId, function(err, result)
   {
      if (err)
      {
         console.log(err);
      }
      var stateId = result.value.stateId;
      var cityId = result.value.cityId;
      if (brandId)
      {
         req.cb.get(brandId, function(err1, result1)    //For getting brand name.
         {
            if (err1)
            {
               console.log(err1);
            }
            var brandName = result1.value.name;
            result.value.brandName = brandName;
               /*req.cb.get(stateId, function (err2, result2)    
               {
                  if (err2) {
                     console.log(err2);
                  }
                  var stateName = result2.value.name;
                  result.value.stateName = stateName;
               });*/
            res.send(result.value);
         });
      } else
      {
         if (stateId && cityId)
         {
            req.cb.get(stateId, function(err2, result2)    //For getting brand name.
            {
               if (err2)
               {
                  console.log(err2);
               }
               //console.log(result2.value);
               var stateName = result2.value.name;
               result.value.stateName = stateName;
            });
            req.cb.get(cityId, function (err2, result2)    //For getting brand name.
            {
               if (err2) {
                  console.log(err2);
               }
               //console.log(result2.value);
               var cityName = result2.value.name;
               result.value.cityName = cityName;
               res.send(result.value);
            });
         } else
         {
            res.send(result.value);
         }
      }
   });

},

exports.checkDuplicateEmail = function(req, res)
{
   var data = req.body;
   var email = data.email.toLowerCase();
   if (email)
   {
      req.cb.get(email, function(err, result)
      {
         var doc = result.value;
         //User Not Found
         if (doc === undefined)
         {
            res.send('{"msg":"true"}');
         } else
         {
            res.send('{"msg":"false"}');
         }
      });
   }
},

exports.changePassword = function(req, res)
{
   var data = req.body;
   var newPass = data.newPass;
   console.log(req.user);
   var userId = req.user.key;

   req.cb.get(userId, function(err, result1)
   {
      var userDoc = result1.value;
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }
      var oldPassword1 = userDoc.pass;
      var oldPassword2 = data.oldPass;

      if (oldPassword1 != oldPassword2)
      {
         res.send('{"msg":"oldPwdIncorrect"}');
         return;
      }
      userDoc.pass = newPass;
      req.cb.set(userDoc.key, userDoc, function(err, result)
      {
         if (err)
         {
           res.send('{"success":false}');
         } else
         {
           res.send('{"msg":"pwdChanged"}');
         }
      });
   });
},

exports.forgotPassword = function(req, res)
{
   var data = req.body;
   var email = data.email.toLowerCase();

   if (email)
   {
      req.cb.get(email, function(err, result)
      {
         var doc = result.value;

         if (doc === undefined)
         {
            res.send('{"msg":"Email is Incorrect"}');
            return;
         }
         var userId = doc.value;
         console.log(doc);
         req.cb.get(userId, function(err, result1)
         {
            var userDoc = result1.value;
            if (err)
            {
               console.log(err);
               res.send('{"success":false}');
            }
            var newPass = Math.random().toString(36).substring(7);
            userDoc.pass = newPass;
            var sendMailTo = userDoc.email;
            var name = userDoc.name;
            req.cb.set(userDoc.key, userDoc, function(err, result)
            {
               if (err)
               {
                  console.log(err);
                  res.send('{"success":false}');
               } else
               {
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
                     subject: "Cambio de Contraseña", // Subject line
                     html: '<div style="width:100%; height:300px; position: relative;">' +
                           '<div style="height:50px; background-color:#292d30">' +
                              '<p style="font-family:Verdana, Geneva, sans-serif; color:#ffffff; padding-top: 14px; font-size: 18px; font-weight: normal; padding-left: 15px;" >Movil Mall</p>' +
                           '</div>' +
                              '<div style="padding:10px;">' +
                                 '<p style="font-family:Verdana, Geneva, sans-serif; color:black"><span style="background-color:#FDF7D5"> Estimado ' + name + ',</span> </p>' +
                                 '<p>Los nuevos credenciales para acceder su cuenta en Movil-Mall son:</p>' +
                                 '<p>Email - <span style="background-color:#FDF7D5">' + sendMailTo + '</span></p>' +
                                 '<p>Contraseña - <span style="background-color:#FDF7D5">' + newPass + '</span></p>' +
                                 '<span>A sus ordenes siempre,</span><br/>' +
                                 '<span>El equipo de Movil-Mall</span><br/>' +
                                 '<span>www.movil-mall.com</span>' +
                              '</div>' +
                           '<p style="font-size:12px; bottom:0px; position: relative; padding:5px;">Este es un email automático. Por favor no use este correo para escribirnos. Si necesita ayuda, envíenos un email a info@movil-mall.com.</p>' +
                        '</div>'
                     /*html: "<div>Dear " + name + ", <br/><br/><br/>" +
                        "        As requested, here are your New Movil-Mall account details :<br/><br/>" +
                        "        Email - " + sendMailTo + "<br/>" +
                        "        Password - " + newPass + "<br/><br/><br/>" +
                        "        Regards,<br/><br/>" +
                        "        This is an automated email. Please do not reply to this email.  If you need help with the service, please email us at<br/>" +
                        "        sabonges@gmail.com</div>"*/
                  };

                  // send mail with defined transport object
                  smtpTransport.sendMail(mailOptions, function (error, response) {
                     if (error) {
                        console.log(error);
                     } else {
                        console.log("Message sent: " + response.message);
                     }
                     res.send('{"msg":"Success"}');
                  });
               }
            });
         });
      });
   }
},

exports.setCanLogin = function (req, res)
{
   var data = req.query;
   var userId = data.user;
   req.cb.get(userId, function (err, result)
   {
      var userDoc = result.value;
      userDoc.name = data.name;
      userDoc.dob = data.dob;
      userDoc.cityId = data.cityId;
      userDoc.stateId = data.stateId;
      userDoc.updatedAt = new Date();
      userDoc.photo = data.photo;
      userDoc.canLogin = true;
      //var user = req.body;
      //user.updatedAt = new Date();
      //var key = user.key;
      //user.name = user.values.name;

      req.cb.set(userId, userDoc, function (err, result)
      {
         if (err)
            
         {
            console.log(err);
         }
         res.redirect('Email/newsletter.html');
      });
   });
},

exports.getAllUsers = function (req, res) {
   req.cb.view("User", "ByRole").query(function (err, values)
   {  
      var keys = _.pluck(values, 'id');
      req.cb.getMulti(keys, null, function (err, results) {
         var users = _.map(results, function (v, k) {
            return v.value;
         });
         res.send(users);
      });
   });

}