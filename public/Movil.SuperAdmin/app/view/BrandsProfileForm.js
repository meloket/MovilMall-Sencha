/*Ext.define('SuperAdmin.view.BrandsProfileDataview', {
   extend: 'Ext.view.View',
   xtype: 'brandsprofiledataview',
   layout: 'fit',
   trackOver: true,
  /* style: {
      backgroundColor: 'white'
   },#1#
   tpl: Ext.create('Ext.XTemplate',
     '<div class="gridtable">',
          '<table>',
      '<tr>', '<td>', '<img src="abc.png">', '</td>', '</tr>',
      
       '<tr>', '<td>', 'Brand Name  :', '</td>',
               '<td>','abc','</td>',
      '</tr>',
      
       '<tr>', '<td>', 'Contact Person', '</td>', '</tr>',
       '<tr>', '<td>', 'Description', '</td>', '</tr>',
       '<tr>', '<td>', 'Email Address', '</td>', '</tr>',
       '<tr>', '<td>', 'Website', '</td>', '</tr>',
      '<tr>', '<td>', 'Contact No.', '</td>', '</tr>',
    
      '</table>',
      
    '</div>'
   ),
   itemSelector: 'gridtable'
});*/

Ext.define('SuperAdmin.view.BrandsProfileForm', {
   extend: 'Ext.form.Panel',
   xtype: 'brandsprofileform',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip'
   ],
   border: true,
   store:'BrandsGridStore',
   cls: 'at-form-large',
   items: [{
      xtype: 'image',
      height: 80,
      name:'logo',
      src: 'abc.jpg',
      alt:'Logo is not available',
      tootip: 'Brand Logo',
      itemId: 'brandLogo',
      border: 2,
      style: {
         borderColor: 'black',
         borderStyle: 'solid'
      },
      margin: '21 0 0 31'
   }, {
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
     // defaultType: 'textfield',
      items: [ {
            xtype: 'textfield',
            fieldLabel: 'Brand Name',
            itemId:'brandName',
            readOnly: true,
            name: 'name',
           emptyText: 'Brand Name'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'Contact Person',
            readOnly: true,
            name:'contactPerson',
            emptyText:'Name of Contact Person'
         },
         {
            xtype: 'textarea',
            fieldLabel: 'Description',
            readOnly: true,
            name: 'description',
            fieldCls: 'at-textarea-large',
            emptyText:'Description of Brand'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'E-mail Address',
            readOnly: true,
            name:'email',
            emptyText:'E-mail Address'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'Website',
            readOnly: true,
            name:'website',
            emptyText:'Website of this Brand'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'Contact No.',
            readOnly: true,
            name: 'contactNo'
         }
      ]
   }]
});