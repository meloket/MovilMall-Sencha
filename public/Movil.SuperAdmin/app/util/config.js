var url = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
Ext.define('SuperAdmin.util.Config', {
   singleton: true,


   config: {


      // Decomment to use the image server config
     // imgUrl: url

      // Decomment to use the local server config
      imgUrl: 'http://107.170.167.248:3001'

   },

   constructor: function (config) {
      this.initConfig(config);
      this.callParent([config]);

   }
});