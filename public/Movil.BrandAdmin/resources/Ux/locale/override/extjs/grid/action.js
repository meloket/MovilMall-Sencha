Ext.define('Ux.locale.override.extjs.grid.action', {
   override: 'Ext.grid.column.Action',

   requires: [
       'Ux.locale.override.extjs.Component'
   ]
/*
   enableLocale: false,
   locale: null,
   locales: null,

   constructor: function (config, a, b, c)
   {
      
      var me = this;
      var item = config.items;
      console.log(me);
      console.log(config);
      for (var i = 0; i < item.length; i++)
      {
         var config1 = Ux.locale.Manager.isLocalable1(config.items[i], config.items[i].config);
         me.callParent([config1], config.items[i]);

         if (config.items[i].enableLocale) {
            this.setLocale(Ux.locale.Manager.getLanguage(), config.items[i]);
         }
      }
      
      

      
   },
   setLocale: function (locale,items) {
      var me = items,
          locales = me.locales,
          text = locales.text,
          manager = me.locale,
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


      me.callOverridden(arguments);
   }*/
});