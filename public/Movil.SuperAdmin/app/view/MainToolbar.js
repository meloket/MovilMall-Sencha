Ext.setGlyphFontFamily('Pictos');

Ext.define('SuperAdmin.view.MainToolbar', {
   extend: 'Ext.toolbar.Toolbar',
   xtype: 'maintoolbar',
   border: true,
   layout: {
      type: "hbox"
   },
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
            color: '#FFFFFF'
         },
         listeners: {
            render: function(c)
            {
               c.getEl().on({
                  click: function(el)
                  {
                     window.location.assign("../Movil.SuperAdmin/index.html");
                  },
                  scope: c
               });
            }
         }
      }, */'->',
      '->',
      {
         xtype: 'container',
         items: [
            {
               xtype: 'button',
               cls: 'menu-search-button',
               text: 'Brands',
               itemId: 'brands',
               hidden: true
            }, {
               xtype: 'button',
               cls: 'menu-search-button',
               text: 'Business-Types',
               itemId: 'business',
               hidden: true
            }, /*{
               xtype: 'button',
               text: 'Movies',
               cls: 'menu-search-button',
               itemId: 'movies',
               hidden: true
            },*/ {
               xtype: 'button',
               cls: 'menu-search-button',
               itemId: 'analytics',
               text: 'Analytics',
               hidden: true
            },
             {
                xtype: 'button',
                cls: 'menu-search-button',
                itemId: 'users',
                text: 'Users',
                hidden: true
             }
         ]
      }, '->',
      {
         xtype: 'button',
         scale: 'small',
         text: 'Masters',
         itemId: 'masters',
         hidden: true,
         menu: {
            items: [{
                  text: 'Country',
                  action: 'country'
               },
               {
                  text: 'State',
                  action: 'state'
               },
               {
                  text: 'City',
                  action: 'city'
               }]
         }
      },
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
      }, {
         xtype: 'button',
         glyph: 72,
         scale: 'small',
         menu: {
            items: [{
                  text: 'Logout',
                  action: 'logout'              
              /* },
               {
                  text: 'Change Password',
                  action: 'changepassword'*/
               }]
         }
      }]        
});