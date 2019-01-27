var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
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
   cls: 'at-form-large',
   items: [{
      xtype: 'fieldset',
      border: false,
      cls: 'at-fieldset-large',
      defaults: {
         fieldCls: 'at-textfield-large',
         //cls: 'at-textfield-large',
         labelCls: 'at-fieldlabel-large',
         anchor: '100%',
         labelAlign: 'top',
         msgTarget: 'side'
      },
      defaultType: 'textfield',
      items: [{
            xtype: 'textfield',
            id: 'offerInfoTaglineTextField',
            labelSeparator: '',
            //fieldLabel: 'Offer Tagline<span style="color:red;">*</span>:&nbsp;&nbsp;&nbsp;<span id="offerTagLineCharRemaining"></span>/30',
            //emptyText: 'Enter Offer Tagline',
            tooltip: 'Enter Offer Tagline',
            allowBlank: false,
            //afterLabelTextTpl: required,
            name: 'tagLine',
            locales: {
               fieldLabel: 'form.offersinfo.tagline.fieldLabel'
            },
            //listener implements the word count functionality   
            listeners: {
               'change': function()
               {
                  //alert("!");
                  var newValue = 28 - Ext.getCmp('offerInfoTaglineTextField').getValue().length;
                  if (newValue < 0)
                  {
                     Ext.get('offerTagLineCharRemaining').dom.style.color = "red";
                  } else
                  {
                     Ext.get('offerTagLineCharRemaining').dom.style.color = "#C8C8C8";
                  }
                  Ext.get('offerTagLineCharRemaining').update(newValue);
               }
            }
         },
         {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                  xtype: 'label',
                  style: {
                     'font-weight': 'bold',
                     'text-transform': 'uppercase',
                     'color': '#C8C8C8'
                  },
                  locales: {
                     text: 'form.offersinfo.status.text'
                  }
               }, {
                  xtype: 'label',
                  itemId: 'offerStatus',
                  margin: '0 0 0 50'
               }]
         },/*, {
            xtype: 'container',
            margin: '10 0 0 0',
            layout: {
               type: 'hbox'
            },
            anchor: '100%',
            items: [
               //main profile image code (600*450 px)
               {
                  xtype: 'container',
                  margin: '10 0 0 0',
                  /*layout: {
                     type: 'vbox'/*,
                     align: 'center'#2#
                  },#1#
                  flex: 1,
                  items: [{
                        xtype: 'container',
                        margin: '10 0 0 0',
                        layout: {
                           type: 'hbox'/*,
                     align: 'center'#1#
                        },
                        //flex: 1,
                        items: [
                           {
                              xtype: 'container',
                              layout:'vbox',
                              margin: '10 0 0 0',
                              flex: 1,
                              items: [{
                                    xtype: 'dataview',
                                    trackOver: true,
                                    // margin: '30 0 0 0',
                                    itemId: 'offersImageDataView',
                                    tpl: Ext.create('Ext.XTemplate',
                                       '<tpl for=".">',
                                       '<div>',
                                       '<img style="height:120px;width:160px;" src={photo} id="offersInfoImageBox">' +
                                          '</div>',
                                       '</tpl>'),

                                    itemSelector: 'div.main',
                                    store: {
                                       fields: ['photo'],
                                       data: [
                                          { photo: 'resources/images/NtAvailOffer.png' }
                                       ]
                                    }
                                 }, {
                                    // items: [{
                                    xtype: 'button',
                                    action: 'upload',
                                    margin:'5 0 0 45',
                                    cls: 'upload-button-flat',
                                    height: 40,
                                    locales: {
                                       text: 'buttons.upload'
                                    }
                                    // }]
                                 }, {
                                    xtype: 'label',
                                   // height:'200px',
                                    margin: '45 0 0 47',
                                    style: 'font-size:16px',
                                    html:'<b>Paso 1</b>'
                                 }
                              ]
                           }, {
                              xtype: 'container',
                              style: 'border-right: 2px solid rgb(255, 102, 0)',
                              layout: {
                                 type: 'vbox',
                                 align: 'center'
                              },
                              width: '100%',
                              //  margin: '10 0 0 0',
                              defaults: {
                                 anchor: '100%'
                              },
                              flex: 1.2,
                              items: [{
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.offersinfo.detail1.html'
                                 },
                                  //  html: 'Detalles de la oferta',
                                    style: 'color:red;font-size:16px',
                                    display: 'block'
                                 }, {
                                    xtype: 'label',
                                    locales: {
                                       html: 'form.offersinfo.detail2.html'
                                    },
                                  //  html: 'Ejemplo de como',
                                    style: 'color:red;font-size:16px',
                                    display: 'block'
                                 }, {
                                    xtype: 'label',
                                    locales: {
                                       html: 'form.offersinfo.detail3.html'
                                    },
                                   // html: 'se va a ver',
                                    style: 'color:red;font-size:16px',
                                    display: 'block'
                                 }, {
                                    xtype: 'image',
                                    height: '200px',
                                    margin:'10 0 15 0',
                                    src: 'resources/images/OffersProPreview.PNG'
                                 }]
                           }
                        ]
                     },
                     {
                        xtype: 'label',
                        width: '100%',
                        style: {
                           fontStyle: '11px',
                           color: '#f00',
                           display: 'block'
                        },
                        locales: {
                           html: 'form.profilephotoinfo.logo.html'
                        }
                     }]
               },
               //smaller image that is to be displayed in list (opens the cropping window)
               {
                  xtype: 'container',
                  margin: '10 0 0 25',
                  /* layout: {
                      type: 'vbox',
                      align: 'center'
                   },#1#
                  itemId: 'offersCropImageContainer',
                  flex: 1,
                  items: [{
                        xtype: 'container',
                        margin: '10 0 0 0',
                        layout:'hbox',
                        items: [
                           {
                              xtype: 'container',
                              layout: 'vbox',
                              margin: '10 0 0 0',
                              flex: 1,
                              items: [{
                                    xtype: 'dataview',
                                    trackOver: true,
                                    itemId: 'offersCropImageDataView',
                                    tpl: Ext.create('Ext.XTemplate',
                                       '<tpl for=".">',
                                       '<div>',
                                       '<img style="height:150px;width:150px;" src={photo} id="offersCropImageBox">' +
                                          '</div>',
                                       '</tpl>'),

                                    itemSelector: 'div.main',
                                    store: {
                                       fields: ['photo'],
                                       data: [
                                          { photo: 'resources/images/NtAvailOffer.png' }
                                       ]
                                    }
                                 }, {
                                    xtype: 'button',
                                    //flex: 1,
                                    id: "openCropWindowButton",    //id used for window animateTarget config
                                    action: 'openCropWindow',
                                    cls: 'upload-button-flat',
                                    height: 40,
                                    margin:'0 0 0 45',
                                    locales: {
                                       text: 'buttons.upload'
                                    }
                                 }, {
                                    xtype: 'label',
                                    // height:'200px',
                                    margin: '45 0 0 47',
                                    style: 'font-size:16px',
                                    html: '<b>Paso 2</b>'
                                 }
                              ]
                           }, {
                              xtype: 'container',
                              layout: {
                                 type: 'vbox',
                                 align: 'center'
                              },
                              width: '100%',
                              //  margin: '10 0 0 0',
                              defaults: {
                                 anchor: '100%'
                              },
                              flex: 1,
                              items: [{
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.offersinfo.detail1.html'
                                 },
                                  //  html: 'Detalles de la oferta',
                                    style: 'color:red;font-size:16px',
                                    display: 'block'
                                 }, {
                                    xtype: 'label',
                                    locales: {
                                       html: 'form.offersinfo.detail2.html'
                                    },
                                  //  html: 'Ejemplo de como',
                                    style: 'color:red;font-size:16px',
                                    display: 'block'
                                 }, {
                                    xtype: 'label',
                                    locales: {
                                       html: 'form.offersinfo.detail3.html'
                                    },
                                 //   html: 'se va a ver',
                                    style: 'color:red;font-size:16px',
                                    display: 'block'
                                 }, {
                                    xtype: 'image',
                                    height: '200px',
                                    margin: '10 0 15 0',
                                    src: 'resources/images/offersPreview.PNG'
                                 }]
                           }
                        ]                  
                     }, {
                        xtype: 'label',
                        width: '100%',
                        style: {
                           fontStyle: '11px',
                           color: '#f00',
                           display: 'block'
                        },
                        locales: {
                           html: 'form.profilephotoinfo.logo.html'
                        }
                     }
                  ]
               }]
         },*/
         {
            xtype: 'textfield',
            tooltip: 'Enter Coupon Code',
            dataIndex: 'couponcode',
            hasfocus: true,
          //  emptyCls: 'myEmptyCls',
           //   emptyText:'Required',
            allowBlank:false,
            afterLabelTextTpl: required,
            margin: '10 0 0 0',
            name: 'code',
            locales: {
               fieldLabel: 'form.offersinfo.couponcode.fieldLabel'/*,
               emptyText: 'form.offersinfo.couponcode.emptyText'*/
            }
         },
         {
            xtype: 'fieldcontainer',
            margin: '10 0 0 0',
            items: [{
               xtype: 'checkbox',
               fieldCls: 'checkBoxAlign',
               locales: {
                  boxLabel: 'form.offersinfo.holdoffer.boxLabel'
               },
               name: 'isActive',
               labelWidth: 240,
               itemId: 'isActiveOffer'
            }]
         },
         {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            fieldCls: 'at-textfield-large',
            defaults: {
               fieldCls: 'at-textfield-large',
               cls: 'at-textfield-large',
               labelCls: 'at-fieldlabel-large'
            },
            fieldDefaults: {
               labelAlign: 'top',
               labelStyle: 'font-weight:bold;padding:0;'
            },
            items: [{
                  xtype: 'datefield',
                  flex: 1,
                  format: 'd/m/y',
                  name: 'validFrom',
                  allowBlank: false,
                  margin: '5 10 0 0',
                  afterLabelTextTpl: required,
                  locales: {
                     fieldLabel: 'form.offersinfo.validfrom.fieldLabel',
                     emptyText: 'form.offersinfo.validfrom.emptyText'
                  }
               },
               {
                  xtype: 'datefield',
                  name: 'validTo',
                  allowBlank: false,
                  format: 'd/m/y',
                  flex: 1,
                  afterLabelTextTpl: required,
                  locales: {
                     fieldLabel: 'form.offersinfo.validto.fieldLabel',
                     emptyText: 'form.offersinfo.validto.emptyText'
                  }
               }
            ]
         }
      ]
   }],
   dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',
      bodyBorder: true,
      layout: { pack: 'center' },
      items: [
         {
            action: 'back',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.back',
               tooltip: 'back.tooltip'
            }
         }, '->',
         {
            action: 'save',
            margin: '5 5 0 0',
            cls: 'save-flat-btn',
            locales: {
               text: 'buttons.save',
               tooltip: 'save.tooltip'
            }
         }/*,'->', {
            action: 'next',
            margin: '5 5 0 0',
            cls: 'cancel-btn-flat',
            tooltip: 'Next Page',
            text: 'Next',
            width: 70,
            locales: {
               text: 'buttons.next'
            }
         }*/
      ]
      
   }]
});