Ext.define('SuperAdmin.view.BrandsInfoFormPanel', {
   extend: 'Ext.form.Panel',
   xtype: 'brandsinfoformpanel',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   cls: 'at-form-large',
   border: true,
   store: 'BrandsGridStore',
   minWidth: 450,
   items: [{
         xtype: 'fieldset',
         border: false,
         cls: 'at-fieldset-large',
         defaults: {
            fieldCls: 'at-textfield-large',
            cls: 'at-textfield-large',
            labelCls: 'at-fieldlabel-large',
            anchor: '100%',
            labelAlign: 'top',
            msgTarget: 'side'
         },
         defaultType: 'textfield',
         items: [{
               xtype: 'textfield',
               fieldLabel: 'Name',
               dataIndex: 'name',
               name: 'name',
               emptyText: 'Name of Brand'
            },
           /* {
               xtype: 'textfield',
               fieldLabel: 'Username',
               emptyText: 'Username'
            },*/
            {
               xtype: 'textfield',
               fieldLabel: 'Email',
               readOnly:true,
               dataIndex: 'email',
               name: 'email',
               emptyText:'Email Address'
            },
            {
               xtype: 'container',
               layout: 'hbox',
               items: [
                  {
                     xtype: 'label',
                     text: 'Approval Status:',
                     margin: '10 10 0 0',
                     style: {
                        fontWeight: 'bold'
                     },
                     itemId: 'approvalStatusTxt'
                  },
                  {
                     xtype: 'label',
                     text: 'Pending',
                     margin: '10 10 0 0',
                     itemId: 'approvalStatus'
                  }, {
                     xtype: 'label',
                     text: '|',
                     itemId: 'separator',
                     margin: '10 0 0 10',
                     style: {
                        fontSize: '12px',
                        color: 'grey',
                        fontWeight: 'bold'
                     }
                  },
                  {
                     xtype: 'button',
                     margin: '7 10 0 30',
                     text: 'Approve',
                     itemId: 'approveBtn',
                     cls: 'upload-button-flat',
                     action:'approve',
                     tooltip: 'Would you like to approve this brand?'
                  }
               ]
            },
            {
               xtype: 'container',
               layout: 'hbox',
               items: [
                  {
                     xtype: 'label',
                     text: 'Current Status:',
                     style: {
                      fontWeight: 'bold'
                     },
                     margin: '10 10 0 0'
                  },
                  {
                     xtype: 'label',
                     text: 'Unblocked',
                     itemId:'blockStatus',
                     margin: '10 10 0 0'
                  }, {
                     xtype: 'label',
                     text: '|',
                     margin:'10 0 0 10',
                     style: {
                        fontSize: '12px',
                        color: 'grey',
                        fontWeight: 'bold'
                     }
                  },
                  {
                     xtype: 'button',
                     text: 'Block brand',
                     margin: '3 10 0 25',
                     action: 'blockBrand',
                     itemId:'blockBrand',
                     enableToggle: true,
                     cls: 'upload-button-flat',
                     tooltip: 'Would you like to block this brand?'
                  }]
            }]
      }
   ],
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
            width: 70,
            height:30
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            tooltip: 'Back to Grid',
            cls: 'save-flat-btn',
            text: 'Cancel',
            width: 70,
            height: 30
         }
      ]
   }]
});