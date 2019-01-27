Ext.define('MobileApp.util.Config', {
    singleton: true,

    config: {
        // Decomment to use the remote server config
        //baseUrl: 'http://movil-mall.com',
        baseUrl: 'http://192.241.161.224:3000',

        // Decomment to use the local server config
        //baseUrl: '..',

        // Decomment to use the image server config
        //imgUrl: 'http://movil-mall.com'
        imgUrl: 'http://192.241.161.224:3000'
            // Decomment to use the local server config
            //imgUrl: 'http://107.170.167.248:3001'
    },

    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});