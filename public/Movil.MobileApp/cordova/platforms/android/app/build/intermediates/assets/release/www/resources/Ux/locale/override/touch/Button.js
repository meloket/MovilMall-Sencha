Ext.define('Ux.locale.override.touch.Button', {
   override: 'Ext.Button',

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
          locales = me.locales|| me.getInitialConfig().locales,
          text = locales.text,
          tooltip = locales.tooltip,
          manager = me.locale,
           defaultTooltip = '',
          defaultText = '';

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
      if (tooltip) {
         if (Ext.isObject(tooltip)) {
            defaultTooltip = tooltip.defaultTooltip;
            tooltip = tooltip.key;
         }

         tooltip = manager.get(tooltip, defaultTooltip);

         if (Ext.isString(tooltip)) {
            me.tooltip = tooltip;
         }
      }


      me.callParent(arguments);
   }
});