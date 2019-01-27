Ext.define('Ux.locale.override.extjs.Panel', {
    override : 'Ext.panel.Panel',

    requires : [
        'Ux.locale.override.extjs.Component'
    ],

    initComponent : function() {
        this.callOverridden(arguments);

        if (this.enableLocale) {
            this.title = '&nbsp;';
        }
    },
   constructor: function (config) {
      var me = this;

      config = Ux.locale.Manager.isLocalable(me, config);

      me.callParent([config]);

      if (me.enableLocale) {
         me.setLocale(Ux.locale.Manager.getLanguage());
      }
   },
    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales,
            title       = locales.title,
            manager     = me.locale,
            defaultText = '',
            text;

        if (title) {
            if (Ext.isObject(title)) {
                defaultText = title.defaultText;
                title       = title.key;
            }

            title = manager.get(title, defaultText);

            if (Ext.isString(title)) {
               me.setTitle(title);
            }
        }

        me.callOverridden(arguments);
    }
});