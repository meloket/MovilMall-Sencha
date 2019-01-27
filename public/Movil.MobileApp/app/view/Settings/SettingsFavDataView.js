Ext.define('MobileApp.view.Settings.SettingsFavDataView', {
   extend: 'Ext.Container',
   xtype: 'settingsfavdataview',

   config: {
      
      layout: 'fit',
      title: 'Gustos',
      
      items: [{
         /*height:'100%',*/
         xtype: 'list',
         id: 'settingsFavDataView',
         scrollToTopOnRefresh: false,
         scrollable: true,
         style: 'background-color: #ccc',
         inline: true,
         emptyText:[ '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/coffee1.png" alt="No Offer available currently" >'+
         '<input type="button" class="flat-button" style="background-color: #6fcddb !important;font-size: 0.8em !important;color: white !important;height: 2em;width: 50%;" id="settingsOffersLink"  value="Enlace a las ofertas"/>'].join(''),
     /*  listeners: {
          painted: function()
          {
          //   var a = document.getElementById('settingsOffersLink');
             document.getElementById('settingsOffersLink').onclick = function()
             {
                var a = this.getOffersHotDealsDataView();
                alert(a);
             };
          }      
      },*/
         cls: 'offersDataview',
         itemTpl: new Ext.XTemplate(
            '<div class="main">' +
            //'<p class="offerTitle">{brandName}</p>' +
                '<img class="profileImage" src={profileImage}>' +
            //'<h1>{brandName}</h1>' +
           '<tpl if="img==\'data:,\'">' +
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
             '<p class="offerComments">{commentCount}</p>' +
               //'<label>{commentCount}</label>' +
               '</div>' +
                '<div style="float:right; width:30%;">' +
           '<img src="./resources/icons/nw-icons/like_white.png">' +
               //'<label>{likeCount}</label>' +
            '<p class="offerLikes">{likeCount}</p>' +
              '</div>' +
            //'<div style="float:left; width:20%;">' +
            // '<img src="./resources/icons/nw-icons/share.png">' +
            //'</div>' +
               '</div>' +

            '</div>'),

         store: 'OffersLikesDataViewSqlStore'
      }]

   }
});
