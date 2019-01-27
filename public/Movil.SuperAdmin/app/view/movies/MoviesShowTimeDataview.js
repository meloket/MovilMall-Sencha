Ext.define('SuperAdmin.view.movies.MoviesShowTimeDataview', {
   extend: 'Ext.view.View',
   xtype: 'moviesshowtimedataview',
   trackOver: true,
   store: 'MoviesShowTimeStore',
   
   tpl: Ext.create('Ext.XTemplate',

       '<div class="main">',
      '<table>',
      '<tpl for=".">',
      '<div class="showTime"></b>' +
         '<font size="2px"><b>{location} </b></font>',
         '</br><font size="2px">{date}</font>',
      
      '</br><font size="2px">{showTimes}</font>',
       //'</br><font size="2px">-----{location}-----</font>',
      '</div>',
      '</tpl>',
      '</div>'
   ),
   itemSelector: 'showTime'
});