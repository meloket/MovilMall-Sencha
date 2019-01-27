Ext.define('Ux.locale.override.extjs.FieldContainer', {
    override : 'Ext.form.FieldContainer',

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
            fieldLabel = locales.fieldLabel,
            manager     = me.locale,
            defaultfieldLabel = '';

        if (fieldLabel) {
           if (Ext.isObject(fieldLabel)) {
              defaultfieldLabel = fieldLabel.defaultfieldLabel;
              fieldLabel = fieldLabel.key;
            }

           fieldLabel = manager.get(fieldLabel, defaultfieldLabel);

           if (Ext.isString(fieldLabel)) {
              me.setFieldLabel(fieldLabel);
            }
        }

        me.callOverridden(arguments);
    }/*,

    setFieldLabel : function(text) {
        this.labelEl.update(text);

        this.fieldLabel = text;

        return this;
    }*/
});