Ext.define('Ux.locale.override.extjs.form.field', {
   override: 'Ext.form.field.Text',

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
          fieldLabel = locales.fieldLabel,
          placeholder = locales.placeHolder,
          manager = me.locale,
          defaultPlaceholder = '',
          defaultLabel = '';

      if (fieldLabel) {
         if (Ext.isObject(fieldLabel)) {
            defaultLabel = fieldLabel.defaultLabel;
            fieldLabel = fieldLabel.key;
         }

         fieldLabel = manager.get(fieldLabel, defaultLabel);

         if (Ext.isString(fieldLabel)) {
            me.setFieldLabel(fieldLabel);
         }
      }

      if (placeholder) {
         if (Ext.isObject(placeholder)) {
            defaultPlaceholder = fieldLabel.defaultPlaceholder;
            placeholder = placeholder.key;
         }

         placeholder = manager.get(placeholder, defaultPlaceholder);

         if (Ext.isString(placeholder)) {
            me.setPlaceHolder(placeholder);
         }
      }

      me.callParent(arguments);
   }
});