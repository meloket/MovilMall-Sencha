var ppi = window.devicePixelRatio;
Ext.define('MobileApp.view.Offers.OffersFavDataView', {
   extend: 'Ext.Container',
   xtype: 'offersfavdataview',

   config: {
      layout: 'fit',
      //title: 'Ofertas Favoritas',
      //style: 'background-color: #ccc',
      // scrollable:true,
      items: [{
         /*height:'100%',*/
         xtype: 'list',
         id: 'offersFavDataView',
         scrollToTopOnRefresh: true,
         style: 'background-color: #ccc',
         scrollable: {
            direction: 'vertical',
            directionLock: true
         },
         inline: true,
         locales: {
            emptyText: 'Offers.emptyText'
         },
         //  emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/coffee1.png" alt="No Offer available currently" >',
         cls: 'offersDataview',
         itemTpl: new Ext.XTemplate(
            '<div class="main">' +
               // '<p class="offerTitle">{brandName}</p>' +
                '<div class="profileImage" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/120x50/' + ppi + '/{brandId}-logo);' + 'background-size: 100% 100%;"> </div>' +
               '<div class="img" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/150x112/' + ppi + '/{key}-crop);' + 'background-size: cover;"> </div>' +
              /* '<img class="profileImage" src={profileImage}>' +
               //'<h1>{brandName}</h1>' +
               '<tpl if="listImg==\'data:,\'">' +
               '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
               '<tpl else>' +
               '<img class="img" src={listImg} >' +
               '</tpl>' +*/
               '<div class="offerTagLineBlurDiv">{tagLine}</div>' +
               //'Termina' +
               '<div>{[this.getPercentage(values.validTo)]}</div>' +
               // '<p class="offerExpiry">Termina el {validTo}</p>' +
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
               '</div>',
            {
               getPercentage: function(validTo)
               {
                  var items = Ext.getStore('LoginSqlStore').data.items;
                  if (items.length != 0)
                  {
                     var lang = items[0].data.lang;
                     if (lang == 'en')
                     {
                        var dateEn = '<p class="offerExpiry">Expires on&nbsp' + validTo + '</p>';
                        return dateEn;
                     }
                     if (lang == 'fr')
                     {
                        var dateFr = '<p class="offerExpiry">Termina &nbsp' + validTo + '</p>';
                        return dateFr;
                     }

                  } else
                  {
                     return '<p class="offerExpiry">Termina &nbsp' + validTo + '</p>';
                  }
               }
            }
         ),

         store: 'OffersFavDataViewSqlStore'
      }],
      listeners: {
         initialize: function(comp, eOpts)
         {
            comp.bodyElement.on(
               'painted',
               function(event, node, options, eOpts)
               {
                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('painted', event);
               },
               comp
            );


            comp.bodyElement.on(
               'swipe',
               function(event, node, options, eOpts)
               {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );
         }
      }
   }
});