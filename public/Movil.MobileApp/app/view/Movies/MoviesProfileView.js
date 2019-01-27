Ext.define('MobileApp.view.Movies.MoviesProfileView', {
   extend: 'Ext.Container',
   xtype: 'moviesprofileview',

   config: {
      scrollable: true,
      layout: 'vbox',
      style: 'background-color:white;',
      fullscreen: true,
      items: [{
         xtype: 'img',
         cls: 'offerCarousel',
         id: 'movieProfImg'
      },/*{
            xtype: 'carousel',
            cls: 'offerCarousel',      //cls is same as offer carousel because all same css properties apply here.
            indicator: false,
            items: [
               {
                  xtype: 'img',
                  cls: 'movieProfImg',
                  id: 'movieProfImg'
               }
            ]
         },*/ {
            xtype: 'label',
            margin: '0.5em 0 0 0.6em',
            html: '<span style="font-size:1em;"><b>Sinopsis: </b></span>'
         }, {
            xtype: 'label',
            itemId: 'synopsis',
            minHeight: '1em',
            style: {
               fontSize: '0.8em',
               lineHeight: '1.5em'
            },
            margin: '0 0 0 0.8em'
         },
         {
            xtype: 'container',
            margin: '0.5em 0 0 0.6em',
            layout: {
               type: 'hbox'
            },
            items: [{
                  xtype: 'label',
                  //html: '<font><b>Release Date:</b></font>'
                  html: '<span style="font-size:0.8em;"><b>Fecha de Lanzamiento&nbsp;:&nbsp;</b></span>'
               }, {
                  xtype: 'label',
                  itemId: 'releaseDate'
               }]
         },
         {
            xtype: 'container',
            margin: '0 0 0 0.6em',
            layout: {
               type: 'hbox'
            },
            items: [{
                  xtype: 'label',
                  //   html: '<font><b>Run-time:</b></font>'
                  html: '<span style="font-size:0.8em;"><b>Duración&nbsp;:&nbsp;</b></span>'
               }, {
                  xtype: 'label',
                  itemId: 'runTime'
               }]
         },
         {
            xtype: 'container',
            margin: '0 0 0 0.6em',
            layout: {
               type: 'hbox'
            },
            items: [{
                  xtype: 'label',
                  //html: '<font><b>Genre:</b></font>'
                  html: '<span style="font-size:0.8em;"><b>Género&nbsp;:&nbsp;</b></span>'
               }, {
                  xtype: 'label',
                  itemId: 'genre'
               }]
         },
         {
            xtype: 'container',
            margin: '0 0 0 0.6em',
            layout: {
               type: 'hbox'
            },
            items: [{
                  xtype: 'label',
                  html: '<span style="font-size:0.8em;"><b>Director&nbsp;:&nbsp;</b></span>'
               }, {
                  xtype: 'label',
                  itemId: 'director'
               }]
         }, {
            xtype: 'container',
            margin: '0 0.6em 0 0.6em',
            minHeight:'2em',
            layout: {
               type: 'hbox'
            },
            items: [{
                  xtype: 'label',
                  //html: '<font><b>Cast:</b></font>'
                  html: '<span style="font-size:0.8em;"><b>Elenco&nbsp;:&nbsp;</b></span>'
               }, {
                  xtype: 'label',
                  width: '85%',
                  itemId: 'cast'
               }]
         }, {
            xtype: 'button',
            cls: 'flat-button-no-icon',
            margin: '0.6em auto 0.6em auto',
            width:'9em',
            itemId: 'viewTrailer',
            text: 'Trailer de la Película'
         }
      ]
   }
});