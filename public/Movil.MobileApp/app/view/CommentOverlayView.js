Ext.define('MobileApp.view.CommentOverlayView', {
   extend: 'Ext.List',
   xtype: 'commentoverlayview',
   // id:'offerComment',
   config: {
      modal: true,
      hideOnMaskTap: true,
      store:'CommentOverlayStore',
      itemTpl: new Ext.XTemplate(
         '<tpl if="lang==\'en\'">' +
            '<div class="overlay">{titleEn}<div>' +
            '</tpl>' +
            '<tpl if="lang==\'fr\'">' +
            '<div class="overlay">{titleSp}<div>' +
            '</tpl>'
      ),

     /* data: [
         { titleSp: 'Borrar Comentarios', titleEn: 'Delete Comment',lang:'fr' },
         { titleSp: 'Cancelar', titleEn: 'Cancel', lang: 'fr' }
      ],*/
      showAnimation: {
         type: 'popIn',
         duration: 250,
         easing: 'ease-out'
      },
      hideAnimation: {
         type: 'popOut',
         duration: 250,
         easing: 'ease-out'
      },
      centered: true,
      height: 90,
      width: 180,
    //  margin: '0 0 0 0em',
      scrollable: false,
      fullscreen: true    
   }
});