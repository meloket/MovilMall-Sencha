Ext.define('BrandAdmin.view.movies.MoviesInfoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'moviesinfoform',
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
         fieldLabel: 'Movie Name',
         emptyText: 'Enter Movie name',
         tooltip: 'Enter Movie name',
         dataIndex: 'name',
         name: 'name',
         readOnly : true
      },
         {
            xtype: 'datefield',
            fieldLabel: 'Release Date',
            name: 'releasedate',
            emptyText: 'Enter release date',
            tooltip: 'Enter release date',
            anchor: '100%',
            readOnly: true
         },
         {
            xtype: 'textfield',
            emptyText: 'Enter Rating',
            tooltip: 'Enter Rating',
            fieldLabel: 'Runtime',
            dataIndex: 'runtime',
            name: 'runtime',
            readOnly: true
         },
         {
            xtype: 'textfield',
            fieldLabel: 'Genre',
            dataIndex: 'genre',
            emptyText: 'Enter Genre',
            tooltip: 'Enter Genre',
            name: 'genre',
            readOnly: true
         }, {
            xtype: 'combo',
            fieldLabel: 'Rating',
            dataIndex: 'rating',
            name: 'rating',
            store: 'MoviesRatingComboStore',
            displayField: 'rating',
            valueField: 'rating',
            lastQuery: '',
            emptyText: 'Select Rating',
            tooltip: 'Select Rating',
            typeAhead: true,
            typeAheadDelay: 10,
            queryMode: 'local'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'Trailer link',
            dataIndex: 'trailerlink',
            emptyText: 'Enter trailer link',
            tooltip: 'Enter trailer link',
            name: 'trailerlink',
            readOnly: true
         },
         {
            xtype: 'menuseparator',
            margin: '12 -20 0 -20'
         },
         {
            xtype: 'textfield',
            margin: '-29 0 0 0',
            fieldLabel: 'Director',
            emptyText: 'Enter Director',
            tooltip: 'Enter Director',
            dataIndex: 'director',
            name: 'director',
            readOnly: true
         },
        {
           xtype: 'textarea',
           fieldLabel: 'Cast',
           emptyText: 'Enter Cast',
           tooltip: 'Enter Cast',
           dataIndex: 'cast',
           name: 'cast',
           readOnly: true
        },
         {
            xtype: 'textarea',
            fieldLabel: 'Synopsis',
            dataIndex: 'synopsis',
            emptyText: 'Enter Synopsis',
            tooltip: 'Enter Synopsis',
            name: 'synopsis',
            readOnly: true,
            fieldCls: 'at-textarea-large'
         }]
   }]
});