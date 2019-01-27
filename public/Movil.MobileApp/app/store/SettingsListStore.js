Ext.define('MobileApp.store.SettingsListStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'titleSp', 'lang', 'titleEn'
      ],
    //  autoLoad:true,
      data: [
          { titleSp: 'Perfil', titleEn: 'Profile', lang: 'fr' },
         //{ titleSp: 'Notificaciones', titleEn: 'Notification', lang: 'fr' },
         { titleSp: 'Idioma', titleEn: 'Language', lang: 'fr' },
         { titleSp: 'Movil Mall App', titleEn: 'Movil Mall App', lang: 'fr' },
         { titleSp: 'Descarga otras de nuestras apps', titleEn: 'Download our other apps', lang: 'fr' },
         { titleSp: 'Comparte el Movil-Mall App', titleEn: 'Share', lang: 'fr' },
         { titleSp: 'Síguenos', titleEn: 'Follow us', lang: 'fr' },
         { titleSp: 'Salir', titleEn: 'Logout', lang: 'fr' }
      ]
   }
});