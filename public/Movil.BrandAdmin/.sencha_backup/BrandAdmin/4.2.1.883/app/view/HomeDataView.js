Ext.define('BrandAdmin.view.HomeDataView', {
   extend: 'Ext.view.View',
   xtype: 'homedataview',
   store: 'HomeDataViewStore',
   layout: 'fit',
   trackOver: true,
   overItemCls: 'superAdmin-hover',
   cls: 'mainMenuDv',
   tpl: Ext.create('Ext.XTemplate',

                 '<div class="logentry">',
                          '<div class="main-div">',
                              '<tpl for=".">',
                                '<div class="menu-item">',
                                    '<div class="image-div">',
                                       '<img src="resources/images/{img}.png" style="height:100%; width: 100%;" >',
                                    '</div>',
                                    '<div class="text-div">',
                                       '<h3>{title}</h3>',
                                       '<p>{details}</p>',
                                    '</div>',
                                '</div>',
                              '</tpl>',
                            '</div>',
                  '</div>'

           ),

   itemSelector: 'div.menu-item'
});

