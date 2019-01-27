
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');

var path = require('path');
var Couchbase = require('couchbase');
//var flash = require('connect-flash');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


var app = express();

//require('./config/passport')(passport); // pass passport for configuration
//require('./routes/Movil.Login/Login')(app, passport); // load our routes and pass in our app and fully configured passport

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.configure(function () {
   app.use(express.static('public'));
   app.use(express.cookieParser());
   app.use(express.json({ limit: '50mb' }));
   app.use(express.urlencoded({ limit: '50mb' }));
   //app.use(express.urlencoded());
   //app.use(express.json());
   //app.use(express.bodyParser());
   app.use(express.session({
      secret: 'keyboard cat',
      cookie: { maxAge: 3600000 } //1 Hour
   }));
   //app.use(express.session({ secret: 'keyboard cat' }));
   app.use(passport.initialize());
   app.use(passport.session());
   //app.use(flash());
   app.use(app.router);
});


/*app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions*/

/*app.use(express.cookieParser('asd;lfkajs;ldfkj'));
app.use(express.session({
   secret: '<h1>WHEEYEEE</h1>',
   key: 'sid',
   cookie: {
      secret: true,
      expires: false
   }
}));*/
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Creating Couchbase connection
function cb(req, res, next) {
   req.cb = new Couchbase.Connection({
      "host": "192.168.1.100:8091",
      bucket: "MovilMall"
   }, function (err) {
      if (err)
      {
         console.log(err);
         throw (err);
      }
   });
   return next();
}

/*app.get('/flash', function (req, res) {
   // Set a flash message by passing the key, followed by the value, to req.flash().
   req.flash('message', 'Email or Password is Incorrect.');
   res.redirect('/');
});*/

passport.use(new LocalStrategy({
   usernameField: 'email',
   passwordField: 'pass',
   passReqToCallback: true
   },
  function (req, email, password, done)
  {
     this.email = email;
     email = email.toLowerCase();
     req.cb.get(email, function (err, result) {
        if (err) {
           console.log(err);
        }
        
        if (result.value == undefined)
        {
           return done(null, false, { message: 'Incorrect Password.' });
        }
        var userId = result.value.value;
        
        req.cb.get(userId, function (err, result1) {
           if (err) {
              console.log(err);
           }
           var user = result1.value;
           var canLogin = user.canLogin;
           var pass = user.pass;

           if (canLogin == false) {
              return done(null, false, { message: 'Incorrect Password.' });
           }
           if (pass != password) {
              return done(null, false, { message: 'Incorrect Password.' });
           }
           return done(null, user);
        });
     });
  }
));

passport.serializeUser(function (user, done) {
   console.log('serializeUser: ' + user.key);
   done(null, user.key);
});

passport.deserializeUser(function (id, done) {
   /*User.findById(id, function (err, user) {
      done(err, user);
   });*/
   var cb = new Couchbase.Connection({
      "host": "192.168.1.100:8091",
      bucket: "MovilMall"
   }, function (err) {
      if (err) {
         console.log(err);
         throw (err);
      }
   });
   cb.get(id, function (err, result) {
      var user = result.value;
      done(err, user);
   });
});

function isLoggedIn(req, res, next) {

   // if user is authenticated in the session, carry on
   if (req.isAuthenticated())
      return next();

   // if they aren't redirect them to the home page
   res.send('{"isNotOk":true,"redirectTo":"/","message":"You are not Authorized."}');
}



checkUser = routes.main.checkUser;


app.get('/', cb, routes.Login.main);

app.post('/Verify', cb, 
  passport.authenticate('local', {
     successRedirect: '/AfterLogin',
     failureRedirect: '/FailureRedirect'
  })
);

app.get('/logout', function (req, res) {
   req.logout();
   res.send('{"success":true}');
});

app.get('/AfterLogin', cb, routes.Login.afterLogin);
app.get('/FailureRedirect', cb, routes.Login.failureRedirect);
//app.get('/Movil.BrandAdmin/index.html', isLoggedIn, routes.Login.RedirectToBrandView);

