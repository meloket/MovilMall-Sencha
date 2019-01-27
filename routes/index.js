
//bridge between app.js and other routes in the folder

exports.Login = require('./Movil.Login/Login');
exports.User = require('./Movil.Login/User');
exports.BusinessType = require('./Movil.Login/BusinessType');
exports.Category = require('./Movil.Login/Category');
exports.Brand = require('./Movil.SuperAdmin/Brand');
exports.BrandLoc = require('./Movil.BrandAdmin/BrandLocation');
exports.Movie = require('./Movil.SuperAdmin/Movie');
exports.MovieLocation = require('./Movil.BrandAdmin/MovieLocation');
exports.Offer = require('./Movil.BrandAdmin/Offer');
exports.OfferMobile = require('./Movil.MobileApp/Offer');
exports.main = require('./main');
exports.Event = require('./Movil.BrandAdmin/Event');
exports.UserEvent = require('./Movil.MobileApp/UserEvent');
exports.UserLocation = require('./Movil.MobileApp/UserLocation');
exports.UserOffer = require('./Movil.MobileApp/UserOffer');
exports.Country = require('./Movil.SuperAdmin/Country');
exports.State = require('./Movil.SuperAdmin/State');
exports.City = require('./Movil.SuperAdmin/City');
exports.UserPoint = require('./Movil.MobileApp/UserPoint');