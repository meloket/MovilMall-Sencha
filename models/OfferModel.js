// Constructor
function OfferModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.tagLine = '';
   this.isActive = false;
   this.isBlocked = false;
   this.isDeleted = false;
   this.img = '';
   this.code = '';
   this.validFrom = '';
   this.validTo = '';
   this.finePrint = '';
   this.hashTags = [];
   this.tags = '';
   this.categories = [];
   this.locations = [];
   this.brandId = '';
   this.likeCount = 0;
   this.clickCount = 0;
   this.busTypeId = '';
   this.commentCount = 0;
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
   this.listImg = '';
                      }

// export the class
module.exports = OfferModel;