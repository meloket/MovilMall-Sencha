Ext.define('BrandAdmin.view.movies.MoviesShowTimesDataview', {
   extend: 'Ext.view.View',
   xtype: 'moviesshowtimesdataview',
   trackOver: true,
   store: 'MoviesShowTimesDataViewStore',
   overItemCls: 'logentry-hover',
   autoScroll: true,
   tpl: Ext.create('Ext.XTemplate',
      '<div class="main">',
      '<tpl for=".">',
      '<div class="showTime"></b>' +
         '<span><div id="studeditbuttondiv" title="Edit" class="editicon"></div></span>' +
         '<span>&nbsp;{location}</span>',
      '<br><span id="showTimeDate">&nbsp;{date}</span>',
      '<div class="showTimesDiv">{[this.getPercentage(values.showTimes)]}</div>',
      //'<br><font size="2px">&nbsp;{showTimes}</font>',
      '</div>',
      '</tpl>',
      '</div>',
      {
         getPercentage: function(showTimes)
         {
            var array = showTimes.split(",");
            var htmlString = "";
            for (var i = 0; i < array.length; i++)
            {
               htmlString += '<span style=" margin-right:7px; text-decoration: underline;">' + array[i] + '</span>';
            }
            return htmlString;
         }
      }            
   ),

   itemSelector: 'div.showTime'
});