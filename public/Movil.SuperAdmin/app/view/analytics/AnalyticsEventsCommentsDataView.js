Ext.define('SuperAdmin.view.analytics.AnalyticsEventsCommentsDataView', {
   extend: 'Ext.view.View',
   xtype: 'analyticseventscommentsdataview',
   trackOver: true,
    store: 'AnalyticsEventsCommentsStore',
   tpl: Ext.create('Ext.XTemplate',

       '<div class="main">',
      '<table>',
      '<tpl for=".">',
      '<div class="comments"></b>' +

         '<span><div id="commentsdiv" title="Edit" class="deleteicon"></div></span>' +

           '<font size="2px"> {userName}: {value}</font>', '</br>', '</br>',
     // '</br><font size="2px"></font>',

      '</div>',
      '</tpl>',
      '</div>'
   ),
   itemSelector: 'comments'
});