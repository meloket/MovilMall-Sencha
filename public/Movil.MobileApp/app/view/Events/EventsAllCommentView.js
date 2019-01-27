Ext.define('MobileApp.view.Events.EventsAllCommentView', {
   extend: 'Ext.Container',
   xtype: 'eventsallcommentview',

   config: {
      layout: 'fit',
      title: 'Comentarios',
      items: [{
         xtype: 'dataview',
         store: 'EventsCommentDataViewStore',
         id:'eventsCommentsOverlay',
         itemTpl: '<div class="allComments">' +
           '<p><b>{userName} : </b>{value}</p>' +
           '</div>' +
            '<div class="allCommentsDottedUnderline"></div>'

      }]

   }
});
