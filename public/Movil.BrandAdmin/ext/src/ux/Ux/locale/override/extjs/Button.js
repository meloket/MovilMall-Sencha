Ext.define('Ux.locale.override.extjs.Button', {
    override : 'Ext.button.Button',

    requires : [
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
    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales,
            text        = locales.text,
            manager     = me.locale,
            defaultText = '';

        if (text) {
            if (Ext.isObject(text)) {
                defaultText = text.defaultText;
                text        = text.key;
            }

            text = manager.get(text, defaultText);

            if (Ext.isString(text)) {
                me.setText(text);
            }
        }

        me.callOverridden(arguments);
    }
});