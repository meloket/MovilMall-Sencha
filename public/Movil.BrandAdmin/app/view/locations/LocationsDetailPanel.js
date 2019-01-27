Ext.define('BrandAdmin.view.locations.LocationsDetailPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'locationsdetailpanel',
   //title:'Locations Detail',
   cls: 'flatpanel',
   locales: {
      title: 'form.locations.title'
   },
   layout: {
      type: 'border'
   },
   border: false,
   items: [{
         xtype: 'locationsdetailform',
         region: 'west',
         flex: 1.4
      }, {
         xtype: 'locationsmappanel',
         region: 'center',
         flex: 2
      }],

   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         {
            action: 'save',
            tooltip: 'Save',
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.save',
               tooltip: 'save.tooltip'
            },
            height:30
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.cancel',
               tooltip: 'cancel.tooltip'
            },
            height: 30
         }
      ]
   }],
   tbar: [{
         xtype: 'button',
         //text: 'Back',
         action: 'back',
         locales: {
            text: 'buttons.back',
            tooltip: 'back.tooltip'
         },
         cls: 'back-button-flat'
      }, '->', {
         xtype: 'textfield',
         itemId: 'Lat',
         label: 'Lattitude',
         locales: {
            emptyText: 'form.locations.lat.emptyText'
         }
        // emptyText: 'Escriba el punto de latitud'
      }, {
         xtype: 'textfield',
         itemId: 'Long',
         label: 'Longitude',
         locales: {
            emptyText: 'form.locations.long.emptyText'
         }
         //emptyText: 'Escriba el punto de longitud'
      }, {
         //text: 'Go',
         locales: {
            text: 'buttons.go'
         },
         action: 'searchMap'
      }]
});