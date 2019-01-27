// Constructor
function MovieLocationModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.movieId = '';
   this.locationId = '';
   this.brandId = '';
   this.isShowing = true;
   this.date = '';
   this.showTimes = '';  //array object
   this.createdAt = '';
   this.updatedAt = '';
                              }

// export the class
module.exports = MovieLocationModel;