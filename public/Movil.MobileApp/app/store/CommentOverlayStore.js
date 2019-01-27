Ext.define('MobileApp.store.CommentOverlayStore', {
   extend: 'Ext.data.Store',

   config: {
      fields: [
         'titleSp', 'lang', 'titleEn'
      ],
      //autoLoad: true,
      data: [
          { titleSp: 'Borrar Comentarios', titleEn: 'Delete Comment', lang: 'fr' },
          { titleSp: 'Cancelar', titleEn: 'Cancel', lang: 'fr' }
      ]
   }
});