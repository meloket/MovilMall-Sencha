Ext.define('MobileApp.view.Places.PlacesOffersProfileView', {
   extend: 'Ext.Container',
   xtype: 'placesoffersprofileview',

   config: {
      scrollable: true,
      title: '',
      layout: 'vbox',
      style: 'background-color:white;',
      fullscreen: true,
      items: [
         {
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
                  itemId: 'placesOfferBrandLogo'
               },
         {
            xtype: 'label',
            html: '<p class="expiryText" id="placesOffersValidTo"></p>'
         }, {
            xtype: 'container',
            layout: {
               type: 'fit'
            },
            id: 'placesOfferViewDetails',
            //cls: 'offerDetailsContainer',
            locales: {
               html: 'places.offers.profileview.moredetails.html'
            },
          /*  html: '<div class="offerDetails">' +
               '<div class="offerInside">' +
               '<p class="offerTagLineTitle" id="placesOffersTagLine"></p>' +
               '<p class="offerDescription" id="placesOffersFineprint"></p>' +
               //View more Details
               '<p class="viewMoreDetails" id="placesofferDetails">Más detalles &raquo;</p>' +
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
                  var finePrint = document.getElementById('placesOffersFineprint');
                  if (finePrint.scrollHeight > finePrint.clientHeight) {
                     var ellipsis = document.getElementById('placesOfferDetailEllipsis');
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
                  //text: 'Get Coupon Code'
               //text: 'Código Cupón',
                  locales: {
                     text: 'buttons.coupencode'
                  },
                  flex: 1
               },/* {
                  xtype: 'button',
                 // id: 'placesOfferslocateStoreBut',
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
                  //text: 'Get Coupon Code'
                  //text: 'Como Oferta',
                  locales: {
                     text: 'buttons.like'
                  },
                  itemId: 'placesOfferLike',
                  margin: '0 0 0 2',
                  flex: 1
               }, {
                  xtype: 'button',
                  cls: 'offer-detail-flat-button',              //otheme.css
                  iconCls: 'shareOfferIcon',
                  itemId:'placesOffersShareBut',
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
                  //html: '<p style="font-size:0.7em; padding: 0.4em 0em 0.4em 0.4em; color:black;">Visita nuestras redes sociales</p>',
                  flex: 3
               },
               {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/fb.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'placesfaceBook'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/gplus.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'placesgoogle'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/linkedin.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'placeslinkedin'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/pinterest.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'placespinterest'
               },
               {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/twitter.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'placestwitter'
               },
               {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/youtube.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'placesyoutube'
               }
            ]
         },
         {
            xtype: 'label',
            //  html: 'COMMENTS',
            //html: '<p style="font-size:0.9em;"><b>Comentarios</b></p>',
            locales: {
               html: 'offers.profileview.comments.html'
            },
            margin: '0.5em 0 0.5em 0.5em',
            textAlign: 'left'
         }, {
            xtype: 'dataview',
            scrollable: null,
            cls: 'commentDataView',
            itemId: 'placesOffferscommentDataView',
            id: 'placesOffersViewComment',
            store: 'OffersCommentDataViewStore',
            itemTpl: ['<div class="commentBlock">' +
                        '<div class="commentUserImage"><img src={photo}></img></div>' +
                        '<img class="commentPointerImage" src="resources/images/commentPointer.png"></img>' +
                        '<div class="commentDetails">' +
                           '<p class="userName">{userName} wrote</p>' +
                           '<p class="userComment">{value}</p>' +
                        '</div>'
                     + '</div>'

              /* '<p class="userName"><b>{userName} : </b>{value}</p>'*/
               /*'<div class="dottedUnderline"></div>'*/]
         },
         {
            xtype: 'label',
            locales: {
               html: 'places.offers.profileview.viewComments.html'
            },
            //html: '<p class="viewMoreDetails" id="placesOffersViewAllCom">Ver todos los comentarios &raquo;</p>',
            itemId: 'placesOffersviewAllCom',
            margin: '0.5em 0 0 0.5em',
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