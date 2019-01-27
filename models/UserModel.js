// Constructor
function UserModel()
{
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.email = '';
   this.name = '';
   this.pass = '';
   this.role = '';
   this.canLogin = true;
   this.dob = '';
   this.cityId = '';
   this.stateId = '';
   this.photo = '';
   this.offersLiked = [];
   this.eventsLiked = [];
   this.favLoc = [];
   this.brandId = '';
   this.events = [];
   this.createdAt = '';
   this.updatedAt = '';
}

// export the class
module.exports = UserModel;