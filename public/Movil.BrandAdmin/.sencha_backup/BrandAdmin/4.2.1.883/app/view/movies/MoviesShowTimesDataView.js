Ext.define('BrandAdmin.view.movies.MoviesShowTimesDataview', {
   extend: 'Ext.view.View',
   xtype: 'moviesshowtimesdataview',
   trackOver: true,
   store: 'MoviesShowTimesDataViewStore',
   overItemCls: 'logentry-hover',
   autoScroll: true,
   tpl: Ext.create('Ext.XTemplate',
      '<div class="main">',
      '<table>',
      '<tpl for=".">',      
      '<div class="showTime"></b>' +         
         '<span><div id="studeditbuttondiv" title="Edit" class="editicon"></div></span>' +
         '<span><div id="studeditbuttondiv" title="Edit" class="deleteicon"></div></span>' +
      '<font size="2px">&nbsp;<b>{location} </b></font>', 
       '<br><font size="2px">&nbsp;{date}</font>',
      '<br><font size="2px">{showTimes}</font>',
      '</div>',
      '</tpl>',
      '</div>'
   ),

   itemSelector: 'div.showTime'
});