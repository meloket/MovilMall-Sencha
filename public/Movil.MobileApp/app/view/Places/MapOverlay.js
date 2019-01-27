Ext.define('MobileApp.view.Places.MapOverlay', {
   extend: 'Ext.Panel',
   xtype: 'mapoverlay',

   config: {
      modal: true,
      hideOnMaskTap: true,
      showAnimation: {
         type: 'popIn',
         duration: 100,
         easing:'ease-out'
      },
      hideAnimation: {
         type: 'popOut',
         duration: 100,
         easing: 'ease-out'
      },
      items:[{
         xtype: 'map',
         width: '80%',
         height:'100%'
         /*,
         height: '200px'*/
      }],
     // centered: true,
      styleHtmlContent: true,
      width:Ext.filterPlatform('ie10')?'80%':(Ext.os.deviceType=='phone')?400:400,
      height: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'phone') ?400 : 400
   }
});
