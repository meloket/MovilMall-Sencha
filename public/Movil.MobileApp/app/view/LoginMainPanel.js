Ext.define('MobileApp.view.LoginMainPanel', {
   extend: 'Ext.Panel',
   xtype: 'loginmainpanel',
   requires: [
   'Ext.TitleBar'
   ],
   config: {
      fullscreen: true,
      style:'background:url("resources/images/loginimg.png"); background-size:cover;',
     items: [
         {
         items: [{
            xtype: 'img',
            src: 'resources/images/appIcon.png',
            height: '200px',
            margin:'30px'
         },
                {
                   xtype: 'button',
                   action:'signIn',
                   //text: 'Sign In',
                   cls:'flat-button-login',
                   text: 'Ingresar',
                   itemId: 'signIn',
                   margin: '10 20 0 20 '
                },
                {
                   xtype: 'button',
                   action: 'signUp',
                   cls:'flat-button-login',
                   margin: '10 20 0 20 ',
                   text: 'Regístrate'
                },
            {
               xtype: 'button',
               ui:'plain',
               // html: 'Forgot password?',
               html:'Todavia no',
               margin: '10 20 0 20 ',
               action:'skipLogin',
               cls:'forgotPasswordLabel'
            },
            {
               xtype: 'button',
               ui:'plain',
               // html: 'Forgot password?',
               html:'Olvidó su clave?',
               margin: '0 20 0 20 ',
               action: 'forgotpass',               
               cls:'forgotPasswordLabel'
            }
            ]
         }
      ]
   }
});
