Ext.define('MobileApp.view.Settings.SettingsFollowUsContainer', {
   extend: 'Ext.Container',
   xtype: 'settingsfollowuscontainer',
   requires: [
      'Ext.TitleBar'
   ],
   config: {
      fullscreen: true,
      //layout: 'fit',      
      cls: 'followUs',
      title: 'Síguenos',
      id:'settingsFllowusContainer',
      scrollable: null,
      locales: {
         html: 'settings.followUs.html'
      },
    /*  html: '<div class="main">' +
         '<img clas="movilMallTextImage" src="resources/images/movilTex1t.png"></img>' +
         '<p class="termsOfService"><span style="text-decoration:underline;">Intimidad</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-decoration:underline;">Terms of Service</span></p>' +
         '<p class="copyrightText">Todos los derechos reservados © 2014 Movil Mall</p>' +
         '<div class="socialIcons">' +
         '<img id="settingsFb" src="resources/icons/social/socialBlue/fb.png"></img>' +
         '<img id="settingsGp" src="resources/icons/social/socialBlue/gp.png"></img>' +
         '<img id="settingsTwi" src="resources/icons/social/socialBlue/twi.png"></img>' +
         '<img id="settingsYt" src="resources/icons/social/socialBlue/yt.png"></img>' +
         '<img id="settingsPin" src="resources/icons/social/socialBlue/pin.png"></img>' +
         '<img id="settingsIg" src="resources/icons/social/socialBlue/ig.png"></img>' +
         '</div>' +
         '</div>',*/
  
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
}
});