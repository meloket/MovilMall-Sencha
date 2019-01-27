Ext.define('MobileApp.view.Offers.OffersSearchList', {
   extend: 'Ext.List',
   xtype: 'offerssearchlist',

   config: {
      //title: 'Buscar Ofertas',
      cls: 'tableviewCls',
      variableHeights: true,
      onItemDisclosure: true,
      syncRemovedRecords: true,
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
               itemId: 'searchField',
               store: 'OffersSearchByNameStore',
               locales: {
                  placeHolder: 'offers.profileview.searchPlaceHolder.placeHolder'
               },
             //  placeHolder: 'Escribe aquí...',
               flex: 1
            }
         ]
      }],

      store: 'OffersSearchListStore',

      itemTpl: new Ext.XTemplate(
         /* '<tpl if="seqNo != null">' +
            '<div class="headshot" style="background-image:url(resources/images/{img});">' +
               '<font style="font-size:1.0em;margin-left:50px;line-height:37px;white-space:nowrap;"><b>{tagLine}</b>' +
               '</font>' +
            '</div>'
      + '<tpl else>' +
            '<div class="headshot" style="background-image:url({img});">' +
               '<font style="font-size:1.0em;margin-left:50px;line-height:37px;white-space:nowrap;"><b>{tagLine}</b>' +
               '</font>' +
            '</div>'+
     '</tpl>'*/
         '<tpl if="seqNo != null">' +
            '<tpl if="lang==\'en\'">' +
            '<div class="list-item">' +
            '<tpl if="seqNo &lt; 7">' +
            '<div class="listImage"><img src="resources/icons/nw-icons/{img}"></div>' + '</tpl>' +
            '<div class="list-title">{tagLine}</div>' +
            '</tpl>' +
            '<tpl if="lang==\'fr\'">' +
            '<div class="list-item">' +
            '<tpl if="seqNo &lt; 7">' +
            '<div class="listImage"><img src="resources/icons/nw-icons/{img}"></div>' + '</tpl>' +
            '<div class="list-title">{tagLineSp}</div>' +
            '</tpl>' +
            '<tpl else>' +
            '<div class="list-title">{tagLine}</div>' +
            '</tpl>'
      ),

      listeners: {
         initialize: function(comp, eOpts)
         {
            /*  var loginStore = Ext.getStore('LoginSqlStore').data.items;
            if (loginStore.length != 0) {
               var language = loginStore[0].data.lang;
               if (language == "fr") {
                  this.config.title = "Buscar Ofertas";
               } else {
                  this.config.title = "Search Offers";
               }

            } else //IF SQLSTORE IS NOT AVAILABLE
            {
               this.config.title = "Buscar Ofertas";
            }*/

            comp.bodyElement.on(
               'painted',
               function(event, node, options, eOpts)
               {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('painted', event);
               },
               comp
            );
            comp.bodyElement.on(
               'swipe',
               function(event, node, options, eOpts)
               {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );
         }
      }
   }
});