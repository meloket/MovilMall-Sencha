Ext.define('MobileApp.store.SettingsProfileListStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'titleSp','titleEn','lang'
      ],
      data: [
          { titleSp: 'Editar Perfil',titleEn:'Edit Profile',lang:'fr'},
         { titleSp: 'Puntos', titleEn: 'Points', lang: 'fr' },
         { titleSp: 'Gustos', titleEn: 'Favourites', lang: 'fr' },
         { titleSp: 'Cambiar la Contraseña', titleEn: 'Change Password', lang: 'fr' }
         
       

      ]
   }
});