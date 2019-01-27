Ext.define('MobileApp.view.Places.PlacesMallsList', {
   extend: 'Ext.List',
   xtype: 'placesmallslist',

   config: {
      title: 'Malls',
      //titleAlign:'left',
      cls: 'placesList',
      variableHeights: true,
      onItemDisclosure: true,
      scrollToTopOnRefresh: false,
      store: 'PlacesMallsListSqlStore',
      plugins: [
     {
        xclass: 'MobileApp.util.ListPullRefresh',
       // pullText: 'Deslice esta pantalla hacia abajo para refrescar las Lugares.',
        autoSnapBack: false,
        scrollerAutoRefresh: true,
        releaseText: '',
        loadingText: '',
        loadedText: '',
        itemId: 'pull',
        locales: {
           pullText: 'pullRefresh.pullText'
        }
     }
      ],
      itemTpl: new Ext.XTemplate(
         '<div class="placeBlock">' +
            '<div class="placeImage">' +
            '<tpl if="logo==\'data:,\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            '<img src="{logo}"</img>' +
            '</tpl>' +
             '</div>'+
            '<div class="placeDetails">' +
            '<p class="placeTitle">{name}</p>' +
             //'<p class="placeLocation">{contactNo} ' +
            '<a  id="placesMallContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>'
      )
   }
});
