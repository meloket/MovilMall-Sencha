Ext.define('MobileApp.controller.QRController', {
   extend: 'Ext.app.Controller',

   config: {
      views: ['QRScaner.QRPanel',
         'QRScaner.QRScanerNavigationView',
         'QrScaner.QrScanerTabPanel',
         'QRScaner.QRScanView',
         'QRScaner.QRLocationsPointList'],
      models: ['QRLocationsPointListModel'],
      stores: ['QRLocationsPointListStore'],
      refs: {
         qrScanerSlideButton: '#qrScanerSlideButton',
         qrScanerTabPanel: 'qrscanertabpanel',
         QRScanerNavigationView: 'qrscanernavigationview',
         QRLocationsPointList: 'qrlocationspointlist'
      },

      control: {
         'qrscanview #scanCode': {
            tap: 'onTapScanCode'
         },
         qrScanerSlideButton: {
            tap: 'onQRScannerSlideButton'
         },
         qrScanerTabPanel: {
            activeitemchange: 'onActiveItem',
            painted: 'onTabPanelView'
         }
      }
   },
   onTabPanelView: function(thids)
   {
      console.log(thids);
      var language = this.getApplication().getController('SettingsController').lang;

      if (language == "fr")
      {
         thids.config.title = "Puntos";
      } else
      {
         thids.config.title = "Points";
      }
   },
   onTapScanCode: function()
   {
      var language = this.getApplication().getController('SettingsController').lang;
      var skipLogin = this.getApplication().getController('LoginController').skipLogin;
      if (skipLogin)
      {
         Ext.Msg.confirm('','Para obtener acceso al código QR​​, primero tiene que crear un pefil.¿Desea hacerlo ya?', function(btn)
         {
            if (btn == "yes")
            {
               window.location.reload();
            } else
            {
               return;
            }
         });

      } else
      {
         cordova.plugins.barcodeScanner.scan(success, fail);
      }

      function success(result)
      {
         var qrCode = result.text;
         var res;
         var logStore = Ext.getStore('LoginStore').data.items;
         if (logStore.length != 0)
         {
            var userId = Ext.getStore('LoginStore').data.items[0].data.key;

            if (result.format != 'QR_CODE')
            {
               //alert('Invalid QRCode');
               if (language == "fr")
               {
                  Ext.Msg.alert('', 'No lo leí correctamente. Por favor trate nuevamente.');

               } else
               {
                  Ext.Msg.alert('', 'Invalid QRcode.');

               }
               return;
            } else
            {
               Ext.Ajax.request({
                  url: MobileApp.util.Config.getBaseUrl() + '/UserPoint/SetUserPoints',
                  method: 'POST',

                  params: { qrCode: qrCode, userId: userId },
                  success: function(response)
                  {
                     res = Ext.JSON.decode(response.responseText);
                     Ext.Msg.alert('',res.success);
                  },
                  failure: function(response)
                  {
                     //alert('Please,try again');
                     Ext.Msg.alert('', 'Please,try again.');
                  }
               });
            }

         }
      }

      function fail(error)
      {
         Ext.Msg.alert('', 'Please,try again.');
      }


   },

   onQRScannerSlideButton: function()
   {
      this.getApplication().getController('MainController').toggleNav();
   },

   onActiveItem: function(view, value)
   {
      if (value.xtype == "qrlocationspointlist")
      {
         var lang = this.getApplication().getController('SettingsController').lang;
         if (lang == "fr")
         {
            view.getParent().getNavigationBar().setTitle("Puntos");
         } else
         {
            view.getParent().getNavigationBar().setTitle("Points");
         }
         value.setActiveItem(0);
         var store = Ext.getStore('QRLocationsPointListStore');
         this.loadQRScannerStore(store);
         //  view.getParent().getNavigationBar().setTitle("Puntos");
      } else
      {
         view.getParent().getNavigationBar().setTitle("QR Scanner");
      }
   },

   loadQRScannerStore: function(store)
   {
      var logStore = Ext.getStore('LoginStore').data.items;
      if (logStore.length != 0)
      {
         var userId = logStore[0].data.key;
         Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Cargando...' });
         store.load({
            params: { userId: userId },
            scope: this,

            callback: function(response, operation, success)
            {
               if (success != true)
               {
                  Ext.Viewport.setMasked(false);
                  if (response)
                  {
                     var data = response.operations[0].request.proxy.reader.jsonData.message;
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
                  Ext.Viewport.setMasked(false);


               }

            }
         });
      }
   }
});