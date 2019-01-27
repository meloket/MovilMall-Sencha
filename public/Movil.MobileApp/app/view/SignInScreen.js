Ext.define('MobileApp.view.SignInScreen', {
   extend: 'Ext.form.Panel',
   xtype: 'signinscreen',

   config: {
      fullscreen: true,

      items: [
         {
            xtype: 'fieldset',
            items: [
               {
                  xtype: 'fieldset',
                  title: 'About You',
                  instructions: 'Tell us all about yourself',
                  items: [
                     {
                        xtype: 'textfield',
                        name: 'firstName',
                        label: 'First Name'
                     },
                     {
                        xtype: 'textfield',
                        name: 'lastName',
                        label: 'Last Name'
                     }
                  ]
               }
            ]
         }]
   }
});
