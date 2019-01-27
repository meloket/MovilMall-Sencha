Ext.define('Ux.locale.override.touch.tab.Panel', {
   override: 'Ext.tab.Panel',

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

      if (title) {
         if (Ext.isObject(title)) {
            defaultTitle = text.defaultTitle;
            title = text.key;
         }

         title = manager.get(title, defaultTitle);

         if (Ext.isString(title)) {
            me.title(title);
            if (tab) {
               tab.setTitle(title);
            }
         }
      }
     

      me.callParent(arguments);
   },
   getTab: function () {
      var me = this,
          tabpanel, tabBar, items, index;

      if (me.tab) {
         return me.tab;
      }

      /**
       * As of 2.0.0 PR3, there is no method or property to get the associated Ext.tab.Tab instance
       */

      tabpanel = me.up('tabpanel');

      if (!tabpanel) {
         return;
      }

      tabBar = tabpanel.getTabBar();
      items = tabpanel.getInnerItems();
      index = Ext.Array.indexOf(items, me);

      return tabBar.getComponent(index);
   }
});