exports.checkAdmin = function (request, response, next) {
   if (request.session && request.session.auth && request.session.userId && request.session.admin) {
      console.info('Access ADMIN: ' + request.session.userId);
      return next();
   } else {
      next('User is not an administrator.');
   }
};

exports.checkUser = function (req, res, next) {
   if (req.session && req.session.auth && req.session.userId && (req.session.user.approved || req.session.admin)) {
      console.info('Access USER: ' + req.session.userId);
      return next();
   } else {
      next('User is not logged in.');
   }
};


exports.login1 = function (req, res, next) {
   req.db.User.findOne({
      email: req.body.email,
      password: req.body.password
   },
     null, {
        safe: true
     },
     function (err, user) {
        if (err) return next(err);
        if (user) {
           req.session.auth = true;
           req.session.userId = user._id.toHexString();
           req.session.user = user;
           if (user.admin) {
              req.session.admin = true;
           }
           console.info('Login USER: ' + req.session.userId);
           res.json(200, {
              msg: 'Authorized'
           });
        } else {
           next(new Error('User is not found.'));
        }
     });
};
