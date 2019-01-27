Ext.define('Ux.locale.override.touch.navigation.Bar', {
   override: 'Ext.navigation.Bar',

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
          title = locales.title,
           tab = me.getTab(),
         // tooltip = locales.tooltip,
          manager = me.locale,
           //defaultTooltip = '',
          defaultTitle = '';
      console.log(title);
      if (title) {
         if (Ext.isObject(title)) {
            defaultTitle = text.defaultTitle;
            title = text.key;
         }

         title = manager.get(title, defaultTitle);

         if (Ext.isString(title)) {
            me.setTitle(title);
            if (tab) {
               tab.setTitle(title);
            }
         }
      }


      me.callParent(arguments);
   }
});