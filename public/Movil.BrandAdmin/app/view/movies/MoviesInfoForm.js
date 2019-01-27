var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('BrandAdmin.view.movies.MoviesInfoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'moviesinfoform',
   autoScroll: true,
   border: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
      'Ext.form.field.ComboBox',
      'Ext.form.field.Date'
   ],
   store: 'MoviesStore',
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
      items: [{
            xtype: 'textfield',
            tooltip: 'Enter Movie name',
            name: 'name',
            afterLabelTextTpl: required,
            locales: {
               fieldLabel: 'form.moviesinfo.name.fieldLabel'
            }
         },
         {
            xtype: 'datefield',
            name: 'releaseDate',
            format: 'd/m/Y',
            afterLabelTextTpl: required,
            tooltip: 'Enter release date',
            anchor: '100%',
            locales: {
               fieldLabel: 'form.moviesinfo.releasedate.fieldLabel'
            }
         },
         {
            xtype: 'numberfield',
            spinDownEnabled: false,
            spinUpEnabled: false,
            hideTrigger: true,
            tooltip: 'Enter Runtime',
            afterLabelTextTpl: required,
            name: 'runTime',
            locales: {
               fieldLabel: 'form.moviesinfo.runtime.fieldLabel'
            }
         },
         {
            xtype: 'textfield',
            tooltip: 'Enter Genre',
            name: 'genre',
            afterLabelTextTpl: required,
            locales: {
               fieldLabel: 'form.moviesinfo.genre.fieldLabel'
            }
         }, {
            xtype: 'combo',
            name: 'rating',
            afterLabelTextTpl: required,
            store: 'MoviesRatingComboStore',
            displayField: 'rating',
            valueField: 'rating',
            lastQuery: '',
            tooltip: 'Select Rating',
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local',
            locales: {
               fieldLabel: 'form.moviesinfo.rating.fieldLabel'
            }
         },
         {
            xtype: 'textfield',
            dataIndex: 'trailerlink',
            tooltip: 'Enter trailer link',
            name: 'trailerLink',
            locales: {
               fieldLabel: 'form.moviesinfo.trailerlink.fieldLabel'
            }
         },
         {
            xtype: 'menuseparator',
            margin: '12 -20 0 -20'
         },
         {
            xtype: 'textfield',
            margin: '-29 0 0 0',
            tooltip: 'Enter Director',
            name: 'director',
            afterLabelTextTpl: required,
            locales: {
               fieldLabel: 'form.moviesinfo.director.fieldLabel'
            }
         },
         {
            xtype: 'textarea',
            tooltip: 'Enter Cast',
            dataIndex: 'cast',
            name: 'cast',
            afterLabelTextTpl: required,
            locales: {
               fieldLabel: 'form.moviesinfo.cast.fieldLabel'
            }
         },
         {
            xtype: 'textarea',
            tooltip: 'Enter Synopsis',
            name: 'synopsis',
            afterLabelTextTpl: required,
            fieldCls: 'at-textarea-large',
            locales: {
               fieldLabel: 'form.moviesinfo.synopsis.fieldLabel'
            }
         }]
   }]
});