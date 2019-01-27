/*
 * GET home page.
 */
var userModel = require('../../models/UserModel');
var passport = require('passport');
//module.exports = function(app, passport)
//{
   exports.main = function(req, res)
   {
      res.redirect("./Movil.Login/Login.html");
   };

   exports.verify = function(req, res)
   {
      var data = req.body;
      var email = data.email;
      var pass = data.pass;

      //getting user-email lookup document
      req.cb.get(email, function(err, result)
      {
         var doc = result.value;
         if (doc === undefined)
         {
            res.send('{"isOk":false, "message": "Yet Not Registered User"}');
         } else
         {
            //setting user key
            var key = doc.value;
            //getting user document for matching password
            req.cb.get(key, function(err, result)
            {
               var doc = result.value;
               if (doc.pass == pass)
               {
                  /*req.session.auth = true;
                  req.session.userId = doc.key.toHexString();
                  req.session.user = doc;
                  if (user.admin) {
                     req.session.admin = true;
                  }
                  console.info('Login USER: ' + req.session.userId);*/


                  if (doc.role == "BrandAdmin")
                  {
                     res.send('{"isOk":true,"redirectTo":"../Movil.BrandAdmin/index.html"}');
                  } else if (doc.role == "SuperAdmin")
                  {
                     res.send('{"isOk":true,"redirectTo":"../Movil.SuperAdmin/index.html"}');
                  } else
                  {
                     res.send('{"isOk":true,"redirectTo":"../Movil.BrandAdmin/index.html"}');
                  }

               } else
               {
                  res.send('{"isOk":false, "message": "Wrong Password"}');
               }
            });
         }
      });
   },
   
   exports.afterLogin = function(req, res)
   {
      var user = req.user; // get the user out of session and pass to template
      
      if (user.role == "BrandAdmin") {
         res.send('{"isOk":true,"redirectTo":"../Movil.BrandAdmin/index.html"}');
      } else if (user.role == "SuperAdmin") {
         res.send('{"isOk":true,"redirectTo":"../Movil.SuperAdmin/index.html"}');
      } else {
         res.send('{"isOk":true,"redirectTo":"../Movil.MobileApp/index.html"}');
      }
      /*passport.deserializeUser(function (key, done) {
         User.findById(key, function (err, user) {
            done(err, user);
         });
      });*/
   };

   exports.RedirectToBrandView = function(req, res)
   {
      console.log('as');
      //res.redirect("../Movil.BrandAdmin/index.html");
   },
   
   exports.failureRedirect = function (req, res) {
      res.send('{"isNotOk":true,"redirectTo":"/","message":"Email or Password is Incorrect."}');
   };
