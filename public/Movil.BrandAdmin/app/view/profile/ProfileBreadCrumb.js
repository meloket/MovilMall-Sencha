Ext.define('BrandAdmin.view.profile.ProfileBreadCrumb', {
   extend: 'Ext.toolbar.Toolbar',
   xtype: 'profilebreadcrumb',
   style: {
      'background': '#ee8c6f'
   },
   height: 40,
   border: false,
   items: [{
      xtype: 'component',
      cls:'breadcrumbPadd',
      width:'100%',
      itemId: 'breadCrumb',
      locales: {
         html: 'breadcrumb.profile.html'
      },
     /*  html:
        "<div id='crumbs2' class='bf-example1'>" +
          "<ul class='instbreadcrumb'>" +
             "<li id='Identity_tab'><a href='#' id='tab1'>Identity</a>&nbsp;&nbsp;&#8250;</li>" +
             "<li id='BusinessType_tab'><a href='#' id='tab2'>Business Type</a>&nbsp;&nbsp;&#8250;</li>" +
             "<li id='ProductCategories_tab'><a href='#' id='tab3'>Product Categories</a>&nbsp;&nbsp;&#8250;</li>" +
             "<li id='Photograph_tab'><a href='#' id='tab4'>Photograph</a>&nbsp;&nbsp;&#8250;</li>" +
             "<li id='social_tab'><a href='#' id='tab5'>Social</a>&nbsp;&nbsp;</li>" +
           "</ul>" +
       "</div>",*/
      action: 'breadCrumb',
      listeners: {
         render: function(c)
         {
            this.fireEvent('click', c);
         }
      }
   }]
});