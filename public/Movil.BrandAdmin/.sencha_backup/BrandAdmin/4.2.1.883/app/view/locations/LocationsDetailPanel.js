Ext.define('BrandAdmin.view.locations.LocationsDetailPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'locationsdetailpanel',
   title:'Locations Detail',
   layout: {
      type: 'border'
   },


   border: true,
  
      items: [{
         xtype: 'locationsdetailform',
         region: 'west',
         flex: 1.2
      }, {
      xtype: 'locationsmappanel',
      region: 'center',
      flex:2
   }],
  
  dockedItems: [{
     xtype: 'toolbar',
     dock: 'bottom',
     bodyBorder: true,
     layout: { pack: 'center' },
     items: [
        {
           action: 'save',
           tooltip: 'Save',
           text: 'Save',
           margin: '5 5 0 0',
           cls: 'save-flat-btn',
           width: 70
        }, {
           action: 'cancel',
           margin: '5 5 0 0',
           cls: 'cancel-btn-flat',
           tooltip: 'Back to Grid',
           text: 'Cancel',
           width: 70
        }
     ]
  }],
   tbar:[{
      xtype: 'button',
      text: 'Back',
      action: 'back'
   }]
});