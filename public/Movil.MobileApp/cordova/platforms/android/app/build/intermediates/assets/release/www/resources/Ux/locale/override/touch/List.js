Ext.define('Ux.locale.override.touch.List', {
   override: 'Ext.List',

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
          boxLabel = locales.boxLabel,
          emptyText = locales.emptyText,
          manager = me.locale,
          defaultemptyText = '',
          defaultboxLabel = '';



      if (boxLabel) {
         if (Ext.isObject(boxLabel)) {
            defaultboxLabel = boxLabel.defaultboxLabel;
            boxLabel = boxLabel.key;
         }

         boxLabel = manager.get(boxLabel, defaultboxLabel);

         if (Ext.isString(boxLabel)) {
            me.setFieldLabel(boxLabel);
         }
      }

      if (emptyText) {
         if (Ext.isObject(emptyText)) {
            defaultemptyText = emptyText.defaultEmptyText;
            emptyText = emptyText.key;
         }

         emptyText = manager.get(emptyText, defaultemptyText);

         if (Ext.isString(emptyText))
         {
            me.setEmptyText(emptyText);
         }
      }


      me.callParent(arguments);
   }
});