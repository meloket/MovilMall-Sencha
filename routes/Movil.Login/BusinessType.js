var busTypeModel = require('../../models/BusinessTypeModel');
var _ = require('underscore');

exports.getBusinessTypes = function (req, res) {
   var q = {
      stale: false               // We don't want stale views here.
   };

   req.cb.view("BusinessType", "ByType", q).query(function (err, values) {
      // 'ByType' view's map function emits business Types as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results)
      {

         // Add the id to the document before sending to template
         var busTypes = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });

         res.send(busTypes);
      });
   });

},


exports.updateBusinessType = function (req, res) {
   var busType = req.body;
   busType.updatedAt = new Date();
   var key = busType.key;

   req.cb.set(key, busType, function (err, result) {
      if (err) { console.log(err); }
      res.send(busType);
   });

}