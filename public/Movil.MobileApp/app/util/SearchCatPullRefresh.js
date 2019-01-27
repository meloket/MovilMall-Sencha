Ext.define('MobileApp.util.SearchCatPullRefresh', {
   extend: 'Ext.plugin.PullRefresh',

   onLatestFetched: function (operation) {
      var store = this.getList().getStore(),
          oldRecords = store.getData(),
          newRecords = operation.getRecords(),
          length = newRecords.length,
          toInsert = [],
          newRecord, oldRecord, i;

      for (i = 0; i < length; i++) {
         newRecord = newRecords[i];
         oldRecord = oldRecords.getByKey(newRecord.getId());

         if (oldRecord) {
            oldRecord.set(newRecord.getData());
         } else {
            toInsert.push(newRecord);
         }

         oldRecord = undefined;
      }

      store.insert(0, toInsert);
      this.setState("loaded");
      
      this.fireEvent('latestfetched', this, toInsert);
     // if (this.getAutoSnapBack()) {
         this.snapBack();
     // }
      this.setState("release");
   }
});