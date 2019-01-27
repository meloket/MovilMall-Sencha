Ext.define('BrandAdmin.view.events.EventsInfoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'eventsinfoform',
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
     'Ext.form.field.ComboBox',
      'Ext.form.field.Date'
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
         xtype: 'textfield',
         fieldLabel: 'Event Name',
         emptyText: 'Enter event name',
         tooltip: 'Enter event name',
         //dataIndex: 'name',
         name: 'name'
      },
         {
            xtype: 'datefield',
            fieldLabel: 'Date',
            name: 'datetime',
            emptyText: 'Enter date',
            tooltip: 'Enter date',
            anchor: '100%'
         },
         {
            xtype: 'textfield',
            emptyText: 'Enter Time',
            tooltip: 'Enter Time',
            fieldLabel: 'Time',
            dataIndex: 'time',
            name: 'datetime'
         },
         {
            xtype: 'textarea',
            fieldLabel: 'Event Location',
            //dataIndex: 'location',
            emptyText: 'Enter Event Location',
            tooltip: 'Enter Event Location',
            name: 'location',
            fieldCls: 'at-textarea-large'
         },
         {
            xtype: 'textarea',
            fieldLabel: 'Event Details',
            //dataIndex: 'details',
            emptyText: 'Enter Event Details',
            tooltip: 'Enter Event Details',
            name: 'details',
            fieldCls: 'at-textarea-large'
         }]
   }]
});