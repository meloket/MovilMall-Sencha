Ext.define('MobileApp.view.Settings.SettingsList', {
   extend: 'Ext.List',
   xtype: 'settingslist',

   config: {
      //title: 'Configuración',
      /*cls: 'x-contacts',*/
      variableHeights: true,
      onItemDisclosure: true,
      id:'set',
      store: 'SettingsListStore',
      itemTpl: new Ext.XTemplate(
         '<tpl if="lang==\'en\'">' +
            '<div class="placeListTitle" id="settlist">{titleEn}</div>' +
         '</tpl>' +
          '<tpl if="lang==\'fr\'">' +
          '<div class="placeListTitle" id="settlist">{titleSp}</div>' +
         '</tpl>' 
      ),
      listeners: {
         initialize: function(comp, eOpts)
         {
           /* var loginStore = Ext.getStore('LoginSqlStore').data.items;
            if (loginStore.length != 0)
            {
               var language = loginStore[0].data.lang;
               if (language == "fr")
               {
                  this.config.title = "Configuración";
               } else
               {
                  this.config.title = "configuration";
               }

            } else
            {
               this.config.title = "Configuración";
            }*/
            comp.bodyElement.on(
              'painted',
              function (event, node, options, eOpts) {

                 /*send event as a argument to get direction of swipe*/
                 this.fireEvent('painted', event);
              },
              comp
           );
            comp.bodyElement.on(
               'swipe',
               function(event, node, options, eOpts)
               {
                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );

            comp.bodyElement.on(
               'tap',
               function(event, node, options, eOpts)
               {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('tap', event);
               },
               comp
            );
         },
         painted:function()
         {
            console.log(this.config.title);
            /*var me = this;
            console.log(MobileApp.controller.getSettingsController());
            console.log(MobileApp.getController('SettingsController').lang);*/
            console.log("df");
         }
      }      
   }
});