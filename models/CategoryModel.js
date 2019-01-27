// Constructor
function CategoryModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.name = '';
   this.busTypeId = '';
   this.isDeleted = false;
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
}

// export the class
module.exports = CategoryModel;