//app.post('/Verify', cb, routes.Login.verify);
/*app.post('/Verify', cb, passport.authenticate('local-login', {
   //successRedirect: '/BrandAdmin/index.html', // redirect to the secure profile section
   //failureRedirect: '/login', // redirect back to the signup page if there is an error
}));*/
app.post('/User/CreateUser', cb, routes.User.createUser);
app.put('/User/UpdateUser', cb, routes.User.updateUser);
app.get('/User/SetCanLogin', cb, routes.User.setCanLogin);
app.get('/GetUser', cb, isLoggedIn, routes.User.getUser);
app.get('/GetBusinessTypes', cb, routes.BusinessType.getBusinessTypes);
app.post('/UpdateBusinessTypes', cb, routes.BusinessType.updateBusinessType);
app.post('/CreateCategory', cb, routes.Category.createCategory);
app.post('/UpdateCategory', cb, routes.Category.updateCategory);
app.delete('/DeleteCategory', cb, routes.Category.deleteCategory);
app.post('/GetCategoryByBusTypeId', cb, routes.Category.getCategoryByBusTypeId);
app.post('/GetCategories', cb, routes.Category.getCategories);
app.post('/User/CheckDuplicateEmail', cb, routes.User.checkDuplicateEmail);
app.post('/User/ChangePassword', cb, routes.User.changePassword);
app.post('/User/ForgotPassword', cb, routes.User.forgotPassword);
app.get('/User/getAllUsers', cb, routes.User.getAllUsers);
app.get('/GetAllCategories', cb, routes.Category.getAllCategories);
//app.get('/users', user.list);

//For Movies in SuperAdmin
app.get('/GetMovies', cb, routes.Movie.getMovies);
app.post('/CreateMovie', cb, routes.Movie.createMovie);
app.put('/UpdateMovie', cb, routes.Movie.updateMovie);
app.delete('/DeleteMovie', cb, routes.Movie.deleteMovie);
app.post('/GetMovieShowTimes', cb, routes.Movie.getMovieShowTimes);
app.post('/GetMoviesByBrand', cb, routes.Movie.getMoviesByBrand);

//For Movies in SuperAdmin
app.post('/GetLocationsByMovie', cb, routes.MovieLocation.getLocationsByMovie);
app.post('/GetShowTimesByLocation', cb, routes.MovieLocation.getShowTimesByLocation);
app.post('/CreateMovieLocation', cb, routes.MovieLocation.createMovieLocation);
app.put('/UpdateMovieLocation', cb, routes.MovieLocation.updateMovieLocation);
app.post('/GetMoviesByLocation', cb, routes.MovieLocation.getMoviesByLocation);

//For Offers in BrandAdmin
//app.post('/GetBrandLocationByBrand', cb, routes.BrandLoc.getBrandLocByBrandId);
app.post('/CreateOffer', cb, routes.Offer.createOffer);
app.post('/GetOfferByBrand', cb, routes.Offer.getOfferByBrand);
app.post('/UpdateOffer', cb, routes.Offer.updateOffer);
app.delete('/DeleteOffer', cb, routes.Offer.deleteOffer);
app.post('/UpdateOfferLocation', cb, routes.Offer.updateOfferLocation);
app.get('/GetAllOffers', cb, routes.Offer.getAllOffers);


//For BrandLocations in BrandAdmin
app.post('/GetBrandLocationByBrand', cb, routes.BrandLoc.getBrandLocByBrandId);
app.post('/CreateBrandLocation', cb, routes.BrandLoc.createBrandLoc);
app.put('/UpdateBrandLocation', cb, routes.BrandLoc.updateBrandLoc);
app.delete('/DeleteBrandLoc', cb, routes.BrandLoc.deleteBrandLoc);
app.post('/GetBrandLocByMallId', cb, routes.BrandLoc.getBrandLocByMallId);

//For SuperAdmin Analytics
app.get('/GetBrandLocations', cb, routes.BrandLoc.getBrandLocations);
app.get('/GetOffers', cb, routes.Offer.getOffers);

//For Offers in MobileApp
app.post('/GetFavLocOffers', cb, routes.OfferMobile.getOffersByLocation);
app.post('/GetOfferByName', cb, routes.OfferMobile.getOfferByName);
app.post('/GetOfferByCategory', cb, routes.OfferMobile.getOfferByCategory);
app.post('/GetMallLocations', cb, routes.BrandLoc.getBrandLocByBusType);
app.post('/GetOfferByLocation', cb, routes.OfferMobile.getOffersByLocation);
app.post('/GetOfferByBusType', cb, routes.OfferMobile.getOfferByBusType);
app.post('/GetLocationsByOffer', cb, routes.BrandLoc.getLocationsByOffer);
app.post('/GetUserLikedOffers', cb, routes.OfferMobile.getUserLikedOffers);
app.post('/PostOfferComment', cb, routes.OfferMobile.postOfferComment);
app.delete('/DeleteOfferComment', cb, routes.OfferMobile.deleteOfferComment);
app.post('/GetCommentsByOffer', cb, routes.OfferMobile.getCommentsByOffer);
app.post('/GetNewOffers', cb, routes.OfferMobile.getNewOffers);
app.post('/GetCouponCode', cb, routes.OfferMobile.getCouponCode);

