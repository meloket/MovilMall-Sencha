Ext.define('MobileApp.view.Settings.SettingsOffersCommentView', {
   extend: 'Ext.Container',
   xtype: 'settingsofferscommentview',
   config: {
      layout: 'fit',
      title: 'Comentarios',
      scrollable: true,
      style: 'background-color: #ffffff',
      
      items: [{
         xtype: 'dataview',
         margin: '1em  0 0 0',
         cls: 'commentDataView',
         store: 'OffersCommentDataViewStore',
         emptyText: '<img style="width: 319px;height: 472px;" src="./resources/images/noData.png" alt="No Offer" >',
         itemTpl: ['<div class="viewAllCommentBlock">' +
            '<div class="commentUserImage"><img src={photo}></img></div>' +
            '<img class="commentPointerImage" src="resources/images/commentPointer.png"></img>' +
            '<div class="commentDetails">' +
            '<p class="userName">{userName} wrote</p>' +
            '<p class="userComment">{value}</p>' +
            '</div>' +
            '</div>']
      }]
   }
});