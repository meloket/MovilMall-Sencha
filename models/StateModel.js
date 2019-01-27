// Constructor
function StateModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.name = '';
   this.isDeleted = false;
   this.isDefault = false;
   this.countryId = '';
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
}

// export the class
module.exports = StateModel;