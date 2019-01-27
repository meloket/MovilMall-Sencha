Ext.define('MobileApp.view.Offers.OffersAllCommentView', {
   extend: 'Ext.Container',
   xtype: 'offersallcommentview',
   config: {
      layout: 'fit',
      title: 'Comentarios',
      scrollable: true,
      style: 'background-color: #ffffff',
      items: [{
         xtype: 'dataview',
         id: 'commentOverlay',
         margin: '1em  0 0 0',
         cls: 'commentDataView',
         store: 'OffersCommentDataViewStore',
         emptyText: '<img style="width: 319px;height: 472px;" src="./resources/images/noData.png" alt="No Offer" >',

         /*itemTpl: '<div class="allComments">' +
              '<p><b>{userName} : </b>{value}</p>' +
            //'<br><font><b>{userName} : </b>{value}</font>' +
            '</div>'+
             '<div class="allCommentsDottedUnderline"></div>'*/

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