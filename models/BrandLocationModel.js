// Constructor
function BrandLocationModel() {
   // always initialize all instance properties
   this.type = '';
   this.location = '';
   this.insideMall = false;
   this.address = '';
   this.cityId = '';
   this.stateId = '';
   this.postalCode = '';
   this.workingHoursFrom = '';
   this.workingHoursTo = '';
   this.locationWithinMall = '';
   this.isDeleted = false;
   this.mapLoc = [];
   this.brandId = '';
   this.favCount = '';
   this.categories = [];
   this.busTypeId = '';
   this.mallId = '';
   this.qrCodeOne = '';
   this.qrCodeTwo = '';
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
}

// export the class
module.exports = BrandLocationModel;