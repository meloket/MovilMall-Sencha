Ext.define('Ux.locale.override.touch.Container', {
   override: 'Ext.Container',

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
          tab = me.getTab(),
          locales = me.locales || me.getInitialConfig().locales,
          title = locales.title,
           html = locales.html,
          manager = me.locale,
           defaultHtml = '',
          defaultText = '';

      if (title) {
         if (Ext.isObject(title)) {
            defaultText = title.defaultText;
            title = title.key;
         }

        
         title = manager.get(title, defaultText);

         if (Ext.isString(title)) {
            /**
             * Would like a setTitle on a container to do this
             */
            console.log(me.getParent());
            if (me.getParent())
            {
               me.getParent().getNavigationBar().setTitle(title);
            }
           
            if (tab) {
               tab.setTitle(title);
            }
         }
      }
      if (html) {
         if (Ext.isObject(html)) {
            defaultHtml = html.defaultHtml;
            html = html.key;
         }

         html = manager.get(html, defaultHtml);

         if (Ext.isString(html)) {
            /**
             * Would like a setTitle on a container to do this
             */
            me.html = html;

         }
      }

      this.callParent(arguments);
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