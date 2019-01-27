Ext.define('Ux.locale.override.st.field.DatePicker', {
   override: 'Ext.field.DatePicker',

   getPicker: function()
   {
      var picker = this._picker,
          needLocale = picker && !picker.isPicker;

      picker = this.callParent(arguments);

      if (needLocale && picker.enableLocale)
      {
         picker.setLocale(Ux.locale.Manager.getLanguage());
      }

      return picker;
   },

   setLocale: function(locale)
   {
      var me = this,
          locales = me.locales || me.getInitialConfig().locales,
          dateFormat = locales.dateFormat,
          defaultDateFormat = 'm/d/Y',
          manager = me.locale;
      console.log(dateFormat);
      if (dateFormat)
      {
         if (Ext.isObject(dateFormat))
         {
            defaultDateFormat = dateFormat.defaultDateFormat;
            dateFormat = dateFormat.key;
         }

         dateFormat = manager.get(dateFormat, defaultDateFormat);

         me.setDateFormat(dateFormat);

      }


      me.callParent(arguments);
   }
});