Ext.define('MobileApp.controller.LoginController', {
   extend: 'Ext.app.Controller',
   //views: ['SignInScreen', 'LoginMainPanel'],
   config: {
      views: ['SignInScreen', 'LoginMainPanel', 'SignUpForm',
         'LoginNavView', 'SignInForm'
      ],

      stores: [
         'SignUpFormStore',
         'CityComboStore',
         'StateComboStore',
         'LoginStore',
         'LoginSqlStore'
      ],
      models: ['SignUpFormModel',
         'CityComboModel',
         'StateComboModel', 'LoginModel'
      ],
      refs: {
         signInScreen: 'signinscreen',
         loginMainPanel: 'loginmainpanel',
         loginNavView: 'loginnavview',
         signUpForm: 'signupform',
         mainContainer: 'maincontainer',
         signInForm: 'signinform',
         signUpFormStore: 'SignUpFormStore',
         forgotPassForm: 'forgotpassform'
      },
      control: {
         'loginmainpanel [action=signUp]': {
            tap: 'onSignUp'
         },
         'loginmainpanel [action=forgotpass]': {
            tap: 'onForgotPass'
         },
         /* 'loginmainpanel #forgotpass': {
            tap: 'onForgotPass'
         },*/
         'forgotpassform [action=forgotpass]': {
            tap: 'onCheckForgotPass'
         },
         'forgotpassform [action=cancel]': {
            tap: 'onClickCancelSignIn'
         },
         'loginmainpanel [action=signIn]': {
            tap: 'onSignIn'
         },
         'loginmainpanel [action=skipLogin]': {
            tap: 'onSkipLogin'
         },
         'loginNavView': {
            push: 'onPushLogInNavView',
            pop: 'onPopLogInNavView',
            initialize: 'onRenderLogInNavView'
         },
         'signupform [action=register]': {
            tap: 'onClickRegister'
         },
         'signupform [action=cancel]': {
            tap: 'onClickCancelSignIn'
         },
         'signinform [action=submit]': {
            tap: 'onClickSubmit'
         },
         'signinform [action=cancel]': {
            tap: 'onClickCancelSignIn'
         }
      }
   },
   init: function()
   {
      this.skipLogin;
   },
   
   onSkipLogin: function()
   {
      this.skipLogin = true;
      if (!this.mainContainer)
      {
         this.mainContainer = Ext.create('MobileApp.view.MainContainer');
      }

      this.getLoginNavView().push(this.mainContainer);
      console.log('signUp');
   },

   onSignUp: function()
   {
      if (!this.signUpForm)
      {
         this.signUpForm = Ext.create('MobileApp.view.SignUpForm');
      }
console.log('signUp');
      var model = Ext.create('MobileApp.model.SignUpFormModel');

      //var store = this.getApplicantsListStoreStore();
      // store.insert(store.data.length, model);
      this.signUpForm.down('formpanel').setRecord(model);

      this.getLoginNavView().push(this.signUpForm);

   },

   onCheckForgotPass: function(button)
   {
      var loader = this.getForgotPassForm().down('#loadingGifForgotPass');
      loader.show();
      button.disable();
      var values = this.getForgotPassForm().down('formpanel').getValues();
      // console.log(values);

      Ext.Ajax.request({
         url: MobileApp.util.Config.getBaseUrl() + '/User/ForgotPassword',
         method: 'POST',
         scope: this,
         params: values,
         success: function(response)
         {
            loader.hide();
            button.enable();
            //Ext.Msg.alert('', 'Password will send to your email. Please Check it.');
            Ext.Msg.alert('', 'Una nueva contraseña ha sido enviada a su correo.', function(btn)
            {
               if (btn == 'ok')
               {
                  this.getLoginNavView().pop(1);
               }
            }, this);
          /*  Ext.Msg.alert(Ux.locale.Manager.get('alerts.one.title', 'Your default title here'),
  Ux.locale.Manager.get('alerts.one.message', 'Your default message here'),
  Ext.emptyFn
);*/
         }
      });
   },

   onForgotPass: function()
   {
      if (!this.forgotPassForm)
      {
         this.forgotPassForm = Ext.create('MobileApp.view.ForgotPassForm');
      }
      this.forgotPassForm.down('formpanel').reset();
      this.getLoginNavView().push(this.forgotPassForm);
   },

   onPushLogInNavView: function(view, item)
   {
      /*if (item.xtype == 'signinform' || item.xtype == 'signupform' || item.xtype == 'forgotpassform')
      {
         this.getLoginNavView().getNavigationBar().show();
      } else
      {
         this.getLoginNavView().getNavigationBar().hide();
      }*/

   },

   onPopLogInNavView: function()
   {
      //this.getLoginNavView().getNavigationBar().hide();
   },

   onRenderLogInNavView: function()
   {

      this.getLoginNavView().getNavigationBar().hide();
   },

   onClickRegister: function(button)
   {
      button.disable();
      var loader = this.getSignUpForm().down('#loadingGifSignUp');
      loader.show();
      var values = this.getSignUpForm().down('formpanel').getValues();
      // console.log(values);


      if (values.dob != null)
      {

         var currentDate = new Date();
         var currentYear = currentDate.getFullYear();
         var dob = values.dob;
         var dobYear = dob.getFullYear();
         if (dobYear > (currentYear - 12))
         {
            Ext.Msg.alert('', 'No se permite el registro de menores de 12 años.');
            loader.hide();
            button.enable();
            return;

         }
      }
      if (values.name == "")
      {
         //Ext.Msg.alert('error', 'Please fill Name.');
         Ext.Msg.alert('', 'Por favor, rellene el Nombre.');
         loader.hide();
         button.enable();
         return;
      }
      if (values.email == "")
      {
         // Ext.Msg.alert('error', 'Please fill Email.');
         Ext.Msg.alert('', 'Por favor complete Correo electrónico.');
         loader.hide();
         button.enable();
         return;
      }
      if (values.pass == "")
      {
         // Ext.Msg.alert('error', 'Please fill Password.');
         Ext.Msg.alert('', 'Por favor, rellene contraseña.');
         loader.hide();
         button.enable();
         return;
      }
     
      Ext.Ajax.request({
         url: MobileApp.util.Config.getBaseUrl() + '/User/CreateUser',
         method: 'POST',
         scope: this,
         params: values,
         success: function(response)
         {
            // myMask.hide();
            button.enable();
            loader.hide();
            var result = Ext.JSON.decode(response.responseText);
            //console.log(result);
            if (result.msg == "Duplicate User")
            {
               //Ext.Msg.alert('', 'Duplicate User');
               Ext.Msg.alert('', 'Este email ya fue usado.', Ext.emptyFn);
               return;
            } else
            {
               Ext.Msg.alert('', 'Gracias por registrarse. Ya puede ingresar a su cuenta.', function (btn)
               {
                  if (btn == 'ok')
                  {
                     this.getLoginNavView().pop(2);
                  }
               }, this);

            }

         }
      });

   },

   onClickSubmit: function(button)
   {
       var loader = this.getSignInForm().down('#loadingGifSignIn');
       loader.show();
      button.disable();
      //console.log(MobileApp.util.Config.getBaseUrl());
      var values = this.getSignInForm().down('formpanel').getValues();
      
      var parkingNoteSqlStore = Ext.getStore('ParkingNoteSqlStore');
      parkingNoteSqlStore.removeAll();
      
      var parkingPhotoSqlStore = Ext.getStore('ParkingPhotoSqlStore');
      parkingPhotoSqlStore.removeAll();
      Ext.Ajax.request({
         url: MobileApp.util.Config.getBaseUrl() + '/Verify',
         //  url:'http://www.movil-mall.com/Verify',
         method: 'POST',
         scope: this,
         params: values,
         success: function(response)
         {
            button.enable();
            loader.hide();
            var result = Ext.JSON.decode(response.responseText);
            console.log(result);
            if (result.isNotOk == true)
            {
               // Ext.Msg.alert('', 'User Name or Password is Incorrect.');
               Ext.Msg.alert('', 'El usuario o contraseña no son correctos, trate otra vez.', Ext.emptyFn);
               return;
            } else
            {
               var store = Ext.getStore('LoginStore');
               console.log(store);
               store.load({
                  scope: this,
                  callback: function(res, operation, success)
                  {
                     if (success != true)
                     {
                        console.log(res);
                        if (res)
                        {
                           var data = res.operations[0].request.proxy.reader.jsonData.message;
                           Ext.example.msg('Message', data);
                        } else
                        {
                           var errorCode = operation.error.status;
                           var error = 'Something went wrong';
                           if (errorCode == 401)
                           {
                              error = 'Sorry, You are not authorized to access this module.';
                           }
                           Ext.example.msg('Message', error);

                           //todo : Messagebox color changes
                        }
                     } else
                     {
                       if (!this.mainContainer)
                        {
                           this.mainContainer = Ext.create('MobileApp.view.MainContainer');
                       }
                        console.log(store);
                        this.getLoginNavView().push(this.mainContainer);
                        var loginSqlStore = Ext.getStore('LoginSqlStore');
                        store.each(function(item)
                        {
                           item.data.lang = "fr";
                           console.log(item);
                           loginSqlStore.add(item);
                         //  console.log(this.getApplication().getController('SettingsController').lang);
                        });
                        loginSqlStore.sync();
                     }
                     console.log(Ext.getStore('LoginSqlStore'));
                  }
               });

            }

         }
      });
   },

   onSignIn: function()
   {
    
      this.skipLogin = false;
      if (!this.signInForm)
      {
         this.signInForm = Ext.create('MobileApp.view.SignInForm');
      }
      this.signInForm.down('formpanel').reset();
      this.getLoginNavView().push(this.signInForm);
      /*var loader = this.getSignInForm().down('#loadingGif');
      loader.hide();*/
   },

   onSameUser: function(values)
   {
      if (!this.mainContainer)
      {
         this.mainContainer = Ext.create('MobileApp.view.MainContainer');
      }
      if (!this.LoginNavView)
      {
         this.LoginNavView = Ext.create('MobileApp.view.LoginNavView');
      }
      this.LoginNavView.push(this.mainContainer);

      Ext.Ajax.request({
         url: MobileApp.util.Config.getBaseUrl() + '/Verify',
         //  url:'http://www.movil-mall.com/Verify',
         method: 'POST',
         scope: this,
         params: values,
         success: function(response)
         {
            // myMask.hide();
            var result = Ext.JSON.decode(response.responseText);
            if (result.isNotOk == true)
            {
               // Ext.Msg.alert('', 'User Name or Password is Incorrect.');
               Ext.Msg.alert('', 'El usuario o contraseña no son correctos, trate otra vez.', Ext.emptyFn);
               return;
            } else
            {
               var store = Ext.getStore('LoginStore');
               store.load({
                  scope: this,
                  callback: function(res, operation, success)
                  {
                     if (success != true)
                     {
                        if (res)
                        {
                           var data = res.operations[0].request.proxy.reader.jsonData.message;
                           Ext.example.msg('Message', data);
                        } else
                        {
                           var errorCode = operation.error.status;
                           var error = 'Something went wrong';
                           if (errorCode == 401)
                           {
                              error = 'Sorry, You are not authorized to access this module.';
                           }
                           Ext.example.msg('Message', error);

                           //todo : Messagebox color changes
                        }
                     } else
                     {
                        console.log(res);
                          //document.getElementById("userImage").src = res[0].data.photo;
                        /*  if (!this.mainContainer)
                        {
                           this.mainContainer = Ext.create('MobileApp.view.MainContainer');
                        }
                        if (!this.LoginNavView)
                        {
                           this.LoginNavView = Ext.create('MobileApp.view.LoginNavView');
                        }
                        this.LoginNavView.push(this.mainContainer);*/

                     }
                  }
               });

            }

         }
      });
   },

   onClickCancelSignIn: function()
   {
      this.getLoginNavView().pop();
   }
});