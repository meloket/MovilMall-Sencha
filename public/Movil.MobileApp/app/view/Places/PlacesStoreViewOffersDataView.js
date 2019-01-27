Ext.define('MobileApp.view.Places.PlacesStoreViewOffersDataView', {
   extend: 'Ext.Container',
   xtype: 'placesstoreviewoffersdataview',

   config: {
      layout: 'fit',
      title: 'Ofertas',
      items: [{
         /*height:'100%',*/
         xtype: 'list',
         scrollable: true,
         style: 'background-color: #ccc',
         inline: true,
         id: 'placesStoreViewOffersDataView',
         cls: 'offersDataview',
         locales: {
            emptyText: 'Offers.emptyText'
         },
         //   emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/coffee1.png" alt="No Offer available currently" >',

         itemTpl: new Ext.XTemplate(
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
            // '<p class="offerExpiry">Termina el {validTo}</p>' +
               '<div>{[this.getPercentage(values.validTo)]}</div>' +
               //'<div>{validTo}</div>' +
               '<div class="offerBottomBar">' +
               '<div style="float:left; width:40%;">' +
               '<img src="./resources/icons/nw-icons/comment.png"></img>' +
               '<p class="offerComments">{commentCount}</p>' +
               //'<label>{commentCount}</label>' +
               '</div>' +
               '<div style="float:right; width:30%;">' +
               '<img src="./resources/icons/nw-icons/like_white.png">' +
               '<p class="offerLikes">{likeCount}</p>' +
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
                        var dateFr = '<p class="offerExpiry">Termina el&nbsp' + validTo + '</p>';
                        return dateFr;
                     }

                  } else
                  {
                     return '<p class="offerExpiry">Termina el&nbsp' + validTo + '</p>';
                  }
               }
            }
         ),

         store: 'PlacesStoresViewOffersStore'
      }],
      listeners: {
         initialize: function(comp, eOpts)
         {
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