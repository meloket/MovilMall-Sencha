// Constructor
function EventModel() {
   // always initialize all instance properties
   this.type = '';
   this.key = '';
   this.name = '';
   this.date = '';
   this.time = '';
   this.location = '';
   this.details = '';
   this.brandId = '';
   this.photo = '';
   this.fb = '';
   this.twitter = '';
   this.linkedIn = '';
   this.google = '';
   this.pinterest = '';
   this.instagram = '';
   this.youtube = '';
   this.isDeleted = false;
   this.isBlocked = false;
   this.attendeeCount = 0;
   this.likeCount = 0;
   this.commentCount = 0;
   this.createdAt = '';
   this.updatedAt = '';
   this.deletedAt = '';
   this.fromEventsTime = '';
   this.toEventsTime = '';
}

// export the class
module.exports = EventModel;