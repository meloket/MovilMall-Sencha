// Constructor
function CountryModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.name = '';
   this.isDeleted = false;
   this.isDefault = false;
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
}

// export the class
module.exports = CountryModel;