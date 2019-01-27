Ext.setGlyphFontFamily('Pictos');
Ext.define('BrandAdmin.view.analytics.AnalyticsOffersGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'analyticsoffersgrid',
   requires: [
      'Ext.grid.column.Action'
   ],
   //title: 'Offers',
   locales: {
      title: 'grid.offers.title'
   },
   cls: 'flatgrid',
   titleAlign: 'left',
   scrollable: true,
   scroll: 'vertical',
   width: 490,
   store: 'AnalyticsOffersGridStore',
   columnLines: true,
   columns: [{
      //text: 'Offer Details',
      dataIndex: 'tagLine',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.offers.offersDetail.text'
      }
   }, /*{
      text: 'City',
      dataIndex: '',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.offers.city.text'
      }
   },*/ {
      text: 'Likes',
      dataIndex: 'likeCount',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.offers.like.text'
      }
   }, {
      text: 'Click',
      dataIndex: 'clickCount',
      flex: 3,
      sortable: true,
      locales: {
         text: 'grid.offers.click.text'
      }
   }]/*,
   dockedItems: [{
      xtype: 'pagingtoolbar',
      //store: 'CourseContentStore',
      //itemId: 'brandlocgridpanelpagingtoolbar',
      displayInfo: true,
      dock: 'bottom',
      pageSize: 10
   }]*/
});