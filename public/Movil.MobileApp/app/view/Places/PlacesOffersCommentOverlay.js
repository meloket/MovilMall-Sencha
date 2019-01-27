Ext.define('MobileApp.view.Places.PlacesOffersCommentOverlay', {
   extend: 'Ext.List',
   xtype: 'placesofferscommentoverlay',

   config: {
      itemId: 'placesOffersCommentOverlayView',
      modal: true,
      hideOnMaskTap: true,
      store: 'CommentOverlayStore',
    
      itemTpl: new Ext.XTemplate(
        '<tpl if="lang==\'en\'">' +
           '<div class="overlay">{titleEn}<div>' +
           '</tpl>' +
           '<tpl if="lang==\'fr\'">' +
           '<div class="overlay">{titleSp}<div>' +
           '</tpl>'
     ),
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
     // margin: '0em 0em 0em 3.6em',
      scrollable: false

   }

});