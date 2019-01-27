Ext.define('BrandAdmin.view.offers.OffersDescriptionForm', {
   extend: 'Ext.form.Panel',
   xtype: 'offersdescriptionform',
   store: 'OffersStore',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   cls: 'at-form-large',
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
      //defaultType: 'textfield',
      items: [{
         xtype: 'textarea',
         fieldLabel: 'Fine Print',
         emptyText: 'Enter Fine Print',
         tooltip: 'Enter Fine Print',
         name: 'finePrint',
         //To overwrite cls of textfield
         fieldCls: 'at-textarea-large'
      },
         {
            xtype: 'textfield',
            fieldLabel: 'Tags',
            emptyText: 'Enter Tags',
            tooltip: 'Enter Tags',
            name: 'tags'
         }]
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
            }, '->', {
               action: 'next',
               margin: '5 5 0 0',
               cls: 'cancel-btn-flat',
               tooltip: 'Next page',
               text: 'Next',
               width: 70
            }
         ]
      }]
});