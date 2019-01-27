Ext.define('Ux.locale.override.extjs.MessageBox', {
   override: 'Ext.window.Window',

   requires: [
       'Ux.locale.override.extjs.Component'
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
          locales = me.locales,
          titleText = locales.titleText,
          manager = me.locale,
          defaultText = '';

      if (titleText) {
         if (Ext.isObject(titleText)) {
            defaultText = titleText.defaultText;
            titleText = text.key;
         }

         titleText = manager.get(titleText, defaultText);

         if (Ext.isString(titleText)) {
            me.setText(titleText);
         }
      }

      me.callOverridden(arguments);
   }
});