Ext.define('SuperAdmin.view.movies.MoviesInfoForm', {
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
   store:'MoviesStore',
   border: true,
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
         name: 'name'
      },
         {
            xtype: 'datefield',
            fieldLabel: 'Release Date',
            name: 'releaseDate',
            emptyText: 'Enter release date',
            format: 'd/m/y',
            tooltip: 'Enter release date',
            anchor: '100%'
         },
         {
            xtype: 'textfield',
            emptyText: 'Enter Runtime',
            tooltip: 'Enter Runtime',
            fieldLabel: 'Runtime',
            name: 'runTime'
         },
         {
            xtype: 'textfield',
            fieldLabel: 'Genre',
            emptyText: 'Enter Genre',
            tooltip: 'Enter Genre',
            name: 'namegenre'
         }, {
            xtype: 'combo',
            fieldLabel: 'Rating',
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
            emptyText: 'Enter trailer link',
            tooltip: 'Enter trailer link',
            name: 'trailerLink'
         },
         {
            xtype: 'menuseparator',
            margin:'12 -20 0 -20'
            },
         {
            xtype: 'textfield',
            margin:'-29 0 0 0',
            fieldLabel: 'Director',
            emptyText: 'Enter Director',
            tooltip: 'Enter Director',
            dataIndex: 'director',
            name: 'director'
         },
        {
           xtype: 'textarea',
           fieldLabel: 'Cast',
           emptyText: 'Enter Cast',
           tooltip: 'Enter Cast',
           dataIndex: 'cast',
           name: 'cast',
           fieldCls: 'at-textarea-large'
        },
         {
            xtype: 'textarea',
            fieldLabel: 'Synopsis',
            dataIndex: 'synopsis',
            emptyText: 'Enter Synopsis',
            tooltip: 'Enter Synopsis',
            name: 'synopsis',
            fieldCls: 'at-textarea-large'
         }]
   }]
});