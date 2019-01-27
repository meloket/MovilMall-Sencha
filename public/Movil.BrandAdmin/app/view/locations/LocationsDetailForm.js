var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('BrandAdmin.view.locations.LocationsDetailForm', {
   extend: 'Ext.form.Panel',
   xtype: 'locationsdetailform',
   autoScroll: true,
   border: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
      'Ext.form.field.ComboBox',
      'Ext.form.field.Date'
   ],
   /* plugins: {
      ptype:'datatip'
   //},*/
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
         allowBlank: false,
            locales: {
               fieldLabel: 'form.locations.location.fieldLabel',
               emptyText: 'form.locations.location.emptyText'
            },
            afterLabelTextTpl: required,
            //   fieldLabel: 'Location',
           // emptyText: 'Nombre de la Ubicación',
            tooltip: 'Enter Location',
            name: 'location'
         },
         {
            xtype: 'fieldcontainer',
            name: 'insideMall',
            fieldDefaults: {
               labelAlign: 'left',
               labelStyle: 'font-weight:bold;padding:0;margin-top: 4.5px;'
            },
            dataIndex: 'insideMall',
            defaultType: 'checkboxfield',
            itemId: 'insideMall',
            tooltip: 'Is this location inside a mall?',
            labelAlign: 'top',
            items: [{
               // boxLabel: 'Location inside a mall',
               locales: {
                  boxLabel: 'form.locations.insideMall.boxLabel'
               },
               style: { 'font-weight': 'bold' },
               name: 'insideMall',
               labelWidth: 150,
               action: 'yinside',
               inputValue: 'yes'
            }]
         },
         {
            xtype: 'textarea',
            //emptyText: 'Enter Address',
            tooltip: 'Enter Address',
            allowBlank: false,
            //fieldLabel: 'Address',
            afterLabelTextTpl: required,
            locales: {
               fieldLabel: 'form.locations.address.fieldLabel'/*,
               emptyText: 'form.locations.address.emptyText'*/
            },
            name: 'address',
            fieldCls: 'at-textarea-large'
         },
         {
            xtype: 'combo',
            //fieldLabel: 'State',
            locales: {
               fieldLabel: 'form.locations.state.fieldLabel'/*,
               emptyText: 'form.locations.state.emptyText'*/
            },
            dataIndex: 'stateId',
            forceSelection: true,
            name: 'stateId',
            store: 'StateComboStore',
            displayField: 'name',
            valueField: 'key',
            lastQuery: '',
            //emptyText: 'Select State',
            tooltip: 'Select State',
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local',
            itemId: 'stateCombo'
         },
         {
            xtype: 'combo',
            //fieldLabel: 'City',
            locales: {
               fieldLabel: 'form.locations.city.fieldLabel'/*,
               emptyText: 'form.locations.city.emptyText'*/
            },
            dataIndex: 'cityId',
            forceSelection: true,
            name: 'cityId',
            store: 'CityComboStore',
            displayField: 'name',
            valueField: 'key',
            lastQuery: '',
            //emptyText: 'Select City',
            tooltip: 'Select cityId',
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local',
            itemId: 'cityCombo'
         }, {
            xtype: 'combo',
            //fieldLabel: 'Mall',
            locales: {
               fieldLabel: 'form.locations.mall.fieldLabel'/*,
               emptyText: 'form.locations.mall.emptyText'*/
            },
            hidden: true,
            name: 'mallId',
            store: 'LocationMallsComboStore',
            displayField: 'name',
            valueField: 'key',
            lastQuery: '',
            //emptyText: 'Select Mall',
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local',
            itemId: 'mall'
         },
         {
            xtype: 'combo',
            store: 'LocWithinMallComboStore',
            displayField: 'name',
            valueField: 'name',
            locales: {
               fieldLabel: 'form.locations.locWithinMall.fieldLabel'
            },
            name: 'locationWithinMall',
            hidden: true,
            lastQuery: '',
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local',
            itemId: 'locWithinMall'
         },
         {
            xtype: 'textfield',
            //fieldLabel: 'Postal Code',
            locales: {
               fieldLabel: 'form.locations.postalCode.fieldLabel',
               emptyText: 'form.locations.postalCode.emptyText'
            },
            //emptyText: 'Enter Postal Code',
            tooltip: 'Enter Postal Code',
            name: 'postalCode'
         },
         //{
         //   xtype: 'menuseparator',
         //   margin: '0 0 0 0'
         //},
         {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            defaults: {
               fieldCls: 'at-textfield-large',
               cls: 'at-textfield-large',
               labelCls: 'at-fieldlabel-large',
               anchor: '100%',
               labelAlign: 'top',
               msgTarget: 'side'
            },
            // fieldLabel:'Working Hours',
            locales: {
               fieldLabel: 'form.locations.workingHours.fieldLabel'
            },
            fieldDefaults: {
               labelAlign: 'top',
               labelStyle: 'font-weight:bold;padding:0;'
            },
            items: [{
                  xtype: 'combo',
                  // fieldLabel: 'From',
                  locales: {
                     fieldLabel: 'form.locations.workingHoursFrom.fieldLabel'
                  },
                  afterLabelTextTpl: required,
                  name: 'workingHoursFrom',
                  allowBlank: false,
                  store: 'FromToWorkingHoursComboStore',
                  displayField: 'name',
                  valueField: 'name',
                  lastQuery: '',
                  typeAhead: true,
                  typeAheadDelay: 10,
                  margin: '5 0 0 0 ',
                  queryMode: 'local',
                  width: 100,
                  height: 80
               },
               {
                  xtype: 'combo',
                  // fieldLabel: 'To',
                  locales: {
                     fieldLabel: 'form.locations.workingHoursTo.fieldLabel'
                  },
                  afterLabelTextTpl: required,
                  name: 'workingHoursTo',
                  store: 'FromToWorkingHoursComboStore',
                  displayField: 'name',
                  valueField: 'name',
                  lastQuery: '',
                  allowBlank: false,
                  typeAhead: true,
                  typeAheadDelay: 10,
                  margin: '5 0 0 10',
                  queryMode: 'local',
                  width: 100
               }]
         }/*, {
            xtype: "component",
            height: 300,

        autoEl : {
           tag: "iframe",
            src: "https://www.the-qrcode-generator.com/"
        }
         }*//*, {
            xtype: 'fieldset',
            border: true,
            //  margin:'10 20 25 0',
            cls: 'at-fieldset-large1',
            items: [{
                  xtype: 'fieldcontainer',
                  //  anchor: '100%',
                  layout: 'hbox',
                  defaults: {
                     fieldCls: 'at-textfield-large',
                     cls: 'at-textfield-large',
                     labelCls: 'at-fieldlabel-large',
                     // anchor: '100%',
                     labelAlign: 'top',
                     msgTarget: 'side'
                  },
                  items: [{
                        xtype: 'textfield',
                        // fieldLabel: 'QR Code 1',
                        name: 'qrCodeOne',
                        itemId: 'qrCodeOne',
                        readOnly: true,
                        flex: 1,
                        locales: {
                           fieldLabel: 'QRcode.fieldLabel'
                        },
                        inputAttrTpl: " data-qtip='Código para la entrada Haga click en este enlace para generar su código.  Luego de generarlo guardelo como una imagen y  agréguelo en este espacio.' "
                        //emptyText: 'Enter QR Code 1',
                        //tooltip: 'QR Code1'
                     }, {
                        xtype: 'button',
                        cls: 'upload-button-flat',
                        itemId: 'genQRCodeOne',
                        action: 'genQRCodeOne',
                        margin: '31 1 0 5',
                        height: '35px',
                        flex: 0.4,
                        locales: {
                           text: 'buttons.generate'
                        }
                        // text: 'Generate'
                     }]
               }]
         }*/
      ]
   }]
});