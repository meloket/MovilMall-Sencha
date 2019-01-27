Ext.define('MobileApp.view.Settings.SettingsFavProfileView', {
   extend: 'Ext.Container',
   xtype: 'settingsfavprofileview',
   config: {
      scrollable: true,
      title: '',
      layout: 'vbox',
      style: 'background-color:white;',
      fullscreen: true,
      items: [{
            xtype: 'img',
            //offerCarousel is mainly used for carousel but we used the same cls for img.
            cls: 'offerCarousel',
            itemId: 'profImg'
         }, {
            xtype: 'image',
            mode: 'notBackground',
            baseCls: 'offerDetailBrandLogo',
            itemId: 'offerBrandLogo'
         },
         {
            xtype: 'label',
            html: '<p class="expiryText" id="settingValidTo"></p>'
         },
         {
            xtype: 'container',
            layout: {
               type: 'fit'
            },
            id: 'viewSettingOfferDetails',
            locales: {
               html: 'settingsOffers.profileview.moredetails.html'
            },
           /* html: '<div class="offerDetails">' +
             '<div class="offerInside">' +
             '<p class="offerTagLineTitle" id="settingsOfferTagLine"></p>' +
             '<div class="offerDetailEllipsisDiv">' +
             '<p class="offerDescription" id="settingsOfferFinePrint"></p>' +
             '<p class="offerDetailEllipsis" id="settingsOfferDetailEllipsis"></p>' +
             '</div>' +
             //View more Details
             '<p class="viewMoreDetails" id="settingsOffDetBut">Más detalles &raquo;</p>' +
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
                  var finePrint = document.getElementById('settingsOfferFinePrint');
                 var ellipsis = document.getElementById('settingsOfferDetailEllipsis');
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
               //   id: 'locateStoreBut',
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
                  itemId: 'offerLikeFlatBut',
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
                  itemId: 'offersShareBut',
                  locales: {
                     text: 'buttons.share'
                  },
                  margin: '0 0 0 2',
                  flex: 1
               }]
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
          //  itemId: 'commentDataView',
         //   id: 'offersCommentDataView',
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
               html: 'settingsOffers.profileview.viewComments.html'
            },
            //html: '<p class="viewMoreDetails" id="settingsViewAllCom">Ver todos los comentarios &raquo;</p>',
           id: 'settingsViewAllCom',
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
         }/*, {
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
                  //   text:'Post'
                  //  text: 'Publicar'
                  locales: {
                     text: 'buttons.post'
                  }
               }]
         }*/
      ]
   }
});