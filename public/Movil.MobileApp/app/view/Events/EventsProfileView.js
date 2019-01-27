Ext.define('MobileApp.view.Events.EventsProfileView', {
   extend: 'Ext.Container',
   xtype: 'eventsprofileview',

   config: {
      scrollable: true,
      title: 'Aeropostale',
      layout: 'vbox',
      style: 'background-color:white;',
      fullscreen: true,
      items: [{
            xtype: 'carousel',
            cls: 'placesCarousel',       
            indicator: false,
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
                  cls: 'eventProfileImage',
                  itemId: 'eventProfImg',
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
            }
              /* {
                  xtype: 'img',
                  src: './resources/images/Aero.jpg',
                  cls: 'eventProfileImage',
                  itemId: 'eventProfImg'
               }*/
            ]
         }, /*{
            xtype: 'container',
            cls: 'profLabButt',
            layout: {
               type: 'hbox'
            },
            items: [{
                  xtype: 'label',
                  flex: 1.3,
                  margin: '10 0 0 0',
                  itemId: 'usersAttend',
                  html: 'Users attending : 54'
               }, {
                  xtype: 'image',
                  src: './resources/images/blike.png',
                  flex: 0.3,
                  id: 'likeImg',
                  height: '30px',
                  width: '30px'
               }, {
                  xtype: 'image',
                  src: './resources/images/eshare.png',
                  flex: 0.3,
                  height: '28px',
                  width: '28px'
               }]
         },*/
         {
            xtype: 'container',
            itemId:'eventsProHeader',
            layout: {
               type: 'hbox'
            },
            locales: {
               html: 'events.profileview.attendees.html'
            },
           /* html: '<div class="eventTitleBlock">' +
               '<div class="eventHeaderShareImg">' +
               '<img src="resources/icons/nw-icons/share.png"></img>' +
               '</div>' +
               '<div class="eventHeaderLikeDiv">' +
               '<div class="eventHeaderLikeimg" id="eveLikeIcon"></div>' +
               '<p class="eventProfileLikeCount" id="eventLikeCount">0</p>' +
               '</div>' +
               '<p class="eventHeading" id="eventTitle">Sports Fest at ADIDAS</p>' +
               '<p class="eventProfileAttendance">Assietiendo :&nbsp;</p>' + '<p class="eventProfileAttendance" id = "eventProfileAttendees" ></p>' +
               '</div>',*/
            listeners: {
               initialize: function (comp, eOpts) {
                  comp.element.on(
                  'tap',
                  function (event, node, options, eOpts) {
                     
                     this.fireEvent('tap',event);

                  },
                  comp
                  );
               }
            }

         },
         {
            xtype: 'container',
            layout: {
               type: 'fit'
            },
            html: '<div class="eventProfileDetail">' +
               //event loc block
               '<div class="eventProfileLocDetails">' +
               '<div class="eventProfileLocImg">' +
               '</div>' +
               '<div class="eventProfileLoc" id= "eventProfileLocation">' +
               '<p><p>' +
               '</div>' +
               '<br style="clear:both;" />' +
               '</div>' +
               //event date
               '<div class="eventProfileDateDetails">' +
               '<div class="eventProfileDateImg">' +
               '</div>' +
               '<div class="eventProfileDate" id="eventDate">' +
               '<p><p>' +
               '</div>' +
               '<br style="clear:both;" />' +
               '</div>' +
               //event date time
               '<div class="eventProfileTimeDetails">' +
               '<div class="eventProfileTimeImg">' +
               '</div>' +
               '<div class="eventProfileTime" id ="eventTime">' +
               '<p><p>' +
               '</div>' +
               '<br style="clear:both;" />' +
               '</div>' +
               '</div>'
         },/* {
            xtype: 'label',
            cls: 'profHtml',
            itemId: 'location',
            margin: '10 15 10 15',
            html: 'Adidas Store,Orlando Premium Outlets,8200 Vineland Ave Suite 1553 Orlando,FL 32821'
         },
         {
            xtype: 'label',
            cls: 'profHtml',
            itemId: 'date',
            margin: '0 15 10 15',
            html: '<font><b>Thrsday 12th Jan 2014</b></font>'
         },
         {
            xtype: 'label',
            itemId: 'time',
            margin: '0 15 10 15',
            html: '<font><b>From 9 AM onwards</b></font>'
         },*/
        /* {
            xtype: 'label',
            margin: '0 15 0 15',
            html: '<font><b>Event Details</b></font>'
         },*/
          {
             xtype: 'label',
             itemId: 'details',
             margin: '0 0 0 0.7em',
             locales: {
                html: 'events.profileview.details.html'
             }
           //  html: '<span style="font-size: 0.7em; line-height: 1.5em;"><b>Detalles</b></span>'
          },
          {
             xtype: 'container',
             layout: {
                type: 'fit'
             },
             html: '<div class="eventProfileDetailsPara" id="evnetDetails">' +
                '<p></p>' +
                '</div>'
          },
       /*  {
            xtype: 'label',
            itemId: 'details',
            margin: '0 15 0 15',
            // html: '<font><b>Event Details</b></font>'
            html: '<font><b>Detalles del Evento</b></font>'
         },*/
         {
            xtype: 'checkboxfield',
            margin: '0 15 10 0',
            itemId: 'attndEvToggle',
            labelWidth: '80%',
            //label: 'Attending this event ?',
            //html: '<span style="font-size: 0.7em; line-height: 1.5em;"><b>Asistir a este Evento?</b></span>',
            // label: 'Asistir a este Evento?',
            locales: {
               label: 'events.profileview.attending.label'
            },
            id: 'attendEvBut'/*,
            text:'Attend this event'*/
         },
         {
            xtype: 'button', 
            cls: 'flat-button-no-icon',            
            margin: '0 auto 0 auto',
            width: '12em',
            itemId:'markOnCal',
            //text: 'Mark on Calender'
            //text: 'Marcar en mí calendario'
            locales: {
               text: 'buttons.markonCal'
            }
         },
         {
            xtype: 'label',
            // html: '<p style="font-size:0.7em;"><b>Comentarios</b></p>',
            locales: {
               html: 'offers.profileview.comments.html'
            },
            margin: '0.5em 0 0.5em 0.7em',
            textAlign: 'left'
            //cls: 'profHeading'
         }, {
            xtype: 'dataview',
            scrollable: false,
            itemId: 'commDataView',
            id: 'eventsCommentDataView',
            cls: 'commentDataView',
            height: '150px',
            store: 'EventsCommentDataViewStore',
         /*   itemTpl: ['<div class="comments">' +
               '<p class="userName"><b>{userName} : </b>{value}</p>'
               + '</div>' +
               '<div class="dottedUnderline"></div>']*/
            itemTpl: ['<div class="commentBlock">' +
                       '<div class="commentUserImage"><img src={photo}></img></div>' +
                       '<img class="commentPointerImage" src="resources/images/commentPointer.png"></img>' +
                       '<div class="commentDetails">' +
                          '<p class="userName">{userName} wrote</p>' +
                          '<p class="userComment">{value}</p>' +
                       '</div>'
                    + '</div>']
         },
         {
            xtype: 'label',
            //  html: '<p class="viewMoreDetails" id="eViewAllCom">Ver todos los comentarios &raquo;</p>',
            locales: {
               html: 'events.profileview.viewAllCmt.html'
            },
            margin: '0.5em 0 0 0.5em',
            id: 'eViewAllCom',
            cls: 'labelCls',
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
         },
         {
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
                  itemId: 'evCommTextField',
                  //placeHolder:'Leave a comment'
               // placeHolder: 'Deja un comentario'
                  locales: {
                     placeHolder: 'offers.profileview.cmtTxtPlaceHolder.placeHolder'
                  }
               }, {
                  xtype: 'button',
                  flex: 0.22,
                  id: 'evePostComment',
                  cls: 'flat-button',
                  disabled:true,
                  //text: 'Publicar'
                  locales: {
                     text: 'buttons.post'
                  }
               }]
         }]
   }
});