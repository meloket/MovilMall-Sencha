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
   setLocale: function (locale)
   {
      var me = this,
          locales = me.locales,
           buttonText = locales.buttonText,
          fieldLabel = locales.fieldLabel,
         tooltip = locales.tooltip,
          emptyText = locales.emptyText,
          defaultText = '',
          manager = me.locale,
          defaultEmptyText = '',
           defaultTooltip = '',
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
      if (tooltip) {
         if (Ext.isObject(tooltip)) {
            defaultTooltip = fieldLabel.defaultTooltip;
            tooltip = fieldLabel.key;
         }

         tooltip = manager.get(tooltip, defaultTooltip);

         if (Ext.isString(tooltip)) {
            me.tooltip = tooltip;
         }
      }

      if (emptyText) {
         if (Ext.isObject(emptyText)) {
            defaultEmptyText = emptyText.defaultEmptyText;
            emptyText = emptyText.key;
         }

         emptyText = manager.get(emptyText,defaultEmptyText);

         if (Ext.isString(emptyText))
         {
            me.emptyText=emptyText;
         }
      }
      
      if (buttonText) {
         if (Ext.isObject(buttonText)) {
            defaultText = buttonText.defaultText;
            buttonText = buttonText.key;
         }

         buttonText = manager.get(buttonText, defaultText);

         if (Ext.isString(buttonText)) {
            me.buttonText=buttonText;
         }
      }


      me.callParent(arguments);
   }
});