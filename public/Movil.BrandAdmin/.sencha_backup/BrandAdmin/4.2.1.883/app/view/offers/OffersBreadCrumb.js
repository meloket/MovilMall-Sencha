Ext.define('BrandAdmin.view.offers.OffersBreadCrumb', {
   extend: 'Ext.toolbar.Toolbar',
   xtype: 'offersbreadcrumb',
   style: {
      'background': 'white'
   },
   height:50,
   border: false,
   items: [{
      xtype: 'component',
      itemId: 'breadCrumb',
      /*html: "<div class='menu1' id='menu1'><ul class='instbreadcrumb' id='bd'>" +
         "<li id='start_tab'><a id='tab0'>Start</a></li>" +
         "<li id='institute_tab'><a id='tab1'>Institute Information</a></li>" +
         "<li id='instituteaddress_tab'><a id='tab2'>Institute Address</a></li>" +
         "<li id='principleinformation_tab'><a id='tab3'>Principal Information</a></li>" +
         "<li id='principaladdress_tab'><a id='tab4'>Principal Address</a></li>" +
         "<li id='submit_tab'><a id='tab5'>Submit</a></li>" +
         "</ul></div>",
      action: 'breadCrumb',
*/

      html:
  "<div id='crumbs2' class='bf-example1'><ul class='instbreadcrumb'>" +
     "<li id='offersinfo_tab'><a href='#' id='tab1'>Offer Info</a>&nbsp;&nbsp;&#8250;</li>" +
         "<li id='description_tab'><a href='#' id='tab2'>Description</a>&nbsp;&nbsp;&#8250;</li>" +
         "<li id='categories_tab'><a href='#' id='tab3'>Categories</a>&nbsp;&nbsp;&#8250;</li>" +
         "<li id='locations_tab'><a href='#' id='tab4'>Locations</a>&nbsp;&nbsp;</li>" + "</ul></div>",
      action: 'breadCrumb',
      listeners: {
         render: function (c) {
            this.fireEvent('click', c);
         }
      }
   }]
});