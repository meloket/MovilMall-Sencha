Ext.define('Ux.locale.override.extjs.form.label', {
   override: 'Ext.form.Label',

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
   setLocale: function (locale) {
      var me = this,
          locales = me.locales,
          text = locales.text,
          html = locales.html,
          manager = me.locale,
          defaultHtml = '',
          defaultLabel = '';



      if (text) {
         if (Ext.isObject(text)) {
            defaultLabel = text.defaultLabel;
            text = text.key;
         }

         text = manager.get(text, defaultLabel);

         if (Ext.isString(text)) {
            me.setText(text);
         }
      }
      

      if (html) {
         if (Ext.isObject(html)) {
            defaultLabel = html.defaultText;
            html = html.key;
         }

         html = manager.get(html, defaultLabel);

         if (Ext.isString(html)) {
            me.setText(html,false);
         }
      }

     
      me.callParent(arguments);
   }
});