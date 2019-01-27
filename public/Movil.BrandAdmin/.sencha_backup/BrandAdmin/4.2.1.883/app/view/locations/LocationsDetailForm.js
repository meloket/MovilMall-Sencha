Ext.define('BrandAdmin.view.locations.LocationsDetailForm', {
   extend: 'Ext.form.Panel',
   xtype: 'locationsdetailform',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
     'Ext.form.field.ComboBox',
      'Ext.form.field.Date'
   ],
   store: 'LocationsStore',
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
         xtype: 'textfield',
         fieldLabel: 'Location',
         emptyText: 'Enter Location',
         tooltip: 'Enter Location',
         name: 'location'
      },
         
         {
            xtype: 'checkboxgroup',
            fieldLabel: 'Is this location inside a mall?',
            //anchor: '60%',
            defaultType: 'radiofield',
            tooltip: 'Is this location inside a mall?',
            labelAlign: 'top',
            items: [{
               boxLabel: 'Yes',
               name: '',
               inputValue: 'true'
            }, {
               boxLabel: 'No',
               margin:'0 0 0 -45',
               name: '',
               inputValue: 'false'
            }]
         },
        
         {
            xtype: 'textarea',
            emptyText: 'Enter Address',
            tooltip: 'Enter Address',
            fieldLabel: 'Address',
            name: 'address',
            fieldCls: 'at-textarea-large'
         },
          {
             xtype: 'combo',
             fieldLabel: 'State',
             dataIndex: 'stateId',
             forceSelection: true,
             name: 'stateId',
             store: 'StateComboStore',
             displayField: 'name',
             valueField: 'key',
             lastQuery: '',
             emptyText: 'Select State',
             tooltip: 'Select State',
             allowBlank: false,
             typeAhead: true,
             typeAheadDelay: 10,
             queryMode: 'local',
             itemId: 'stateCombo'

          },
         {
            xtype: 'combo',
            fieldLabel: 'City',
            dataIndex: 'cityId',
            forceSelection: true,
            name: 'cityId',
            store: 'CityComboStore',
            displayField: 'name',
            valueField: 'key',
            lastQuery: '',
            emptyText: 'Select City',
            tooltip: 'Select cityId',
            allowBlank: false,
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local',
            itemId: 'cityCombo'

         },
         
         {

            xtype: 'combo',
            fieldLabel: 'Mall',
          
            name: 'mall',
            //store: 'MoviesRatingComboStore',
            displayField: 'mall',
            valueField: 'mall',
            lastQuery: '',
            emptyText: 'Select Mall',
            tooltip: 'Select Mall',
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local'
         },
         {
            xtype: 'textarea',
            emptyText: 'Enter Location in Mall',
            tooltip: 'Enter Location in Mall',
            fieldLabel: 'Location Within a Mall',
            name: 'location',
            fieldCls: 'at-textarea-large'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'Postal Code',
            dataIndex: 'postalcode',
            emptyText: 'Enter Postal Code',
            tooltip: 'Enter Postal Code',
            name: 'postalCode'
         },
         {
            xtype: 'menuseparator',
            margin: '12 -20 0 -20'
         },
        
         {
            xtype: 'textarea',
            fieldLabel: 'Working Hours',
            dataIndex: 'workinghours',
            emptyText: 'Enter Working Hours',
            tooltip: 'Enter Working Hours',
            name: 'workinghours',
            fieldCls: 'at-textarea-large'
         }]
   }]
});