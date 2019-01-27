var CategoryModel = require('../../models/CategoryModel');
var _ = require('underscore');


exports.getCategoryByBusTypeId = function (req, res) {
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.busTypeId
   };

   req.cb.view("Category", "ByBusType", q).query(function (err, values) {
      // 'ByType' view's map function emits business Types as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var cat = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(cat);
      });
   });

},

exports.getCategories = function (req, res)
{
   var keys = req.body.categories;
   console.log(req);
      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var cat = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(cat);
      });
},

exports.createCategory = function (req, res) {
   var data = req.body;
   var cat = new CategoryModel();
   cat.createdAt = new Date();
   var busTypeId = data.busTypeId;
   cat.busTypeId = busTypeId;
   cat.name = data.name;
   cat.type = "Category";
   //cat.key = busTypeId + "::Category::";

   //For adding user counter
   var options = {
      offset: 1,
      initial: 1
   };
   var count;

   // Increment a page counter.
   req.cb.incr(busTypeId + '::Categories::Counter', options, function (err, result) {
      if (err) { console.log(err); }

      count = result.value;

      var key = busTypeId + "::Category::" + count;
      cat.key = key;
      
      //Create a category document
      req.cb.add(key, cat, function (err, result) {
         if (err) { console.log(err); }

         res.send(cat);
      });
   });

},

exports.updateCategory = function (req, res) {
   var cat = req.body;
   cat.updatedAt = new Date();
   var key = cat.key;

   req.cb.set(key, cat, function (err, result) {
      if (err) { console.log(err); }
      res.send(cat);
   });

},

exports.deleteCategory = function (req, res) {
   var data = req.body;
   data.deletedAt = new Date();
   data.isDeleted = true;
   var key = data.key;

   req.cb.set(key, data, function (err, result) {
      if (err) { console.log(err); }
      res.send(data);
   });

},

exports.getAllCategories = function(req, res)
{
   var q = {
      stale: false
   };

   req.cb.view("Category", "ByType", q).query(function(err, values)
   {
      var keys = _.pluck(values, 'id');
      
      req.cb.getMulti(keys, null, function (err, results) {

         // Add the id to the document before sending to template
         var cat = _.map(results, function (v, k) {
            //v.value.id = k;
            return v.value;
         });

         res.send(cat);
      });
   });
}