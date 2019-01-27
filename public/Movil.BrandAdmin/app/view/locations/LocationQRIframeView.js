Ext.define('BrandAdmin.view.locations.LocationQRIframeView', {
   extend: 'Ext.panel.Panel',
   xtype: 'locationqriframeview',
   requires: [
        'Ext.layout.container.Card'
   ],
   layout: {
      type: 'fit'
   },
   width: 720,
  items: [{
     xtype: "component",
     layout: {
        type: 'fit'
     },
      autoEl: {
         tag: "iframe",
         scrolling: "no",
         
        // style: "border: 0px none; left: 29px; margin: 0px 177px -70px 0px; height: 372px; width: 715px; right: auto; top: -70px;",
         style: "border: 0px none; top: -70px;",
         src: "https://www.the-qrcode-generator.com/"
      }
   }]
});