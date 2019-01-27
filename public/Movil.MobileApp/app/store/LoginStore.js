Ext.define('MobileApp.store.LoginStore', {
   extend: 'Ext.data.Store',
   config: {
      model: 'MobileApp.model.LoginModel',
      proxy:
         ({
            type: 'rest',
            api:
               {
                  read: MobileApp.util.Config.getBaseUrl()+'/GetUser'
               },
            reader:
               {
                  type: 'json'
               },
            writer:
               {
                  type: 'json'
               }
         }),
      listeners: {
        
         load: function (store) {
            
            if (store.data.items[0].data.dob != null)
            {
               console.log(store.data.items[0].data.dob);
               var date = store.data.items[0].data.dob;
               var fullDate = date.split("T")[0];
               var dateR = fullDate.split("-")[2];
               var monthR = fullDate.split("-")[1];
               var yearR = fullDate.split("-")[0];
               var newDate = dateR + '/' + monthR + '/' + yearR;
               store.data.items[0].data.dob = newDate;
                 /* var fullDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                  var dateR = fullDate.split("/")[1];
                  var monthR = fullDate.split("/")[0];
                  var yearR = fullDate.split("/")[2];
                  var newDate = dateR + '/' + monthR + '/' + yearR;
                  store.data.items[0].data.dob = newDate;*/
            }
         }
      }
   }
});
   

