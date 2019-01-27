var eventModel = require('../../models/EventModel');
var eventCommentModel = require('../../models/EventCommentModel');
var _ = require('underscore');
var WebPurify = require('webpurify');

var wp = new WebPurify({
   api_key: '83a369a4bf7cba214b7d154a229062a0'
});

exports.attendEvent = function(req, res)
{
   var data = req.body;
   var eventId = data.eventId;
   var userId = data.userId;

   //To decide whether user is attending event or not attending. If toggled=true => Attending. else not attending.
   var toggled = data.toggled;

   req.cb.get(eventId, function(err, result)
   {
      var doc = result.value;
      var attendeeCount = doc.attendeeCount;
      if (toggled == "false")
      {
         attendeeCount--;
      } else
      {
         attendeeCount++;
      }
      doc.attendeeCount = attendeeCount;
      req.cb.set(doc.key, doc, function(err, result)
      {
         if (err)
         {
            console.log(err);
         }

         req.cb.get(userId, doc, function(err, result)
         {
            var userDoc = result.value;
            if (toggled == "false")
            {
               var index = userDoc.events.indexOf(doc.key);
               if (index > -1)
               {
                  userDoc.events.splice(index, 1);
               }
            } else
            {
               userDoc.events.push(doc.key);
            }

            req.cb.set(userDoc.key, userDoc, function(err, result)
            {
               if (err)
               {
                  console.log(err);
               }
               res.send('{"success":true}');
            });
         });
      });
   });
},
exports.likeEvent = function(req, res)
{
   var data = req.body;
   var eventId = data.eventId;
   var userId = data.userId;

   //To decide whether user is liking event or disliking. If toggled=true => like. else DisLike.
   var toggled = data.toggled;

   req.cb.get(eventId, function(err, result)
   {
      var doc = result.value;
      var likeCount = doc.likeCount;
      if (toggled == "false")
      {
         likeCount--;
      } else
      {
         likeCount++;
      }
      doc.likeCount = likeCount;
      req.cb.set(doc.key, doc, function(err, result)
      {
         if (err)
         {
            console.log(err);
         }

         req.cb.get(userId, doc, function(err, result)
         {
            var userDoc = result.value;
            if (toggled == "false")
            {
               var index = userDoc.eventsLiked.indexOf(doc.key);
               if (index > -1)
               {
                  userDoc.eventsLiked.splice(index, 1);
               }
            } else
            {
               userDoc.eventsLiked.push(doc.key);
            }

            req.cb.set(userDoc.key, userDoc, function(err, result)
            {
               if (err)
               {
                  console.log(err);
               }
               res.send('{"success":true}');
            });
         });
      });
   });
},
exports.getMyEvents = function(req, res)
{
   var keys = req.body.events;

   req.cb.getMulti(keys, null, function(err, results)
   {

      // Add the id to the document before sending to template
      var events = _.map(results, function(v, k)
      {
         return v.value;
      });
      res.send(events);
   });

},
exports.postEventComment = function(req, res)
{
   var data = req.body;
   var eventId = data.eventId;
   var userId = data.userId;

   var eventComment = new eventCommentModel();

   eventComment.userId = userId;
   eventComment.eventId = eventId;
   eventComment.createdAt = new Date();
   eventComment.value = data.value;
   eventComment.userName = data.userName;
   eventComment.datetime = new Date();

   wp.check(eventComment.value, function (err, profanity)
   {
      if (profanity === true)
      {
         console.log('A bunch of sailors in here!');
         res.send('{"success":"profanity"}');
         return;
      }
      //For adding brand counter
      var options = {
         offset: 1,
         initial: 1
      };
      var count;

      req.cb.incr(eventId + '::Comments::Counter', options, function(err, result)
      {
         if (err)
         {
            throw err;
         }

         count = result.value;

         var key = eventId + "::Comment::" + count;
         eventComment.key = key;
         eventComment.type = "EventComment";


         //Create a Event Comment document
         req.cb.add(key, eventComment, function(err, result)
         {
            if (err)
            {
               throw err;
            }
            req.cb.get(eventId, function(err, result)
            {
               var doc = result.value;
               var commentCount = doc.commentCount;
               commentCount++;
               doc.commentCount = commentCount;

               req.cb.set(doc.key, doc, function(err, result)
               {
                  if (err)
                  {
                     console.log(err);
                  }

                  req.cb.get(userId, function(err, result)
                  {
                     var doc = result.value;
                     var userName = doc.name;
                     var photo = doc.photo;
                     eventComment.userName = userName;
                     eventComment.photo = photo;
                     res.send(eventComment);
                  });

               });
            });
         });
      });


      //});
   });
},
exports.deleteEventComment = function(req, res)
{
   var data = req.body;
   var key = data.key;
   var eventId = data.eventId;

   req.cb.remove(key, data, function(err, result)
   {
      if (err)
      {
         console.log(err);
         res.send('{"success":false}');
      }

      req.cb.get(eventId, function(err, result)
      {
         var doc = result.value;
         var commentCount = doc.commentCount;
         commentCount--;
         doc.commentCount = commentCount;

         req.cb.set(doc.key, doc, function(err, result)
         {
            if (err)
            {
               console.log(err);
            }
            res.send('{"success":true}');
         });
      });
   });

},
exports.getCommentsByEvent = function(req, res)
{
   var q = {
      stale: false,              // We don't want stale views here.
      key: req.body.eventId
   };

   req.cb.view("EventComment", "ByEvent", q).query(function(err, values)
   {
      // 'ByType' view's map function emits business Types as key and value as
      // null. 
      // we will fetch all the beer documents based on its id.
      var keys = _.pluck(values, 'id');

      req.cb.getMulti(keys, null, function(err, results)
      {

         // Add the id to the document before sending to template
         var comments = _.map(results, function(v, k)
         {
            //v.value.id = k;
            return v.value;
         });

         var users = _.pluck(comments, 'userId');
         req.cb.getMulti(users, null, function(err, results1)
         {
            // Add the id to the document before sending to template
            var userDoc = _.map(results1, function(v, k)
            {
               //v.value.id = k;
               return v.value;
            });
            for (var i = 0; i < comments.length; i++)
            {
               var user = userDoc.filter(function(obj)
               {
                  return obj.key == comments[i].userId;
               });
               if (user[0])
               {
                  comments[i].userName = user[0].name;
                  comments[i].photo = user[0].photo;
               }
            }
            res.send(comments);
         });
      });
   });

}