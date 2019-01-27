Ext.define('MobileApp.view.Movies.MoviesSearchList', {
   extend: 'Ext.List',
   xtype: 'moviessearchlist',

   config: {
      title: 'Buscar Películas',
      variableHeights: true,
      syncRemovedRecords: true,
      onItemDisclosure: true,
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Location available currently" >',

      items: [{
         xtype: 'toolbar',
         docked: 'top',
         cls: 'searchToolbarCls',
         layout: {
            type: 'hbox'
         },
         items: [
           {
              xtype: 'image',
              src: 'resources/icons/nw-icons/searchTop.png',
              //placeHolder:'Buscar...',
              flex: 0.18,
              height: '0.8em'
           }, {
              xtype: 'textfield',
              itemId: 'moviesSearchField',
              store: 'MoviesSearchByNameStore',
              placeHolder: 'Escribe aquí...',
              flex: 1
           }
         ]
      }],
      /* items: [{
          xtype: 'toolbar',
          docked: 'top',
          items: [
             {
                xtype: 'textfield',
                id: 'placesSearchField',
                placeHolder: 'Buscar...',
                flex: 1
             }
          ]
       }],*/
      store: 'MoviesSearchStore',
      itemTpl: [
       //   '<div> <img src="{logo}"</img></div>',
      '<div class="placeListTitle">{location}</div>'

      ].join(''),

      listeners: {
         initialize: function (comp, eOpts) {
            comp.bodyElement.on(
               'swipe',
               function (event, node, options, eOpts) {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );
         }
      }
   }
});