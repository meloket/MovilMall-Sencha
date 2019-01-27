Ext.define('Ux.locale.override.extjs.grid.grid', {
   override: 'Ext.grid.Panel',

   requires: [
       'Ux.locale.override.extjs.Component'
   ],

   enableLocale: false,
   locale: null,
   locales: null,

   constructor: function (config) {
      var me = this;

      config = Ux.locale.Manager.isLocalable(me, config);

      me.callParent([config]);

      if (me.enableLocale) {
         me.setLocale(Ux.locale.Manager.getLanguage());
      }
   },
   setLocale: function (locale)
   {
      var me = this,
          locales = me.locales || me.getInitialConfig().locales,
          title = locales.title,
          text = locales.text,
          manager = me.locale,
          defaultText = '',
         titleText;

      if (title) {
         if (Ext.isObject(title)) {
            defaultText = title.defaultText;
            title = title.key;
         }

         titleText = manager.get(title, defaultText);

         if (Ext.isString(titleText)) {
            me.setTitle(titleText);
         }
      }
      

      if (text) {
         if (Ext.isObject(text)) {
            defaultText = text.defaultText;
            text = text.key;
         }

         text = manager.get(text, defaultText);

         if (Ext.isString(text)) {
            me.setText(text);
         }
      }

      me.callOverridden(arguments);
   }
});