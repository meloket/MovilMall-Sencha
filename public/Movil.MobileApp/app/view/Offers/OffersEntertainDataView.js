Ext.define('MobileApp.view.Offers.OffersEntertainDataView', {
   extend: 'Ext.Container',
   xtype: 'offersentertaindataview',
   
   config: {
      layout: 'fit',
      title: 'Entretenimiento',
      items: [{
         /*height:'100%',*/
         xtype: 'dataview',
         id: 'offersEntertainDataView',
         scrollable: true,
         scrollToTopOnRefresh: false,
         style: 'background-color: #ccc',
         locales: {
            emptyText: 'Offers.emptyText'
         },
         //emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/coffee1.png" alt="No Offer available currently" >',
         inline: true,
         cls: 'offersDataview',
         itemTpl:  new Ext.XTemplate(
            '<div class="main">' +
         //'<p class="offerTitle">{brandName}</p>' +
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
            //'<p class="offerExpiry">{validTo}</p>' +
        //'<div>{validTo}</div>' +
           '<div class="offerBottomBar">' +
           '<div style="float:left; width:40%;">' +
                  '<img src="./resources/icons/nw-icons/comment.png"></img>' +
            '<p id="{key}-comment" class="offerComments">{commentCount}</p>' +
              //'<label>{commentCount}</label>' +
              '</div>' +
              '<div style="float:right; width:30%;">' +
         '<img src="./resources/icons/nw-icons/like_white.png">' +
             '<p id="{key}-like" class="offerLikes">{likeCount}</p>' +
              //'<label>{likeCount}</label>' +
             '</div>' +
         //  '<div style="float:left; width:20%;">' +
         //'<img src="./resources/icons/nw-icons/share.png">' +
         //  '</div>' +
              '</div>' +
           '</div>'),
        
         plugins: [
           {
              xclass: 'MobileApp.util.DataViewPullRefresh',
            //  pullText: 'Deslice esta pantalla hacia abajo para refrescar las ofertas.',
              autoSnapBack: false,
              scrollerAutoRefresh: true,
              releaseText: '',
              loadingText: '',
              loadedText: '',
              itemId: 'pull',
              locales: {
                 pullText: 'pullRefresh.pullText'
              }
           }],
         store: 'OffersEntertainDataViewSqlStore'
      }]

   }
});
