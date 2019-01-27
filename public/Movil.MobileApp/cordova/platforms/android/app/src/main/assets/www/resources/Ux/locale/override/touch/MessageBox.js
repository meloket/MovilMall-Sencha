Ext.define('Ux.locale.override.touch.MessageBox', {
   override: 'Ext.Sheet',

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
          locales = me.locales || me.getInitialConfig().locales,
          title = locales.title,
          message = locales.message,
          manager = me.locale,
          defaultMessage = '',
          defaultTitle = '';

      if (title) {
         if (Ext.isObject(title)) {
            defaultTitle = title.defaultTitle;
            title = title.key;
         }

         title = manager.get(title, defaultTitle);

         if (Ext.isString(title)) {
            me.setTitle(title);
         }
      }

      if (message) {
         if (Ext.isObject(message)) {
            defaultMessage = message.defaultMessage;
            message = message.key;
         }

         message = manager.get(message, defaultMessage);

         if (Ext.isString(message)) {
            me.message = message;
         }
      }

      me.callParent(arguments);
   }
});