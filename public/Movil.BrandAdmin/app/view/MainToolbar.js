Ext.define('Ux.Img', {
   extend: 'Ext.Img',
   xtype: 'ux-img',

   onRender: function () {
      this.callParent(arguments);

      this.imgEl.on('click', this.onClick, this);
   },

   onClick: function (e, t) {
      this.fireEvent('click', this, e, t);
   }
});
Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.MainToolbar', {
   extend: 'Ext.toolbar.Toolbar',
   xtype: 'maintoolbar',
   border: false,
   layout: {
      type: "hbox"
   },
   requires: [
      'Ext.Button'
   ],
   cls: 'mainToolbarFlat',
   items: [{
         xtype: 'tbspacer',
         width: '2.5%'
      }, {
         xtype: 'image',
         width: 127,
         height: 47,
         src: 'resources/images/logo-black.png',
         cls: 'movilMallLogo'
      },
      /*{
         xtype: 'label',
         text: 'Movil Mall',
         style: {
            fontSize: '20px'/*,
            color: '#FFFFFF'#1#
         }/*,
         listeners: {
            render: function(c)
            {
               c.getEl().on({
                  click: function(el)
                  {
                     window.location.assign("../Movil.BrandAdmin/index.html");
                  },
                  scope: c
               });
            }
         }#1#
      },*/
      {
         xtype: 'label',
         text: '|',
         style: {
            fontSize: '20px',
            color: 'grey',
            fontWeight: 'bold'
         }
      },
      {
         border: false,
         margin: '0 0 0 10',
         itemId: 'loginBrandName',
         xtype: 'label'
      },
      '->',
      {
         xtype: 'container',
         items: [
            {
               xtype: 'button',
               cls: 'menu-search-button',
               //text: 'Profile',
               itemId: 'profile',
               hidden: true,
               locales: {
                  text: 'buttons.profile'
               }
            }, {
               xtype: 'button',
               cls: 'menu-search-button',
               //text: 'Locations',
               itemId: 'locations',
               hidden: true,
               locales: {
                  text: 'buttons.locations'
               }
            }, {
               xtype: 'button',
               //text: 'Offers',
               cls: 'menu-search-button',
               itemId: 'offers',
               hidden: true,
               locales: {
                  text: 'buttons.offers'
               }
            }, /*{
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'movies',
               //ext: 'Movies',
               hidden: true,
               locales: {
                  text: 'buttons.movies'
               }
            },*/
            {
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'events',
               //text: 'Events',
               hidden: true,
               locales: {
                  text: 'buttons.events'
               }
            },
            {
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'analytics',
               text: 'Analytics',
               hidden: true,
               locales: {
                  text: 'buttons.analytics'
               }
            },
            {
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'points',
               //text: 'Points',
               hidden: true,
               locales: {
                  text: 'buttons.points'
               }
            }
         ]
      },
      '->',
      {
         border: false,
         itemId: 'loginWelcomeText',
         xtype: 'label',
         locales: {
            text: 'maintxt.text'
         }
         //text: 'Welcome User'
      },
      {
         border: false,
         itemId: 'loginUniUserNameText',
         xtype: 'label'
         //text: 'Welcome User'
      },
      {
         xtype: 'label',
         text: '|',
         style: {
            fontSize: '20px',
            color: 'grey',
            fontWeight: 'bold'
         }
      }, {
         xtype: 'button',
         glyph: 72,
         scale: 'small',
         menu: {
            items: [{
                  //text: 'Logout',
                  action: 'logout',
                  locales: {
                     text: 'menu.logout.text'
                  }
               },
               {
                  //text: 'Change Password',
                  action: 'changepassword',
                  locales: {
                     text: 'menu.changepass.text'
                  }
               }/*,
               {
                  text: 'spanish',
                  action: 'language',
                  value: 'fr'
               }*/]
         }
      },
      {
         xtype: 'label',
         text: '|',
         style: {
            fontSize: '20px',
            color: 'grey',
            fontWeight: 'bold'
         }
      }, {
         xtype: 'ux-img',
         height: '26px',
         itemId: 'help',
        // html: '<a href="../Guía-MovilMall.doc" download="FileName">Download it!</a>',
         width: '26px',
         src: './resources/icons/help.png',
         listeners: {
            initialize: function (comp, eOpts) {
               comp.element.on(
               'click',
               function (event, node, options, eOpts) {
                  
                  this.fireEvent('click');

               },
               comp
               );
            }
         }

      }]
});