Ext.define('SuperAdmin.view.HomeDataView', {
   extend: 'Ext.view.View',
   xtype: 'homedataview',
   store: 'HomeDataViewStore',
   width: 1000,
   margin: '0 auto',
   layout: 'fit',
   trackOver: true,
   //overItemCls: 'superAdmin-hover',
   cls: 'mainMenuDv',
   /*tpl: Ext.create('Ext.XTemplate',
          
                 '<div class="logentry">',
                          '<div class="main-div">',
                              '<tpl for=".">',
                                '<div class="menu-item">',
                                    '<div class="image-div">',
                                       '<img src="resources/images/{img}.png" style="height:100%; width: 100%;">',
                                    '</div>',
                                    '<div class="text-div">',
                                       '<h3>{title}</h3>',
                                       '<p>{details}</p>',
                                    '</div>',
                                '</div>',
                              '</tpl>',
                            '</div>',
                  '</div>'
             
           ),*/
   tpl: Ext.create('Ext.XTemplate',
      '<div class="mainHeader">' +
         '<p class="mainHeaderTitle">Movil Mall</p>',
      '<p class="mainHeaderSubtext">CONSTRUIDA CON AMOR PARA PANAMÁ POR PANAMEÑOS</p>',
      '<span class="bottom-line"></span>',
      '</div>',
      '<div class="main-div">',
      '<tpl for=".">',
      '<div id="menu" class="menu-item" style="width:25%;">',
      /*'<div class="image-div">',
                        '<img src="resources/images/{img}.png" style="height:100%; width: 100%;" >',
                     '</div>',
                     '<form class="text-div" name="frMenu" >',
                        '<h3>{titleSp}</h3>',
                     '</form>',
                     '<form class="text-div" name="enMenu">',
                        '<h3>{titleEn}</h3>',
                     '</form>',*/
      '<section class="wrapper">',
      '<section class="service-row text-center animate bounceIn animated" data-animate="bounceIn">',
      //<!-- service 1 -->
      '<div class="col-md-3 col-sm-3">',
      //<!-- service 1 icon -->
      '<figure class="fa"><img src="resources/images/{img}.png"></figure>',
      '<span class="top-line"></span>',
      //<!-- service 1 description -->,
      '<h4>{title}</h4>',
      '<p>{details}</p>',
      '</div> ',
      '<!-- end service 1 -->',
      '</section></section>',
      '</div>',
      '</tpl>',
      '</div>'
   ),

   itemSelector: 'div.menu-item'
});