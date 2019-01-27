Ext.define('Ux.locale.override.extjs.form.checkbox', {
   override: 'Ext.form.field.Checkbox',

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
   setLocale: function (locale)
   {
      var me = this,
          locales = me.locales,
          boxLabel = locales.boxLabel,
          manager = me.locale,
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

    

      me.callParent(arguments);
   }
});