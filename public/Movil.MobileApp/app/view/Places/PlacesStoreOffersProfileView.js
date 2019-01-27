Ext.define('MobileApp.view.Places.PlacesStoreOffersProfileView', {
   extend: 'Ext.Container',
   xtype: 'placesstoreoffersprofileview',

   config: {
      scrollable: true,
      title: '',
      layout: 'vbox',
      style: 'background-color:white;',
      fullscreen: true,
      items: [{
         xtype: 'img',
         // src: './resources/images/Aero.jpg',
         cls: 'offerCarousel',
         itemId: 'profImg'
      },/*{
            xtype: 'carousel',
            cls: 'offerCarousel',
            indicator: false,
            items: [
               {
                  xtype: 'img',
                 // src: './resources/images/Aero.jpg',
                  cls: 'offerImage',
                  itemId: 'profImg'
               }
            ]
      },*/
          {
             xtype: 'image',
             mode: 'notBackground',
             baseCls: 'offerDetailBrandLogo',
             itemId: 'placesStoresOfferBrandLogo'
          }, {
            xtype: 'label',
            html: '<p class="expiryText" id="placesStoresOffersvalidTo"></p>'
         }, {
            xtype: 'container',
            layout: {
               type: 'fit'
            },
            id: 'placesStoresOffesrViewDetails1',
            //cls: 'offerDetailsContainer',
            locales: {
               html: 'stores.offers.profileview.moredetails.html'
            },
           /* html: '<div class="offerDetails">' +
               '<div class="offerInside">' +
               '<p class="offerTagLineTitle" id="placesStoresOffersTagLine"></p>' +
               '<p class="offerDescription" id="placesStoreOffersFineprint"></p>' +
               //View more Details
               '<p class="viewMoreDetails" id="placesStoresOffesrViewDetails">Más detalles &raquo;</p>' +
               '</div>' +
               '</div>',*/
            listeners: {
               initialize: function(comp, eOpts)
               {
                  comp.element.on(
                     'tap',
                     function(event, node, options, eOpts)
                     {
                        /*send event as a argument to get direction of swipe*/
                        this.fireEvent('tap', event);
                     },
                     comp
                  );
               },
               painted: function () {
                  var finePrint = document.getElementById('placesStoreOffersFineprint');
                  if (finePrint.scrollHeight > finePrint.clientHeight) {
                     var ellipsis = document.getElementById('placesStoresOfferDetailEllipsis');
                     ellipsis.style.display = "block";
                  }
               }
            }
         }, {
            xtype: 'container',
            maxWidth: (window.innerWidth > 0) ? window.innerWidth : screen.width,      //gets the current max width of the viewport open
            layout: {
               type: 'hbox',
               pack: 'center'/*
               align: 'stretch'*/
            },
            items: [{
                  xtype: 'button',
                  cls: 'offer-detail-flat-button',              //otheme.css
                  iconCls: 'couponCodeIcon',
                  itemId:'coupenBut',
                  locales: {
                     text: 'buttons.coupencode'
                  },
                  flex: 1
               }, /*{
                  xtype: 'button',
                  id: 'locateStoreBut',
                  iconCls: 'locateStoreIcon',
                  cls: 'offer-detail-flat-button',
                  margin: '0 0 0 2',
                  itemId: 'locatStoreButton',
                  //  text: 'Locate Store'
                  //text: 'Localizar tienda',
                  locales: {
                     text: 'buttons.locateStore'
                  },
                  flex: 1
               },*/ {
                  xtype: 'button',
                  cls: 'offer-detail-flat-button',              //otheme.css
                  iconCls: 'likeOfferIcon',
                  itemId: 'storesOfferLike',
                  //text: 'Get Coupon Code'
                  //text: 'Como Oferta',
                  locales: {
                     text: 'buttons.like'
                  },
                  margin: '0 0 0 2',
                  flex: 1
               }, {
                  xtype: 'button',
                  cls: 'offer-detail-flat-button',              //otheme.css
                  iconCls: 'shareOfferIcon',
                  itemId:'storesOfferShare',
                  //text: 'Get Coupon Code'
                  //text: 'Cuota',
                  locales: {
                     text: 'buttons.share'
                  },
                  margin: '0 0 0 2',
                  flex: 1
               }]
         }, {
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            margin: '2 0 0 0',
            height: '2.5em',
            width: '100%',
            style: {
               "background-color": "#eeeeee"
            },
            items: [
               {
                  xtype: 'label',
                  locales: {
                     html: 'places.offers.profileview.socials.html'
                  },
                 // html: '<p style="font-size:0.7em; padding: 0.4em 0em 0.4em 0.4em; color:black;">Visita nuestras redes sociales</p>',
                  flex: 3
               },
               {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/fb.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'storesfaceBook'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/gplus.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'storesgoogle'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/linkedin.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'storeslinkedin'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/pinterest.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'storespinterest'
               },
               {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/twitter.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'storestwitter'
               },
               {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/youtube.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'storesyouTube'
               }
            ]
         },
         {
            xtype: 'label',
            //html: '<p style="font-size:0.9em;"><b>Comentarios</b></p>',
            locales: {
               html: 'offers.profileview.comments.html'
            },
            margin: '0.5em 0 0.5em 0.5em',
            textAlign: 'left'
         }, {
            xtype: 'dataview',
            scrollable: false,
            height: '150px',
           itemId: 'placesStoresOfferscommentDataView1',
            id: 'placesStoresOfferscommentDataView',
            store: 'OffersCommentDataViewStore',
            itemTpl: ['<div class="commentBlock">' +
               '<div class="commentUserImage"><img src={photo}></img></div>' +
               '<img class="commentPointerImage" src="resources/images/commentPointer.png"></img>' +
               '<div class="commentDetails">' +
               '<p class="userName">{userName} wrote</p>' +
               '<p class="userComment">{value}</p>' +
               '</div>'
               + '</div>'
         ]
         },
           {
              xtype: 'label',
              locales: {
                 html: 'stores.offers.profileview.viewComments.html'
              },
              //html: '<p class="viewMoreDetails" id="placesStoresOffersViewAllcmt">Ver todos los comentarios &raquo;</p>',
              id: 'placesStoresOffersViewAllCmt',
              margin: '0.5em 0 0 0.5em',
              listeners: {
                 initialize: function (comp, eOpts) {
                    comp.element.on(
                       'tap',
                       function (event, node, options, eOpts) {
                          /*send event as a argument to get direction of swipe*/
                          this.fireEvent('tap', event);
                       },
                       comp
                    );
               }
            }
         },{
            xtype: 'container',
            width: '100%',
            height: 38,
            layout: {
               type: 'hbox'
            },
            items: [{
                  xtype: 'textfield',
                  flex: 1,
                  cls: 'commentField',
                  itemId: 'commentsTextField',
                  //placeHolder:'Leave a comment'
               //placeHolder: 'Deja un comentario'
                  locales: {
                     placeHolder: 'offers.profileview.cmtTxtPlaceHolder.placeHolder'
                  }
               }, {
                  xtype: 'button',
                  flex: 0.22,
                  itemId: 'postComment',
                  cls: 'flat-button',
                  //   text:'Post'
                  //text: 'Publicar'
                  locales: {
                     text: 'buttons.post'
                  }
               }]
         }
      ]
   }
});