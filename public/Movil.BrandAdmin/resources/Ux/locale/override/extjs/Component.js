Ext.define('Ux.locale.override.extjs.Component', {
    override : 'Ext.Component',

    requires : [
        'Ux.locale.Manager'
    ],

    enableLocale : false,
    locale       : null,
    locales      : null,
    constructor: function (config) {
       var me = this;

       config = Ux.locale.Manager.isLocalable(me, config);

       me.callParent([config]);

       if (me.enableLocale) {
          me.setLocale(Ux.locale.Manager.getLanguage());
       }
    },
    initComponent : function() {
        var me = this;

        if (Ext.isObject(me.locales) || me.enableLocale) {
            Ext.apply(me, {
                enableLocale : true,
                locale       : Ux.locale.Manager
            });
        }

        me.callOverridden(arguments);
    },
    setLocale : function(locale)
    {
       var me = this,
           locales = me.locales,
           html = locales.html,
           text = locales.text,
           body = locales.body,
           manager = me.locale,
           defaultHtml = '',
           defaultText = '';
           // text;

        if (body) {
            if (Ext.isObject(body)) {
                defaultText = body.defaultText;
                body        = body.key;
            }

            text = manager.get(body, defaultText);

            if (Ext.isString(text)) {
                me.update(text);
            }
        }
       
        if (html) {
           if (Ext.isObject(html)) {
              defaultHtml = html.defaultText;
              html = html.key;
           }

           html = manager.get(html, defaultHtml);

           if (Ext.isString(html))
           {
              me.setHtml(html);
           }
        }
       
        
    }
});