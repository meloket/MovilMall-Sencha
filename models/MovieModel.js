// Constructor
function MovieModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.brandId = '';
   this.name = '';
   this.releaseDate = '';
   this.runTime = '';
   this.isDeleted = false;
   this.genre = '';
   this.rating = '';
   this.trailerLink = '';
   this.director = '';
   this.cast = '';
   this.synopsis = '';
   this.photo = '';
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
}

// export the class
module.exports = MovieModel;