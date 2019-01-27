var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('BrandAdmin.view.movies.MoviesShowTimesForm', {
   extend: 'Ext.form.Panel',
   xtype: 'moviesshowtimesform',
   //title: 'Add Show Time',
   autoScroll: true,
   width:400,
   store: 'MoviesShowTimesDataViewStore',
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
      'Ext.form.field.Date'
      //'Ext.ux.form.field.BoxSelect'
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
            //fieldLabel: 'Location',
            //emptyText: 'Enter Location',
            tooltip: 'Enter Location',
            name: 'location',
            itemId: 'location',
            readOnly: true,
            locales: {
               fieldLabel: 'form.moviesshowtimes.location.fieldLabel'
            }
         },
         {
            xtype: 'datefield',
            format: 'd/m/y',
           /* fieldLabel: 'Date',
            emptyText: 'Enter Date: dd/mm/yyyy',*/
            tooltip: 'Enter Date',
            afterLabelTextTpl: required,
            itemId:'dateFld',
            name: 'date',
            locales: {
               fieldLabel: 'form.moviesshowtimes.date.fieldLabel',
               emptyText: 'form.moviesshowtimes.date.emptyText'
            }
         },
        {
           xtype: 'boxselect',
           name: 'showTimes',
           afterLabelTextTpl: required,
           delimiter : ',',
           fieldCls: 'multiSelectCombo',
           //fieldLabel: "Show Times",
           displayField: 'name',
           valueField: 'value',
           width: 165,
           store: 'MoviesShowTimesStore',
           queryMode: 'local',
           multiSelect: true,
           forceSelection: true,
           typeAhead: false,
           filterPickList: true,
           itemId: 'showTimesStoreCombo',
           locales: {
              fieldLabel: 'form.moviesshowtimes.showtime.fieldLabel'/*,
              emptyText: 'form.moviesshowtimes.showtime.emptyText'*/
           }
        }
         /*{
            xtype: 'textarea',
            fieldLabel: 'Show Times',
            emptyText: 'Enter Show Times',
            tooltip: 'Enter Show Times',
            dataIndex: 'showtimes',
            name: 'showtimes'
         }*/]
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
            //text: 'Save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            width: 70,
            locales: {
               text: 'buttons.save'
            },
            height: 30
         }, {
            action: 'cancel',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            tooltip: 'Back to Grid',
            //text: 'Cancel',
            width: 70,
            locales: {
               text: 'buttons.cancel'
            },
            height: 30
         }
      ]
   }]
});