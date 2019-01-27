Ext.define('MobileApp.view.Settings.SettingsMovilMallView', {
   extend: 'Ext.Container',
   xtype: 'settingsmovilmallview',
   requires: [
   'Ext.TitleBar'
   ],
   config: {
      //fullscreen: true,
      scrollable:true,
      layout: 'vbox',
      title:"Movil Mall",
      items: [{
         xtype: 'image',
         src: 'resources/images/appIcon.png',
         height: '150px',
         margin: '20px'
      }, {
         xtype: 'label',
         // width: '80%',
         locales: {
            html: 'settings.MovilMallabout.html'
         }
         //html: '<p class="settingsAbout">MovilMall es una aplicación Movil que te ayuda a ahorrar en tus tiendas, entretenimiento, y eventos favoritos. A través de tus redes sociales y dándole "Me Gusta" a tus ofertas favoritas, MovilMall te permite acumular puntos en cada tienda para luego ser cangeados por mercancía. Regístrate hoy y sigue nuestras redes sociales para recibir las mejores ofertas y enterarte de los mejores eventos en todo el país.</p>'
         //itemTpl:[ '<img src="resources/images/commentPointer.png"></img>']

      }]
   }
});