//For Places in MobileApp

//For Brands
app.post('/GetCategoryByBrand', cb, routes.Brand.getCategoryByBrand);
app.post('/Brand/CreateBrand', cb, routes.Brand.createBrand);
app.put('/Brand/UpdateBrand', cb, routes.Brand.updateBrand);
app.get('/Brand/GetBrands', cb, routes.Brand.getBrands);
app.get('/Brand/GetNonAppBrands', cb, routes.Brand.getNonAppBrands);
app.post('/Brand/ApproveBrand', cb, routes.Brand.approveBrand);
app.post('/Brand/BlockBrand', cb, routes.Brand.blockBrand);
app.delete('/Brand/DeleteBrand', cb, routes.Brand.deleteBrand);
app.get('/Brand/GetBrandProfile', cb, routes.Brand.getBrandProfile);
//app.post('/Brand/DeleteBrand', cb, routes.Brand.deleteBrand);

//For Country, State, City in SuperAdmin
app.post('/Country/CreateCountry', cb, routes.Country.createCountry);
app.put('/Country/UpdateCountry', cb, routes.Country.updateCountry);
app.get('/Country/GetCountries', cb, routes.Country.getCountries);
app.delete('/Country/DeleteCountry', cb, routes.Country.deleteCountry);
app.post('/State/CreateState', cb, routes.State.createState);
app.put('/State/UpdateState', cb, routes.State.updateState);
app.get('/State/GetStates', cb, routes.State.getStates);
app.delete('/State/DeleteState', cb, routes.State.deleteState);
app.post('/City/CreateCity', cb, routes.City.createCity);
app.put('/City/UpdateCity', cb, routes.City.updateCity);
app.get('/City/GetCities', cb, routes.City.getCities);
app.delete('/City/DeleteCity', cb, routes.City.deleteCity);

//For Events
app.post('/Event/CreateEvent', cb, routes.Event.createEvent);
app.put('/Event/UpdateEvent', cb, routes.Event.updateEvent);
app.post('/Event/GetEventsByBrand', cb, routes.Event.getEventsByBrand);
app.get('/Event/GetEvents', cb, routes.Event.getEvents);
app.post('/Event/GetUsersByEvent', cb, routes.Event.getUsersByEvent);
app.delete('/Event/DeleteEvent', cb, routes.Event.deleteEvent);
app.get('/Event/GetAllEvents', cb, routes.Event.getAllEvents);

//For Locations
app.post('/UserLocation/GetUsersByLoc', cb, routes.UserLocation.getUsersByLoc);

//For Offers
app.post('/GetUsersByOffer', cb, routes.Offer.getUsersByOffer);

//Mobile App Events
app.post('/UserEvent/AttendEvent', cb, routes.UserEvent.attendEvent);
app.post('/UserEvent/LikeEvent', cb, routes.UserEvent.likeEvent);
app.post('/UserEvent/GetMyEvents', cb, routes.UserEvent.getMyEvents);
app.post('/UserEvent/PostEventComment', cb, routes.UserEvent.postEventComment);
app.delete('/UserEvent/DeleteEventComment', cb, routes.UserEvent.deleteEventComment);
app.post('/UserEvent/GetCommentsByEvent', cb, routes.UserEvent.getCommentsByEvent);

//Mobile App Locations
app.post('/UserLocation/SetFavLocation', cb, routes.UserLocation.setFavLocation);
app.post('/UserLocation/GetLocByName', cb, routes.UserLocation.getLocByName);
app.post('/UserLocation/GetFavLocations', cb, routes.UserLocation.getFavLocations);
app.post('/UserLocation/GetFavLocationsByBusType', cb, routes.UserLocation.getFavLocationsByBusType);
app.post('/UserLocation/GetLocByCategory', cb, routes.UserLocation.getLocByCategory);
app.post('/UserLocation/GetNearByLocations', cb, routes.UserLocation.getNearByLocations);

//Mobile App Offers
app.post('/UserOffer/LikeOffer', cb, routes.UserOffer.likeOffer);

//MobileApp User Points
app.post('/UserPoint/SetUserPoints', cb, routes.UserPoint.setUserPoints);
app.post('/UserPoint/GetUserPoints', cb, routes.UserPoint.getUserPoints);
app.post('/UserPoint/GetUserPointsByLocation', cb, routes.UserPoint.getUserPointsByLocation);
app.post('/UserPoint/RedeemPoints', cb, routes.UserPoint.redeemPoints);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
