Ext.define('MobileApp.view.Places.PlacesProfileView', {
   extend: 'Ext.Container',
   xtype: 'placesprofileview',

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
                  //src: './resources/images/Aero.jpg',
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
               '<p class="favCount" id="favCount"></p>' +
               '</div>' +
               '<p class="placeHeading" id="placeTitle"></p>' +
               //'<p class="placeCategory">Category - Food</p>' +
               '</div>'
          /*  items: [{
               xtype: 'label',
               itemId: 'nameLab',
                  margin: '5 0 10 15',
                  flex: 2,
                  html: '<font size="5px"><b>Woodland</b></font>'
               }, {
                  xtype: 'image',
                  src: './resources/images/fav1.png',
                  flex: 1,
                  itemId:'profFavImg',
                  height: '35px',
                  width: '35px',
                  styleHtmlContent: true,
                  html: '11'
               }]*/
         }, /*{
            xtype: 'container',
            margin: '0 0 0 15',
            layout: {
               type: 'hbox'
            },
            items: [{
               xtype: 'label',
               html: '<font><b>Categoría:</b></font>'
               }, {
                  xtype: 'label',
                  itemId: 'profCat',
                  html: 'Footwear'
               }]
         },*//* {
            xtype: 'label',
            itemId:'description',
            cls: 'profHtml',
            margin: '15 15 15 15',
            html: 'Active with the Winter collection,discover new fabric,clothing,footwear and accessories.Be sure to find a Woodland product for your next adventure this.'
         },*/
         {
            xtype: 'container',
            layout: {
               type: 'fit'
            },
            locales: {
               html: 'places.profileview.address.html'
            }
          /*  html: '<div class="placeDetail">' +
               '<p class="placeDescription" id="placeDescription"><p>' +
               '<div class="placeOpenHours" id= "placesWh">' +
               '<p><b>Horario</b></p>' +
               '<p id="fromwh"></p>' +
               '</div>' +
               '<div class="placeAddress">' +
               //'<p><b>Address</b></p>' +
                   '<p><b>Dirección</b></p>' +
               //'<p class="insideMallMallName" id="insideMallMallName">Mall - Pheonix Mall, London</p>' +
               '<p class="insideMallAddress" id="insideMallAdress"></p>' +
               '<p class="locationWithinMall" id="locationWithinMall"></p>' +
              // '<p class="addressOutsideMall" id="addressOutsideMall"></p>'+
               '</div>' +
               '</div>'*/
         },
       /*  {
            xtype: 'label',
            margin: '0 0 5 15',
            html: '<font><u><b>Horario</b></u></font>'
         },
         {
            xtype: 'label',
            margin: '0 0 10 15',
            itemId:'profWorkHours',
            html: 'Daily 10 am to 10 pm'
         }, {
            xtype: 'label',
            margin: '0 0 0 15',
            html: '<font><u><b>Dirección</b></u></font>'
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
            itemId:'mallName',
            margin:'0 0 0 15',
            items: [{
               xtype: 'label',
               html: 'Mall:'
               } /*{
                  xtype: 'label',
                  itemId:'mallNameTitle'
                  html: 'Pheonic Mall,London'
               }#1#]
         },*//* {
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            margin: '0 0 0 15',
            items: [{
               xtype: 'label',
               itemId:'mallAddLabel',
                  html: 'Mall Address:'
               }, {
                  xtype: 'label',
                  width: '70%',
                  itemId:'mallAdd',
                  html: 'Opp St Xaviers School,Nearby Thames Market'
               }]
         },
         {
            xtype: 'container',
            itemId:'locWithMall',
            layout: {
               type: 'hbox'
            },
            margin: '0 0 0 15',
            items: [{
                  xtype: 'label',
                  html: 'Location within mall:'
               }, {
                  xtype: 'label',
                  itemId:'locLevel',
                  html: 'Level 1'
               }]
         },*/
       /*  {
            xtype: 'button',
            margin: '0 15 15 15',
            /*margin:''#1#
            itemId:'favFrmView',
            text: 'Favorito de este Lugar'
         },
         {
            xtype: 'button',
            margin: '0 15 15 15',
            id: 'placeViewDealsBut',
            // text: 'View Deals/Offer'
            text: 'Ver Ofertas'
         },*/
         {
            xtype: 'container',
            layout: {
               type: 'hbox'
            },
            width: '100%',
            items: [{
               xtype: 'button',
               cls: 'flat-button',              //otheme.css
               iconCls: 'favPlaceCodeIcon',
               itemId: 'favFrmView',
               //text: 'Get Coupon Code'
               //text: 'Favorito',
               locales: {
                  text: 'buttons.favourite'
               },
               flex: 1
            }, {
               xtype: 'button',
               id: 'placeViewDealsBut',
               iconCls: 'offersIcon',
               cls: 'flat-button',
               margin: '0 0 0 2',
               //  text: 'Locate Store'
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
            mapOptions: {
               zoom: 18
            },
               //margin: '0 15 15 15',
            listeners: {
               initialize: function (comp, eOpts) {
                /*  
                  comp.bodyElement.on(
                     'tap',
                     function (event, node, options, eOpts) {

                        /*send event as a argument to get direction of swipe#1#
                        this.fireEvent('tap', event);
                     },
                     comp
                  );*/
                  
                 /* comp.bodyElement.on(
                    'painted',
                    function (event, node, options, comp) {
                       
                       /*send event as a argument to get direction of swipe#1#
                       this.fireEvent('painted', comp);
                    },
                    comp
                 );*/
               }
            }
         }
      ]
   }
});