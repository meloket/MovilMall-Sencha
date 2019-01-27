Ext.define('Ux.locale.override.touch.field.Checkbox', {
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
          manager = me.locale,
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

    

      me.callParent(arguments);
   }
});