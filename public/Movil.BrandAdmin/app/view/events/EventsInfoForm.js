var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('BrandAdmin.view.events.EventsInfoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'eventsinfoform',
   autoScroll: true,
  // border: true,
   store: 'EventsStore',
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
         //fieldLabel: 'Event Name',
         //emptyText: 'Enter event name',
         tooltip: 'Enter event name',
         allowBlank: false,
         afterLabelTextTpl: required,
         name: 'name',
         locales: {
            fieldLabel: 'form.eventsinfo.name.fieldLabel'/*,
            emptyText: 'form.eventsinfo.name.emptyText'*/
         }
      },
         /*{
            xtype: 'datefield',
            //fieldLabel: 'Date',
            format: 'd/m/y',
            allowBlank: false,
            name: 'date',
            //emptyText: 'Enter date',
            tooltip: 'Enter date',
            afterLabelTextTpl: required,
            anchor: '100%',
            locales: {
               fieldLabel: 'form.eventsinfo.date.fieldLabel',
               emptyText: 'form.eventsinfo.date.emptyText'
            }
         },*/
       /*  {
            xtype: 'textfield',
            //emptyText: 'Enter Time',
            tooltip: 'Enter Time',
           // fieldLabel: 'Time',
            name: 'time',
            locales: {
               fieldLabel: 'form.eventsinfo.time.fieldLabel'/*,
               emptyText: 'form.eventsinfo.time.emptyText'#1#
            }
         },*/
         {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            //anchor: '100%',
            defaults: {
               fieldCls: 'at-textfield-large',
               cls: 'at-textfield-large',
               labelCls: 'at-fieldlabel-large',
              // anchor: '100%',
               labelAlign: 'top',
               msgTarget: 'side'
            },
           
            locales: {
               fieldLabel: 'form.eventsinfo.time.fieldLabel'/*,
               emptyText: 'form.eventsinfo.time.emptyText'*/
            },
            fieldDefaults: {
               labelAlign: 'top',
               labelStyle: 'font-weight:bold;padding:0;'
            },
            items: [{
               xtype: 'datefield',
               //fieldLabel: 'Date',
               format: 'd/m/y',
               allowBlank: false,
               flex:1.5,
               name: 'date',
               //emptyText: 'Enter date',
               tooltip: 'Enter date',
               afterLabelTextTpl: required,
               //anchor: '100%',
               locales: {
                  fieldLabel: 'form.eventsinfo.date.fieldLabel',
                  emptyText: 'form.eventsinfo.date.emptyText'
               }
            }, {
               xtype: 'combo',
               flex: 0.5,
                fieldLabel: 'From',
                locales: {
                   fieldLabel: 'form.locations.workingHoursFrom.fieldLabel'
                },
                name: 'fromEventsTime',
                allowBlank: false,
                dataIndex: 'fromEventsTime',
             //  forceSelecton:true,
               store: 'FromToWorkingHoursComboStore',
               afterLabelTextTpl: required,
               displayField: 'name',
               valueField: 'name',
               lastQuery: '',
               typeAhead: true,
               typeAheadDelay: 10,
               margin: '5 0 0 5',
               queryMode: 'local',
              // width: 100,
               height: 80
            },
               {
                  xtype: 'combo',
                  flex: 0.5,
                   fieldLabel: 'To',
                   locales: {
                      fieldLabel: 'form.locations.workingHoursTo.fieldLabel'
                   },
                   allowBlank: false,
                  name: 'toEventsTime',
                  store: 'FromToWorkingHoursComboStore',
                  displayField: 'name',
                  afterLabelTextTpl: required,
                  valueField: 'name',
                  lastQuery: '',
                  typeAhead: true,
                  typeAheadDelay: 10,
                  margin: '5 0 0 5',
                  queryMode: 'local'
                 // width: 100
               }]
         },
         {
            xtype: 'textarea',
            //FieldLabel: 'Event Location',
            //emptyText: 'Enter Event Location',
            tooltip: 'Enter Event Location',
            name: 'location',
            allowBlank: false,
            afterLabelTextTpl: required,
            fieldCls: 'at-textarea-large',
            locales: {
               fieldLabel: 'form.eventsinfo.eventloc.fieldLabel'/*,
               emptyText: 'form.eventsinfo.eventloc.emptyText'*/
            }
         },
         {
            xtype: 'textarea',
            //fieldLabel: 'Event Details',
            //emptyText: 'Enter Event Details',
            tooltip: 'Enter Event Details',
            name: 'details',
            fieldCls: 'at-textarea-large',
            locales: {
               fieldLabel: 'form.eventsinfo.eventdetail.fieldLabel'/*,
               emptyText: 'form.eventsinfo.eventdetail.emptyText'*/
            }
         }]
   }]
});