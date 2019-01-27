Ext.define('BrandAdmin.view.offers.OffersInfoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'offersinfoform',
   store: 'OffersStore',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
      'Ext.form.field.Date'
   ],
   /*  cls: 'at-form-large',
     items: [{
        xtype: 'fieldset',
        border: true,
        margin:'0 200 0 0',
        cls: 'at-fieldset-large',
        defaults: {
           fieldCls: 'at-textfield-large',
           cls: 'at-textfield-large',
           labelCls: 'at-fieldlabel-large',
           anchor: '70%',
           labelAlign: 'top',ttttttttttttttttttt
           msgTarget: 'side'
        },*/
   //defaultType: 'textfield',
   items: [{
         xtype: 'textfield',
         fieldLabel: 'Offer Tagline',
         emptyText: 'Enter Offer Tagline',
         tooltip: 'Enter Offer Tagline',
        
         name: 'tagLine',
         margin: '54 0 0 100',
         labelCls: 'at-fieldlabel-large',
         fieldCls: 'at-textfield-large',
         width:600
      },
      {
         xtype: 'container',
         layout: 'hbox',
         margin: '10 0 0 100',
         items: [{
               xtype: 'label',
               text: 'Status:',
               style: { 'font-weight': 'bold' }
            }, {
               xtype: 'label',
               text: 'Active',
               margin: '0 0 0 85'
            }]
      },
      {
         xtype: 'container',
         layout: 'hbox',
         margin: '20 0 0 100',
         items: [{
               xtype: 'label',
               html: 'Offer Image:</br>(Max Size-4kb)',
               style: { 'font-weight': 'bold' }                  
            }, 
              {
                 xtype: 'image',
                 height: 100,
                 src: '#',
                 border: 2,
                 style: {
                    borderColor: 'black',
                    borderStyle: 'solid'
                 },
                 name: 'photo',
                 width: 100,
               itemId: 'imageBox',
               margin: '0 0 0 20'
            },
         {
            xtype: 'button',
            text: 'Upload',
            action: 'upload',
            margin: '20 0 0 20'
         }]
      },
      {
         xtype: 'textfield',
         emptyText: 'Enter Coupon Code',
         tooltip: 'Enter Coupon Code',
         fieldLabel: ' Coupon Code',
         dataIndex: 'couponcode',
         //margin: '35 0 0 0',
         name: 'code',
         margin: '20 0 0 100',
         labelCls: 'at-fieldlabel-large',
         fieldCls: 'at-textfield-large',
         width: 600
      },
      {
         xtype: 'checkboxgroup',
         fieldLabel: 'Hold this Offer? ',
         labelCls: 'at-fieldlabel-large',
         //anchor: '60%',
         margin: '20 0 0 100',
         defaultType: 'radiofield',
         labelAlign: 'top',
         //itemId:'isDefault',
         items: [{
               boxLabel: 'Yes',
               name: 'isDefault',
               inputValue: 'true'
            }, {
               boxLabel: 'No',
               name: 'isDefault',
               inputValue: 'false'
            }]
      },
      {
         xtype: 'datefield',
         fieldLabel: 'Valid from',
         margin: '20 0 0 100',
         labelCls: 'at-fieldlabel-large',
         name: 'validFrom'
      },
      {
         xtype: 'datefield',
         fieldLabel: 'Valid until',
         margin: '10 0 0 100',
         labelCls: 'at-fieldlabel-large',
         name: 'validTo'
         //}]
      

   }],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
          {
             action: 'back',
             tooltip: 'Back',
             text: 'Back',
             margin: '5 5 0 0',
             cls: 'save-flat-btn',
             width: 70
          }, '->',
         {
            action: 'save',
            tooltip: 'Save',
            text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70
         },'->', {
            action: 'next',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Next Page',
            text: 'Next',
            width: 70
         }
      ]
   }]

});