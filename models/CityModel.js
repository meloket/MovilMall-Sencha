// Constructor
function CityModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.name = '';
   this.isDeleted = false;
   this.isDefault = false;
   this.stateId = '';
   this.countryId = '';
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
}

// export the class
module.exports = CityModel;