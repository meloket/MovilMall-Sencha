Ext.define('MobileApp.view.Movies.MoviesTimeView', {
   extend: 'Ext.Container',
   xtype: 'moviestimeview',
   config: {
      layout: 'vbox',
      //fullscreen: true,
      items: [{
            xtype: 'datepickerfield',
            itemId: 'datePicker',
            cls: 'moviesDatePicker'
         }, {
            xtype: 'dataview',
            scrollable: true,
            cls: 'movieTimings',
            store: 'MoviesShowTimeStore',
            itemTpl: Ext.create('Ext.XTemplate',
               '<div class="main">',
               '<p class="movieLocation">{location}</p>' +
                  '<div class="showTimesDiv">{[this.getPercentage(values.showTimes)]}</div>',
                  //'<span id="movieShowTimes">{showTimes}</span>' +
                  '<div class="showTimesDiv" id="showTimesDiv"></div>',
                  //'<img class="moviePopcorn" src="resources/images/popcorn.png"></img>'+
               '</div>',
               {
                  getPercentage: function(showTimes)
                  {
                     var array = showTimes.split(",");
                     var htmlString = "";
                     for (var i = 0; i < array.length;i++)
                     {
                        htmlString += '<p class="singleTimeBlock">' + array[i] + '</p>';
                     }
                     return htmlString;
                  }
               }
            )

            /*listeners: {
               painted: function(comp, eOpts)
               {
                  Ext.Function.defer(function()
                  {
                     var showTimes = document.getElementById('movieShowTimes');
                     var array = showTimes.innerHTML.split(",");
                     var showTimesDiv = document.getElementById('showTimesDiv');
                     for (var i = 0; i < array.length; i++)
                     {
                        //showTimesDiv.innerHTML += '<p class="singleTimeBlock">' + array[i] + '</p>';
                        var newParagraph = document.createElement('p');
                        newParagraph.textContent = array[i];
                        newParagraph.className = "singleTimeBlock";
                        showTimesDiv.appendChild(newParagraph);
                     }
                     showTimes.style.display = "none";
                  }, 1000);
               }
            }*/
         }]
   }
});