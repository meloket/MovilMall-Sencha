var sharp = require('sharp');
var fs = require('fs');

var Couchbase = require('couchbase');

var cb = new Couchbase.Connection({
   "host": "localhost:8091",
   bucket: "image"
}, function (err) {
   if (err) {
      throw (err)
   }
});

exports.renderImagePage = function (req, res) {

   res.write('<script>' +
       'window.onload=function(){' +
       'var ppi = window.devicePixelRatio;' +
       'var url = "http://107.170.167.248:3001/image/600x300/" + ppi + "/key::1";' +
       'console.log(url);' +
       'console.log(document.getElementById("imageDiv"));' +
       '};' +
       '</script>' +
       '<div id="imageDiv" style="background-image: url(http://107.170.167.248:3001/image/600x300/1.5/Dish::1); background-size: cover; height: 300px; width: 600px; border: 1px solid black;"> </div>');
};


exports.getImage = function (req, res) {

   var params = req.params;
   //console.log(params.res);
   var resoultion = params.res;
   var ppi = params.ppi;
   var key = params.key;
   //console.log(key);
   //var key = "key::1::600x300";
   key = key + "::" + resoultion + "::" + ppi.replace(".", "_");
   //console.log(key);
   var path = "public/images/" + key + ".jpg";
   cb.get(key, {}, function (err, result) {
      if (err) {
         res.send('no data');
         return;
      }
      //console.log(result.value);

      var retVal = base64_decode(result.value.imgData, path);
      if (retVal) {
         console.log('b');
         res.sendfile(path, function () {
            // delete the temporary file, so that the explicitly set temporary image dir does not get filled with unwanted files
            fs.unlink(path);
         });
      } else {
         res.write('no data');
      }
   });

   // function to create file from base64 encoded string
   function base64_decode(base64str, file) {
      // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
      var bitmap = new Buffer(base64str, 'base64');
      // write buffer to file
      fs.writeFileSync(file, bitmap);
      console.log('a');
      return true;
   }
};

