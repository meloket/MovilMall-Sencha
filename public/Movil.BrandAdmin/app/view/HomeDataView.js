Ext.define('BrandAdmin.view.HomeDataView', {
   extend: 'Ext.view.View',
   xtype: 'homedataview',
   store: 'HomeDataViewStore',
   width: 1000,
   //layout: 'fit',
   trackOver: true,
   overItemCls: 'superAdmin-hover',
   cls: 'mainMenuDv',
   tpl: Ext.create('Ext.XTemplate',
         '<div class="mainHeader">' +
               '<p class="mainHeaderTitle">Movil Mall</p>',
               '<p class="mainHeaderSubtext">CONSTRUIDA CON AMOR PARA PANAMÁ POR PANAMEÑOS</p>',
               '<span class="bottom-line"></span>',
         '</div>',
         '<div class="main-div">',
               '<tpl for=".">',
                  '<div id="menu" class="menu-item" style="width:20%;">',
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
						'<form name="frMenu">' +
												//<!-- service 1 description -->,
												'<h4>{titleSp}</h4>',
												'<p>{detailsSp}</p>', '</form>',
											'<form name="enMenu">' +
												//<!-- service 1 description -->,
												'<h4>{titleEn}</h4>',
												'<p>{detailsEn}</p>', '</form>',
										'</div> <!-- end service 1 -->',
                  '</section></section>',
                  '</div>',
               '</tpl>',
         '</div>'
   ),

   itemSelector: 'div.menu-item',
   listeners: {
      'viewready': {
         fn: function(view, eOpts)
         {
            var value = window.location.search.replace("?val=", "");
            if (!value)
            {
               value = "fr";
            }
            if (value == "fr")
            {
               var max = document.enMenu.length;
               
               for (var i = 0; i < max; i++) {
                  document.enMenu[i].style.display = "none";
               }

            } else
            {
              
               var max = document.frMenu.length;
               console.log(max);
               for (var i = 0; i < max; i++)
               {
                 document.frMenu[i].style.display = "none";

               }
            }


         }
      }  
   }
});