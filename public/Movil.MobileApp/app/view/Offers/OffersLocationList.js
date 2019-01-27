Ext.define('MobileApp.view.Offers.OffersLocationList', {
   extend: 'Ext.List',
   xtype: 'offerslocationlist',
   config: {
      title: 'Localizar Tienda',
      cls: 'placesList',
      variableHeights: true,
      scrollToTopOnRefresh: false,
      onItemDisclosure: true,
      store: 'OffersLocateStoresListStore',
      itemTpl: [
         '<div style="height: 3em;width: 100%;">' +
            /* '<div class="placeImage">' +
             '<div class="img" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/150x112/' + ppi + '/{brandId}-profile);' + 'background-size: 100% 100%;height: 100%;width: 100%;"> </div>' +
              '</div>' +
           */
            '<div class="placeDetails">' +
            '<p class="placeTitle">{location}</p>' +
           // '<a  id="offersLocationContactNo" class="placeContactNo" href="#">{contactNo}</a>' +
            '<p style=" line-height: 3em;" class="placeLocation"><tpl if="workingHoursFrom!=\'\'" && "workingHoursTo!=\'\'">' +
            '{workingHoursFrom} a {workingHoursTo}</p>' + '</tpl>' +
            '</div>' +
            '</div>'
         
      ].join('')
   }
});