exports.uploadImg = function (req, res) {
   var imageData = req.body.imageData;
   //var tmp_path;
   var parentId;
   var resArray;
   if (req.body.crop) {
      parentId = req.body.key;
      var rand = Math.floor((Math.random() * 1000) + 1);
      var tmp_path = "uploads/" + rand + parentId + ".jpg";

      var base64Data = imageData.replace(/^data:image\/jpeg;base64,/, "");
      //console.log(base64Data);
      //var retVal = fs.writeFileSync(tmp_path, base64Data, 'base64');
      //console.log(retVal);
      var bitmap = new Buffer(base64Data, 'base64');
      var retVal = sharp(bitmap).toFile(tmp_path, test);
      //console.log(retVal);

      /*function base64_decode(base64str, file) {
          // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
          //var bitmap = new Buffer(base64str, 'base64');
          // write buffer to file
          fs.writeFileSync(file, base64str, 'base64');
          return file;
      }*/
      //tmp_path = path;
      function test() {
         resArray = JSON.parse(req.body.resArray);

         if (!parentId) {
            var errMsg = {
               success: false,
               msg: 'Key Not Found'
            };
            res.send(errMsg);
         }

         if (resArray.length == 0) {
            var errMsg = {
               success: false,
               msg: 'Image should have atleast one resolution'
            };
            res.send(errMsg);
         }

         console.log(resArray.length);
         //Execute loop on resolution array and create images as per give resolution
         for (var i = 0; i < resArray.length; i++) {

            //set first resolution config 
            var imgRes = resArray[i];

            //crate key to save in couchbase
            var id = parentId + "::" + imgRes.resolution.width.toString() + "x" + imgRes.resolution.height.toString() + "::1";

            //create images with same resolution and save it to couchbase
            createImage(imgRes, tmp_path, id);

            //create images with 1.5 times bigger resolution and save it to couchbase
            var res1_5 = {
               resolution: {
                  height: imgRes.resolution.height * 1.5,
                  width: imgRes.resolution.width * 1.5
               },
               aspectRatio: imgRes.aspectRatio
            };
            var parentId1_5 = parentId + "::" + imgRes.resolution.width.toString() + "x" + imgRes.resolution.height.toString() + "::1_5";
            createImage(res1_5, tmp_path, parentId1_5);

            //create images with 2 times bigger resolution and save it to couchbase
            var res2 = {
               resolution: {
                  height: imgRes.resolution.height * 2,
                  width: imgRes.resolution.width * 2
               },
               aspectRatio: imgRes.aspectRatio
            };
            var parentId2 = parentId + "::" + imgRes.resolution.width.toString() + "x" + imgRes.resolution.height.toString() + "::2";
            createImage(res2, tmp_path, parentId2);
         };

         //Genearate images as per given image resolution using sharp lib
         function createImage(res, img, parentId) {
            if (res.aspectRatio) {
               console.log(img);
               sharp(img).resize(res.resolution.width, res.resolution.height).max().toBuffer(function (err, outputBuffer) {
                  if (err) {
                     throw err;
                  }
                  addImageToDb1(outputBuffer, parentId);

               });
            }
         }

         var retCount = 0;
         var resArrayLen = resArray.length;

         //Save images to db
         function addImageToDb1(outputBuffer, id) {
            var img = {
               key: id,
               imgData: outputBuffer
            };
            //console.log(id);
            cb.set(id, img, function (err, result) {
               console.log(id);
               if (err) {
                  console.log(err);
               }

               retCount++;
               if (retCount == resArrayLen) {
                  fs.unlink(tmp_path);
                  res.send(true);
               }
            });
         }
      }
   }
      // get the temporary location of the file
      //var tmp_path = req.files['photo-path'].path;
      // set where the file should actually exists - in this case it is in the "images" directory
      //var target_path = './public/images/' + req.files['photo-path'].name;

   else {
      console.log('sdfghhh');
      tmp_path = req.files['photo-path'].path;
      var target_path = './public/images/' + req.files['photo-path'].name;
      var params = req.body;
      resArray = JSON.parse(params.resArray);
      parentId = params.key;

      if (!parentId) {
         var errMsg = {
            success: false,
            msg: 'Key Not Found'
         };
         res.send(errMsg);
      }

      if (resArray.length == 0) {
         var errMsg = {
            success: false,
            msg: 'Image should have atleast one resolution'
         };
         res.send(errMsg);
      }

      //Execute loop on resolution array and create images as per give resolution
      for (var i = 0; i < resArray.length; i++) {

         //set first resolution config 
         var imgRes = resArray[i];

         //crate key to save in couchbase
         var id = parentId + "::" + imgRes.resolution.width.toString() + "x" + imgRes.resolution.height.toString() + "::1";

         //create images with same resolution and save it to couchbase
         createImage(imgRes, tmp_path, id);

         //create images with 1.5 times bigger resolution and save it to couchbase
         var res1_5 = {
            resolution: {
               height: imgRes.resolution.height * 1.5,
               width: imgRes.resolution.width * 1.5
            },
            aspectRatio: imgRes.aspectRatio
         };
         var parentId1_5 = parentId + "::" + imgRes.resolution.width.toString() + "x" + imgRes.resolution.height.toString() + "::1_5";
         createImage(res1_5, tmp_path, parentId1_5);

         //create images with 2 times bigger resolution and save it to couchbase
         var res2 = {
            resolution: {
               height: imgRes.resolution.height * 2,
               width: imgRes.resolution.width * 2
            },
            aspectRatio: imgRes.aspectRatio
         };
         var parentId2 = parentId + "::" + imgRes.resolution.width.toString() + "x" + imgRes.resolution.height.toString() + "::2";
         createImage(res2, tmp_path, parentId2);
      };

      //Genearate images as per given image resolution using sharp lib
      function createImage(res, img, parentId) {
         if (res.aspectRatio) {
            sharp(img).resize(res.resolution.width, res.resolution.height).max().toBuffer(function (err, outputBuffer) {
               if (err) {
                  throw err;
               }
               addImageToDb(outputBuffer, parentId);
            });
         } else {
            sharp(img).resize(res.resolution.width, res.resolution.height).toBuffer(function (err, outputBuffer) {
               if (err) {
                  throw err;
               }
               addImageToDb(outputBuffer, parentId);
            });
         }
      }

      var retCount = 0;
      var resArrayLen = resArray.length;

      //Save images to db
      function addImageToDb(outputBuffer, id) {
         var img = {
            key: id,
            imgData: outputBuffer
         };
         console.log(id);
         cb.set(id, img, function (err, result) {
            if (err) {
               console.log(err);
            }

            retCount++;
            if (retCount == (resArrayLen * 3)) {
               console.log('done1');
               res.send(true);
            }
         });
      }

   }


}


/*var base64str = base64_encode(tmp_path);
	console.log(base64str);
	base64_decode(base64str, 'copy.jpg');

    // function to encode file data to base64 encoded string
	function base64_encode(file) {
	    // read binary data
	    var bitmap = fs.readFileSync(file);
	    // convert binary data to base64 encoded string
	    return new Buffer(bitmap).toString('base64');
	}*/



// move the file from the temporary location to the intended location
/*fs.rename(tmp_path, target_path, function(err) {
    if (err) throw err;
    // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
    fs.unlink(tmp_path, function() {
        if (err) throw err;
        res.send('File uploaded to: ' + target_path + ' - ' + req.files['photo-path'].size + ' bytes');
    });
});*/