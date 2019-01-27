Ext.define('MobileApp.view.Offers.OffersProfileView', {
   extend: 'Ext.Container',
   xtype: 'offersprofileview',

   config: {
      scrollable: true,
      title: '',
      layout: 'vbox',
      style: 'background-color:white;',
      fullscreen: true,
      items: [{
         xtype: 'container',
         items: [{
            xtype: 'img',
            src: './resources/images/offerblank.png',
            cls: 'offerCarousel',
            itemId: 'profImgOne'

         }, {
            xtype: 'img',
            //offerCarousel is mainly used for carousel but we used the same cls for img.
            cls: 'offerCarousel',
            itemId: 'profImg',
                  listeners: {
                    // delay: 2000,

                     load: function(image)
                     {
                        var container = image.up('container'),
                            spinner = container.down('img');
                        spinner.hide();
                      //  container.remove(spinner);
                        console.log(image);
                        image.show();
                     }
                  }
         }]
      },/*{
         xtype: 'img',
         //offerCarousel is mainly used for carousel but we used the same cls for img.
            cls: 'offerCarousel',
            itemId: 'profImg'
         },*/ /*{
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
         },*//* {
            xtype: 'image',
            mode: 'notBackground',
            baseCls: 'offerDetailBrandLogo',
            itemId:'offerBrandLogo'
         }, */{
            xtype: 'container',
            items: [{
               xtype: 'img',
               mode: 'notBackground',
               src: './resources/images/empty-logo.png',
               baseCls: 'offerDetailBrandLogo',
               itemId: 'offerBrandLogoOne'

            }, {
               xtype: 'image',
               mode: 'notBackground',
               baseCls: 'offerDetailBrandLogo',
               itemId:'offerBrandLogo',
               listeners: {
                  // delay: 2000,

                  load: function (image) {
                     var container = image.up('container'),
                         spinner = container.down('img');
                     spinner.hide();
                     //  container.remove(spinner);
                     console.log(image);
                     image.show();
                  }
               }
            }]
         },
         /* {
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            itemId: 'validTo',
             locales: {
               html: 'offers.profileview.ends.html'
            }
            html:
               '<div class="offerExpBadge">' +
                  '<p class="expiryText">Termina</p>' +
                  '<p class="expiryText" id="validTo"></p>' +
                  '</div>' +
                  '<div class="offerBadge"></div>'
         },*/ /*{
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            cls: 'likeCommentShareContainer',
            items: [{
                  xtype: 'image',
                  src: './resources/icons/nw-icons/comment_event.png',
                  flex: 1,
                  cls: 'commentImage',
                  itemId: 'offersCommentHTML',
                  html: '<div class="commCount" id="offersCommentHTML">1</div>'
               }, {
                  xtype: 'container',
                  layout: 'fit',
                  itemId: 'offersLikeHeader',
                  flex: 1,
                  html: '<div class="offersLikeDiv">' +
                     '<div class="offersLikeImage" id="offersLikeImage">' +
                     '</div>' +
                     '<p class="likeCount" id="offersLikeHTML"></p>' +
                     '</div>',
                  listeners: {
                     initialize: function(comp, eOpts)
                     {
                        comp.element.on(
                           'tap',
                           function(event, node, options, eOpts)
                           {
                              this.fireEvent('tap');
                           },
                           comp
                        );
                     }
                  }
               }, {
                  xtype: 'image',
                  src: './resources/icons/nw-icons/share_black.png',
                  flex: 1,
                  //styleHtmlContent: true
                  cls: 'shareImage'
               }]
         },*/{
            xtype: 'label',
            html: '<p class="expiryText" id="validTo"></p>'
         },
         {
            xtype: 'container',
            layout: {
               type: 'fit'
            },
            id: 'viewOfferDetails',
            //cls: 'offerDetailsContainer',
            locales: {
               html: 'offers.profileview.moredetails.html'
            },
          /*  html: '<div class="offerDetails">' +
               '<div class="offerInside">' +
               '<p class="offerTagLineTitle" id="tagLine"></p>' +
               '<div class="offerDetailEllipsisDiv">' +
               '<p class="offerDescription" id="finePrint"></p>' +
               '<p class="offerDetailEllipsis" id="offerDetailEllipsis"></p>' +
               '</div>' +
               //View more Details
               '<p class="viewMoreDetails" id="offDetBut">Más detalles &raquo;</p>' +
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
               painted: function()
               {
                  var finePrint = document.getElementById('finePrint');
                  var ellipsis = document.getElementById('offerDetailEllipsis');
                  if (finePrint.scrollHeight > finePrint.clientHeight)
                  {
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
                  itemId: 'couponCodeBtn',
                  //text: 'Get Coupon Code'
               // text: 'Código Cupón',
                  locales: {
                     text: 'buttons.coupencode'
                  },
                  flex: 1
               }, {
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
               }, {
                  xtype: 'button',
                  cls: 'offer-detail-flat-button',              //otheme.css
                  iconCls: 'likeOfferIcon',
                  itemId:'offerLikeFlatBut',
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
                  itemId:'offersShareBut',
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
                  itemId: 'offersfaceBook'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/twitter.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'offerstwitter'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/instagram.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'offerslinkedin'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/pinterest.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'offerspinterest'
               },
               
               {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/youtube.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'offersyouTube'
               }, {
                  xtype: 'image',
                  src: './resources/icons/social/socialRound/gplus.png',
                  style: 'background-size:90%',
                  flex: 1,
                  itemId: 'offersgoogle'
               }
            ]
         },
         {
            xtype: 'label',
            // html: "<p style='font-size:0.9em;'><b>Comentarios</b></p>",
            locales: {
               html: 'offers.profileview.comments.html'
            },
            margin: '0.5em 0 0.5em 0.5em',
            textAlign: 'left'
         }, {
            xtype: 'dataview',
            scrollable: null,
            //height: '150px',
            cls: 'commentDataView',
            itemId: 'commentDataView',
            id: 'offersCommentDataView',
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
               html: 'offers.profileview.viewComments.html'
            },
            //html: '<p class="viewMoreDetails" id="fViewAllCom">Ver todos los comentarios &raquo;</p>',
            id: 'fViewAllCom',
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
         }, {
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
               //  placeHolder: 'Deja un comentario'
                  locales: {
                     placeHolder: 'offers.profileview.cmtTxtPlaceHolder.placeHolder'
                  }
               }, {
                  xtype: 'button',
                  flex: 0.22,
                  itemId: 'postComment',
                  cls: 'flat-button',
                  disabled:true,
                  //   text:'Post'
                  //  text: 'Publicar'
                  locales: {
                     text: 'buttons.post'
                  }
               }]
         }
      ]
   }
});