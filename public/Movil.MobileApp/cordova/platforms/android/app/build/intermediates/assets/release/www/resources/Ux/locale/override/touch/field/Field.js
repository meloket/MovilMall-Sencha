Ext.define('Ux.locale.override.touch.field.Field', {
   override: 'Ext.field.Field',

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
          label = locales.label,
          placeHolder = locales.placeHolder,
          manager = me.locale,
          defaultPlaceholder = '',
          defaultLabel = '';

      if (label) {
         if (Ext.isObject(label)) {
            defaultLabel = label.defaultLabel;
            label = label.key;
         }

         label = manager.get(label, defaultLabel);

         if (Ext.isString(label)) {
            me.setLabel(label);
         }
      }

      if (placeHolder) {
         if (Ext.isObject(placeHolder)) {
            defaultPlaceholder = label.defaultPlaceholder;
            placeHolder = placeholder.key;
         }

         placeHolder = manager.get(placeHolder, defaultPlaceholder);

         if (Ext.isString(placeHolder)) {
            me.setPlaceHolder(placeHolder);
         }
      }

      me.callParent(arguments);
   }
});