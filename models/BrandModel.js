// Constructor
function BrandModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.name = '';
   this.email = '';
   this.logo = '';
   this.contactPerson = '';
   this.description = '';
   this.website = '';
   this.contactNo = '';
   this.isVerified = false;
   this.isBlocked = false;
   this.isDeleted = false;
   this.profileImage = '';
   this.userId = '';
   this.busTypeId = '';
   this.busCategories = [];
   this.fb = '';
   this.twitter = '';
   this.linkedIn = '';
   this.google = '';
   this.pinterest = '';
   this.instagram = '';
   this.youtube = '';
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
   this.modified = '';
}

// export the class
module.exports = BrandModel;