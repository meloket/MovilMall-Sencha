Ext.define('MobileApp.view.Places.PlacesStoreProfileView', {
   extend: 'Ext.Container',
   xtype: 'placesstoreprofileview',

   config: {
      scrollable: true,
      title: '',
      layout: 'vbox',
      fullscreen: true,
      style: 'background-color:white;',
      items: [{
         xtype: 'carousel',
         //height: '340px',
         cls: 'placesCarousel',
         indicator: false,
         items: [
            {
               xtype: 'img',
               //height: '320px',
               src: './resources/images/Aero.jpg',
               cls: 'placesImage',
               itemId: 'placesProfImg'
            }
         ]
      }, {
         xtype: 'container',
         layout: {
            type: 'hbox'
         },
         html: '<div class="placeTitleBlock">' +
            '<div class="placeHeaderFavImg">' +
            '<img src="resources/icons/nw-icons/favourite.png"></img>' +
            '<p class="favCount" id="storefavCount"></p>' +
            '</div>' +
            '<p class="placeHeading" id="storeTitle">{name}</p>' +
            //'<p class="placeCategory">Category - Food</p>' +
            '</div>'
      },
        {
             xtype: 'container',
             layout: {
                type: 'fit'
             },
             locales: {
                html: 'stores.profileview.address.html'
             }
            /* html: '<div class="placeDetail">' +
                '<p class="placeDescription" id="storeDescription"><p>' +
                '<div class="placeOpenHours">' +
                '<p><b>Horario</b></p>' +
                '<p id="storeFromwh"></p>' +/*
                '<p>To</p>' +
                 '<p id="storeTowh">{workingHoursTo}</p>' +#1#
                '</div>' +
                '<div class="placeAddress">' +
                '<p><b>Address</b></p>' +
                //'<p class="insideMallMallName" id="insideMallMallName">Mall - Pheonix Mall, London</p>' +
                '<p class="insideMallAddress" id="storeInsideMallAdress"></p>' +
                '<p class="locationWithinMall" id="storeLocationWithinMall"></p>' +
               // '<p class="addressOutsideMall" id="addressOutsideMall"></p>'+
                '</div>' +
                '</div>'*/
          },/* {
         xtype: 'label',
         itemId: 'description',
         cls: 'profHtml',
         margin: '15 15 15 15',
         html: 'Active with the Winter collection,discover new fabric,clothing,footwear and accessories.Be sure to find a Woodland product for your next adventure this.'
      }, {
         xtype: 'label',
         margin: '0 0 5 15',
         //html: '<font><u><b>Open hours</b></u></font>',
         html: '<font><u><b>Horas Abiertas</b></u></font>'
      },
         {
            xtype: 'label',
            margin: '0 0 10 15',
            itemId: 'profWorkHours',
            html: 'Daily 10 am to 10 pm'
         }, {
            xtype: 'label',
            margin: '0 0 0 15',
            html: '<font><u><b>Address:</b></u></font>'
         },*/ /*{
            xtype: 'dataview',
            scrollable: false,
            layout: 'fit',
            height:'100px',
             cls:'address',
            store: 'AddressDataViewStore',
            itemTpl: '<div class="addr">' +
               
               '<font><b>Mall :</b>{mallName}</font>' +
               '<br><font><b>Mall Address : </b>{mallAddress}</font>' +
               '</br><font><b>Location within mall : </b>{locWithinMall}</font>' 
               
          
         }*//* {
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            itemId: 'mallName',
            margin: '0 0 0 15',
            items: [{
               xtype: 'label',
               html: 'Mall:'
            }, {
               xtype: 'label',
               itemId: 'mallNameTitle',
               html: 'Pheonic Mall,London'
            }]
         }, {
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            margin: '0 0 0 15',
            items: [{
               xtype: 'label',
               itemId: 'mallAddLabel',
               html: 'Mall Address:'
            }, {
               xtype: 'label',
               width: '70%',
               itemId: 'mallAdd',
               htmlWrap: true,
               html: 'Opp St Xaviers School,Nearby Thames Market'
            }]
         },*/
        /* {
            xtype: 'container',
            itemId: 'locWithMall',
            layout: {
               type: 'hbox'
            },
            margin: '0 0 0 15',
            items: [{
               xtype: 'label',
               html: 'Location within mall:'
            }, {
               xtype: 'label',
               itemId: 'locLevel',
               html: 'Level 1'
            }]
         },*/
         {
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            width: '100%',
            items: [ {
               xtype: 'button',
               cls: 'flat-button',  
               iconCls: 'favPlaceCodeIcon',
            //margin: '0 15 15 15',
            /*margin:''*/
            itemId:'favFrmView',
               //text: 'Favourito',
            locales: {
               text: 'buttons.favourite'
            },
            flex: 1
         },
         {
            xtype: 'button',
            //margin: '0 15 15 15',
            itemId:'placesStoreViewDealBtn',
            iconCls: 'offersIcon',
            cls: 'flat-button',
            margin: '0 0 0 2',
            //text: 'Ver Ofertas',
            locales: {
               text: 'buttons.viewOffers'
            },
            flex: 1
         }]
         },
         {
            xtype: 'map',
            //height: '200px',
            margin: '2 0 0 0',
            draggable: false,
            cls: 'placeMapContainer',
            itemId: 'map',
            //margin: '0 15 15 15',
            listeners: {
               initialize: function (comp, eOpts) {
                  comp.bodyElement.on(
                     'tap',
                     function (event, node, options, eOpts) {

                        /*send event as a argument to get direction of swipe*/
                        this.fireEvent('tap', event);
                     },
                     comp
                  );
               }
            }
         }
      ]
   }
});