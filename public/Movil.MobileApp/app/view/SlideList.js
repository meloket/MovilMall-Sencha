Ext.define('MobileApp.view.SlideList', {
   extend: 'Ext.List',
   xtype: 'slidelist',
   config: {
      cls: 'slide1',
      variableHeights: true,
      onItemDisclosure: false,
      styleHtmlContent: true,
      store: 'SlideListStore',
      items: [{
            xtype: 'titlebar',
            ui: 'light',
            docked: 'top',
            itemId:'slideTitleBar',
            title: 'Menú'
         },
         {
            xtype: 'toolbar',
            ui: 'light',
            id: 'slidelisttoolbar',
            //cls:'userTopMenuToolbar',
            style: {
               "background-color": "#51C4D4",
               "padding": "0em"
            },
            
            docked: 'top',
            html: '<div class="userTopMenuToolbar">' +
               '<img id="userImage" class="userImage" src="resources/icons/noUser.png">' +
               '<h3 id="userName"></h3>' +
               '<img class="settingImage" id="settingImg" src="resources/icons/nw-icons/settings.png">' +
               '</div>',
            

               listeners: {
      initialize: function(comp, eOpts)
      {
         comp.element.on(
            'tap',
            function(event, node, options, eOpts)
            {
               /*send event as a argument to get direction of swipe*/
               this.fireEvent('tap', event);
            },
            comp
         );

      }
               }
            //title: 'Menu Options'
         }],
      itemTpl: new Ext.XTemplate(
         '<tpl if="lang==\'en\'">' +
         '<div class="slideItem">' +
         '<div class="menuImage"><img src="resources/icons/nw-icons/{img}"></div>' +
         '<div class="menuTitle">{titleEn}</div></div>'+
          '</tpl>' +
            
         '<tpl if="lang==\'fr\'">' +
         '<div class="slideItem">' +
         '<div class="menuImage"><img src="resources/icons/nw-icons/{img}"></div>' +
         '<div class="menuTitle">{titleSp}</div></div>' +
          '</tpl>'
          ),

      listeners: {
          initialize: function(comp, eOpts)
         {
            comp.element.on(
               'swipe',
               function(event, node, options, eOpts)
               {
                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );

            comp.element.on(
               'tap',
               function(event, node, options, eOpts)
               {
                  this.fireEvent('tap', event);
               },
               comp
            );
          }
             }

        /* {
            element: 'element',
            delegate: 'img.settingImage',
            event: 'tap',
            fn: function()
            {
               this.settingsPanel = Ext.create('MobileApp.view.Settings.SettingsPanel');
               this.getMainContainer().insert(1, this.settingsPanel);
               console.log('Two!');
            }
         }*/
      
   }
});