Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.MainToolbar', {
   extend: 'Ext.toolbar.Toolbar',
   xtype: 'maintoolbar',
   border: true,
   layout: {
      type: "hbox"
   },
   requires: [
      
      'Ext.Button'
     
   ],

   items: [{
         xtype: 'tbspacer',
         width: '2.5%'
      }, {
         xtype: 'label',
         text: 'Movil Mall',
         style: {
            fontSize: '20px'/*,
            color: '#FFFFFF'*/
         }
      }, '->',
      {
         xtype: 'container',
         items: [
            {
               xtype: 'button',
               cls: 'menu-search-button',
           //    text: 'Profile',
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
              // text: 'Offers',
               cls: 'menu-search-button',
               itemId: 'offers',
               hidden: true,
               locales: {
                  text: 'buttons.offers'
               }
            }, {
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'movies',
              // text: 'Movies',
               hidden: true,
               locales: {
                  text: 'buttons.movies'
               }
            },
            {
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'events',
             //  text: 'Events',
               hidden: true,
               locales: {
                  text: 'buttons.events'
               }
            },
            {
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'analytics',
             //  text: 'Analytics',
               hidden: true,
               locales: {
                  text: 'buttons.analytics'
               }
            }
         ]
      },
      '->',
      {
         border: false,
         margin: '5 5 0 30',
         itemId: 'loginUniUserNameText',
         xtype: 'label',
         text: 'Welcome User'
      },
      {
         xtype: 'label',
         text: '|',
         style: {
            fontSize: '20px',
            color: 'grey',
            fontWeight: 'bold'
         }
      }, /*{
         border: false,
         enableToggle: false,
         // iconCls: 'logout',
         glyph: 66,
         tooltip: 'Logout/Change Password',
         margin: '5 15 0 5',
         itemId: 'mainUserMenu',
         menu: {
            xtype: 'menu',
            plain: true,
            border: false,
            shadow: 'drop',
            shadowoffset: 20,
            style: {
               borderStyle: 'none',
               'border-radius': '5px',
               'box-shadow': '0 0 15px rgba(0, 0, 0, 0.3)'
            },
            items: [{
                  text: '<font color = "black">Logout</font>',
                  margin: '0 5 0 0',
                  scale: 'small',
                  action: 'logout'
               }, {
                  text: '<font color = "black">Change Password</font>',
                  action: 'changepassword',
                  scale: 'small'
               }
            ]
         }
      },*/
    {
       xtype: 'container',

       layout: {
          type: 'table',
          columns: 4,
          tdAttrs: { style: 'padding: 5px 10px;' }
       },
       defaults: {
          menu: [{
             text: 'Logout',
             action: 'logout'
          },
             {
                text: 'Change Password',
                action: 'changepassword'
             },
             {
                text: 'spanish',
                action: 'language',
                value:'fr'
             }]
       },
       items: [{
          xtype: 'button',
          glyph: 72,
          scale: 'small'
       }]
    }]
});