Ext.define('Ux.locale.override.touch.Label', {
   override: 'Ext.Label',

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
   setLocale: function(locale)
   {
      var me = this,
          locales = me.locales || me.getInitialConfig().locales,
          html = locales.html,
          manager = me.locale,
          defaultHtml = '',
          defaultText = '';
      //console.log('label');
    
      if (html) {
         if (Ext.isObject(html)) {
            defaultText = html.defaultText;
            html = html.key;
         }

         html = manager.get(html, defaultText);

         if (Ext.isString(html)) {
            me.setHtml(html);
         }
      }

      me.callParent(arguments);
   }
});