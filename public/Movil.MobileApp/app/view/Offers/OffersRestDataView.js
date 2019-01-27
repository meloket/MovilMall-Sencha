Ext.define('MobileApp.view.Offers.OffersRestDataView', {
   extend: 'Ext.Container',
   xtype: 'offersrestdataview',

   config: {
      layout: 'fit',
      title:'North Indian',
      items: [{
         /*height:'100%',*/
         xtype: 'dataview',
         id: 'offersRestDataView',
         scrollable: true,
         loadingText: null,
         scrollToTopOnRefresh: false,
         style: 'background-color: #ccc',
         inline: true,
         locales: {
            emptyText: 'Offers.emptyText'
         },
        // emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/coffee1.png" alt="No Offer available currently" >',
         cls: 'offersDataview',
         itemTpl: new Ext.XTemplate('<div class="main">' +
           // '<p class="offerTitle">{brandName}</p>' +
             '<img class="profileImage" src={profileImage}>' +
            //'<h1>{brandName}</h1>' +
           '<tpl if="listImg==\'data:,\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
                '<tpl else>' +
            '<img class="img" src={listImg} >' +
                 '</tpl>' +
             '<div class="offerTagLineBlurDiv">{tagLine}</div>' +
             //'Termina' +
            '<p class="offerExpiry">Termina el {validTo}</p>' +
         //'<div>{validTo}</div>' +
            '<div class="offerBottomBar">' +
            '<div style="float:left; width:40%;">' +
                  '<img src="./resources/icons/nw-icons/comment.png"></img>' +
             '<p id="{key}-comment" class="offerComments">{commentCount}</p>' +
               //'<label>{commentCount}</label>' +
               '</div>' +
                '<div style="float:right; width:30%;">' +
           '<img src="./resources/icons/nw-icons/like_white.png">' +
               //'<label>{likeCount}</label>' +
            '<p id="{key}-like" class="offerLikes">{likeCount}</p>' +
              '</div>' +
            //'<div style="float:left; width:20%;">' +
            // '<img src="./resources/icons/nw-icons/share.png">' +
            //'</div>' +
               '</div>' +

            '</div>'),
         plugins: [
         {
            xclass: 'MobileApp.util.DataViewPullRefresh',
           // pullText: 'Deslice esta pantalla hacia abajo para refrescar las ofertas.',
            autoSnapBack: false,
            scrollerAutoRefresh: true,
            releaseText: '',
            loadingText: '',
            loadedText: '',
            itemId: 'pull',
            locales: {
               pullText: 'pullRefresh.pullText'
            }
         }, {
            xclass: 'MobileApp.util.LoadMore',
            autoPaging: true
         }],

         store: 'OffersRestDataViewStore'
      }]

   }
});
