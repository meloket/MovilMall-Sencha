Ext.define('MobileApp.view.Settings.SettingsProfileContainer', {
   extend: 'Ext.Container',
   xtype: 'settingsprofilecontainer',
   requires: [
      'Ext.TitleBar'
   ],
   config: {
      fullscreen: true,
      layout: 'vbox',
      title: 'Perfil',
      scrollable: true,
      style: 'background-color:white;',
      store: 'LoginStore',
      items: [{
            xtype: 'dataview',
            height: '21em',
            scrollable: false,
            itemId: 'profileContainer',
            /*html: '<div class="userProfileBlock">' + //dataview.css
            '<div class="userProfileImage">' +
            '<img></img>' +
            '</div>' +
            '<div class="userProfileDetails">' +
            '<p class="userProfileName">Karina Lopez</p>' +
            '<p><b>Email</b>: karinalopez@gmail.com</p>' +
            '<p><b>Cumpleaños</b> : 25/9/1998</p>' +
            '<p><b>Ciudad</b> : Panama</p>' +
            '<p><b>Provincia</b> : Panama</p>' +
            '<p><b>País</b> : Panama</p>' +
            '</div>' +
            '</div>',*/
            store: 'LoginStore',
            itemTpl: new Ext.XTemplate('<div class="userProfileBlock">' + //dataview.css
               '<div class="userProfileImage">' +
               '<tpl if="photo == \'\'">' +
                 '<div>{[this.getPercentage()]}</div>' +
               //'<img id="prflContainerPic" src="resources/icons/nw-icons/userProPic.png"></img>' +
               '<tpl else>' +
               '<img id="prflContainerPic" src={photo}></img>' +
               '</tpl>' +
               '</div>' +
               '<div class="userProfileDetails">' +
               '{[this.getProfileDetails(values.name,values.email,values.dob,values.cityName,values.stateName)]}' +


              // '<p class="userProfileName">{name}</p>' +
           //    '<p><b>Email</b>: {email}</p>' +
              //  '<div>{[this.getPercentage(values.dob,values.cityName,values.stateName)]}</div>' +
            //   '<p><b>Cumpleaños</b> : {dob}</p>' +
            //   '<p><b>Ciudad</b> : {cityName}</p>' +
             //  '<p><b>Provincia</b> : {stateName}</p>' +
              // '<p><b>País</b> : Panama</p>' +
               '</div>' +
               '</div>',
             {
                getPercentage: function () {
                   //var lang = this.getApplication().getController('SettingsController').lang;
                   var lang = Ext.getStore('LoginSqlStore').data.items[0].data.lang;
                   console.log(lang);
                   if (lang == 'fr') {
                      return '<img id="prflContainerPic" src="resources/icons/nw-icons/userProPic.png"></img>' ;
                   }
                   if (lang == 'en') {
                      return '<img id="prflContainerPic" src="resources/icons/nw-icons/userProPicEnglish.png"></img>';
                   }

                },
                getProfileDetails:function(name,email,dob,cityName,stateName)
                {
                   //TO REMOVE "NULL" ENTRY FROM DATAVIEW
                   if (dob == null)
                   {
                      dob = '';
                   }
                   if (cityName == null) {
                      cityName = '';
                   }
                   if (stateName == null) {
                      stateName = '';
                   }
                   var lang = Ext.getStore('LoginSqlStore').data.items[0].data.lang;
                   console.log(lang);
                   var htmlString = "";
                   if (lang == 'fr')
                   {
                      htmlString += '<p class="userProfileName"><b>Name: </b>' + name + '</p>' + '<p><b>Email</b>: ' + email + '</p>' +
                         '<p><b>Cumpleaños</b> : ' + dob + '</p>' +
                         '<p><b>Ciudad</b> : ' + cityName + '</p>' +
                         '<p><b>Provincia</b> : ' + stateName + '</p>';
                         
                      return htmlString;
                   } else
                   {
                      htmlString += '<p class="userProfileName"><b>Name: </b>' + name + '</p>' + '<p><b>Email</b>: ' + email + '</p>' +
                         '<p><b>Date Of Birth</b> : '+dob+'</p>' +
                         '<p><b>City</b> : '+cityName +'</p>' +
                         '<p><b>State</b> : '+stateName+'</p>';
                      return htmlString;

                   }
                }
             }
            )
         }, {
            xtype: 'container',
            layout: {
               type: 'fit'
            },
            height: '200px',
            scrollable: false,
            items: [{ xtype: 'settingsprofilelist' }]
         }]
      /* items: [{
             xtype: 'container',
             layout: {
                type: 'fit'
             },
             html: '<div class="userProfileBlock">' + 
                '<div class="userProfileImage">' +
                '<img></img>' +
                '</div>' +
                '<div class="userProfileDetails">' +
                '<p class="userProfileName">{name}</p>' +
                '<p><b>Email</b>: {email}</p>' +
                '<p><b>Cumpleaños</b> : {dob}</p>' +
                '<p><b>Ciudad</b> : {cityName}</p>' +
                '<p><b>Provincia</b> : {stateName}</p>' +
                //'<p><b>País</b> : Panama</p>' +
                '</div>' +
                '</div>'
             //store: 'LoginStore'/*,
             //store: 'SetProfileDataViewStore'#1#
          }, {
             xtype: 'container',
             layout: {
                type: 'fit'
             },
             height: '200px',
             scrollable: false,
             items: [{ xtype: 'settingsprofilelist' }]
          }]
    }*/
      /*    items: [{
                xtype: 'container',
                //flex:1.8,
                //border: '0 0 1 0',
                //style: 'border-color: black; border-style: solid;',
                layout: 'fit',
                items: [{
                   xtype: 'dataview',
                   itemId: 'profileContainer',
                   scrollable: true,
                   itemTpl: '<div class="userProfile">' +
                      '<div style="float:center">' +
                      '<img style="height:120px; width:120px;" src={photo}>' +
                      '</div>' +
                      '<br><font><b>{name}</b></font>' +
                      '<br><font><b>{email}</b></font>' +
                      '<br><font><b>Fecha de Nacimiento :</b>{dob}</font>' +
                      '<br><font><b>Ciudad : </b>{cityName}</font>' +
                      '</br><font><b>Provincia : </b>{stateName}</font>' +
                      '</div>',
     
                   store: 'LoginStore'
                }]
             },
             {
                xtype: 'settingsprofilelist',
                flex: 1
             }]*/
   }
});