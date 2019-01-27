Ext.define('MobileApp.view.Settings.SettingsProfileList', {
   extend: 'Ext.List',
   xtype: 'settingsprofilelist',

   config: {
      //height: 150,
      title: 'Stores',
      /*cls: 'x-contacts',*/
      variableHeights: true,
      onItemDisclosure: true,
      scrollable: false,
      store: 'SettingsProfileListStore',
      itemTpl: new Ext.XTemplate(
         '<tpl if="lang==\'en\'">' +
          '<div class="placeListTitle">{titleEn}</div>' +
                '</tpl>' +
          '<tpl if="lang==\'fr\'">' +
             '<div class="placeListTitle">{titleSp}</div>' +
             '</tpl>'
         //'{title}'
  )
   }
});