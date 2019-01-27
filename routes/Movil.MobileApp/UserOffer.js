exports.likeOffer = function (req, res) {
   var data = req.body;
   var offerId = data.offerId;
   var userId = data.userId;

   //To decide whether user is liking offer or disliking. If toggled=true => like. else DisLike.
   var toggled = data.toggled;
   console.log(offerId);
   req.cb.get(offerId, function (err, result) {
      var doc = result.value;
      var likeCount = doc.likeCount;
      if (toggled == "false") {
         likeCount--;
      } else {
         likeCount++;
      }
      doc.likeCount = likeCount;
      req.cb.set(doc.key, doc, function (err, result) {
         if (err) { res.send('{"success":false}'); }

         req.cb.get(userId, doc, function (err, result) {
            var userDoc = result.value;
            if (toggled == "false") {
               var index = userDoc.offersLiked.indexOf(doc.key);
               if (index > -1) {
                  userDoc.offersLiked.splice(index, 1);
               }
            } else
            {
               console.log(userDoc);
               userDoc.offersLiked.push(doc.key);
            }

            req.cb.set(userDoc.key, userDoc, function (err, result) {
               if (err) {
                  res.send('{"success":false}');
               }
               res.send('{"success":true}');
            });
         });
      });
   });
}