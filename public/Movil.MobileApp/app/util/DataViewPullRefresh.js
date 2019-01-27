Ext.define('MobileApp.util.DataViewPullRefresh', {
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
      this.setState("loading");
      this.fireEvent('latestfetched', this, toInsert);
      /*if (this.getAutoSnapBack()) {
         this.snapBack();
      }*/
   },

   updateView: function ()
   {
      var state = this.getState(),
          lastUpdatedText = this.getLastUpdatedText() + Ext.util.Format.date(this.lastUpdated, this.getLastUpdatedDateFormat()),
          templateConfig = { state: state, updated: lastUpdatedText },
          stateFn = state.charAt(0).toUpperCase() + state.slice(1).toLowerCase(),
          fn = "get" + stateFn + "Text";

      if (this[fn] && Ext.isFunction(this[fn])) {
         templateConfig.message = this[fn].call(this);
      }
      console.log(Ext.baseCSSPrefix);
     /* if (state == 'loading')
      {
         this.innerElement.removeCls(["loaded", "release", "pull"], Ext.baseCSSPrefix + "list-pullrefresh");
      } else*/
      {
         this.innerElement.removeCls(["loaded","loading", "release", "pull"], Ext.baseCSSPrefix + "list-pullrefresh");
      }
      
      this.innerElement.addCls(this.getState(), Ext.baseCSSPrefix + "list-pullrefresh");
      this.getPullTpl().overwrite(this.innerElement, templateConfig);
   }
});