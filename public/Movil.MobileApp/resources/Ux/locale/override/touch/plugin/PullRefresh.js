Ext.define('Ux.locale.override.touch.plugin.PullRefresh', {
   override: 'Ext.plugin.PullRefresh',


   requires: [
       'Ux.locale.override.touch.Component'
   ],
   
   constructor: function (config) {
      var me = this;

      config = Ux.locale.Manager.isLocalable(me, config);

      me.callParent([config]);

      if (me.enableLocale) {
         me.setLocale(Ux.locale.Manager.getLanguage());
      }
   },
 
   setLocale: function (locale) {
      var me = this,
          locales = me.locales|| me.getInitialConfig().locales,
          text = locales.text,
          pullText = locales.pullText,
          manager = me.locale,
           defaultPullText = '',
          defaultText = '';
      //console.log('pullrefresh');
      if (pullText) {
         if (Ext.isObject(pullText)) {
            defaultPullText = pullText.defaultPullText;
            pullText = pullText.key;
         }

         pullText = manager.get(pullText, defaultPullText);

         if (Ext.isString(pullText)) {
            me.setPullText(pullText);
         }
      }
      me.callParent(arguments);
   }
});
  /* //Hide/show the visual component based on if the plugin is disabled/enabled
   setDisabled: function (isHidden) {
      this.setHidden(isHidden);
      this.callParent(arguments);
   },

   //Only let handlers do their thing if the plugin is enabled
   onScrollChange: function () {
      if (!this.isDisabled()) {
         this.callParent(arguments);
      }
   },
   onBounceTop: function () {
      if (!this.isDisabled()) {
         this.callParent(arguments);
      }
   },
   onScrollerDragEnd: function () {
      if (!this.isDisabled()) {
         this.callParent(arguments);
      }
   }
});*/