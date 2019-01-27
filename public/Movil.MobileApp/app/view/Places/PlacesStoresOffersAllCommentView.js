Ext.define('MobileApp.view.Places.PlacesStoresOffersAllCommentView', {
   extend: 'Ext.Container',
   xtype: 'placesstoresoffersallcommentview',

   config: {
      layout: 'fit',
      title: 'Comentarios',
      style: 'background-color: #ffffff',
      scrollable: true,
      items: [{
         xtype: 'dataview',
         margin: '1em  0 0 0',
         cls: 'commentDataView',
         id: 'placesStoresOffersAllCommentOverlayView',
         store: 'OffersCommentDataViewStore',
       //  emptyText: '<img style="width: 319px;height: 472px;" src="./resources/images/noData.png" alt="No Offer" >',

         /*itemTpl: '<div class="allComments">' +
              '<p><b>{userName} : </b>{value}</p>' +
            //'<br><font><b>{userName} : </b>{value}</font>' +
            '</div>' +
             '<div class="allCommentsDottedUnderline"></div>'*/
         
         itemTpl: ['<div class="viewAllCommentBlock">' +
            '<div class="commentUserImage"><img src={photo}></img></div>' +
            '<img class="commentPointerImage" src="resources/images/commentPointer.png"></img>' +
            '<div class="commentDetails">' +
            '<p class="userName">{userName} wrote</p>' +
            '<p class="userComment">{value}</p>' +
            '</div>' +
            '</div>']
      }]/*,

      listeners: [
         {
            element: 'element',
            event: 'tap',
            fn: function()
            {
               console.log('TAP!');
               var overlay = Ext.create('MobileApp.view.CommentOverlayView');
               overlay.show();*/
      /* if (!this.overlay)
      {
         this.overlay = Ext.Viewport.add({
            xtype: 'panel',
            modal: true,
            hideOnMaskTap: true,
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
            //html: 'abc',
            height: 150,
            width: 230,
            margin: '0 0 0 44',
            items: [/*{
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'Overlay'
                     }#1#
           ],
            scrollable: true
         });
      }*/
      /*  var sheet = Ext.create('MobileApp.view.CommentOverlayView');
               sheet.show();*/
      /*  }
     }
  ]      
}*/
   }
});