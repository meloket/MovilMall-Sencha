var ppi = window.devicePixelRatio;
Ext.define('MobileApp.view.Offers.OffersMallsList', {
   extend: 'Ext.List',
   xtype: 'offersmallslist',

   config: {
      title: 'Malls',
      cls: 'placesList',
      scrollToTopOnRefresh: false,
      variableHeights: true,
      onItemDisclosure: true,
      store: 'OffersMallsListSqlStore',
      emptyText: '<img style="width: 300px;height: 236px; display:block; margin:0 auto 0 auto;" src="./resources/images/emptyLocations.png" alt="No Offer available currently" >',

      plugins: [
         {
            xclass: 'MobileApp.util.ListPullRefresh',
            //pullText: 'Deslice esta pantalla hacia abajo para refrescar las ofertas.',
            autoSnapBack: false,
            scrollerAutoRefresh: true,
            releaseText: '',
            loadingText: '',
            loadedText: '',
            itemId: 'pull',
            locales: {
               pullText: 'pullRefresh.pullText'
            }
         }, {
            xclass: 'MobileApp.util.LoadMore',
            autoPaging: true
         }
      ],
      itemTpl: [
         '<div class="placeBlock">' +
            /*'<div class="placeImage">' +
            '<tpl if="logo==\'\'">' +
            '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            '<img src="{logo}"</img>' + '</tpl>' +
            '</div>' +*/
            '<div class="placeImage">' +
             '<div class="img" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/150x112/' + ppi + '/{brandId}-profile);' + 'background-size: 100% 100%;height: 100%;width: 100%;"> </div>' +
              '</div>'+
            '<div class="placeDetails">' +
            '<p class="placeTitle">{name}</p>' +
            '<a  id="offersSearchMallContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' 
      
      ].join('')
   }
});