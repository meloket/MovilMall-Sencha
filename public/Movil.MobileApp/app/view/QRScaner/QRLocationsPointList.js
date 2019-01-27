Ext.define('MobileApp.view.QRScaner.QRLocationsPointList', {
   extend: 'Ext.List',
   xtype: 'qrlocationspointlist',

   config: {
      title:'Puntos',
      cls: 'placesList',
      //scrollToTopOnRefresh: false,
      variableHeights: true,
       store: 'QRLocationsPointListStore',
       itemTpl: [
           '<div class="placeBlock">' +
               '<div class="placeImage"> <img src="{logo}"</img></div>',
             '<div class="pointsDetails">' +
                '<p class="placeTitle">{name}</p>' +
                '<p class="pointsCount">{points}</p>' +
             '</div>' +
          '</div>'
       ].join(''),
       listeners: {
          initialize: function(comp, eOpts)
          {
             comp.bodyElement.on(
                   'painted',
                   function (event, node, options, eOpts) {
                      /*send event as a argument to get direction of swipe*/
                      this.fireEvent('painted', event);
                   },
                   comp
                );
            /* var loginStore = Ext.getStore('LoginSqlStore').data.items;
             if (loginStore.length != 0)
             {
                var language = loginStore[0].data.lang;
                if (language == "fr")
                {
                   this.config.title = "Puntos";
                } else
                {
                   this.config.title = "Points";
                }
                }
             */
          }
       }
   }
});
